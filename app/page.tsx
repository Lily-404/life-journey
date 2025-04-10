"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export default function Home() {
  const { t, isBilingual, tBilingual } = useLanguage()

  return (
    <div className="relative min-h-screen">
      {/* 背景图片 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imgs/bg.png" // 请确保在 public/images 目录下放置背景图片
          alt="Background"
          fill
          className="object-cover brightness-50" // brightness-50 让背景暗一点，使文字更清晰
          priority
        />
      </div>
      
      {/* 内容层 */}
      <div className="relative z-10">
        <div className="container flex flex-col items-center justify-center min-h-screen px-4 py-16 mx-auto text-center">
          {/* 修改按钮容器样式，添加毛玻璃效果 */}
          <div className="absolute top-4 right-4 flex gap-2 bg-white/10 backdrop-blur-md p-2 rounded-lg">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {isBilingual ? (
              <>
                <span className="block text-white dark:text-slate-200">{tBilingual("title").en}</span>
                <span className="block text-white dark:text-slate-200">{tBilingual("title").zh}</span>
                <span className="block mt-2 text-emerald-400 dark:text-emerald-300">{tBilingual("subtitle").en}</span>
                <span className="block text-emerald-400 dark:text-emerald-300">{tBilingual("subtitle").zh}</span>
              </>
            ) : (
              <>
                <span className="block text-white dark:text-slate-200">{t("title")}</span>
                <span className="block mt-2 text-emerald-400 dark:text-emerald-300">{t("subtitle")}</span>
              </>
            )}
          </h1>

          <p className="max-w-2xl mt-6 text-lg text-slate-200 dark:text-slate-300">
            {isBilingual ? (
              <>
                <span className="block mb-2">{tBilingual("description").en}</span>
                <span className="block">{tBilingual("description").zh}</span>
              </>
            ) : (
              t("description")
            )}
          </p>

          <div className="mt-12 space-y-4">
            <Link href="/chapters/1">
              <Button
                size="lg"
                className="px-8 py-6 text-lg bg-emerald-600 hover:bg-emerald-700"
              >
                {t("begin_journey")}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>

            {/* <p className="text-sm text-slate-300 dark:text-slate-400">{t("progress_saved")}</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}
