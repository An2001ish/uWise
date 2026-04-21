'use client';

import { AudioWaveform, X, Menu, LogOut, MessageCircle } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { SignInButton } from "./auth/sign-in-button"
import { useState } from "react"
import { useSession } from "@/lib/contexts/session-context"
import {Button} from "@/components/ui/button"

export function Header() {

    const navItems = [
        {label: "Features", href: "/features"},
        {label: "About uWise", href: "/about"},
    ]

    const {isAuthenticated, logout, user} =useSession();
    console.log("isAuthenticated: ",isAuthenticated)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <div className="w-full fixed top-0 z-50 bg-background/95 backdrop-blur">
        <div className="absolute inset-0 border-b border-primary/10"></div>
        <header className="relative max-w-6xl mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <AudioWaveform className="h-7 w-7 text-primary animate-pulse-gentle" />
              <div>
                <span className="text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
                  uWise
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <nav className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                    >
                      {item.label}
                      <span
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200
                            origin-left"
                      ></span>
                    </Link>
                  );
                })}
              </nav>
              <div className="flex items-center gap-3">
                <ThemeToggle />
                {isAuthenticated ? (
                  <>
                    <Button
                      asChild
                      className="hidden md:flex gap-2 bg-primary/90 hover:bg-primary"
                    >
                      <Link href="/dashboard">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        Start Chat
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      onClick={logout}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign out
                    </Button>
                  </>
                ) : (
                  <SignInButton />
                )}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </header>
        {isMenuOpen && (
          <div className="md:hidden border-t border-primary/10">
            <nav className="flex flex-col space-y-1 py-4">
              {navItems.map((item) => {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors relative group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    );
}