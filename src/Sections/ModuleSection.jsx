const modules = [
  {
    title: 'EMBRYO',
    description: 'Full course',
    img: 'https://indoc.uz/assets/img/portfolio/Anatomy_indoc.webp', // Replace with actual image URL
  },
  {
    title: 'GROSS ANATOMY',
    description: 'Full course',
    img: 'https://indoc.uz/assets/img/portfolio/Anatomy_indoc.webp', // Replace with actual image URL
  },
  {
    title: 'NEURO',
    description: 'Full course',
    img: 'https://indoc.uz/assets/img/portfolio/Anatomy_indoc.webp', // Replace with actual image URL
  },
  {
    title: 'PHYSIO',
    description: 'Full course',
    img: 'https://indoc.uz/assets/img/portfolio/Anatomy_indoc.webp', // Replace with actual image URL
  },
];

const ModuleSection = () => {
  return (
    <div className='container mx-auto p-6'>
      <h2 className='text-center text-3xl font-bold mb-4'>MODULLAR</h2>
      <p className='text-center text-gray-600 mb-6'>
        {
          "Tayyorlov kursi davomida, turli xil bloklarda o'ziga xos va mos kitoblardan foydalaniladi. Bu yondashuv tayyorlov davomiyligini qisqartiradi va samaradorlikni oshishga yordam beradi."
        }
      </p>

      <div className='flex justify-center mb-8'>
        <a href='#' className='mx-4 text-blue-600'>
          BARCHASI
        </a>
        <a href='#' className='mx-4 text-blue-600'>
          1-4 MODUL
        </a>
        <a href='#' className='mx-4 text-blue-600'>
          4-8 MODUL
        </a>
        <a href='#' className='mx-4 text-blue-600'>
          8-11 MODUL
        </a>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {modules.map((module, index) => (
          <div
            key={index}
            className='bg-white shadow-md rounded-lg overflow-hidden'
          >
            <img
              className='w-full h-48 object-cover'
              src={module.img}
              alt={module.title}
            />
            <div className='p-4'>
              <h3 className='text-xl font-semibold'>{module.title}</h3>
              <p className='text-gray-600'>{module.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModuleSection;
