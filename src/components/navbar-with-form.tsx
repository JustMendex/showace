/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client"

import Link from "next/link"
import { Menu, Package2, Search, CalendarIcon, Bold, Italic, List } from "lucide-react"
import { format } from "date-fns"
import { useState } from "react"
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Label } from "~/components/ui/label"
import { Calendar } from "~/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover"
import { cn } from "~/lib/utils"
import { Toggle } from "~/components/ui/toggle"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"
import Image from "next/image"

import type { Editor } from '@tiptap/react';

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null

  }

  return (
    <div className="flex gap-1 mb-2">
      <Toggle
        pressed={editor.isActive('bold')}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
        aria-label="Bold"
      >
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle
        pressed={editor.isActive('italic')}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
        aria-label="Italic"
      >
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle
        pressed={editor.isActive('bulletList')}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
        aria-label="Bullet List"
      >
        <List className="h-4 w-4" />
      </Toggle>
    </div>
  )
}

export function NavbarWithFormComponent() {
  const [dateEntre, setDateEntre] = useState<Date>()
  const [dateSortie, setDateSortie] = useState<Date>()

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
    ],
    content: '<p>Enter motif sortie here...</p>',
  })

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Image src="/nejmIcon.png" alt="Acme Inc" className="h-12 w-20 " width="100" height="100" />

          <Link
            href="#"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Personel
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Société
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Villes
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Clients
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Banques
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Image src="/nejmIcon.png" alt="Acme Inc" className="h-12 w-20 " width="100" height="100" />

              <Link
                href="#"
                className="text-foreground transition-colors hover:text-foreground"
              >
                Personel
              </Link>
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Société
              </Link>
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Villes
              </Link>
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Clients
              </Link>
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Banques
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Certification de personnels</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="code-personel">Code personnel</Label>
                  <Input id="code-personel" placeholder="Enter code personnel" />
                  <p className="text-sm text-muted-foreground">Unique identifier for the employee</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="matricule">Matricule</Label>
                  <Input id="matricule" placeholder="Enter matricule" />
                  <p className="text-sm text-muted-foreground">Employee registration number</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="personnel">Personnel</Label>
                  <Input id="personnel" placeholder="Enter personnel" />
                  <p className="text-sm text-muted-foreground">Full name of the employee</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="agence">Agence</Label>
                  <Select>
                    <SelectTrigger id="agence">
                      <SelectValue placeholder="Select agence" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="agence1">Agence 1</SelectItem>
                      <SelectItem value="agence2">Agence 2</SelectItem>
                      <SelectItem value="agence3">Agence 3</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-muted-foreground">Branch or office where the employee works</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fonction">Fonction</Label>
                  <Select>
                    <SelectTrigger id="fonction">
                      <SelectValue placeholder="Select fonction" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fonction1">Fonction 1</SelectItem>
                      <SelectItem value="fonction2">Fonction 2</SelectItem>
                      <SelectItem value="fonction3">Fonction 3</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-muted-foreground">Employee role or position in the company</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date-entre">Date entrée</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !dateEntre && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dateEntre ? format(dateEntre, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={dateEntre}
                        onSelect={setDateEntre}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <p className="text-sm text-muted-foreground">Date when the employee joined the company</p>
                </div>
                <div className="space-y-2 w-full">
                  <Label htmlFor="date-sortie">Date sortie</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !dateSortie && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dateSortie ? format(dateSortie, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={dateSortie}
                        onSelect={setDateSortie}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <p className="text-sm text-muted-foreground">Date when the employee left the company (if applicable)</p>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="motif-sortie">Motif sortie</Label>
                <div className="border rounded-md p-2">
                  <MenuBar editor={editor} />
                  <EditorContent editor={editor} />
                </div>
                <p className="text-sm text-muted-foreground">Reason for the employee departure (if applicable)</p>
              </div>
              <Button type="submit" className="w-full">Submit</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}