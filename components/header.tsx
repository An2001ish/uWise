import { AudioWaveform } from "lucide-react"
import Link from "next/link"

export function Header() {

    const navItems = [
        {label: "Features", href: "/features"},
        {label: "About uWise", href: "/about"},
    ]

    return <div className="w-full fixed top-0 z-50 bg-background/95 backdrop-blur">
        <div className="absolute inset-0 border-b border-primary/10"></div>
        <header className="relative max-w-6xl mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
                <Link href="/"
                className="flex items-center gap-2">
                    <AudioWaveform className="h-7 w-7 text-primary animate-pulse-gentle"/>
                    <div>
                        <span className="text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
                            uWise
                        </span>
                    </div>
                </Link>

                <div className="flex items-center gap-4">
                    <nav className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => {
                            return(
                                <Link
                                key = {item.href}
                                href = {item.href}
                                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                            >
                            {item.label}
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200
                            origin-left">

                            </span>
                            </Link>
                            )
                        })}


                        
                    </nav>    
                    <div className="flex items-center gap-3">
                       {/* <ThemeToggle/>
                       <SignInButton/> */}
                       
                    </div>
                </div>

            </div>
        </header>
    </div>
}