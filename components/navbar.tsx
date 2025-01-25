"use client";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { Divider } from "@heroui/divider";
import { Button } from "@heroui/button";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  Logo,
  SunFilledIcon,
  MoonFilledIcon,
  LogoDark,
} from "@/components/icons";
//import Bookdemo from "./Bookdemo";

export const Navbar = () => {
  return (
    <>
      <HeroUINavbar maxWidth="xl" position="sticky">
        <NavbarContent className=" start">
          <NextLink
            className="  flex justify-start items-center gap-1 "
            href="/"
          >
            <ThemeSwitch
              darkLogo={<LogoDark className="w-8 h-8" />}
              lightLogo={<Logo className="w-8 h-8" />}
            />
          </NextLink>
        </NavbarContent>
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit " />
          <ul className="hidden lg:flex gap-4 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium",
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>

        <NavbarContent
          className="hidden md:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className=" hidden sm:flex gap-10">
            {/* <Bookdemo /> */}
            <ThemeSwitch
              moonIcon={<MoonFilledIcon className="text-gray-400" size={22} />}
              sunIcon={<SunFilledIcon className="text-yellow-500" size={22} />}
            />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
          <ThemeSwitch
            moonIcon={<MoonFilledIcon className="text-gray-400" size={22} />}
            sunIcon={<SunFilledIcon className="text-yellow-500" size={22} />}
          />
          <NavbarMenuToggle />
        </NavbarContent>

        {/* Add NavbarMenu here */}

        <NavbarMenu>
          <div className="  flex justify-center flex-col gap-2 ">
            {siteConfig.navItems.map((item) => (
              <NavbarMenuItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "w-full text-lg flex justify-center bg-grey  gap-2 dark:text-black ",
                  )}
                  href={item.href}
                  style={{
                    backgroundColor: "#E5E6E4",
                    padding: "5px",
                    fontSize: "15px",
                    borderRadius: "9px",
                  }}
                >
                  {item.label}
                </NextLink>
              </NavbarMenuItem>
            ))}
            {/* <Bookdemo /> */}
            <Button color="danger">Log in</Button>
          </div>
        </NavbarMenu>
      </HeroUINavbar>
      <Divider />
    </>
  );
};
