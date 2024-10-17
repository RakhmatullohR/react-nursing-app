// CourseOverview.jsx

const CourseOverview = () => {
  return (
    <div className='bg-white-50 py-12'>
      <div className='container mx-auto px-4'>
        {/* Main Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Left Side (Video or Image) */}
          <div className='flex justify-center items-center'>
            <img
              src='https://indoc.uz/assets/img/what-is-usmle_2.webp'
              alt='Doctor USMLE Course'
              className='rounded-lg shadow-lg'
            />
          </div>

          {/* Right Side (Description and List) */}
          <div>
            <h2 className='text-2xl font-bold text-blue-900 mb-4'>
              {
                ' Bu yerda joylashtirilgan barcha kurslar jahon standartlari va innovatsiyalar tamoyillariga mos keladi...'
              }
            </h2>
            <p className='text-gray-600 mb-6'>
              {
                "Barcha kurs o'qituvchilari USMLE dan o'tgan va asosiy fanlar bo'yicha eng yuqori darajada bilimga ega. Har bir darsda siz amaliy qismini topasiz:"
              }
            </p>

            {/* Feature List */}
            <ul className='space-y-4'>
              <li className='flex items-center'>
                <svg
                  className='w-6 h-6 text-blue-500 mr-2'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                Asosiy tibbiyot fanlarida mustahkam poydevor hosil qilasiz
              </li>
              <li className='flex items-center'>
                <svg
                  className='w-6 h-6 text-blue-500 mr-2'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                {"Klinik fikrlash ko'nikmalari yaxshilanadi Sizda rivojlanadi"}
              </li>
              <li className='flex items-center'>
                <svg
                  className='w-6 h-6 text-blue-500 mr-2'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                Bemorlar bilan muloqot qilish ko’nikmalaringizni oshirasiz
              </li>
              {/* Add more list items following the same structure */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
