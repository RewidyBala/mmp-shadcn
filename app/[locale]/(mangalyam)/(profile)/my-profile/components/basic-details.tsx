"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Typography } from "@/components/ui/typography";
import { useUserProfile } from "@/hooks/use-user-profile";
import { useUpdateMyProfile } from "@/hooks/api/use-my-profile";
import { DatePicker } from "@/components/common/input/date-picker";
import { Select } from "@/components/ui/select";
import { Autocomplete } from "@/components/common/input/autocomplete";
import { CREATED_BY_OPTIONS } from "@/util/constants";

const getBasicDetailsSchema = (
  t: (key: string, vars?: Record<string, any>) => string,
  gender?: string
) => {
  const minAge = gender === "MALE" ? 21 : 18;

  return z.object({
    about: z.string().min(20, t("minLength", { min: 20 })),
    dateOfBirth: z
      .date()
      .min(
        new Date(new Date().setFullYear(new Date().getFullYear() - 60)),
        t("maxAgeLimit", { max: 60 })
      )
      .max(
        new Date(new Date().setFullYear(new Date().getFullYear() - minAge)),
        t("minAgeLimit", { min: minAge })
      ),
    createdBy: z.string().min(1, t("required")),
    height: z.number().min(3.0, t("required")),
    weight: z
      .number()
      .min(30, t("validation.weightMin"))
      .max(200, t("validation.weightMax")),
    bodyType: z.number().optional(),
    physicalStatus: z.string().min(1, t("required")),
    drinkingHabit: z.string().min(1, t("required")),
    smokingHabit: z.string().min(1, t("required")),
    eatingHabit: z.string().min(1, t("required")),
  });
};

type BasicDetailsFormValues = z.infer<ReturnType<typeof getBasicDetailsSchema>>;

export default function BasicDetails() {
  const t = useTranslations("profile");
  const { userProfile: profile } = useUserProfile();
  const { trigger: updateProfile, isMutating } = useUpdateMyProfile();

  const form = useForm<BasicDetailsFormValues>({
    resolver: zodResolver(
      getBasicDetailsSchema(useTranslations("validation"), profile.basic.gender)
    ),
    defaultValues: {
      about: profile.basic.about || "",
      dateOfBirth: profile.basic.dateOfBirth
        ? new Date(profile.basic.dateOfBirth)
        : undefined,
      createdBy: profile.basic.createdBy,
      height: profile.basic.height,
      weight: profile.basic.weight,
      bodyType: profile.basic.bodyType,
      physicalStatus: profile.basic.physicalStatus,
      drinkingHabit: profile.basic.drinkingHabit,
      smokingHabit: profile.basic.smokingHabit,
      eatingHabit: profile.basic.eatingHabit,
    },
  });

  const onSubmit = async (data: BasicDetailsFormValues) => {
    try {
      await updateProfile({
        basic: {
          ...profile?.basic,
          ...data,
        },
      } as any);
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <Typography variant={"h3"}>{t("basicDetails")}</Typography>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="about"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{`${t("about")} ${
                      profile.basic.name
                    }`}</FormLabel>
                    <FormControl>
                      <Textarea
                        className="max-h-20 resize-y overflow-auto"
                        placeholder={t("tellAboutYourself")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="dateOfBirth"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("dateOfBirth")}</FormLabel>
                      <FormControl>
                        <DatePicker {...field}></DatePicker>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="createdBy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("createdBy")}</FormLabel>
                      <FormControl>
                        <Autocomplete
                          {...field}
                          options={CREATED_BY_OPTIONS}
                          value={"GUARDIAN"}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" disabled={isMutating}>
                {isMutating ? "Saving..." : "Save Changes"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </Fragment>
  );
}
