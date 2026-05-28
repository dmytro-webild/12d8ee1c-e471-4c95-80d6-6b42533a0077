import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Nunito_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Jai Maa Vaishno Ultrasound Centre | Advanced Care, Affordable Rates',
  description: 'Experience compassionate and accurate ultrasound services at Jai Maa Vaishno. Trusted, patient-friendly, and affordable diagnostic imaging for all your needs.',
  keywords: ["ultrasound, diagnostic center, pregnancy ultrasound, fetal scan, medical imaging, affordable ultrasound, patient care, diagnostic facility, Vaishno"],
  openGraph: {
    "title": "Jai Maa Vaishno Ultrasound Centre | Advanced Care, Affordable Rates",
    "description": "Experience compassionate and accurate ultrasound services at Jai Maa Vaishno. Trusted, patient-friendly, and affordable diagnostic imaging for all your needs.",
    "url": "https://www.jaimaavaishno.com",
    "siteName": "Jai Maa Vaishno Ultrasound Centre",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/african-employee-discusing-with-manager-sitting-desk-workplace-wearing-face-mask-against-covid19-diverse-group-business-people-working-communicating-together-creative-office-with-new_482257-10060.jpg",
        "alt": "Pregnant woman getting an ultrasound scan"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Jai Maa Vaishno Ultrasound Centre | Advanced Care, Affordable Rates",
    "description": "Experience compassionate and accurate ultrasound services at Jai Maa Vaishno. Trusted, patient-friendly, and affordable diagnostic imaging for all your needs.",
    "images": [
      "http://img.b2bpic.net/free-photo/african-employee-discusing-with-manager-sitting-desk-workplace-wearing-face-mask-against-covid19-diverse-group-business-people-working-communicating-together-creative-office-with-new_482257-10060.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${nunitoSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
