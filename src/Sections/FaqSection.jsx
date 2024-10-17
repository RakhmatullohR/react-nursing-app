import { useState } from 'react';

const faqs = [
  {
    question: "Darslar qaysi tilda bo'lib o'tadi?",
    answer:
      "Dars jarayonida ishlatiladigan barcha ma'lumotlar (kitoblar, slaydlar, ilovalar) ingliz tilida. Mavzularni tushuntirish, izohlar va savol-javoblar o'zbek tilida bo'ladi.",
  },
  {
    question: 'Kursda qatnashishi uchun IELTS sertifikati kerakmi?',
    answer: "Yo'q, kursda qatnashish uchun IELTS sertifikati shart emas.",
  },
  {
    question: "Talaba bo'lib turib ham USMLE imtihonini topshirsa bo'ladimi?",
    answer:
      "Ha, talaba bo'lib turib ham USMLE imtihonini topshirishingiz mumkin.",
  },
  {
    question: 'Qachon boshlashimiz mumkin?',
    answer: "Kurslarga har qanday vaqtda qo'shilishingiz mumkin.",
  },
  {
    question: "USMLE sertifikati qaysi davlatlarga o'tadi?",
    answer:
      'USMLE sertifikati AQSh, Kanada, va boshqa bir qancha davlatlarda tan olinadi.',
  },
  {
    question: "Ingliz tili bilmayman, men ham o'qisam bo'ladimi?",
    answer:
      "Ha, mavzular o'zbek tilida tushuntiriladi, ammo asosiy dars materiallari ingliz tilida bo'ladi.",
  },
  {
    question: 'Kursda qaysi darsliklardan foydalaniladi?',
    answer: "USMLE Step 1 uchun ma'lumoti to'plamlari va mashqlar ishlatiladi.",
  },
  {
    question: "Qanday ketma-ketlikda darslar/modullar o'tiladi?",
    answer: "Modullar oldindan belgilangan dastur asosida ketma-ket o'tiladi.",
  },
  {
    question: 'USMLE Step 1 tayyorlanishga qancha vaqt ketadi?',
    answer:
      "Bu sizning o'qish jadvalingizga bog'liq, odatda 6 oydan 12 oygacha vaqt ketadi.",
  },
];

const FaqSection = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className='bg-blue-50 py-12'>
      <div className='container mx-auto px-6'>
        <h2 className='text-center text-3xl font-bold mb-6'>
          {"KO'P SO'RALADIGAN SAVOLLAR"}
        </h2>
        <p className='text-center text-gray-600 mb-12'>
          {
            "Quyida USMLE haqida, tayyorlanish jarayonlari, kursning talablari, imtihonga doir ma'lumotlar bo'yicha ko'p beriladigan savollar bilan tanishing."
          }
        </p>

        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <div key={index} className='bg-white p-4 rounded-lg shadow-lg'>
              <button
                className='flex justify-between items-center w-full text-left text-blue-600 font-medium'
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                <span>{openFaqIndex === index ? '-' : '+'}</span>
              </button>
              {openFaqIndex === index && (
                <div className='mt-4 text-gray-700'>{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
