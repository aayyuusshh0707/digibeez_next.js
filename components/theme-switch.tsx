"use client";

import { FC } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { SwitchProps, useSwitch } from "@heroui/switch";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import clsx from "clsx";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
  sunIcon?: React.ReactNode;
  moonIcon?: React.ReactNode;
  lightLogo?: React.ReactNode;
  darkLogo?: React.ReactNode;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
  sunIcon,
  moonIcon,
  lightLogo,
  darkLogo,
}) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const onChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const {
    Component,
    slots,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: theme === "light" || isSSR,
    "aria-label": `Switch to ${theme === "light" || isSSR ? "dark" : "light"} mode`,
    onChange,
  });

  return (
    <Component
      {...getBaseProps({
        className: clsx(
        "px-px transition-opacity hover:opacity-80 cursor-pointer",
        className,
        classNames?.base
        ),
      })}
    >
      {/* Hidden Input for Accessibility */}
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>

      {/* Switch Content */}
      <div
        {...getWrapperProps()}
        className={clsx(
          "flex items-center justify-center gap-4 rounded-lg !text-default-500",
          classNames?.wrapper
        )}
      >
        {/* Render Sun/Moon Icon */}
        {theme === "light" ? sunIcon : moonIcon}

        {/* Render Logo */}
        {theme === "light" ? lightLogo : darkLogo}
      </div>
    </Component>
  );
};
