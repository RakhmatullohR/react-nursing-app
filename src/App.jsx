'use client';


import AboutUs from './Sections/AboutUs';
import StatsSection from './Sections/Stats';
import CourseOverview from './Sections/CourseOverview';
import CourseProgram from './Sections/CourseProgram';
import CallToAction from './Sections/CallToAction';
import ModuleSection from './Sections/ModuleSection';
import TeamSection from './Sections/TeamSection';
import PricingSection from './Sections/PricingSection';
import FaqSection from './Sections/FaqSection';
import Testimonials from './Sections/Testimonials';
import UsmleSection from './Sections/UsmleSection';
import ContactFormSection from './Sections/ContactFormSection';
import Footer from './Sections/Footer';



export default function Example() {
  return (
    <div className='bg-white'>
      <UsmleSection />
      <AboutUs />
      <StatsSection />
      <CourseOverview />
      <CourseProgram />
      <CallToAction />
      <ModuleSection />
      <TeamSection />
      <PricingSection />
      <FaqSection />
      <Testimonials />
      <ContactFormSection />
      <Footer />
    </div>
  );
}
