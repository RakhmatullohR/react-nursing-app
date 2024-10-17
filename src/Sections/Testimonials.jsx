
const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'Lazizbek Turgunov',
      title: "Online o'quvchi",
      quote:
        "Rahmat akam sizga katta rahmat. Juda ham ajoyib darslar o'tgansiz. Alloh sizga omad bersin!",
      image: 'https://indoc.uz/assets/img/testimonials/student.jpg', // Replace with the actual image path
    },
    {
      name: 'Munisa Qurbonova',
      title: "Offline kurs o'quvchisi",
      quote:
        "Kurs juda ham ajoyib, foydali bo'lgan. Menga ko'plab bilimlar olishimda yordam berdi. O'qituvchi va jamoa tomonidan darslar ajoyib tashkil qilingan.",
      image: 'https://indoc.uz/assets/img/testimonials/student.jpg', // Replace with the actual image path
    },
    {
      name: 'Boboyev Xurshid',
      title: 'Shifokor',
      quote:
        "Kurs albatta menga ko'plab bilimlar olishimda yordam berdi. O'qituvchi va jamoa tomonidan darslar ajoyib tashkil qilingan.",
      image: 'https://indoc.uz/assets/img/testimonials/student.jpg', // Replace with the actual image path
    },
  ];

  return (
    <section className='bg-gray-100 py-16'>
      <h2 className='text-center text-3xl font-bold text-gray-800'>
        {" O'QUVCHILAR FIKRI"}
      </h2>
      <p className='text-center text-lg text-gray-600'>
        {
          "O'z kurslarimiz, qo'lga kiritilgan bilim va ko'nikmalar, olingan natijalar haqida bitiruvchilarimizdan kerakli tavsiyalar oling."
        }
      </p>
      <div className='container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className='bg-white rounded-lg shadow-md p-6'>
            <div className='flex justify-center mb-4'>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className='w-24 h-24 rounded-full'
              />
            </div>
            <p className='text-lg text-gray-800'>{testimonial.quote}</p>
            <h3 className='text-xl font-bold text-gray-900 mt-2'>
              {testimonial.name}
            </h3>
            <p className='text-gray-600'>{testimonial.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
