"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "zh" | "bilingual"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
  tBilingual: (key: string) => { en: string; zh: string }
  isBilingual: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  // Load language preference from localStorage on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "zh" || savedLanguage === "bilingual")) {
      setLanguage(savedLanguage)
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.startsWith("zh") ? "zh" : "en"
      setLanguage(browserLang)
    }
  }, [])

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Simple translation function
  const t = (key: string): string => {
    if (language === "bilingual") {
      return `${translations.en[key]} / ${translations.zh[key]}`
    }
    return translations[language as Exclude<Language, "bilingual">][key] || key
  }

  // Function to get both translations for bilingual display
  const tBilingual = (key: string) => {
    return {
      en: translations.en[key] || key,
      zh: translations.zh[key] || key,
    }
  }

  const isBilingual = language === "bilingual"

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tBilingual, isBilingual }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

// Translations
const translations: Record<Exclude<Language, "bilingual">, Record<string, string>> = {
  en: {
    // Home page
    title: "Life Journey",
    subtitle: "An Interactive Story",
    description:
      "Experience the life of Emma, from her early struggles to finding purpose. Navigate through chapters of her journey, make choices, and see how her story unfolds.",
    begin_journey: "Begin the Journey",
    progress_saved: "Your progress will be saved automatically",

    // Navigation
    previous: "Previous",
    next: "Next",
    home: "Home",
    chapter: "Chapter",

    // Choices
    what_will_do: "What will Emma do?",
    continue_to: "Continue to",
    summary: "Summary",

    // Summary page
    your_journey: "Your Life Journey",
    journey_completion: "Journey Completion",
    story_summary: "Story Summary",
    key_moments: "Key Moments",
    your_choice: "Your choice",
    revisit: "Revisit",
    read: "Read",
    return_home: "Return Home",
    reset_journey: "Reset Journey",
    share_story: "Share Story",
    journey_reset: "Journey Reset",
    reset_description: "Your progress has been reset. You can start a new journey.",
    link_copied: "Link copied",
    copy_description: "Story link copied to clipboard!",

    // Default summary
    default_summary:
      "Emma's journey took her from uncertainty to purpose, finding her artistic voice and creating a community that nurtures new talent. Through mentorship, love, separation, and reunion, she discovered that life's detours often lead to the most meaningful destinations.",

    // Language and theme
    language: "Language",
    english: "English",
    chinese: "Chinese",
    bilingual: "Bilingual",
    theme: "Theme",
    dark_mode: "Dark Mode",
    light_mode: "Light Mode",
  },
  zh: {
    // 首页
    title: "人生旅程",
    subtitle: "一个互动故事",
    description: "体验艾玛的人生，从早期的挣扎到找到人生目标。浏览她旅程的各个章节，做出选择，看看她的故事如何展开。",
    begin_journey: "开始旅程",
    progress_saved: "您的进度将自动保存",

    // 导航
    previous: "上一章",
    next: "下一章",
    home: "首页",
    chapter: "章节",

    // 选择
    what_will_do: "艾玛会怎么做？",
    continue_to: "继续到",
    summary: "摘要",

    // 摘要页面
    your_journey: "您的人生旅程",
    journey_completion: "旅程完成度",
    story_summary: "故事摘要",
    key_moments: "关键时刻",
    your_choice: "您的选择",
    revisit: "重访",
    read: "阅读",
    return_home: "返回首页",
    reset_journey: "重置旅程",
    share_story: "分享故事",
    journey_reset: "旅程已重置",
    reset_description: "您的进度已被重置。您可以开始新的旅程。",
    link_copied: "链接已复制",
    copy_description: "故事链接已复制到剪贴板！",

    // 默认摘要
    default_summary:
      "艾玛的旅程带她从不确定走向目标，找到了她的艺术声音，并创建了一个培养新人才的社区。通过指导、爱情、分离和重聚，她发现生活的弯路往往通向最有意义的目的地。",

    // 语言和主题
    language: "语言",
    english: "英文",
    chinese: "中文",
    bilingual: "双语",
    theme: "主题",
    dark_mode: "深色模式",
    light_mode: "浅色模式",
  },
}
