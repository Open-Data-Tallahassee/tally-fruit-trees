"use client";

interface NewTreeFormProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  treeLocation: {
    latitude: number;
    longitude: number;
  };
}

import { zodResolver } from "@hookform/resolvers/zod";
import { SquarePlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { useEffect } from "react";

export const formSchema = z.object({
  treeType: z
    .string({
      required_error: "Please select a fruit type",
    })
    .min(1, {
      message: "Please select a fruit type.",
    }),
  notes: z.string().min(0).max(100),
  location: z.object({
    latitude: z.number().refine((val) => val !== 0, {
      message: "You forgot to select a point",
    }),
    longitude: z.number(),
  }),
});

const NewTreeForm = ({ open, setOpen, treeLocation }: NewTreeFormProps) => {
  const fruitList = [
    "Apple",
    "Orange",
    "Lemon",
    "Fig",
    "Pear",
    "Banana",
    "Mango",
    "Peach",
  ].sort();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      treeType: "",
      notes: "",
      location: {
        latitude: treeLocation.latitude,
        longitude: treeLocation.longitude,
      },
    },
  });

  useEffect(() => {
    form.setValue("location.latitude", treeLocation.latitude);
    form.setValue("location.longitude", treeLocation.longitude);
  }, [treeLocation, form]);

  // 2. Define a submit handler.
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    setOpen(false);
    form.reset();
  };

  return (
    <div className="absolute top-[80px] right-[10px] z-50 flex flex-col  items-center justify-end gap-1">
      {open && (
        <div className="bg-white p-4 rounded shadow-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <div className="space-y-2">
                <p className="font-medium">Add New Fruit Trees</p>
                <ol className="list-decimal list-inside text-sm text-gray-600">
                  <li>Click the location of your tree on the map.</li>
                  <li>Fill out the tree type below.</li>
                </ol>
              </div>
              {/* Latitude field (read-only or editable) */}
              <FormField
                control={form.control}
                name="location.latitude"
                render={({ field }) => (
                  <FormItem>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="treeType"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Tree Type</FormLabel> */}
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="What kind of fruit?" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {fruitList.map((fruit) => (
                          <SelectItem key={fruit} value={fruit.toLowerCase()}>
                            {fruit}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Notes</FormLabel> */}
                    <FormControl>
                      <Textarea
                        placeholder="add additional notes here.."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    {/* <FormDescription>
                      You can <span>@mention</span> other users and
                      organizations.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end gap-2">
                <Button type="submit">Add</Button>

                <Button
                  variant="destructive"
                  onClick={() => {
                    setOpen(false);
                    console.log("Cancelled adding a new tree");
                  }}
                >
                  Nevermind
                </Button>
              </div>
            </form>
          </Form>
        </div>
      )}
      {!open && (
        <Button
          variant="outline"
          size="icon"
          style={{ width: "48px", height: "48px" }}
          className="justify-self-end bg-background/60 hover:bg-accent/75"
          onClick={() => setOpen(!open)}
        >
          <SquarePlus
            style={{ width: "48px", height: "48px" }}
            strokeWidth={1.5}
          />
          {/* <SquarePlus /> */}
        </Button>
      )}
    </div>
  );
};

export default NewTreeForm;
