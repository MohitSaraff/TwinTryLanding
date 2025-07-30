import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export default function Contact() {
  return (
    <div className="font-sans text-foreground bg-background">
      <Navbar />

      <main className="pt-28 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-50/70 animate-gradient-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-10">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-center text-dark mb-4">
              Get in Touch with Twinverse
            </h1>
            <p className="text-gray-600 text-center">
              We're here to help you build beyond reality. Reach out for demos, partnership inquiries, or any questions regarding our TwinTry™ platform.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <ContactInfo />
            {/* <ContactForm /> */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
