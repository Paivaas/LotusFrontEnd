import { abeezee, inter } from "@/fonts/fonts";
import { UserProvider } from "@/context/contextUser";
import "./globals.css";

export const metadata = {
  title: {
    template: "%s | Lotus",
    default: "Para sua maternidade"
  },
  description: "Site Lotus",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={` ${inter.variable} ${abeezee.variable}  antialiased`}
      >
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}

