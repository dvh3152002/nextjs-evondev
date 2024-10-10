import { Manrope, Roboto } from "next/font/google";
import localFont from "next/font/local";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const dm_sans = localFont({
  src: [
    {
      path: "../app/fonts/GeistMonoVF.woff",
      weight: "400",
    },
    {
      path: "../app/fonts/GeistVF.woff",
      weight: "400",
      style: "italic",
    },
  ],
  display: "swap",
});

export { manrope, roboto, dm_sans };
