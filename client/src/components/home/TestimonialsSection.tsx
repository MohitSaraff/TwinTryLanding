import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "TwinTry™ has completely transformed our online shopping experience. Our customers love the ability to try before they buy, and we've seen a significant reduction in returns.",
      author: "Priya Sharma",
      position: "E-Commerce Director, FashionRetail",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
    },
    {
      quote: "The implementation was seamless, and the results were immediate. Our conversion rates increased by 32% in the first month alone. TwinTry™ is now an essential part of our digital strategy.",
      author: "Rajiv Mehta",
      position: "CTO, LuxuryBrands Inc.",
      avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      quote: "Our customers are amazed by how realistic the virtual try-on experience is. The technology is impressive, and the support team at Twinverse has been exceptional throughout our partnership.",
      author: "Ananya Patel",
      position: "Marketing Manager, StyleHouse",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-gray-600">
            See what our clients have to say about their experience with TwinTry™.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="text-amber-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-600 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={`${testimonial.author} avatar`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-dark">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Trusted by leading brands across India</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="h-12 bg-gray-200 rounded flex items-center justify-center text-gray-500">
                Brand Logo
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
