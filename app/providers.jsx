// app/providers.jsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>{children}</ThemeProvider>
    </NextUIProvider>
  );
}
