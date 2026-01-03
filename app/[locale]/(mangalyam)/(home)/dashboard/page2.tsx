"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ScrollableTabs,
  ScrollableTabContent,
} from "@/components/ui/scrollable-tabs";
import { Typography } from "@/components/ui/typography";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import React, { useState } from "react";
import { NameCard } from "@/views/my-profile/base/NameCard";
import { ComboboxExample } from "@/components/examples/combobox-example";
import { Autocomplete } from "@/components/common/input/autocomplete";
import { MultiAutocomplete } from "@/components/common/input/multi-autocomplete";

const maritalStatuses = [
  { label: "Never Married", value: "never_married" },
  { label: "Married", value: "married" },
  { label: "Awaiting Divorce", value: "awaiting_divorce" },
  { label: "Divorced", value: "divorced" },
  { label: "Widowed", value: "widowed" },
  { label: "Annulled", value: "annulled" },
];

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  maritalStatus: z.string().min(1, "Please select a marital status"),
  languages: z.array(z.string()).min(1, "Please select at least one language"),
});

const Page = () => {
  const TABS = [
    { id: "basic", label: "basic" },
    { id: "education", label: "education" },
    { id: "religion", label: "religion" },
    { id: "career", label: "career" },
  ];
  const languages = [
    { label: "English", value: "english" },
    { label: "Tamil", value: "tamil" },
    { label: "Hindi", value: "hindi" },
    { label: "Telugu", value: "telugu" },
    { label: "Malayalam", value: "malayalam" },
    { label: "Kannada", value: "kannada" },
    { label: "Bengali", value: "bengali" },
    { label: "Marathi", value: "marathi" },
  ];

  const [val, setVal] = useState("awaiting_divorce");
  const [val1, setVal1] = useState(["awaiting_divorce"]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      maritalStatus: "",
      languages: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex flex-col gap-6">
      <NameCard />
      <Form {...form}>
        {/* <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6"> */}
        <ScrollableTabs tabs={TABS}>
          <ScrollableTabContent>
            <Card>
              <CardHeader>
                <Typography variant={"h3"}>Basic Information</Typography>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Autocomplete
                    options={maritalStatuses}
                    value={val}
                    onChange={setVal}
                  ></Autocomplete>
                  <MultiAutocomplete
                    options={maritalStatuses}
                    value={val1}
                    onChange={setVal1}
                  ></MultiAutocomplete>
                </div>
              </CardContent>
            </Card>
          </ScrollableTabContent>

          <ScrollableTabContent>
            <div className="p-6 bg-card rounded-xl border shadow-sm h-[500px]">
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              <p className="text-muted-foreground">
                Content for education section...
              </p>
            </div>
          </ScrollableTabContent>

          <ScrollableTabContent>
            <div className="p-6 bg-card rounded-xl border shadow-sm h-[500px]">
              <h2 className="text-2xl font-bold mb-4">Religion</h2>
              <p className="text-muted-foreground">
                Content for religion section...
              </p>
            </div>
          </ScrollableTabContent>

          <ScrollableTabContent>
            <div className="p-6 bg-card rounded-xl border shadow-sm h-[500px]">
              <h2 className="text-2xl font-bold mb-4">Career</h2>
              <p className="text-muted-foreground">
                Content for career section...
              </p>
            </div>
          </ScrollableTabContent>
        </ScrollableTabs>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button onClick={form.handleSubmit(onSubmit)} type="submit">
            Save Changes
          </Button>
        </div>
        {/* </form> */}
      </Form>
      <ComboboxExample />
    </div>
  );
};

export default Page;
