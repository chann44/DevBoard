import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { QueryClient, useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Input } from "@/components/ui/input";

import { URLs } from "@/lib/network";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";

const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
] as const;

const snippetFormSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    }),
  description: z.string(),
  language: z.string({
    required_error: "Please select a language.",
  }),
  code: z.string(),
});

type SnippetFormValues = z.infer<typeof snippetFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<SnippetFormValues> = {
  title: "",
  description: "",
  language: "",
  code: "",
};

export function ModalCreateSnippet() {
  const [open, setOpen] = useState<boolean>(false);
  const form = useForm<SnippetFormValues>({
    resolver: zodResolver(snippetFormSchema),
    defaultValues,
  });

  const mutation = useMutation({
    mutationFn: (newSnippet: SnippetFormValues) => {
      return axios.post(URLs.createSnippet, newSnippet);
    },
    onSuccess: () => {
      // setOpen(false);
    },
  });

  async function onSubmit(data: SnippetFormValues) {
    console.log("hi");
    try {
      await mutation.mutate(data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">Create Snippet</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg p-6">
        <DialogHeader className=" w-full">
          <DialogTitle className="text-2xl text-center">
            Create Snippet
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Snippet Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the name that will be displayed on your profile and
                    in emails.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Snippet Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="describe your snippet" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the description for your snippet that will show on
                    preview
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Snippet Code</FormLabel>
                  <FormControl>
                    <Textarea placeholder="describe your snippet" {...field} />
                  </FormControl>
                  <FormDescription>provide your code in here</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="language"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Language</FormLabel>
                  <FormDescription>
                    This is the language that will be used in the dashboard.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              onClick={() => {
                onSubmit(form.getValues());
              }}
              type="submit"
            >
              Create Snippet
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
