import { 
  EyeIcon, 
  RulerIcon, 
  ShirtIcon 
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <EyeIcon className="h-6 w-6 text-white" />,
      title: "Immersive Experience",
      description: "Harness generative AI to create photorealistic visuals that make customers feel like they're really trying on your products."
    },
    {
      icon: <RulerIcon className="h-6 w-6 text-white" />,
      title: "Precision Fit",
      description: "Computer vision-based pose extraction ensures personalized try-ons that accurately represent how garments will fit unique body types."
    },
    {
      icon: <ShirtIcon className="h-6 w-6 text-white" />,
      title: "Enhanced Visuals",
      description: "Advanced image enhancer technology creates realistic garment representation with accurate textures, folds, and lighting."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-t from-gray-50/70 to-white animate-gradient-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">
            Revolutionary Technology <span className="text-primary">at Your Fingertips</span>
          </h2>
          <p className="text-gray-600">
            TwinTry™ combines advanced AI and computer vision to create the most realistic virtual try-on experience available today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-violet-500 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
