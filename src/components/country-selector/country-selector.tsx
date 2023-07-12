import { useRouter } from "next/navigation";
import { useState } from "react";

interface Language {
  key: string;
  name: string;
}

const languages: Language[] = [
  { key: "en", name: "English" },
  { key: "pl", name: "Polski" },
  { key: "es", name: "Español" },
];

export const CountrySelector = () => {
  const { locale, asPath, push } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>({
    key: locale || "",
    name: languages.find((language) => language.key === locale)?.name || "",
  });

  const changeLanguage = async (language: Language) => {
    await push(asPath, asPath, { locale: language.key });
  };

  const handleClick = (language: Language) => {
    changeLanguage(language).catch((err) => console.error(err));
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="z-40 flex items-center">
      <div className="relative inline-block text-left">
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            aria-haspopup="true"
            aria-expanded={isOpen}
          >
            <FlagIcon countryCode={locale} />
            {selectedLanguage.name}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div
            className="absolute right-0 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="language-selector"
          >
            <div className="flex flex-col py-1" role="none">
              {languages.map((language, index) => {
                return (
                  <button
                    key={language.key}
                    onClick={() => handleClick(language)}
                    className={`${
                      selectedLanguage && selectedLanguage.key === language.key
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-700"
                    } inline-flex items-center px-4 py-2 text-left text-sm hover:bg-gray-100 ${
                      index % 2 === 0 ? "rounded-r" : "rounded-l"
                    }`}
                    role="menuitem"
                  >
                    <FlagIcon countryCode={language.key} />
                    <span className="truncate">{language.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

function FlagIcon({ countryCode = "en" }: { countryCode?: string }) {
  if (countryCode === "en") {
    countryCode = "gb";
  }

  return <span className={`fi fis mr-2 inline-block fi-${countryCode}`} />;
}
