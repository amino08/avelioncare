"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import {
  waitlistSchema,
  type WaitlistFormData,
} from "@/lib/validations/waitlist";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface WaitlistFormProps {
  defaultInterest?: WaitlistFormData["interest"];
  className?: string;
}

const inputClass =
  "h-12 border-platinum bg-platinum-soft/50 text-navy placeholder:text-navy/35 focus-visible:border-clinical/40 focus-visible:ring-clinical/20";

export function WaitlistForm({
  defaultInterest,
  className,
}: WaitlistFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      interest: defaultInterest ?? undefined,
      goals: "",
    },
  });

  const onSubmit = async (data: WaitlistFormData) => {
    setError(null);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error ?? "Something went wrong");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed");
    }
  };

  return (
    <div className={cn("relative", className)}>
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-xl border border-platinum bg-white p-12 text-center shadow-[0_8px_48px_rgba(10,22,40,0.08)] md:p-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <CheckCircle2 className="mx-auto size-16 text-clinical" />
            </motion.div>
            <h3 className="mt-8 font-heading text-3xl text-navy md:text-4xl">
              You&apos;ve secured your place.
            </h3>
            <p className="mx-auto mt-5 max-w-md text-lg leading-[1.75] text-navy/65">
              Thank you for joining the Avelion waitlist. We&apos;ll be sharing
              early access, launch announcements, and exclusive updates before
              anyone else.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-xl border border-platinum bg-white p-8 shadow-[0_8px_48px_rgba(10,22,40,0.08)] md:p-12"
          >
            <div className="grid gap-7 md:grid-cols-2">
              <div className="space-y-2.5">
                <Label htmlFor="firstName" className="text-navy/80">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  {...register("firstName")}
                  className={inputClass}
                  placeholder="First name"
                />
                {errors.firstName && (
                  <p className="text-sm text-red-500">{errors.firstName.message}</p>
                )}
              </div>

              <div className="space-y-2.5">
                <Label htmlFor="lastName" className="text-navy/80">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  {...register("lastName")}
                  className={inputClass}
                  placeholder="Last name"
                />
                {errors.lastName && (
                  <p className="text-sm text-red-500">{errors.lastName.message}</p>
                )}
              </div>

              <div className="space-y-2.5">
                <Label htmlFor="email" className="text-navy/80">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  className={inputClass}
                  placeholder="you@email.com"
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2.5">
                <Label htmlFor="phone" className="text-navy/80">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  className={inputClass}
                  placeholder="(555) 000-0000"
                />
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-2.5 md:col-span-2">
                <Label className="text-navy/80">Interest</Label>
                <Controller
                  name="interest"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value ?? null}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className={cn(inputClass, "w-full")}>
                        <SelectValue placeholder="Select your interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="research">Research Products</SelectItem>
                        <SelectItem value="care">Wellness Care</SelectItem>
                        <SelectItem value="both">Both</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.interest && (
                  <p className="text-sm text-red-500">{errors.interest.message}</p>
                )}
              </div>

              <div className="space-y-2.5 md:col-span-2">
                <Label htmlFor="goals" className="text-navy/80">
                  Goals <span className="text-navy/40">(optional)</span>
                </Label>
                <Textarea
                  id="goals"
                  {...register("goals")}
                  className={cn(inputClass, "min-h-28")}
                  placeholder="Tell us what you're hoping to discover..."
                />
                {errors.goals && (
                  <p className="text-sm text-red-500">{errors.goals.message}</p>
                )}
              </div>
            </div>

            {error && (
              <p className="mt-5 text-center text-sm text-red-500">{error}</p>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="mt-10 h-14 w-full rounded-lg bg-white text-base font-medium text-navy shadow-[0_4px_24px_rgba(10,22,40,0.12)] ring-1 ring-platinum transition-all duration-300 hover:shadow-[0_8px_36px_rgba(184,195,209,0.35)] hover:ring-silver/60 disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Securing your place...
                </>
              ) : (
                "Join the Waitlist"
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
