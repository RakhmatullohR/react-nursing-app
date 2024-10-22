import logoUrl from '../assets/images/logo3.png';
import mainBG from '../assets/images/main-bg.webp';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-white shadow-md'>
      <div className='max-w-7xl mx-auto px-4 py-0 flex items-center justify-between'>
        <div className='flex items-center'>
          <img src={logoUrl} alt='InDoc Logo' className='h-20' />
          <h1 className='hidden md:block ml-2 text-xl font-bold text-blue-700'>
            <div className='h-6 leading-5 min-w-[164px]'>
              New <span className='text-yellow-500'>Future</span>
            </div>
            <div className='h-6 leading-5 min-w-[164px]'>
              Success <span className='text-yellow-500'>Academy</span>
            </div>
          </h1>
        </div>

        <div className='block lg:flex space-x-6'>
          <div className='hidden md:flex space-x-6'>
            <a href='#main' className='text-gray-700 hover:text-blue-600'>
              Asosiy
            </a>
            <a href='#about' className='text-gray-700 hover:text-blue-600'>
              Biz haqimizda
            </a>
            <a
              href='#course-program'
              className='text-gray-700 hover:text-blue-600'
            >
              Kurs dasturi
            </a>
          </div>
          <div className='hidden md:flex space-x-6'>
            <a href='#modules' className='text-gray-700 hover:text-blue-600'>
              Modullar
            </a>
            <a href='#team' className='text-gray-700 hover:text-blue-600'>
              Jamoa
            </a>
            <a href='#price' className='text-gray-700 hover:text-blue-600'>
              Narxlar
            </a>
            <a href='#contact' className='text-gray-700 hover:text-blue-600'>
              Kontakt
            </a>
            {/* <a href='#' className='text-gray-700 hover:text-blue-600'>
            Self-study
          </a> */}
          </div>
        </div>

        <button className='md:block hidden bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700'>
          Boshlash
        </button>
        <button
          className='md:hidden flex w-10 h-10 justify-center items-start bg-blue-600 text-white  text-3xl p-0 rounded-md hover:bg-blue-700'
          onClick={toggleMenu}
        >
          ≡
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className='md:hidden bg-white shadow-md p-4'>
          <a href='#main' className='block text-gray-700 hover:text-blue-600'>
            Asosiy
          </a>
          <a href='#about' className='block text-gray-700 hover:text-blue-600'>
            Biz haqimizda
          </a>
          <a href='#course-program' className='block text-gray-700 hover:text-blue-600'>
            Kurs dasturi
          </a>
          <a href='#modules' className='block text-gray-700 hover:text-blue-600'>
            Modullar
          </a>
          <a href='#team' className='block text-gray-700 hover:text-blue-600'>
            Jamoa
          </a>
          <a href='#price' className='block text-gray-700 hover:text-blue-600'>
            Narxlar
          </a>
          <a href='#contact' className='block text-gray-700 hover:text-blue-600'>
            Kontakt
          </a>
          <a href='#self-study' className='block text-gray-700 hover:text-blue-600'>
            Self-study
          </a>
          <button className='bg-blue-600 text-white py-2 px-4 rounded-md w-full mt-4 hover:bg-blue-700'>
            Boshlash
          </button>
        </div>
      )}
    </nav>
  );
};

const UsmleCoursesSection = () => {
  return (
    <section className=' bg-slate-50/65 py-12 px-4 h-full'>
      <div className='max-w-6xl mx-auto text-center'>
        <div className='py-36'>
          <h1 className='text-6xl font-bold text-blue-800 shadow-slate-500 mb-2 fw'>
            {'NCLEX-PN/RN-NING TAYYORLOV KURSLARI'}
          </h1>
          <p className=' text-3xl text-gray-600 mb-6 font-semibold'>
            {'New Future Success Academy bilan'}
          </p>
          <button className='bg-blue-600 text-white py-2 px-6 rounded-md mb-10 hover:bg-blue-700'>
            Boshlash
          </button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='bg-white p-6 rounded-lg shadow-md max-w-[300px] mx-auto'>
            <div className='text-blue-500 mb-2 text-3xl'>📚</div>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>Tajriba</h3>
            <p className='text-gray-600'>{"Ta'lim sohasida 5 yildan ortiq faoliyat"}</p>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-md max-w-[300px] mx-auto'>
            <div className='text-blue-500 mb-2 text-3xl'>🌐</div>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>Online Platforma</h3>
            <p className='text-gray-600'>{"Dunyoni istalgan nuqtasidan turib barcha ma'lumot va resurslarga ega bo'lish"}</p>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-md max-w-[300px] mx-auto'>
            <div className='text-blue-500 mb-2 text-3xl'>🏫</div>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>Offline darslar</h3>
            <p className='text-gray-600'>{"Har oyda o'tkaziladigan offline nazorat imtihonlari"}</p>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-md max-w-[300px] mx-auto'>
            <div className='text-blue-500 mb-2 text-3xl'>🔥</div>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>Intensiv darslar</h3>
            <p className='text-gray-600'>{"Effektiv va maqsadga intiluvchan step-taker'lar atmosferasi"}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const UsmleSection = () => {
  return (
    <div style={{ backgroundImage: `url(${mainBG})` }}>
      <Navbar />
      <UsmleCoursesSection />
    </div>
  );
};

export default UsmleSection;
