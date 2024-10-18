import mainBG from '../assets/images/main-bg.webp';
const UsmleSection = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between bg-white p-10 md:p-20'>
      {/* Left Section - Video Thumbnail */}
      <div className='md:w-1/2 w-full flex justify-center relative mb-8 md:mb-0'>
        <img
          src={mainBG} // Replace with your actual image URL
          alt='USMLE Video'
          className='w-full md:max-w-lg h-auto'
        />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <button className='bg-blue-600 text-white rounded-full p-6 md:p-8 shadow-lg'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='w-8 h-8'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M14.752 11.168l-3.197-2.132A1 1 0 0010 10.132v3.736a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Right Section - Course Details */}
      <div className='md:w-1/2 w-full text-left md:pl-8'>
        <h2 className='text-xl md:text-3xl font-bold text-gray-800 mb-4'>
          Bu yerda joylashtirilgan barcha kurslar jahon standartlari va
          innovatsiyalar tamoyillariga mos keladi..
        </h2>
        <p className='text-gray-700 mb-6'>
          {
            "Barcha kurs o'qituvchilari USMLE dan o'tgan va asosiy fanlar bo'yicha eng yuqori darajada bilimga ega. Har bir darsda siz amaliy qismni topasiz:"
          }
        </p>
        <ul className='space-y-4'>
          <li className='flex items-start'>
            <svg
              className='w-6 h-6 text-blue-600 mr-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 13l4 4L19 7'
              />
            </svg>
            <span className='text-gray-800'>
              {'Asosiy tibbiyot fanlarida mustahkam poydevor hosil qilasiz'}
            </span>
          </li>
          <li className='flex items-start'>
            <svg
              className='w-6 h-6 text-blue-600 mr-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 13l4 4L19 7'
              />
            </svg>
            <span className='text-gray-800'>
              {"Klinik fikrlash ko'nikmalari yaxshilanadi Sizda rivojlanada"}
            </span>
          </li>
          <li className='flex items-start'>
            <svg
              className='w-6 h-6 text-blue-600 mr-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 13l4 4L19 7'
              />
            </svg>
            <span className='text-gray-800'>
              {" Bemorlar bilan muloqot qilish ko'nikmalaringizni oshirasiz"}
            </span>
          </li>
          <li className='flex items-start'>
            <svg
              className='w-6 h-6 text-blue-600 mr-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 13l4 4L19 7'
              />
            </svg>
            <span className='text-gray-800'>
              {" Bemorga yo'naltirilgan yordam haqida tushuncha hosil qilasiz"}
            </span>
          </li>
          <li className='flex items-start'>
            <svg
              className='w-6 h-6 text-blue-600 mr-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 13l4 4L19 7'
              />
            </svg>
            <span className='text-gray-800'>
              {"Jamoada samarali ishlashni o'rganasiz"}
            </span>
          </li>
          {/* Add other items in similar structure */}
        </ul>
      </div>
    </div>
  );
};

export default UsmleSection;
