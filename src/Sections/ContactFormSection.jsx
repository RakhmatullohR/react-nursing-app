import { useRef } from 'react';

const ContactFormSection = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const courseNameRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const messageRef = useRef(null);

  const validateEmail = (email) => {
    // Basic regex for email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const courseName = courseNameRef.current.value;
    const phoneNumber = phoneNumberRef.current.value;
    const message = messageRef.current.value;

    if (!email) {
      alert('Enter your email!');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    const scriptURL =
      'https://script.google.com/macros/s/AKfycbxVWYM-G-IZZ6T1UhPOiKV_OPWdBhvPZbAkFBlrKJhyNStPpYmgvCI2E0awVnmLYb9KUg/exec';

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, courseName, phoneNumber, message }),
      });
      console.log(response.body);
      alert('Successfully subscribed!');
      nameRef.current.value = null;
      emailRef.current.value = null;
      courseNameRef.current.value = null;
      phoneNumberRef.current.value = null;
      messageRef.current.value = null;
    } catch (error) {
      console.error('Error!', error);
      alert('There was an error submitting your email.');
    }
  };

  return (
    <section id='contact' className='bg-white py-12 px-4'>
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
                ref={nameRef}
                type='text'
                placeholder='Ismingiz'
                className='border border-gray-300 rounded-md p-3 w-full'
              />
              <input
                ref={emailRef}
                type='email'
                placeholder='Email pochtangiz'
                className='border border-gray-300 rounded-md p-3 w-full'
              />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <input
                ref={courseNameRef}
                type='text'
                placeholder='OFFLINE Intensive kurs'
                className='border border-gray-300 rounded-md p-3 w-full'
              />
              <input
                ref={phoneNumberRef}
                type='tel'
                placeholder='Telefon raqamingiz'
                className='border border-gray-300 rounded-md p-3 w-full'
              />
            </div>
            <textarea
              ref={messageRef}
              placeholder='Xabar'
              className='border border-gray-300 rounded-md p-3 w-full h-32'
            ></textarea>
            <button
              type='submit'
              onClick={handleSubmit}
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
