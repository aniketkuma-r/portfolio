"use client";

import { Switch } from "@nextui-org/react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Switch
      defaultSelected={resolvedTheme === "dark"}
      aria-label="Automatic updates"
      size="lg"
      color="default"
      startContent={<MdOutlineLightMode color="foreground" />}
      endContent={<MdOutlineDarkMode color="foreground" />}
      onValueChange={
        resolvedTheme === "light"
          ? () => setTheme("dark")
          : () => setTheme("light")
      }
    />
  );
}
