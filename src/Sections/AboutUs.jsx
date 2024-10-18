// AboutUs.jsx

const AboutUs = () => {
  return (
    <div id='about' className='bg-gray-50 py-12'>
      <div className='container mx-auto px-4'>
        {/* Title Section */}
        <h2 className='text-center text-3xl font-bold text-blue-800 mb-4'>
          BIZ HAQIMIZDA
        </h2>
        <p className='text-center text-gray-600 mb-12'>
          InDoc (International Doctor) - Xalqaro tibbiy litsenziyalash
          imtihoniga tayyorlov markazi
        </p>

        {/* Content Section */}
        <div className='md:flex justify-between items-start'>
          {/* Left Section */}
          <div className='md:w-1/2 pr-8'>
            <p className='text-gray-800 mb-6'>
              <strong>InDoc</strong> -{' '}
              {
                "tibbiyot o'quv markazi bo'lib, eng murakkab va keng e'tirof etilgan - USMLE (United States Medical Licensing Examination) imtihoniga zamonaviy, maxsus va amaliyotga yo'naltirilgan tayyorlov kurslarini taqdim etadi."
              }
            </p>
            <ul className='list-none text-gray-600 space-y-2 mb-6'>
              <li>
                ✔️{' '}
                {
                  "USMLE Step 1 va Step 2 darajalarini muvaffaqiyatli topshirgan o'qituvchilar jamoasi"
                }
              </li>
              <li>✔️ {'Doimiy koordinatorlar nazorati'}</li>
              <li>
                ✔️ {"Doimiy aktiv bo'lgan o'quvchilar uchun ajoyib bonuslar"}
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className='md:w-1/2 pl-8'>
            <p className='text-gray-800 mb-6'>
              <strong>USMLE</strong>
              {
                " - bu xalqaro sertifikatlash imtihoni, shifokor bilimi va malakasi darajasining xalqaro miqyosda tan olingan mezoni bo'lib, AQSh, Isroil, Yangi Zelandiya, Qatar va Birlashgan Arab Amirliklarida ishlash imkonini beradi."
              }
            </p>
            <p className='text-gray-800 mb-6'>
              <strong>Bizning maqsad</strong>
              {
                ' - qadriyatli, fidoiy va professional xalqaro toifadagi shifokorlarni yetishtirish orqali butun dunyodagi insonlarni hayotini yaxshilash.'
              }
            </p>

            {/* Button */}
            <button className='bg-transparent text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition-colors'>
              {"Ko'proq ma'lumot olish"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
