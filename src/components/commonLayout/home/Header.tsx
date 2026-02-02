// components/Header.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // shadcn sheet for mobile menu
import Logo from "@/shared/Logo/Logo"; // your custom logo component
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
import { Globe, Menu } from "lucide-react";

// ── ListItem (same as yours) ──
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = "ListItem";

// ── Menu Items Data ──
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
  { title: "Our Team", href: "/about/team", description: "Meet the people behind the platform" },
  { title: "Careers", href: "/about/careers", description: "Join our mission to improve healthcare" },
];

// ── Trigger Style ──
const triggerClass = cn(
  "bg-transparent text-primary-foreground px-3 py-2 text-sm font-medium",
  "hover:bg-primary/80 hover:text-primary-foreground",
  "data-[state=open]:bg-primary/80 data-[state=open]:text-primary-foreground",
  "focus:bg-primary/80 focus:text-primary-foreground"
);

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary text-primary-foreground shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-1 lg:gap-2 bg-transparent">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={triggerClass}>Products</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-primary border border-primary-foreground/20">
                    <ul className="grid w-[400px] gap-3 p-4 lg:w-[500px]">
                      {productsItems.map((item) => (
                        <ListItem key={item.href} title={item.title} href={item.href}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={triggerClass}>Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-primary border border-primary-foreground/20">
                    <ul className="grid w-[400px] gap-3 p-4 lg:w-[500px]">
                      {solutionsItems.map((item) => (
                        <ListItem key={item.href} title={item.title} href={item.href}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={triggerClass}>Partners</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-primary border border-primary-foreground/20">
                    <ul className="grid w-[400px] gap-3 p-4 lg:w-[500px]">
                      {partnersItems.map((item) => (
                        <ListItem key={item.href} title={item.title} href={item.href}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={triggerClass}>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-primary border border-primary-foreground/20">
                    <ul className="grid w-[400px] gap-3 p-4 lg:w-[500px]">
                      {resourcesItems.map((item) => (
                        <ListItem key={item.href} title={item.title} href={item.href}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={triggerClass}>About Us</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-primary border border-primary-foreground/20">
                    <ul className="grid w-[400px] gap-3 p-4 lg:w-[500px]">
                      {aboutUsItems.map((item) => (
                        <ListItem key={item.href} title={item.title} href={item.href}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Contact Us - simple link */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), triggerClass)}>
                    <Link href="/contact">Contact Us</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Right Side - Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            <Button variant="ghost" size="sm" className="gap-1 text-primary-foreground hover:bg-primary/80">
              <Globe className="h-4 w-4" />
              English
            </Button>

            <Link href="/login" className="text-sm font-medium hover:underline">
              Log In
            </Link>

            <Button
              asChild
              className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold px-6 py-5 rounded-full shadow-md"
            >
              <Link href="/signup">Free Trial</Link>
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-primary-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-primary text-primary-foreground border-l-primary-foreground/20">
              <div className="flex flex-col gap-6 py-8">
                <Link href="/" className="flex items-center">
                  <Logo />
                </Link>

                {/* Mobile Nav Links */}
                <nav className="flex flex-col gap-4">
                  <Link href="/products" className="text-lg font-medium hover:underline">Products</Link>
                  <Link href="/solutions" className="text-lg font-medium hover:underline">Solutions</Link>
                  <Link href="/partners" className="text-lg font-medium hover:underline">Partners</Link>
                  <Link href="/resources" className="text-lg font-medium hover:underline">Resources</Link>
                  <Link href="/about" className="text-lg font-medium hover:underline">About Us</Link>
                  <Link href="/contact" className="text-lg font-medium hover:underline">Contact Us</Link>
                </nav>

                {/* Mobile Right Actions */}
                <div className="flex flex-col gap-4 mt-auto">
                  <Button variant="outline" className="justify-start gap-2 border-primary-foreground/30">
                    <Globe className="h-5 w-5" />
                    English
                  </Button>
                  <Link href="/login" className="text-center text-lg hover:underline">
                    Log In
                  </Link>
                  <Button
                    asChild
                    className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold"
                  >
                    <Link href="/signup">Free Trial</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}