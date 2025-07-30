import { useEffect } from "react";
import { Link } from "wouter"; // Change this line to use wouter instead of react-router-dom

export default function ThankYouPage() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/70 flex flex-col items-center justify-center px-4">
      <div className="max-w-3xl w-full bg-gradient-to-br from-[#3c3758] to-[#4a4168] rounded-3xl overflow-hidden shadow-xl p-8 md:p-12 text-center">
        <div className="flex justify-center mb-6">
          <svg
            viewBox="0 0 24 24"
            className="w-16 h-16 text-[#eeff15]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M8 12L10.5 14.5L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h1 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
          Thank You for Your Interest!
        </h1>

        <p className="text-gray-100 text-lg mb-8">
          We've received your demo request for TwinTry™. Our team will contact you shortly to schedule your personalized demonstration and discuss how we can transform your retail experience.
        </p>

        <div className="mb-8 p-4 bg-white/10 rounded-lg">
          <p className="text-gray-100">
            Expected response time: <span className="font-bold">Within 24-48 hours</span>
          </p>
        </div>

        <Link
          href="/"
          className="inline-block bg-[#eeff15] text-[#2c2747] hover:bg-[#d9ea00] focus:ring-[#eeff15] focus:ring-offset-[#2c2747] font-bold py-3 px-6 rounded"
        >
          Return to Homepage
        </Link>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-2">
          Have additional questions?
        </p>
        <a
          href="mailto:info@twinverse.in"
          className="text-[#2c2747] font-medium hover:underline"
        >
          info@twinverse.in
        </a>
        <p className="text-gray-600 mt-2">
          +91 93326 31181 / +91 74798 44459
        </p>
      </div>
    </div>
  );
}