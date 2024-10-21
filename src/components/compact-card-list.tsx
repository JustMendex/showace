'use client'

import type { ForwardRefExoticComponent } from "react"
import { Card, CardHeader, CardTitle, CardDescription } from "~/components/ui/card"
import { ArrowUpRight, BookMarked, Boxes, Building, BusFront, HandCoins, Landmark, Monitor, PackageSearch, ReceiptText, Send, Settings, Shield, ShieldEllipsis, Store, Truck } from "lucide-react"
import Link from "next/link"

type CardType = {
  id: number
  title: string
  description: string
  icon: ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref">>
  path: string
}
const cards: CardType[] = [
  {
    id: 1,
    title: "Transportation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    icon: Truck,
    path: "/transportation"
  },
  {
    id: 2,
    title: "Paramètrage",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    icon: Settings,
    path: "/settings"
  },
  {
    id: 3,
    title: "Suivi des Carnets",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    icon: PackageSearch,
    path: "/api-reference"
  },
  {
    id: 4,
    title: "Gestion de sécurité",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    icon: Shield,
    path: "/security"
  }, {
    id: 5,
    title: "Authentication",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    icon: Shield,
    path: "/authentication"
  }, {
    id: 6,
    title: "Dashboard",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    icon: Monitor,
    path: "/dashboard"
  }, {
    id: 7,
    title: "Gestion des Expéditions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    icon: Send,
    path: "/expedition"
  }, {
    id: 8,
    title: "Gestion des Voyages",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    icon: BusFront,
    path: "/trip"
  }, {
    id: 9,
    title: "Gestion de Caisse Agence",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    icon: Store,
    path: "/cash"
  }, {
    id: 10,
    title: "Gestion de la caisse Général",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    icon: Building,
    path: "/cash-general"
  }, {
    id: 11,
    title: "Stock Management",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    icon: Boxes,
    path: "/stock-management"
  }, {
    id: 12,
    title: "Contre Remboursement",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    icon: HandCoins,
    path: "/cash-on-delivery"
  }, {
    id: 13,
    title: "Contre Document",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    icon: BookMarked,
    path: "/cash-on-document"
  }, {
    id: 14,
    title: "Banque",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    icon: Landmark,
    path: "/bank"
  }, {
    id: 15,
    title: "Suivi Qualité",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    icon: ShieldEllipsis,
    path: "/quality"
  }, {
    id: 16,
    title: "Facturation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    icon: ReceiptText,
    path: "/billing"
  }
]

export function CompactCardList() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <Link key={card.id} href={card.path} className="block group">
          <Card className="relative h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <CardHeader className="p-4">
              <div className="flex items-center space-x-2">
                <card.icon className="h-6 w-6 text-foreground " />
                <div className="space-y-1">
                  <CardTitle className="text-lg">{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </div>
              </div>
              <div className="absolute top-3 right-3">
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  )
}