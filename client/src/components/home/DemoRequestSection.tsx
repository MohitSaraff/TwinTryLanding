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
  workEmail: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters" }),
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
        description: "Thank you for your interest! Our team will contact you shortly to schedule your demo.",
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
    <section id="demo" className="py-20 bg-gradient-to-b from-white to-gray-50/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#3c3758] to-[#4a4168] rounded-3xl overflow-hidden shadow-xl animate-gradient-y">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16 text-white">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Retail Experience?
              </h2>
              <p className="text-gray-100 mb-8">
                Schedule a personalized demo to see how TwinTry™ can elevate your customer experience and boost your sales metrics.
              </p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-100">Your Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Full Name" 
                            {...field} 
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:ring-white/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="workEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-100">Work Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="you@company.com" 
                            {...field} 
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:ring-white/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-100">Company</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your Company Name" 
                            {...field} 
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:ring-white/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="queryType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-100">What are you interested in?</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-white/10 border-white/20 text-white focus:ring-white/50">
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="demo">Product Demo</SelectItem>
                            <SelectItem value="pricing">Pricing Information</SelectItem>
                            <SelectItem value="integration">Integration Details</SelectItem>
                            <SelectItem value="custom">Custom Solution</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[#eeff15] text-[#2c2747] hover:bg-[#d9ea00] focus:ring-[#eeff15] focus:ring-offset-[#2c2747]"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? "Submitting..." : "Book a Free Demo"}
                  </Button>
                </form>
              </Form>
            </div>
            
            <div className="hidden lg:block relative">
              <img 
                src="https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
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
