"use client"
import { Boxes, CalendarIcon, ClipboardX, Filter, PlusSquare, TrendingUpDown, Truck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Charts } from "../../_components/stats";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Input } from "~/components/ui/input";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/components/ui/dialog"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { format } from "date-fns";
import { Calendar } from "~/components/ui/calendar";
import { Checkbox } from "~/components/ui/checkbox";

type DataType = {
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


export default function Page() {
    const [open, setOpen] = useState(false)
    const [expeditionDate, setExpeditionDate] = useState<Date>()
    const [eventDate, setEventDate] = useState<Date>()

    const data: DataType[] = [
        {
            id: "728ed52f",
            numeroExpedition: "EXP-001",
            dateExpedition: new Date("2021-09-01"),
            numeroDeclaration: "DEC-001",
            expediteur: "John Doe",
            destinataire: "Jane Doe",
            colis: 5,
            poids: "5kg",
            typePort: "Lorem Ipsum",
            montant: 100,
            enCompt: true
        },
        {
            id: "728ed52f",
            numeroExpedition: "EXP-002",
            dateExpedition: new Date("2021-09-01"),
            numeroDeclaration: "DEC-002",
            expediteur: "John Doe",
            destinataire: "Jane Doe",
            colis: 5,
            poids: "5kg",
            typePort: "Lorem Ipsum",
            montant: 100,
            enCompt: true
        },
        {
            id: "728ed52f",
            numeroExpedition: "EXP-003",
            dateExpedition: new Date("2021-09-01"),
            numeroDeclaration: "DEC-003",
            expediteur: "John Doe",
            destinataire: "Jane Doe",
            colis: 5,
            poids: "5kg",
            typePort: "Lorem Ipsum",
            montant: 100,
            enCompt: true
        },
        {
            id: "728ed52f",
            numeroExpedition: "EXP-004",
            dateExpedition: new Date("2021-09-01"),
            numeroDeclaration: "DEC-004",
            expediteur: "John Doe",
            destinataire: "Jane Doe",
            colis: 5,
            poids: "5kg",
            typePort: "Lorem Ipsum",
            montant: 100,
            enCompt: true
        },
    ]

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <main className="flex flex-col gap-4 px-4 mt-8">
            <Button variant="default" className="mb-4 self-end">
                <PlusSquare className="h-4 w-4" />
                <span className="hidden md:block">Nouvelle expédition</span>
            </Button>


            <div className="flex flex-row items-center gap-4 md:gap-0 justify-between flex-wrap ">
                <Input placeholder="Search" className=" max-w-80 " />

                {/* search and filter */}
                <div className="flex flex-row gap-8 flex-wrap items-center justify-between">
                    <RadioGroup defaultValue="option-one" className="flex flex-row gap-6 flex-wrap">
                        <div className="flex items-center space-x-2">
                            <Label htmlFor="option-one">Numéro d'expédition</Label>
                            <RadioGroupItem value="option-one" id="option-one" />
                        </div>
                        <div className="flex items-center space-x-2">
                            <Label htmlFor="option-two">N°br</Label>
                            <RadioGroupItem value="option-two" id="option-two" />
                        </div>

                        <div className="flex items-center space-x-2">
                            <Label htmlFor="option-two">Dec</Label>
                            <RadioGroupItem value="option-three" id="option-three" />
                        </div>
                    </RadioGroup>


                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                            <Button variant="default">
                                <Filter className="h-4 w-4 " />
                                <span className="hidden md:block">Filter</span>
                            </Button></DialogTrigger>
                        <DialogContent className="sm:max-w-[900px]">
                            <DialogHeader>
                                <DialogTitle>Critéres de recherche</DialogTitle>

                            </DialogHeader>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="space-y-4">
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Expéditeur" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="option1">Option 1</SelectItem>
                                            <SelectItem value="option2">Option 2</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Destinataire" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="option1">Option 1</SelectItem>
                                            <SelectItem value="option2">Option 2</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Ville départ" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="option1">Option 1</SelectItem>
                                            <SelectItem value="option2">Option 2</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Ville destination" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="option1">Option 1</SelectItem>
                                            <SelectItem value="option2">Option 2</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {expeditionDate ? format(expeditionDate, "PPP") : <span>Date d'expedition</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0 ">
                                            <Calendar mode="single" className="bg-white rounded-xl border" selected={expeditionDate} onSelect={setExpeditionDate} initialFocus />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                                <div className="space-y-4">
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Agence entrée" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="option1">Option 1</SelectItem>
                                            <SelectItem value="option2">Option 2</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Agence Actuelle" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="option1">Option 1</SelectItem>
                                            <SelectItem value="option2">Option 2</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Agence de sortie" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="option1">Option 1</SelectItem>
                                            <SelectItem value="option2">Option 2</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Input type="text" placeholder="N°Facture" />
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Ramasseur" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="option1">Option 1</SelectItem>
                                            <SelectItem value="option2">Option 2</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Nature marchandise" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="option1">Option 1</SelectItem>
                                            <SelectItem value="option2">Option 2</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-4">
                                    <Input type="text" placeholder="Événement" />
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {eventDate ? format(eventDate, "PPP") : <span>Date d'événement</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar mode="single" className="bg-white rounded-xl border" selected={eventDate} onSelect={setEventDate} initialFocus />
                                        </PopoverContent>
                                    </Popover>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Envoi" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="option1">Option 1</SelectItem>
                                            <SelectItem value="option2">Option 2</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Retours de fonds" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="option1">Option 1</SelectItem>
                                            <SelectItem value="option2">Option 2</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Retours BI" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="option1">Option 1</SelectItem>
                                            <SelectItem value="option2">Option 2</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Port" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="option1">Option 1</SelectItem>
                                            <SelectItem value="option2">Option 2</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="supprime" />
                                    <Label htmlFor="supprime">Supprimé</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="service" />
                                    <Label htmlFor="service">Service</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="avec-expedition-supprime" />
                                    <Label htmlFor="avec-expedition-supprime">Avec Expédition Supprimé</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="facture" />
                                    <Label htmlFor="facture">Facturé</Label>
                                </div>
                            </div>
                            <DialogFooter>
                                <Button variant="outline" onClick={handleOpen}>Cancel</Button>

                                <Button onClick={handleOpen}>
                                    Delete
                                </Button>
                            </DialogFooter>
                        </DialogContent>

                    </Dialog>

                </div>
            </div>
            <DataTable columns={columns} data={data} />



        </main>
    )
}
