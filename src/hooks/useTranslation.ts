import { useEffect, useState } from "react";
import en from "../locates/en.json";
import pt from "../locates/pt.json";

// Definição do tipo para uma seção
interface Section {
  name: string;
  title: string[];
  text: string[];
  url: string;
}

// Definição do tipo para os arquivos de tradução
interface Translations {
  sections: Section[];
}

const translations: Record<string, Translations> = { en, pt };

export function useTranslation() {
  const [language, setLanguage] = useState<"en" | "pt">("pt");
  const [sections, setSections] = useState<Section[]>(
    translations[language].sections
  );

  const t = (key: keyof Translations): string | Section[] =>
    translations[language][key] || key;

  useEffect(() => {
    setSections(translations[language].sections);
  }, [language]);

  return {
    t,
    setLanguage,
    language,
    sections,
  };
}
