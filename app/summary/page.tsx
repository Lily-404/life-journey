"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Home, RefreshCw, Share2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useLanguage } from "@/components/language-provider"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import { getChapters } from "@/lib/chapters"

export default function SummaryPage() {
  const { toast } = useToast()
  const { t, language, isBilingual, tBilingual } = useLanguage()
  const [progress, setProgress] = useState<number[]>([])
  const [choices, setChoices] = useState<Record<string, string>>({})
  const [completionPercentage, setCompletionPercentage] = useState(0)
  const [chapters, setChapters] = useState<any[]>([])

  useEffect(() => {
    // Get chapters based on current language
    setChapters(getChapters(isBilingual ? "en" : language))
  }, [language, isBilingual])

  useEffect(() => {
    // Load progress and choices from localStorage
    const savedProgress = localStorage.getItem("chapterProgress")
    const savedChoices = localStorage.getItem("storyChoices")

    if (savedProgress) {
      const progressArray = JSON.parse(savedProgress)
      setProgress(progressArray)
      if (chapters.length > 0) {
        setCompletionPercentage((progressArray.length / chapters.length) * 100)
      }
    }

    if (savedChoices) {
      setChoices(JSON.parse(savedChoices))
    }
  }, [chapters])

  const handleReset = () => {
    localStorage.removeItem("chapterProgress")
    localStorage.removeItem("storyChoices")
    setProgress([])
    setChoices({})
    setCompletionPercentage(0)

    toast({
      title: t("journey_reset"),
      description: t("reset_description"),
      duration: 3000,
    })
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: language === "en" ? "My Life Journey Story" : "我的人生旅程故事",
          text:
            language === "en"
              ? "I just completed an interactive life journey story. Check it out!"
              : "我刚刚完成了一个互动人生旅程故事。快来看看吧！",
          url: window.location.origin,
        })
        .catch((error) => {
          toast({
            title: language === "en" ? "Sharing failed" : "分享失败",
            description: language === "en" ? "Could not share the story." : "无法分享故事。",
            variant: "destructive",
          })
        })
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard
        .writeText(window.location.origin)
        .then(() => {
          toast({
            title: t("link_copied"),
            description: t("copy_description"),
            duration: 2000,
          })
        })
        .catch(() => {
          toast({
            title: language === "en" ? "Copy failed" : "复制失败",
            description: language === "en" ? "Could not copy the link." : "无法复制链接。",
            variant: "destructive",
          })
        })
    }
  }

  // Generate a personalized summary based on choices
  const generateSummary = () => {
    // Default summary if no choices were made
    if (Object.keys(choices).length === 0) {
      return isBilingual ? (
        <>
          <p className="mb-4">{tBilingual("default_summary").en}</p>
          <p>{tBilingual("default_summary").zh}</p>
        </>
      ) : t("default_summary")
    }

    // Personalized summary based on choices
    let enSummary = ""
    let zhSummary = ""
    let endingType = "balanced" // Default ending type

    // Analyze choices to determine the type of ending
    const choicesArray = Object.values(choices)
    const careerChoices = choicesArray.filter(choice => 
      choice.includes("career") || choice.includes("art") || choice.includes("工作") || choice.includes("艺术")
    ).length
    const relationshipChoices = choicesArray.filter(choice => 
      choice.includes("relationship") || choice.includes("love") || choice.includes("关系") || choice.includes("爱情")
    ).length

    if (careerChoices > relationshipChoices + 1) {
      endingType = "career"
    } else if (relationshipChoices > careerChoices + 1) {
      endingType = "relationship"
    }

    // Generate English summary
    if (endingType === "career") {
      enSummary = "Emma's journey was defined by her unwavering dedication to her artistic career. "
      if (choices.chapter2?.includes("accept")) {
        enSummary += "Under Sophia's mentorship, she developed a unique artistic style that captivated audiences. "
      }
      if (choices.chapter4?.includes("pursue")) {
        enSummary += "While she experienced love with James, her art remained her true passion. "
      }
      if (choices.chapter6?.includes("separate")) {
        enSummary += "The difficult decision to focus on her career led to international recognition and exhibitions. "
      }
      enSummary += "In the end, Emma became a celebrated artist, finding fulfillment in her creative expression and the impact of her work on others."
    } else if (endingType === "relationship") {
      enSummary = "Emma's journey was marked by deep connections and meaningful relationships. "
      if (choices.chapter2?.includes("accept")) {
        enSummary += "Sophia's guidance helped her understand the importance of emotional expression in both life and art. "
      }
      if (choices.chapter4?.includes("pursue")) {
        enSummary += "Her relationship with James became a source of inspiration and mutual growth. "
      }
      if (choices.chapter6?.includes("separate")) {
        enSummary += "Though they went their separate ways, the lessons learned from their relationship enriched her art. "
      }
      enSummary += "Ultimately, Emma discovered that the most profound art comes from the heart, and her relationships became the canvas of her life's masterpiece."
    } else {
      enSummary = "Emma's journey was a delicate balance between artistic ambition and personal connections. "
      if (choices.chapter2?.includes("accept")) {
        enSummary += "Sophia's mentorship helped her navigate both the technical and emotional aspects of art. "
      }
      if (choices.chapter4?.includes("pursue")) {
        enSummary += "Her relationship with James brought new perspectives to her work while maintaining her artistic integrity. "
      }
      if (choices.chapter6?.includes("separate")) {
        enSummary += "The time apart allowed both her art and her relationship to evolve in unexpected ways. "
      }
      enSummary += "In the end, Emma found that true success lies in harmonizing one's passions with meaningful connections."
    }

    // Generate Chinese summary
    if (endingType === "career") {
      zhSummary = "艾玛的旅程由她对艺术事业的坚定奉献所定义。"
      if (choices.chapter2?.includes("接受")) {
        zhSummary += "在索菲亚的指导下，她发展出了一种独特的艺术风格，吸引了众多观众。"
      }
      if (choices.chapter4?.includes("追求")) {
        zhSummary += "虽然她与詹姆斯有过爱情，但艺术始终是她真正的热情所在。"
      }
      if (choices.chapter6?.includes("分开")) {
        zhSummary += "专注于事业的决定最终带来了国际认可和展览机会。"
      }
      zhSummary += "最终，艾玛成为了一位备受赞誉的艺术家，在创作表达和作品对他人的影响中找到了满足。"
    } else if (endingType === "relationship") {
      zhSummary = "艾玛的旅程充满了深厚的情感和有意义的关系。"
      if (choices.chapter2?.includes("接受")) {
        zhSummary += "索菲亚的指导帮助她理解了情感表达在生活和艺术中的重要性。"
      }
      if (choices.chapter4?.includes("追求")) {
        zhSummary += "她与詹姆斯的关系成为了灵感和共同成长的源泉。"
      }
      if (choices.chapter6?.includes("分开")) {
        zhSummary += "虽然他们分道扬镳，但从这段关系中获得的教训丰富了她的艺术。"
      }
      zhSummary += "最终，艾玛发现最深刻的艺术来自内心，而她的人际关系成为了她人生杰作的画布。"
    } else {
      zhSummary = "艾玛的旅程在艺术抱负和人际关系之间保持着微妙的平衡。"
      if (choices.chapter2?.includes("接受")) {
        zhSummary += "索菲亚的指导帮助她驾驭了艺术的技术和情感层面。"
      }
      if (choices.chapter4?.includes("追求")) {
        zhSummary += "她与詹姆斯的关系为她的作品带来了新的视角，同时保持了她的艺术完整性。"
      }
      if (choices.chapter6?.includes("分开")) {
        zhSummary += "分开的时光让她的艺术和关系都以意想不到的方式发展。"
      }
      zhSummary += "最终，艾玛发现真正的成功在于将个人热情与有意义的关系和谐统一。"
    }

    if (isBilingual) {
      return (
        <>
          <p className="mb-4">{enSummary}</p>
          <p className="text-slate-600 dark:text-slate-400">{zhSummary}</p>
        </>
      )
    }

    return language === "en" ? enSummary : zhSummary
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container max-w-4xl px-4 py-16 mx-auto">
        <div className="absolute top-4 right-4 flex gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>

        <div className="p-8 bg-white rounded-lg shadow-lg dark:bg-slate-900">
          <h1 className="text-3xl font-bold text-center text-slate-900 dark:text-white md:text-4xl">
            {isBilingual ? (
              <>
                <span className="block">{tBilingual("your_journey").en}</span>
                <span className="block">{tBilingual("your_journey").zh}</span>
              </>
            ) : (
              t("your_journey")
            )}
          </h1>

          <div className="mt-6 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500 dark:text-slate-400">{t("journey_completion")}</span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {completionPercentage.toFixed(0)}%
              </span>
            </div>
            <Progress value={completionPercentage} className="h-2" />
          </div>

          <div className="mt-8 space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{t("story_summary")}</h2>

            <div className="p-6 border rounded-lg bg-slate-50 dark:bg-slate-800 dark:border-slate-700">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{generateSummary()}</p>
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{t("key_moments")}</h2>

            <div className="space-y-4">
              {chapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className={`p-4 border rounded-lg ${
                    progress.includes(chapter.id)
                      ? "bg-emerald-50 border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-800"
                      : "bg-slate-50 border-slate-200 dark:bg-slate-800 dark:border-slate-700"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-slate-900 dark:text-white">
                        {t("chapter")} {chapter.id}: {chapter.title}
                      </h3>

                      {progress.includes(chapter.id) && choices[`chapter${chapter.id}`] && (
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                          {t("your_choice")}: {choices[`chapter${chapter.id}`]}
                        </p>
                      )}
                    </div>

                    <Link href={`/chapters/${chapter.id}`}>
                      <Button variant="outline" size="sm">
                        {progress.includes(chapter.id) ? t("revisit") : t("read")}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
            <Link href="/">
              <Button variant="outline" className="gap-2">
                <Home className="w-4 h-4" />
                {t("return_home")}
              </Button>
            </Link>

            <Button variant="outline" className="gap-2" onClick={handleReset}>
              <RefreshCw className="w-4 h-4" />
              {t("reset_journey")}
            </Button>

            <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700" onClick={handleShare}>
              <Share2 className="w-4 h-4" />
              {t("share_story")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
