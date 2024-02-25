"use client";

import React from "react";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import {SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import {navLinks} from "@/constants";
import {usePathname} from "next/navigation";
import { Button } from "../ui/button";

export default function MobileNav() {
  const pathName = usePathname();

  return (
    <header className="header">
      <Link href={"/"} className="flex items-center gap-2 md:py-2">
        <Image
          src={"/assets/images/logo-text.svg"}
          alt="logo"
          width={180}
          height={28}
        />
      </Link>
      <nav className=" flex  gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <Sheet>
            <SheetTrigger>
              <Image
                src={"/assets/icons/menu.svg"}
                alt="icone"
                width={32}
                height={32}
                className=" cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className=" sheet-content sm:64">
              <>
                <Image
                  src={"/assets/images/logo-text.svg"}
                  alt="logo"
                  width={180}
                  height={28}
                />
                <ul className="header-nav_elements">
                  {navLinks.slice(0, 6).map((link, index) => {
                    const isActive = link.route === pathName;
                    return (
                      <li
                        className={`${isActive && " gradient-text"} text-dark-700 whitespace-nowrap p-18 flex`}
                        key={index}
                      >
                        <Link href={link.route} className="sidebar-link cursor-pointer">
                          <Image
                            src={link.icon}
                            alt="logo"
                            width={24}
                            height={24}
                          />{" "}
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
              </SignedIn>
              <SignedOut>
            <Button asChild className=" bg-purple-gradient bg-cover">
              <Link href={"/sign-in"}>login</Link>
            </Button>
          </SignedOut>

      </nav>
    </header>
  );
}
