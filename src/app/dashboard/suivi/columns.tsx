"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, Link, PencilIcon, ImagePlusIcon, TagsIcon, PercentIcon, GiftIcon, UsersIcon, BarChart3Icon, TicketIcon, AlertTriangleIcon, MapPin, Files, Printer, Wallet, Receipt, FolderUp } from "lucide-react"
import { Label } from "recharts"
import { Button } from "~/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "~/components/ui/dropdown-menu"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
    id: string
    numeroExpedition: string
    dateExpedition: Date
    numeroDeclaration: string
    expediteur: string
    destinataire: string
    colis: number
    poids: string
    typePort: string
    montant: number
    enCompt: boolean
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "numeroExpedition",
        header: "N° Expédition",
    },
    {
        accessorKey: "dateExpedition",
        header: "Date Expédition",
        cell: ({ row }) => (<span>{row.original.dateExpedition.toLocaleDateString()}</span>)
    },
    {
        accessorKey: "numeroDeclaration",
        header: "N° Déclaration",
    },
    {
        accessorKey: "expediteur",
        header: "Expéditeur",
    },
    {
        accessorKey: "destinataire",
        header: "Destinataire",
    },
    {
        accessorKey: "colis",
        header: "Colis",
    },
    {
        accessorKey: "poids",
        header: "Poids",
    },
    {
        accessorKey: "typePort",
        header: "Type Port",
    },
    {
        accessorKey: "montant",
        header: "Montant",
    },
    {
        accessorKey: "enCompt",
        header: "En Comptabilité",
    },
    {
        accessorKey: "actions",
        header: "Actions",
        cell: ({ row }) => (<DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem asChild className="cursor-pointer">
                    <div className="flex flex-row justify-between gap-2 w-full">
                        <span>Modifier</span>
                        <PencilIcon className="h-4 w-4" />
                    </div>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer">
                    <div className="flex flex-row justify-between gap-2 w-full">
                        <span>Tracking</span>
                        <MapPin className="h-4 w-4" />
                    </div>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer">
                    <div className="flex flex-row justify-between gap-2 w-full">
                        <span>Document</span>
                        <Files className="h-4 w-4" />
                    </div>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer">
                    <div className="flex flex-row justify-between gap-2 w-full">
                        <span>Imprimer</span>
                        <Printer className="h-4 w-4" />
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                    <div className="flex flex-row justify-between gap-2 w-full">
                        <span>Cr</span>
                        <Wallet className="h-4 w-4" />
                    </div>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer">
                    <div className="flex flex-row justify-between gap-2 w-full">
                        <span>Facture</span>
                        <Receipt className="h-4 w-4" />
                    </div>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer">
                    <div className="flex flex-row justify-between gap-2 w-full">
                        <span>Rubrique</span>
                        <TagsIcon className="h-4 w-4" />
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                    <div className="flex flex-row justify-between gap-2 w-full">
                        <span>Exproter</span>
                        <FolderUp className="h-4 w-4" />
                    </div>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>)
    }
]
