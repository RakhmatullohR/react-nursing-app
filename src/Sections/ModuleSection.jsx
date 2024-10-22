/* eslint-disable react/prop-types */
import { useState } from 'react';

const modules = [
  {
    title: 'Embryology',
    totalLessons: 16,
    totalDurationHours: 32,
    img: 'https://indoc.uz/assets/img/portfolio/Embrology_indoc.webp', // Replace with actual image URL
  },
  {
    title: 'GROSS anatomy',
    totalLessons: 11,
    totalDurationHours: 18,
    img: 'https://indoc.uz/assets/img/portfolio/Anatomy_indoc.webp', // Replace with actual image URL
  },
  {
    title: 'Neuroanaomy',
    totalLessons: 9,
    totalDurationHours: 12,
    img: 'https://indoc.uz/assets/img/portfolio/Neuroanatomy_short_size.webp', // Replace with actual image URL
  },
  {
    title: 'Physiology',
    totalLessons: 31,
    totalDurationHours: 32,
    img: 'https://indoc.uz/assets/img/portfolio/Physiology_indoc.webp', // Replace with actual image URL
  },
  {
    title: 'Biochemistry',
    totalLessons: 12,
    totalDurationHours: 17,
    img: 'https://indoc.uz/assets/img/portfolio/Biochemistry_indoc.webp', // Replace with actual image URL
  },
  {
    title: 'Immunology',
    totalLessons: 6,
    totalDurationHours: 7,
    img: 'https://indoc.uz/assets/img/portfolio/Immunology_indoc.webp', // Replace with actual image URL
  },
  {
    title: 'Microbiology',
    totalLessons: 14,
    totalDurationHours: 18,
    img: 'https://indoc.uz/assets/img/portfolio/Micobio_indoc_short.webp', // Replace with actual image URL
  },
  {
    title: 'Pathology',
    totalLessons: 49,
    totalDurationHours: 77,
    img: 'https://indoc.uz/assets/img/portfolio/Pathology_indoc_short.webp', // Replace with actual image URL
  },
  {
    title: 'Pharmacology',
    totalLessons: 22,
    totalDurationHours: 33,
    img: 'https://indoc.uz/assets/img/portfolio/Pharma_indoc.webp', // Replace with actual image URL
  },
  {
    title: 'Public Health',
    totalLessons: 0,
    totalDurationHours: 0,
    img: 'https://indoc.uz/assets/img/portfolio/Embrology_indoc.webp', // Replace with actual image URL
  },
  {
    title: 'Aging',
    totalLessons: 0,
    totalDurationHours: 0,
    img: 'https://indoc.uz/assets/img/portfolio/Aging.webp', // Replace with actual image URL
  },
];
const Modal = ({ module, closeModal }) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50'>
      <div className='bg-white p-6 rounded-lg shadow-lg relative max-w-md w-full'>
        <button
          className='absolute top-2 right-2 text-gray-600 hover:text-gray-900'
          onClick={closeModal}
        >
          <i className='fas fa-times'></i> {/* Close icon */}
        </button>
        <h3 className='text-2xl font-bold mb-4'>{module.title}</h3>
        <img
          src={module.img}
          alt={module.title}
          className='w-full aspect-[415/277] object-cover mb-4'
        />
        <p>
          {module.totalLessons
            ? `Umumiy videodarslar soni: ${module?.totalLessons}ta | To'liq modul davomiyligi: ${module?.totalDurationHours} soat`
            : 'Soon'}
        </p>
      </div>
    </div>
  );
};
const ModuleSection = () => {
  const [delta, setDelta] = useState({ start: 0, end: modules.length - 1 });

  const [selectedModule, setSelectedModule] = useState(null); // Store the selected module
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const openModal = (module) => {
    setSelectedModule(module);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedModule(null);
  };
  return (
    <div id='modules' className='container mx-auto p-6'>
      <h2 className='text-center text-3xl font-bold mb-4'>MODULLAR</h2>
      <p className='text-center text-gray-600 mb-6'>
        {
          "Tayyorlov kursi davomida, turli xil bloklarda o'ziga xos va mos kitoblardan foydalaniladi. Bu yondashuv tayyorlov davomiyligini qisqartiradi va samaradorlikni oshishga yordam beradi."
        }
      </p>

      <div className='flex justify-center mb-8'>
        <button
          onClick={() => setDelta({ start: 0, end: modules.length - 1 })}
          className='mx-4 text-blue-600 hover:underline'
        >
          BARCHASI
        </button>
        <button
          onClick={() => setDelta({ start: 0, end: 4 })}
          className='mx-4 text-blue-600 hover:underline'
        >
          1-4 MODUL
        </button>
        <button
          onClick={() => setDelta({ start: 4, end: 8 })}
          className='mx-4 text-blue-600 hover:underline'
        >
          4-8 MODUL
        </button>
        <button
          onClick={() => setDelta({ start: 8, end: 11 })}
          className='mx-4 text-blue-600 hover:underline'
        >
          8-11 MODUL
        </button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {modules
          .filter((item, i) => i >= delta.start && i <= delta.end)
          .map((module, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${module.img})` }}
              className='bg-contain bg-no-repeat bg-center relative rounded-lg overflow-hidden w-full aspect-[415/277] group'
            >
              <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center'>
                <div className='text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <h3 className='text-xl font-semibold'>{module.title}</h3>
                  <p className='mt-2'>
                    {module.totalLessons
                      ? `Umumiy videodarslar soni: ${module?.totalLessons}ta | To'liq modul davomiyligi: ${module?.totalDurationHours} soat`
                      : 'Soon'}
                  </p>
                  <div className='mt-4'>
                    <button
                      className='p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-40 transition-colors duration-300'
                      onClick={() => openModal(module)} // Open modal on click
                    >
                      <i className='fas fa-plus'></i>
                    </button>
                    <button className='p-2 bg-white bg-opacity-20 rounded-full ml-2 hover:bg-opacity-40 transition-colors duration-300'>
                      <i className='fas fa-sync-alt'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      {isModalOpen && selectedModule && (
        <Modal module={selectedModule} closeModal={closeModal} />
      )}
    </div>
  );
};

export default ModuleSection;
