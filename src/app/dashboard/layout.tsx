import { AppSidebar } from "~/components/app-sidebar"
import { Separator } from "~/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "~/components/ui/sidebar"
import { CommandMenu } from "../_components/commandMenu"
import { type Metadata } from "next";
import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { ModeToggle } from "~/components/theme-toggler";


export const metadata: Metadata = {
    title: "NEJME CHAMAL",
    icons: [{ rel: "icon", url: "/nejmIcon.png" }],
};

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center px-4 gap-2 mt-2 justify-between transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 ">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <div className="h-8 w-52 ">
                            <CommandMenu />
                        </div>
                    </div>

                    <div className="flex flex-row gap-4 items-center">
                        <ModeToggle />
                        <Avatar className="h-8 w-8 rounded-lg">
                            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                        </Avatar>
                    </div>
                </header>
                {children}
            </SidebarInset>
        </SidebarProvider>

    );
}
