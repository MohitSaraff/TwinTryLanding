import { Helmet } from 'react-helmet';
import TwinMockSection from '../components/home/TwinMockSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import IntegrationSection from '../components/home/IntegrationSection';
import DemoRequestSection from '../components/home/DemoRequestSection';
import Navbar from '../components/layout/Navbar'; // Import the Navbar component
import Footer from '@/components/layout/Footer';

export default function TwinMock() {
  return (
    <>
      <Helmet>
        <title>TwinMock™ - AI-Powered Design to Model Platform | Twinverse</title>
        <meta
          name="description"
          content="Create lifelike product images with TwinMock™, an AI-powered platform that transforms apparel designs into photorealistic images on diverse models."
        />
      </Helmet>

      <Navbar /> {/* Add the Navbar component */}

      <main className="pt-16">
        <TwinMockSection />
        {/* <TestimonialsSection /> */}
        <IntegrationSection />
        <DemoRequestSection />
        <Footer />
      </main>
    </>
  );
}