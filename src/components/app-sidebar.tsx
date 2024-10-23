"use client"

import * as React from "react"
import {
  Backpack,
  Boxes,
  ChartNoAxesColumnIncreasing,
  File,
  Frame,
  HandCoins,
  Landmark,
  Map,
  Monitor,
  MonitorStop,
  PieChart,
  Receipt,
  Rss,
  Settings,
  Shield,
  Truck,
} from "lucide-react"

import { NavMain } from "~/components/nav-main"
import { NavUser } from "~/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "~/components/ui/sidebar"
import Image from "next/image"
import { usePathname } from "next/navigation"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Paramétrage",
      url: "#",
      icon: Settings,
      isActive: false,
      items: [
      ],
    },
    {
      title: "Suivi des Carnets",
      url: "#",
      icon: Rss,
      items: [

      ],
    },
    {
      title: "Gestion des Expéditions",
      url: "#",
      icon: Truck,
      items: [
        {
          title: "Suivi des Expéditions",
          url: "/dashboard/suivi",
        },
        {
          title: "Expéditions",
          url: "/dashboard/expedition",
        },
        {
          title: "Suivi des Ramassage",
          url: "#",
        },
        {
          title: "Ramassage",
          url: "#",
        },
        {
          title: "Sortie",
          url: "#",
        },
        {
          title: "Annulation Sortie",
          url: "#",
        },
        {
          title: "Livraison",
          url: "#",
        },
        {
          title: "Retour Page",
          url: "#",
        },
        {
          title: "Redirection Page",
          url: "#",
        },
        {
          title: "Suivi des Anomalies",
          url: "#",
        },
        {
          title: "Modification Spécial",
          url: "#",
        },
      ],
    },
    {
      title: "Gestion des Voyages",
      url: "#",
      icon: Backpack,
      items: [
      ],
    },
    {
      title: "Caisse Agence",
      url: "#",
      icon: Monitor,
      items: [
      ],
    },
    {
      title: "Caisse Centrale",
      url: "#",
      icon: MonitorStop,
      items: [
      ],
    },
    {
      title: "Stock Management",
      url: "#",
      icon: Boxes,
      items: [
      ],
    },
    {
      title: "Contre Remboursement",
      url: "#",
      icon: HandCoins,
      items: [
      ],
    },
    {
      title: "Contre Document",
      url: "#",
      icon: File,
      items: [
      ],
    },
    {
      title: "Banque (Bank)",
      url: "#",
      icon: Landmark,
      items: [
      ],
    },
    {
      title: "Facturation (Billing)",
      url: "#",
      icon: Receipt,
      items: [
      ],
    },
    {
      title: "KPIs",
      url: "#",
      icon: ChartNoAxesColumnIncreasing,
      items: [
      ],
    },
    {
      title: "Gestion de sécurité",
      url: "#",
      icon: Shield,
      items: [
      ],
    },


  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  // check which object is active and set it to true
  data.navMain.forEach((item) => {
    if (item.items) {
      item.items.forEach((subItem) => {
        if (subItem.url === pathname) {
          item.isActive = true
        }
      })
    }
  })
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* <TeamSwitcher teams={data.teams} /> */}
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground h-[100px]"
        ><Image alt="Logo" src="/3.jpeg" width={900} height={900} className=" w-auto h-auto  " />
          {/* <div className="flex aspect-square  items-center justify-center rounded-lg bg-transparenty text-sidebar-primary-foreground">
            
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">
              Nejme Chamale
            </span>
            <span className="truncate text-xs">Messagerie</span>
          </div> */}
        </SidebarMenuButton>

      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={data.user} /> */}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
