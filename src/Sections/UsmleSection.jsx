import logoUrl from '../assets/images/logo.jpg';
const Navbar = () => {
  return (
    <nav className='bg-white shadow-md'>
      <div className='max-w-7xl mx-auto px-4 py-4 flex items-center justify-between'>
        <div className='flex items-center'>
          <img src={logoUrl} alt='InDoc Logo' className='h-10' />
          <h1 className='ml-2 text-2xl font-bold text-blue-700'>
            In <span className='text-yellow-500'>Doc</span>
          </h1>
        </div>
        <div className='hidden md:flex space-x-6'>
          <a href='#' className='text-gray-700 hover:text-blue-600'>
            Asosiy
          </a>
          <a href='#' className='text-gray-700 hover:text-blue-600'>
            Biz haqimizda
          </a>
          <a href='#' className='text-gray-700 hover:text-blue-600'>
            Kurs dasturi
          </a>
          <a href='#' className='text-gray-700 hover:text-blue-600'>
            Modullar
          </a>
          <a href='#' className='text-gray-700 hover:text-blue-600'>
            Jamoa
          </a>
          <a href='#' className='text-gray-700 hover:text-blue-600'>
            Narxlar
          </a>
          <a href='#' className='text-gray-700 hover:text-blue-600'>
            Kontakt
          </a>
          <a href='#' className='text-gray-700 hover:text-blue-600'>
            Self-study
          </a>
        </div>
        <button className='bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700'>
          Boshlash
        </button>
      </div>
    </nav>
  );
};

const UsmleCoursesSection = () => {
  return (
    <section className='bg-blue-50 py-12 px-4 h-full'>
      <div className='max-w-6xl mx-auto text-center'>
        <div className='py-36'>
          {' '}
          <h2 className='text-3xl font-bold text-gray-800 mb-2'>
            {'USMLE STEP 1 TAYYORLOV KURSLARI'}
          </h2>
          <p className='text-lg text-gray-600 mb-6'>{'InDoc bilan'}</p>
          <button className='bg-blue-600 text-white py-2 px-6 rounded-md mb-10 hover:bg-blue-700'>
            Boshlash
          </button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <div className='text-blue-500 mb-2 text-3xl'>📚</div>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>
              Tajriba
            </h3>
            <p className='text-gray-600'>
              {"Ta'lim sohasida 5 yildan ortiq faoliyat"}
            </p>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-md'>
            <div className='text-blue-500 mb-2 text-3xl'>🌐</div>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>
              Online Platforma
            </h3>
            <p className='text-gray-600'>
              {
                "Dunyoni istalgan nuqtasidan turib barcha ma'lumot va resurslarga ega bo'lish"
              }
            </p>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-md'>
            <div className='text-blue-500 mb-2 text-3xl'>🏫</div>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>
              Offline darslar
            </h3>
            <p className='text-gray-600'>
              {"Har oyda o'tkaziladigan offline nazorat imtihonlari"}
            </p>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-md'>
            <div className='text-blue-500 mb-2 text-3xl'>🔥</div>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>
              Intensiv darslar
            </h3>
            <p className='text-gray-600'>
              {"Effektiv va maqsadga intiluvchan step-taker'lar atmosferasi"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const UsmleSection = () => {
  return (
    <div className='h-screen'>
      <Navbar />
      <UsmleCoursesSection />
    </div>
  );
};

export default UsmleSection;
