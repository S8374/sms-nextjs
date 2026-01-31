"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/shared/Logo/Logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";

/* ---------------------------------- */
/* ListItem */
/* ---------------------------------- */
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block space-y-1 rounded-md p-3 no-underline transition-colors",
          "hover:bg-accent hover:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium">{title}</div>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = "ListItem";

/* ---------------------------------- */
/* Menu Data – now with proper unique items */
/* ---------------------------------- */
const productsItems = [
  { title: "Marketing SMS", href: "/products/marketing-sms", description: "Bulk promotional messaging" },
  { title: "Verification SMS", href: "/products/verification", description: "OTP & authentication codes" },
  { title: "Voice", href: "/products/voice", description: "Voice calls & IVR solutions" },
];

const solutionsItems = [
  { title: "Healthcare Providers", href: "/solutions/healthcare", description: "Streamline patient communication" },
  { title: "Emergency Services", href: "/solutions/emergency", description: "Fast response coordination" },
  { title: "Home Care Agencies", href: "/solutions/home-care", description: "Schedule & notify caregivers" },
];

const partnersItems = [
  { title: "Hospitals & Clinics", href: "/partners/hospitals", description: "Integrate with existing systems" },
  { title: "Ambulance Services", href: "/partners/ambulance", description: "Real-time dispatch alerts" },
  { title: "Insurance Partners", href: "/partners/insurance", description: "Claims & approval notifications" },
];

const resourcesItems = [
  { title: "Blog & Insights", href: "/resources/blog", description: "Healthcare communication trends" },
  { title: "Help Center", href: "/resources/help", description: "Guides, FAQs & support" },
  { title: "API Documentation", href: "/resources/api", description: "Build custom integrations" },
];

const aboutUsItems = [
  { title: "Our Mission", href: "/about/mission", description: "24/7 accessible quality care" },
  { title: "Our Team", href: "/about/team", description: "Meet the people behind MojaCares" },
  { title: "Careers", href: "/about/careers", description: "Join our mission to improve healthcare" },
];

const simpleLinks = [
  { label: "Contact", href: "/contact" },
];

/* ---------------------------------- */
/* Shared Trigger Style */
/* ---------------------------------- */
const triggerClass = cn(
  "bg-transparent text-primary-foreground px-3 py-2",
  "hover:bg-primary/80 hover:text-primary-foreground",
  "data-[state=open]:bg-primary/80 data-[state=open]:text-primary-foreground"
);

/* ---------------------------------- */
/* Header */
/* ---------------------------------- */
const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-2 bg-transparent">
                {/* Products */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={triggerClass}>
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-primary border border-primary-foreground/20">
                    <ul className="grid w-[420px] gap-3 p-4">
                      {productsItems.map((item) => (
                        <ListItem key={item.href} title={item.title} href={item.href}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Solutions */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={triggerClass}>
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-primary border border-primary-foreground/20">
                    <ul className="grid w-[420px] gap-3 p-4">
                      {solutionsItems.map((item) => (
                        <ListItem key={item.href} title={item.title} href={item.href}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Partners */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={triggerClass}>
                    Partners
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-primary border border-primary-foreground/20">
                    <ul className="grid w-[420px] gap-3 p-4">
                      {partnersItems.map((item) => (
                        <ListItem key={item.href} title={item.title} href={item.href}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Resources */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={triggerClass}>
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-primary border border-primary-foreground/20">
                    <ul className="grid w-[420px] gap-3 p-4">
                      {resourcesItems.map((item) => (
                        <ListItem key={item.href} title={item.title} href={item.href}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* About Us */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={triggerClass}>
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-primary border border-primary-foreground/20">
                    <ul className="grid w-[420px] gap-3 p-4">
                      {aboutUsItems.map((item) => (
                        <ListItem key={item.href} title={item.title} href={item.href}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Contact (no dropdown) */}
                {simpleLinks.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink
                      asChild
                      className={cn(navigationMenuTriggerStyle(), triggerClass)}
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-5">
            <Button className="hidden md:flex items-center gap-1 text-sm">
              <Globe className="h-4 w-4" />
              English
            </Button>

            <Link href="/login" className="hidden md:inline-block text-sm hover:underline">
              Log In
            </Link>

            <Button
              asChild
              className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold px-5"
            >
              <Link href="/signup">Free Trial</Link>
            </Button>

            <Button variant="ghost" size="icon" className="lg:hidden">
              ☰
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;