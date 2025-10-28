"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Lock, Mail } from "lucide-react";


export default function LoginPage() {

    const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


    return (
        ign In to uWise
                        </h1>
                        <p className="text-base text-muted-foreground font-medium">Welcome back! Please sign in to your account.</p>
                    </div>
                <div className="space-y-3">
                    <div>
                        <label htmlFor="email"
                        className="block text-base font-semibold mb-1">
                            Email
                        </label>
                        <div className="relative">
                            <Mail
                            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground"/>
                            <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            className="pl-12 py-2 text-base rounded-xl bg-card bg-opacity-80 border border-primary focus:ring-2 focus:ring-primary text-foreground placeholder:text-muited-foreground"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required/>
                        </div>
                    </div>
                </div>
                <div className="space-y-3">
                    <div>
                        <label htmlFor="password"
                        className="block text-base font-semibold mb-1">
                            Password
                        </label>
                        <div className="relative">
                            <Lock
                            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground"/>
                            <Input
                            id="password"
                            type="password"
                            placeholder="Enter your email address"
                            className="pl-12 py-2 text-base rounded-xl bg-card bg-opacity-80 border border-primary focus:ring-2 focus:ring-primary text-foreground placeholder:text-muited-foreground"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required/>
                        </div>
                    </div>
                </div>
                <div className="space-y-3">
                    
                        <Button type="submit" className="w-full py-2 text-base rounded-xl font-bold bg-gradient-to-r from-primary to-primary/80 shadow-md hover:from-primary/80 hover:to-primary"
                        size="lg"
                        typeof="button">
                            Sign In
                        </Button>
                    
                </div>
                <div className="space-y-3">
                    
                    <div className="flex items-center justify-center gap-2 text-sm">

                       <span>Don&apos;t have an account?
                       </span>
                        <Link href="/signup" className="text-primary font-semibold hover:underline">Sign Up</Link>|
                       <Link href="/forgot-password" className="text-primary hover:underline font-semibold">Forgot password?</Link>
                    
                    </div>
                </div>
                
                </Card>
            </Container>
        </div>
    )
}