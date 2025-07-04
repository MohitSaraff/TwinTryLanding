import { Button } from "@/components/ui/button";
import {
  UploadCloud,
  Users,
  Clock,
  Banknote
} from "lucide-react";

export default function TwinMockSection() {
  const benefits = [
    {
      icon: <Banknote className="h-6 w-6 text-emerald-500" />,
      title: "Save Money",
      description: "Cut production costs without sacrificing quality. Get top-notch product images for less—up to 90% reduction in visual production costs."
    },
    {
      icon: <Users className="h-6 w-6 text-emerald-500" />,
      title: "Increase Diversity",
      description: "Feature various looks and styles with fewer resources. Access a diverse model portfolio quickly and efficiently."
    },
    {
      icon: <Clock className="h-6 w-6 text-emerald-500" />,
      title: "Save Time",
      description: "Get realistic images in minutes, not weeks. Achieve top-quality results fast—launch your collection and start selling in no time."
    }
  ];

  const steps = [
    {
      title: "Upload your clothes",
      image: "twin-mock-1.png"
    },
    {
      title: "Select the Models",
      image: "twin-mock-2.png"
    },
    {
      title: "Realistic Look",
      image: "twin-mock-3.png"
    }
  ];

  return (
    <section id="twinmock" className="py-20 bg-gradient-to-br from-emerald-50/50 via-white to-emerald-50/70 animate-gradient-x">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
            INTRODUCING
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">
            TwinMock<span className="text-emerald-500">™</span> — Design to Model
          </h2>
          <p className="text-gray-600">
            AI-powered platform that transforms how you showcase your apparel designs.
            Create lifelike images using digital and real models—eliminating costly photoshoots.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-center">
                  {index + 1}. {step.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2 bg-emerald-50 rounded-xl p-8">
            <h3 className="font-display text-2xl font-bold text-dark mb-6">
              Key Business Impact
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-emerald-500 font-display text-2xl font-bold">3X</div>
                <div className="text-sm text-gray-600">FASTER TIME TO MARKET</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-emerald-500 font-display text-2xl font-bold">12%</div>
                <div className="text-sm text-gray-600">AVERAGE ORDER VALUE</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-emerald-500 font-display text-2xl font-bold">30%</div>
                <div className="text-sm text-gray-600">IN AD CLICK-THROUGH</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-emerald-500 font-display text-2xl font-bold">-90%</div>
                <div className="text-sm text-gray-600">VISUAL PRODUCTION COSTS</div>
              </div>
            </div>
            <Button className="w-full bg-emerald-500 hover:bg-emerald-600" asChild>
              <a href="#demo">Schedule a Demo</a>
            </Button>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="font-display text-2xl font-bold text-dark mb-6">
                Key Benefits
              </h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center mr-4 flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}