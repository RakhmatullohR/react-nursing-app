// CallToAction.jsx

const CallToAction = () => {
  return (
    <div className='bg-blue-600 py-16'>
      <div className='container mx-auto text-center'>
        {/* Title */}
        <h2 className='text-white text-3xl font-bold mb-4'>
          {'Maqsad sari birinchi qadamni tashlang'}
        </h2>
        {/* Subtitle */}
        <p className='text-white text-lg mb-8'>
          {
            "Kasbiy rivojlanish uchun cheksiz imkoniyatlarga ega bo'ling va xalqaro shifokor bo'ling"
          }
        </p>
        {/* Button */}
        <button className='border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300'>
          {"Ro'yxatdan o'tish"}
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
