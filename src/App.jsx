'use client';

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { infoCards } from './mock';
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

const navigation = [
  { name: 'Asosiy', href: '#' },
  { name: 'Biz haqimizda', href: '#' },
  { name: 'Kurs dasturi', href: '#' },
  { name: 'Modullar', href: '#' },
  { name: 'Jamoa', href: '#' },
  { name: 'Narxlar', href: '#' },
  { name: 'Kontakt', href: '#' },
  { name: 'Self-study', href: '#' },
];

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
