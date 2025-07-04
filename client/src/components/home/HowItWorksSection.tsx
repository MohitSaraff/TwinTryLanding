import {
  Shirt,
  Camera,
  Sparkles,
  Palette
} from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <Shirt className="h-8 w-8 text-primary" />,
      title: "Select Your Fashion Favorites",
      description: "TwinTry™ pre-analyzes your catalog—breaking down silhouettes, colors, and fabrics—so when customers choose an item, they're ready to step into our digital fitting room."
    },
    {
      icon: <Camera className="h-8 w-8 text-primary" />,
      title: "Upload Your Selfie for a Perfect Fit",
      description: "Ditch the generic avatars. With TwinTry™, users upload their own photo to capture unique details like skin tone and body shape, ensuring every outfit looks tailor-made."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Instant Virtual Try-On Magic",
      description: "Experience the magic in seconds—TwinTry™ quickly renders a realistic preview so customers can see how the outfit's color, style, and fit come to life."
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Customize Your Virtual Runway",
      description: "Let customers adjust the backdrop and fine-tune their view, creating a fun, immersive shopping experience that feels like their own personal fashion show."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-white to-indigo-50/30 animate-gradient-x">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-2">
            How Does It <span className="text-violet-500">Work?</span>
          </h2>
          <p className="text-gray-600">
            Discover how TwinTry™ transforms online shopping into an interactive,
            personalized experience that boosts sales and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="max-w-xs mx-auto aspect-w-3 aspect-h-5 bg-gray-100 rounded-3xl overflow-hidden shadow-lg">
              <video
                src="product-video.mp4"
                // poster="how-does-it-work.jpg"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                aria-label="TwinTry virtual try-on mobile demonstration"
              />
            </div>
            {/* <div className="absolute bottom-4 right-4 bg-emerald-500 text-white text-xs font-medium px-3 py-1 rounded-full">
              Powered by AI
            </div> */}
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-4 flex-shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-dark mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}