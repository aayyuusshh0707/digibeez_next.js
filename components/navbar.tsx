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
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo, SunFilledIcon, MoonFilledIcon, LogoDark} from "@/components/icons";
import {Divider} from "@heroui/divider";

 
export const Navbar = () => {
  return (
    <>
    <HeroUINavbar maxWidth="xl" position="sticky">
    <NavbarContent className=" start">
      <NextLink className="  flex justify-start items-center gap-1 " href="/">
       <ThemeSwitch
       lightLogo={<Logo className="w-8 h-8" />}
       darkLogo={<LogoDark className="w-8 h-8" />}
        />
      </NextLink>
    </NavbarContent>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit ">
          
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
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
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
        <ThemeSwitch
        sunIcon={<SunFilledIcon size={22} className="text-yellow-500" />}
        moonIcon={<MoonFilledIcon size={22} className="text-gray-400" />}
        />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
      <ThemeSwitch
        sunIcon={<SunFilledIcon size={22} className="text-yellow-500" />}
        moonIcon={<MoonFilledIcon size={22} className="text-gray-400" />}
        />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Add NavbarMenu here */}
      <NavbarMenu>
        {siteConfig.navItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "w-full text-lg"
              )}
              href={item.href}
            >
              {item.label}
            </NextLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
  
    </HeroUINavbar>
     <Divider/>
     </>
  );
};
