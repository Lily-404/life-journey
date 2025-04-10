"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-1 w-9 px-0 md:w-auto md:px-3">
          <Globe className="w-4 h-4" />
          <span className="hidden md:inline">
            {language === "en" ? "English" : language === "zh" ? "中文" : "Bilingual / 双语"}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("en")}>{t("english")}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("zh")}>{t("chinese")}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("bilingual")}>{t("bilingual")}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
