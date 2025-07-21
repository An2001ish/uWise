import { AudioWaveform } from "lucide-react"
import Link from "next/link"

export function Header() {
    return <div className="w-full fixed top-0 z-50 bg-background/95 backdrop-blur">
        <div className="absolute inset-0 border-b border-primary/10 bg-red-300"></div>
        <header className="relative max-w-6xl mx-auto px-4 bg-green-200">
            <div className="flex h-16 items-center justify-between bg-blue-200">
                <Link href="/"
                className="flex items-center gap-2">
                    <AudioWaveform className="h-7 w-7 text-primary animate-pulse-gentle"/>
                    <div>
                        <span className="text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
                            uWise
                        </span>
                    </div>
                </Link>
            </div>
        </header>
    </div>
}