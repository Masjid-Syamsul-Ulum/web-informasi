import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { apps } from "@/content/apps";
import { navigation } from "@/content/navigation";
import { site } from "@/content/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${site.name}`,
    default: site.name,
  },
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${jakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-cream font-sans text-ink">
        <SiteHeader siteName={site.name} items={navigation} />
        <main className="flex-1 [&>section:first-child]:pt-36 sm:[&>section:first-child]:pt-44">{children}</main>
        <SiteFooter site={site} navigation={navigation} apps={apps} />
      </body>
    </html>
  );
}
