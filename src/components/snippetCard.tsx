import { ChevronDownIcon, CircleIcon, PlusIcon, PinIcon } from "lucide-react";

import { format, getYear } from "date-fns";
import { enUS } from "date-fns/locale";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Snippet } from "prisma/prisma-client";
import Link from "next/link";

interface SnippetCardProps {
  snippet: Snippet;
  userId?: string;
  userImage?: string;
}

export function SnippetCard(props: SnippetCardProps) {
  return (
    <Card className="break-inside-avoid my-5">
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <Link href={`/snippet/${props.snippet.id}`}>
            <CardTitle>{props.snippet.title}</CardTitle>
          </Link>
          <CardDescription>{props.snippet.description}</CardDescription>
        </div>
        <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
          <Button variant="secondary" className="px-3 shadow-none">
            <PinIcon className="mr-2 h-4 w-4" />
            Save
          </Button>
          <Separator orientation="vertical" className="h-[20px]" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" className="px-2 shadow-none">
                <ChevronDownIcon className="h-4 w-4 text-secondary-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              alignOffset={-5}
              className="w-[200px]"
              forceMount
            >
              <DropdownMenuLabel>Suggested Lists</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                Future Ideas
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>My Stack</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Inspiration</DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PlusIcon className="mr-2 h-4 w-4" /> Create List
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
            {props.snippet.lanaguage}
          </div>
          <div className="flex items-center">
            <PinIcon className="mr-1 h-3 w-3" />
            20k
          </div>
          <div>
            Updated{" "}
            {format(new Date(props.snippet?.updatedAt), "LLLL", {
              locale: enUS,
            })}{" "}
            {getYear(new Date(props.snippet.updatedAt))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
