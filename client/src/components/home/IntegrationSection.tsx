import { Button } from "@/components/ui/button";
import { 
  FaShopify, 
  FaWordpress, 
  FaWhmcs 
} from "react-icons/fa";
import { 
  Smartphone, 
  Code 
} from "lucide-react";

export default function IntegrationSection() {
  const platforms = [
    {
      icon: <FaShopify className="text-4xl text-gray-200" />,
      name: "Shopify",
      description: "One-click integration"
    },
    {
      icon: <FaWordpress className="text-4xl text-gray-200" />,
      name: "WordPress",
      description: "Plugin available"
    },
    {
      icon: <FaWhmcs className="text-4xl text-gray-200" />,
      name: "WooCommerce",
      description: "Simple setup"
    },
    {
      icon: <Smartphone className="h-10 w-10 text-gray-200" />,
      name: "Mobile Apps",
      description: "iOS & Android SDK"
    },
    {
      icon: <Code className="h-10 w-10 text-gray-200" />,
      name: "Custom API",
      description: "For custom platforms"
    }
  ];

  return (
    <section id="integration" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Seamless <span className="text-emerald-500">Integration</span> with Your Platform
          </h2>
          <p className="text-gray-300">
            TwinTry™ works with your existing e-commerce infrastructure, no matter what platform you use.
          </p>
        </div>

        <div className="bg-gray-800/50 rounded-2xl p-8 md:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="flex flex-col items-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                <div className="mb-4">
                  {platform.icon}
                </div>
                <h3 className="font-display font-medium">{platform.name}</h3>
                <p className="text-xs text-center text-gray-400 mt-2">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-primary to-violet-500 rounded-2xl p-8 md:p-12">
          <div className="flex-1">
            <h3 className="font-display text-2xl font-bold mb-4">
              Ready to see it in action?
            </h3>
            <p className="text-gray-200 mb-6 md:mb-0">
              Our integration team can have you up and running with TwinTry™ in less than a week.
            </p>
          </div>
          <div>
            <Button variant="secondary" asChild>
              <a href="#demo">
                Get Started Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
