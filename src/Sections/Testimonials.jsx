import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imageUrl from '../assets/images/testimonial-user.jpg';
const testimonials = [
  {
    quote:
      "Kurs juda ham ajoyib, foydali bo'ldi. Tibbiyotdan ko'nglim qolib 'medicine is not my cup of tea' deb yurgan paytlarimda usmle haqida bilib qolganim va kursga qatnashganimni juda katta omad deb bilaman.",
    name: 'Munisa Qurboyeva',
    title: 'TTA talabasi',
    image: imageUrl,
  },
  {
    quote:
      "Kurs albatta menga ko'plab bilimlar olishimga yordam berdi. O'qituvchi va jamoa tomonidan darslar ajoyib tashkil qilingan. O'qituvchining bilim saviyasi bunga to'la etarli.",
    name: 'Boboyev Xurshid',
    title: 'Shifokor',
    image: imageUrl,
  },
  {
    quote: "Rahmat katta, Alloh rozi bo'lsin. Judayam savobli ish qivossila.",
    name: 'Lazizbek Turgunov',
    title: "Online o'quvchi",
    image: imageUrl,
  },
];
const TestimonialsSection = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024, // For tablets and larger screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // For small screens (mobile)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className='bg-blue-50 py-12 px-4'>
      <div className='max-w-6xl mx-auto text-center'>
        <h2 className='text-3xl font-bold text-gray-800 mb-2'>
          KURS BIRIRUVCHILARNING FIKRI
        </h2>
        <p className='text-lg text-gray-600 mb-10'>
          {
            "O'quv kurslarimiz, qo'lga kiritilgan bilim va ko'nikmalar, olingan natijalar haqida bitiruvchilarimizdan kerakli tavsiyalar oling."
          }
        </p>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className='px-4'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <div className='text-blue-500 text-2xl mb-4'>❝</div>
                <p className='text-gray-600 mb-6'>{testimonial.quote}</p>
                <div className='flex justify-center'>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className='h-16 w-16 rounded-full mb-2'
                  />
                </div>
                <h4 className='font-semibold text-gray-800'>
                  {testimonial.name}
                </h4>
                <p className='text-gray-500'>{testimonial.title}</p>
              </div>
            </div>
          ))}
        </Slider>

        {/* Pagination Dots (Slider automatically adds dots) */}
      </div>
    </section>
  );
};

export default TestimonialsSection;
