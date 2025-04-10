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
      return t("default_summary")
    }

    // Personalized summary based on choices
    let summary =
      language === "en" ? "Emma's journey was shaped by the choices she made. " : "艾玛的旅程由她做出的选择塑造。"

    if (choices.chapter2) {
      if (language === "en") {
        summary += choices.chapter2.includes("accept")
          ? "Her decision to accept Sophia's mentorship opened doors to artistic growth. "
          : "Though initially hesitant about Sophia's guidance, she eventually found her own path. "
      } else {
        summary += choices.chapter2.includes("接受")
          ? "她接受索菲亚指导的决定为艺术成长打开了大门。"
          : "尽管最初对索菲亚的指导犹豫不决，她最终找到了自己的道路。"
      }
    }

    if (choices.chapter4) {
      if (language === "en") {
        summary += choices.chapter4.includes("pursue")
          ? "Her courage to pursue a relationship with James led to both creative collaboration and personal fulfillment. "
          : "She prioritized her artistic development, keeping relationships at a distance. "
      } else {
        summary += choices.chapter4.includes("追求")
          ? "她勇敢地追求与詹姆斯的关系，带来了创意合作和个人满足感。"
          : "她优先考虑自己的艺术发展，与关系保持距离。"
      }
    }

    if (choices.chapter6) {
      if (language === "en") {
        summary += choices.chapter6.includes("separate")
          ? "The painful decision to separate from James allowed them both to grow independently before finding their way back to each other. "
          : "She chose to maintain their connection despite the distance, balancing personal ambition with relationship. "
      } else {
        summary += choices.chapter6.includes("分开")
          ? "与詹姆斯分开的痛苦决定让他们在重新找到彼此之前都能独立成长。"
          : "她选择了尽管有距离也要保持联系，平衡个人抱负与关系。"
      }
    }

    if (language === "en") {
      summary +=
        "Through it all, Emma discovered that life's journey isn't about avoiding detours but finding meaning in every path taken."
    } else {
      summary += "通过这一切，艾玛发现人生旅程不是关于避免弯路，而是在每条所走的路上找到意义。"
    }

    return summary
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
