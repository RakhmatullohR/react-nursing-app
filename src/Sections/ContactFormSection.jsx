const ContactFormSection = () => {
  return (
    <section className='bg-white py-12 px-4'>
      <div className='max-w-5xl mx-auto'>
        <h2 className='text-3xl font-bold text-center text-gray-800 mb-8'>
          {"RO'YXATDAN O'TING"}
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Contact Information */}
          <div className='space-y-6'>
            <div className='flex items-center'>
              <div className='bg-blue-100 p-3 rounded-full text-blue-500 text-xl'>
                📍
              </div>
              <div className='ml-4'>
                <h3 className='font-semibold text-gray-700'>Manzil:</h3>
                <p className='text-gray-600'>
                  {" Toshkent sh. Beruniy Shox ko'chasi"}
                </p>
              </div>
            </div>

            <div className='flex items-center'>
              <div className='bg-blue-100 p-3 rounded-full text-blue-500 text-xl'>
                ✉️
              </div>
              <div className='ml-4'>
                <h3 className='font-semibold text-gray-700'>Email:</h3>
                <p className='text-gray-600'>info@newfuturesuccesacademy.uz</p>
              </div>
            </div>

            <div className='flex items-center'>
              <div className='bg-blue-100 p-3 rounded-full text-blue-500 text-xl'>
                📞
              </div>
              <div className='ml-4'>
                <h3 className='font-semibold text-gray-700'>Telefon raqam:</h3>
                <p className='text-gray-600'>
                  +99894 888 08 00
                  <br />
                  +99897 728 57 78
                </p>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <form className='space-y-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <input
                type='text'
                placeholder='Ismingiz'
                className='border border-gray-300 rounded-md p-3 w-full'
              />
              <input
                type='email'
                placeholder='Email pochtangiz'
                className='border border-gray-300 rounded-md p-3 w-full'
              />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <input
                type='text'
                placeholder='OFFLINE Intensive kurs'
                className='border border-gray-300 rounded-md p-3 w-full'
              />
              <input
                type='tel'
                placeholder='Telefon raqamingiz'
                className='border border-gray-300 rounded-md p-3 w-full'
              />
            </div>
            <textarea
              placeholder='Xabar'
              className='border border-gray-300 rounded-md p-3 w-full h-32'
            ></textarea>
            <button
              type='submit'
              className='bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700'
            >
              {" Xabarni jo'natish"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
