const Footer = () => {
  return (
    <footer className='bg-white py-12 border-t'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Contact Information */}
          <div>
            <h3 className='text-xl font-semibold text-gray-800'>NFSAcademy</h3>
            <p className='text-gray-600'>
              {"Beruniy Shox ko'chasi"}
              <br />
              Tashkent shahri,
              <br />
              {"O'zbekiston"}
            </p>
            <p className='text-gray-600 mt-4'>
              <span className='font-semibold'>Phone:</span> +998 94 888 08 00
              <br />
              <span className='font-semibold'>Phone:</span> +998 97 728 57 78
              <br />
              <span className='font-semibold'>Email:</span> info@indoc.uz
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className='text-xl font-semibold text-gray-800'>
              Foydali linklar
            </h3>
            <ul className='mt-4 space-y-2 text-gray-600'>
              <li>Asosiy</li>
              <li>Biz haqimizda</li>
              <li>Kurs dasturi</li>
              <li>Modullar</li>
              <li>Jamoa</li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className='text-xl font-semibold text-gray-800'>
              Bizning xizmatlar
            </h3>
            <ul className='mt-4 space-y-2 text-gray-600'>
              <li>Online Self-study</li>
              <li>Online Intensive kurs</li>
              <li>Offline Intensive kurs</li>
              <li>Medical English for Students</li>
              <li>Medical English for Doctors</li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className='text-xl font-semibold text-gray-800'>
              {" Yangiliklardan bohabar bo'ling"}
            </h3>
            <p className='text-gray-600 mt-4'>Bizni kuzatib boring</p>
            <div className='mt-4 flex'>
              <input
                type='email'
                placeholder='Emailingiz'
                className='border border-gray-300 rounded-l-md p-2 flex-grow'
              />
              <button className='bg-blue-600 w-40 text-white px-4 rounded-r-md hover:bg-blue-700'>
                {" Obuna bo'lish"}
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='border-t border-gray-200 mt-6 pt-6 text-center text-sm'>
          <p>
            © Copyright OOO <strong>InDoc</strong> 2023. Barcha huquqlar
            himoyalangan.
          </p>
          <div className='flex justify-center space-x-4 mt-4'>
            <a href='#' className='text-blue-600 hover:text-blue-500'>
              <i className='fab fa-telegram'></i>
            </a>
            <a href='#' className='text-blue-600 hover:text-blue-500'>
              <i className='fab fa-facebook'></i>
            </a>
            <a href='#' className='text-blue-600 hover:text-blue-500'>
              <i className='fab fa-instagram'></i>
            </a>
            <a href='#' className='text-blue-600 hover:text-blue-500'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href='#' className='text-blue-600 hover:text-blue-500'>
              <i className='fab fa-youtube'></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
