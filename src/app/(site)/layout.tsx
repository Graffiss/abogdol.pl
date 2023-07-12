import "~/styles/globals.css";
import "node_modules/flag-icons/css/flag-icons.min.css";
import { type ReactNode } from "react";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to abogdol.pl",
};

interface Language {
  lang: string;
}

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }, { lang: "pl" }];
}

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Language;
}) {
  return (
    <html lang={params.lang}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
