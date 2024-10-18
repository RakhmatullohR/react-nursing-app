import { useState } from 'react';

const modules = [
  {
    title: 'First Module',
    description: 'Full course',
    img: 'https://indoc.uz/assets/img/portfolio/Anatomy_indoc.webp', // Replace with actual image URL
  },
  {
    title: 'Second Module',
    description: 'Full course',
    img: 'https://indoc.uz/assets/img/portfolio/Anatomy_indoc.webp', // Replace with actual image URL
  },
  {
    title: 'Third Module',
    description: 'Full course',
    img: 'https://indoc.uz/assets/img/portfolio/Anatomy_indoc.webp', // Replace with actual image URL
  },
  {
    title: 'Forth Module',
    description: 'Full course',
    img: 'https://indoc.uz/assets/img/portfolio/Anatomy_indoc.webp', // Replace with actual image URL
  },
  {
    title: 'Fifth Module',
    description: 'Full course',
    img: 'https://indoc.uz/assets/img/portfolio/Anatomy_indoc.webp', // Replace with actual image URL
  },
  {
    title: 'Sixth Module',
    description: 'Full course',
    img: 'https://indoc.uz/assets/img/portfolio/Anatomy_indoc.webp', // Replace with actual image URL
  },
  {
    title: 'PHYSIO',
    description: 'Full course',
    img: 'https://indoc.uz/assets/img/portfolio/Anatomy_indoc.webp', // Replace with actual image URL
  },
  {
    title: 'PHYSIO',
    description: 'Full course',
    img: 'https://indoc.uz/assets/img/portfolio/Anatomy_indoc.webp', // Replace with actual image URL
  },
  {
    title: 'PHYSIO',
    description: 'Full course',
    img: 'https://indoc.uz/assets/img/portfolio/Anatomy_indoc.webp', // Replace with actual image URL
  },
  {
    title: 'PHYSIO',
    description: 'Full course',
    img: 'https://indoc.uz/assets/img/portfolio/Anatomy_indoc.webp', // Replace with actual image URL
  },
  {
    title: 'Eleventh Module',
    description: 'Full course',
    img: 'https://indoc.uz/assets/img/portfolio/Anatomy_indoc.webp', // Replace with actual image URL
  },
];

const ModuleSection = () => {
  const [delta, setDelta] = useState({ start: 0, end: modules.length - 1 });
  return (
    <div id='modules' className='container mx-auto p-6'>
      <h2 className='text-center text-3xl font-bold mb-4'>MODULLAR</h2>
      <p className='text-center text-gray-600 mb-6'>
        {
          "Tayyorlov kursi davomida, turli xil bloklarda o'ziga xos va mos kitoblardan foydalaniladi. Bu yondashuv tayyorlov davomiyligini qisqartiradi va samaradorlikni oshishga yordam beradi."
        }
      </p>

      <div className='flex justify-center mb-8'>
        <a
          onClick={() => {
            setDelta({ start: 1, end: modules.length });
          }}
          className='mx-4 text-blue-600'
        >
          BARCHASI
        </a>
        <a
          className='mx-4 text-blue-600'
          onClick={() => {
            setDelta({ start: 1, end: 4 });
          }}
        >
          1-4 MODUL
        </a>
        <a
          onClick={() => {
            setDelta({ start: 4, end: 8 });
          }}
          className='mx-4 text-blue-600'
        >
          4-8 MODUL
        </a>
        <a
          onClick={() => {
            setDelta({ start: 8, end: 11 });
          }}
          className='mx-4 text-blue-600'
        >
          8-11 MODUL
        </a>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {modules
          .filter((item, i) => i + 1 >= delta?.start && i + 1 <= delta?.end)
          .map((module, index) => (
            <div
              key={index}
              style={{backgroundImage: `url(${module.img})`}}
              className='bg-white shadow-md rounded-lg overflow-hidden h-60 flex items-end'
            >
              {/* <img
                className='w-full h-48 object-cover'
                src={module.img}
                alt={module.title}
              /> */}
              <div className='p-4 bg-white/50 w-full'>
                <h3 className='text-xl font-semibold'>{module.title}</h3>
                <p className='font-semibold'>{module.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ModuleSection;
