import { 
  LineChart, 
  Package, 
  Store, 
  ShoppingCart, 
  CheckCircle 
} from "lucide-react";

export default function BenefitsSection() {
  const stats = [
    {
      icon: <LineChart className="h-10 w-10" />,
      value: "+20%",
      title: "Increase in Sales",
      description: "Higher conversion rates from confident purchasing decisions"
    },
    {
      icon: <Package className="h-10 w-10" />,
      value: "-40%",
      title: "Reduced Returns",
      description: "Lower return rates due to accurate fit visualization"
    },
    {
      icon: <Store className="h-10 w-10" />,
      value: "+60%",
      title: "Enhanced Experience",
      description: "Improved in-store shopping experiences"
    },
    {
      icon: <ShoppingCart className="h-10 w-10" />,
      value: "+20%",
      title: "Add-to-Cart Rate",
      description: "Higher engagement with products and shopping flows"
    }
  ];

  const insights = [
    "Track which items are tried on most frequently",
    "Measure conversion rates from try-on to purchase",
    "Understand customer preferences and style profiles",
    "Optimize inventory based on try-on popularity"
  ];

  return (
    <section id="benefits" className="py-20 relative overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-white animate-gradient-x">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#554f7a] to-[#6a5f9d]"></div>
        <div className="absolute inset-0" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23eeff15' fill-opacity='0.8' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">
            Tangible <span className="text-primary">Business Benefits</span>
          </h2>
          <p className="text-gray-600">
            TwinTry™ delivers proven ROI through increased conversion rates and enhanced customer experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="relative bg-white rounded-xl p-6 border border-gray-100 shadow-md overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 -mt-5 -mr-5 text-primary/10">
                {stat.icon}
              </div>
              <h3 className="font-display text-4xl font-bold text-primary mb-2">{stat.value}</h3>
              <p className="text-gray-600 font-medium">{stat.title}</p>
              <p className="text-sm text-gray-500 mt-2">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-display text-2xl font-bold text-dark mb-4">
                Data-Driven Insights
              </h3>
              <p className="text-gray-600 mb-6">
                Beyond try-on, TwinTry™ provides valuable customer data to help you make better business decisions:
              </p>
              <ul className="space-y-3">
                {insights.map((insight, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Data analytics dashboard showing TwinTry insights" 
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
