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

        {/* Bottom Footer */}
        <div className='mt-8 border-t pt-4 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
          <p>
            © Copyright OOO <strong>{'NFSAcademy'}</strong> 2023. Barcha
            huquqlar himoyalangan.
          </p>
          <div className='flex space-x-4 mt-4 md:mt-0'>
            <a href='#' className='bg-blue-600 p-2 rounded-full text-white'>
              Telegram
            </a>
            <a href='#' className='bg-blue-600 p-2 rounded-full text-white'>
              Facebook
            </a>
            <a href='#' className='bg-blue-600 p-2 rounded-full text-white'>
              Instagram
            </a>
            <a href='#' className='bg-blue-600 p-2 rounded-full text-white'>
              Twitter
            </a>
            <a href='#' className='bg-blue-600 p-2 rounded-full text-white'>
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
