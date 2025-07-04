import { SiNvidia, SiAmazon } from "react-icons/si";

export default function BackedBySection() {
  return (
    <section id="partners" className="py-12 bg-gradient-to-br from-gray-50 via-gray-50/50 to-gray-100/30 animate-gradient-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col p-6 md:p-10 bg-white rounded-2xl shadow-md">
          <div className="mb-8 text-center">
            <h3 className="font-display text-2xl font-bold text-[#2c2747] mb-2">
              Backed by Industry Leaders
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're proud to be supported by leading technology platforms that provide resources and expertise to help us revolutionize the fashion industry with AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-center p-6 bg-[#2c2747] rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <SiNvidia className="text-4xl text-[#eeff15]" />
                <div>
                  <div className="text-white font-medium text-xl">NVIDIA</div>
                  <div className="text-[#bcbcbc] text-sm">Inception Program</div>
                </div>
              </div>
              <p className="text-white/80 text-center text-sm">
                An exclusive program designed to nurture cutting-edge AI startups revolutionizing industries with GPU-accelerated computing solutions.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-[#232f3e] rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <SiAmazon className="text-4xl text-[#ff9900]" />
                <div>
                  <div className="text-white font-medium text-xl">AWS</div>
                  <div className="text-gray-300 text-sm">Startup Program</div>
                </div>
              </div>
              <p className="text-white/80 text-center text-sm">
                Providing startups with the resources needed to quickly scale and build innovative solutions using Amazon Web Services' cloud infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}