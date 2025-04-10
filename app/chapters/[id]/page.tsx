"use client"

import { useEffect, useState, use } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight, BookOpen, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useMobile } from "@/hooks/use-mobile"
import { useLanguage } from "@/components/language-provider"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import { getChapters } from "@/lib/chapters"

export default function ChapterPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const { toast } = useToast()
  const isMobile = useMobile()
  const { t, language, isBilingual, tBilingual } = useLanguage()
  const chapterId = Number.parseInt(use(params).id)

  const [progress, setProgress] = useState<number[]>([])
  const [readingProgress, setReadingProgress] = useState(0)
  const [showChoices, setShowChoices] = useState(false)
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [chapters, setChapters] = useState<any[]>([])
  const [enChapters, setEnChapters] = useState<any[]>([])
  const [zhChapters, setZhChapters] = useState<any[]>([])

  useEffect(() => {
    // Get chapters based on current language
    if (isBilingual) {
      setEnChapters(getChapters("en"))
      setZhChapters(getChapters("zh"))
      setChapters(getChapters("en")) // Use English as default for navigation
    } else {
      setChapters(getChapters(language))
    }
  }, [language, isBilingual])

  const chapter = chapters.find((c) => c.id === chapterId)
  const enChapter = enChapters.find((c) => c.id === chapterId)
  const zhChapter = zhChapters.find((c) => c.id === chapterId)

  useEffect(() => {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem("chapterProgress")
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress))
    }

    // Scroll to top when chapter changes
    window.scrollTo(0, 0)

    // Reset state when chapter changes
    setShowChoices(false)
    setSelectedChoice(null)
    setReadingProgress(0)

    if (chapter) {
      // Show chapter loaded toast
      toast({
        title: `${t("chapter")} ${chapterId}`,
        description: chapter.title,
        duration: 3000,
      })

      // Simulate reading progress
      const timer = setTimeout(() => {
        setShowChoices(true)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [chapterId, chapter, toast, t])

  useEffect(() => {
    // Simulate reading progress based on scroll
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.offsetHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setReadingProgress(Math.min(scrollPercent, 100))

      if (scrollPercent > 70 && !showChoices) {
        setShowChoices(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [showChoices])

  const handleContinue = () => {
    // Save progress
    const newProgress = [...progress]
    if (!newProgress.includes(chapterId)) {
      newProgress.push(chapterId)
      setProgress(newProgress)
      localStorage.setItem("chapterProgress", JSON.stringify(newProgress))
    }

    // Navigate to next chapter
    if (chapters.length > 0 && chapterId < chapters.length) {
      router.push(`/chapters/${chapterId + 1}`)
    } else {
      router.push("/summary")
    }
  }

  const handleChoice = (choice: string) => {
    setSelectedChoice(choice)
    setIsLoading(true)
    // Save choice to localStorage
    const choices = JSON.parse(localStorage.getItem("storyChoices") || "{}")
    choices[`chapter${chapterId}`] = choice
    localStorage.setItem("storyChoices", JSON.stringify(choices))

    // Show toast for choice
    toast({
      title: t("what_will_do"),
      description: choice,
      duration: 2000,
    })

    // Continue after a short delay
    setTimeout(() => {
      setIsLoading(false)
      handleContinue()
    }, 1500)
  }

  if (!chapter) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Navigation header */}
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
        <div className="container flex items-center justify-between p-4">
          <Button
            variant="ghost"
            size={isMobile ? "sm" : "default"}
            onClick={() => router.push(chapterId > 1 ? `/chapters/${chapterId - 1}` : "/")}
            disabled={chapterId === 1}
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden md:inline ml-2">{chapterId > 1 ? t("previous") : t("home")}</span>
          </Button>

          <div className="flex items-center text-sm md:text-base">
            <BookOpen className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-emerald-600 dark:text-emerald-500" />
            <span className="font-medium">
              {isMobile ? `${chapterId}/${chapters.length}` : `${t("chapter")} ${chapterId}/${chapters.length}`}
            </span>
          </div>

          <div className="flex items-center gap-1 md:gap-2">
            <ThemeToggle />
            <LanguageSwitcher />

            {chapterId < chapters.length && (
              <Button
                variant="ghost"
                size={isMobile ? "sm" : "default"}
                onClick={handleContinue}
                disabled={!showChoices && !progress.includes(chapterId)}
              >
                <span className="hidden md:inline mr-2">{t("next")}</span>
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
            )}
          </div>
        </div>
        <Progress value={readingProgress} className="h-1" />
      </header>

      {/* Chapter content */}
      <main className="container px-4 py-8 mx-auto max-w-4xl">
        <div className="space-y-6">
          {isBilingual && enChapter && zhChapter ? (
            <>
              <h1 className="text-3xl font-bold text-center text-slate-900 dark:text-white md:text-4xl">
                <span className="block">{enChapter.title}</span>
                <span className="block mt-2">{zhChapter.title}</span>
              </h1>

              <div className="relative w-full aspect-[3/2] overflow-hidden rounded-lg">
                <Image
                  src={chapter.image || "/placeholder.svg?height=1024&width=1536"}
                  alt={chapter.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="prose prose-slate dark:prose-invert max-w-none">
                {enChapter.content.split("\n\n").map((paragraph: string, i: number) => (
                  <div key={`en-${i}`} className="mb-4 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
                    <p className="text-slate-900 dark:text-white">{paragraph}</p>
                    {zhChapter.content.split("\n\n")[i] && (
                      <p className="mt-2 text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-700 pt-2">
                        {zhChapter.content.split("\n\n")[i]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Bilingual Choices section */}
              {enChapter.choices && enChapter.choices.length > 0 && (
                <div
                  className={`mt-12 space-y-4 transition-opacity duration-500 ${showChoices ? "opacity-100" : "opacity-0"}`}
                >
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                    <span className="block">{tBilingual("what_will_do").en}</span>
                    <span className="block">{tBilingual("what_will_do").zh}</span>
                  </h2>

                  <div className="grid gap-4 md:grid-cols-2">
                    {enChapter.choices.map((choice: string, index: number) => (
                      <Button
                        key={index}
                        variant={selectedChoice === choice ? "default" : "outline"}
                        className={`p-6 h-auto text-left justify-start w-full whitespace-normal break-words transition-all duration-300 transform hover:scale-105 active:scale-95 relative ${
                          selectedChoice === choice 
                            ? "bg-emerald-600 hover:bg-emerald-700 text-white ring-2 ring-emerald-500 ring-offset-2" 
                            : "hover:bg-slate-100 dark:hover:bg-slate-800"
                        }`}
                        onClick={() => handleChoice(choice)}
                        disabled={!!selectedChoice || isLoading}
                      >
                        <div className="flex items-center">
                          {selectedChoice === choice && isLoading && (
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          )}
                          <div>
                            <div>{choice}</div>
                            {zhChapter.choices && zhChapter.choices[index] && (
                              <div className="mt-1 text-sm opacity-80">{zhChapter.choices[index]}</div>
                            )}
                          </div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold text-center text-slate-900 dark:text-white md:text-4xl">
                {chapter.title}
              </h1>

              <div className="relative w-full aspect-[3/2] overflow-hidden rounded-lg">
                <Image
                  src={chapter.image || "/placeholder.svg?height=1024&width=1536"}
                  alt={chapter.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="prose prose-slate dark:prose-invert max-w-none">
                {chapter.content.split("\n\n").map((paragraph: string, i: number) => (
                  <div key={i} className="mb-4 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
                    <p className="text-slate-900 dark:text-white">{paragraph}</p>
                  </div>
                ))}
              </div>

              {/* Choices section */}
              {chapter.choices && chapter.choices.length > 0 && (
                <div
                  className={`mt-12 space-y-4 transition-opacity duration-500 ${showChoices ? "opacity-100" : "opacity-0"}`}
                >
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{t("what_will_do")}</h2>

                  <div className="grid gap-4 md:grid-cols-2">
                    {chapter.choices.map((choice: string, index: number) => (
                      <Button
                        key={index}
                        variant={selectedChoice === choice ? "default" : "outline"}
                        className={`p-6 h-auto text-left justify-start w-full whitespace-normal break-words transition-all duration-300 transform hover:scale-105 active:scale-95 relative ${
                          selectedChoice === choice ? "bg-emerald-600 hover:bg-emerald-700 text-white ring-2 ring-emerald-500 ring-offset-2" : "hover:bg-slate-100 dark:hover:bg-slate-800"
                        }`}
                        onClick={() => handleChoice(choice)}
                        disabled={!!selectedChoice || isLoading}
                      >
                        <div className="flex items-center">
                          {selectedChoice === choice && isLoading && (
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          )}
                          <div>
                            {choice}
                          </div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {/* Continue button */}
          {(!chapter.choices || chapter.choices.length === 0) && (
            <div
              className={`mt-12 flex justify-center transition-opacity duration-500 ${showChoices ? "opacity-100" : "opacity-0"}`}
            >
              <Button
                size="lg"
                className="px-8 py-6 text-lg bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600"
                onClick={handleContinue}
              >
                {isBilingual ? (
                  <span>
                    <span className="block">
                      {tBilingual("continue_to").en}{" "}
                      {chapterId < chapters.length
                        ? `${tBilingual("chapter").en} ${chapterId + 1}`
                        : tBilingual("summary").en}
                    </span>
                    <span className="block">
                      {tBilingual("continue_to").zh}{" "}
                      {chapterId < chapters.length
                        ? `${tBilingual("chapter").zh} ${chapterId + 1}`
                        : tBilingual("summary").zh}
                    </span>
                  </span>
                ) : (
                  <>
                    {t("continue_to")} {chapterId < chapters.length ? `${t("chapter")} ${chapterId + 1}` : t("summary")}
                  </>
                )}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
