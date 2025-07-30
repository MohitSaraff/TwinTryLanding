import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  workEmail: z
    .string()
    .email({ message: "Please enter a valid email address" }),
  company: z
    .string()
    .min(2, { message: "Company name must be at least 2 characters" }),
  queryType: z.string().min(1, { message: "Please select an option" }),
});

type FormData = z.infer<typeof formSchema>;

export default function DemoRequestSection() {
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      workEmail: "",
      company: "",
      queryType: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: FormData) => {
      return apiRequest("POST", "/api/demo-request", data);
    },
    onSuccess: () => {
      toast({
        title: "Demo Request Submitted",
        description:
          "Thank you for your interest! Our team will contact you shortly to schedule your demo.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
  };

  return (
    <section
      id="demo"
      className="py-20 bg-gradient-to-b from-white to-gray-50/70"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#3c3758] to-[#4a4168] rounded-3xl overflow-hidden shadow-xl animate-gradient-y">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16 text-white">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Retail Experience?
              </h2>
              <p className="text-gray-100 mb-8">
                Schedule a personalized demo to see how TwinTry™ can elevate
                your customer experience and boost your sales metrics.
              </p>

              <form
                action="https://formsubmit.co/saraffmohit@gmail.com"
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input
                  type="hidden"
                  name="_autoresponse"
                  value="Thank you for reaching out! We'll get back to you soon."
                />
                <input
                  type="hidden"
                  name="_next"
                  value={window.location.origin + "/thank-you"}
                />

                <div>
                  <label className="text-gray-100">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Full Name"
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:ring-white/50 p-2 rounded"
                  />
                </div>

                <div>
                  <label className="text-gray-100">Work Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:ring-white/50 p-2 rounded"
                  />
                </div>

                <div>
                  <label className="text-gray-100">Company</label>
                  <input
                    type="text"
                    name="company"
                    required
                    placeholder="Your Company Name"
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:ring-white/50 p-2 rounded"
                  />
                </div>

                <div>
                  <label className="text-gray-100">
                    What are you interested in?
                  </label>
                  <select
                    name="queryType"
                    required
                    className="w-full bg-white/10 border-white/20 text-white focus:ring-white/50 p-2 rounded"
                  >
                    <option value="">Select an option</option>
                    <option value="product-demo">Product Demo</option>
                    <option value="pricing-info">Pricing Information</option>
                    <option value="integration-details">Integration Details</option>
                    <option value="custom-solution">Custom Solution</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#eeff15] text-[#2c2747] hover:bg-[#d9ea00] focus:ring-[#eeff15] focus:ring-offset-[#2c2747] font-bold py-2 rounded"
                >
                  Book a Free Demo
                </button>
              </form>
            </div>

            <div className="hidden lg:block relative">
              <img
                src="hero-image.webp" // Replace with your actual image path
                alt="Retail experience with digital innovation"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
