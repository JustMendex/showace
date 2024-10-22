"use client"

import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export const LoginCard = () => {
    const router = useRouter();

    const redirectToDashboard = () => {
        router.push("/dashboard");
    }
    return (
        <Card className="mx-auto grid w-auto md:w-[600px] gap-6">
            <CardHeader>
                <div className="grid gap-2 text-center">
                    <h1 className="text-3xl font-bold">Login to your account</h1>
                    <p className="text-balance text-muted-foreground">
                        Enter your login details to access to your account
                    </p>
                </div>
            </CardHeader>

            <CardContent>

                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full" onClick={redirectToDashboard}>
                        Login
                    </Button>

                </div>
            </CardContent>
        </Card>
    )
}