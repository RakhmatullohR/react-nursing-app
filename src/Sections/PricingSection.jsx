const pricingPlans = [
  // {
  //   title: 'SELF-STUDY TARIFI',
  //   price: '490 000',
  //   features: [
  //     'Erkin grafik',
  //     'Video darsliklarga kirish',
  //     'Haftada bir, mentor bilan online video-uchrashuv',
  //     'Elektron kitoblar, testlar, Case, anki',
  //     "Yopiq telegram guruhga a'zo bo'lish",
  //   ],
  //   buttonText: 'Xarid qilish',
  //   detailText: 'Batafsil',
  //   popular: false,
  // },
  // {
  //   title: 'ONLINE INTENSIVE KURS',
  //   price: '600 000',
  //   features: [
  //     'Online LIVE darslar haftada 6 marta',
  //     'Haftada 3 marta Case review',
  //     'Haftada 3 marta mentor bilan savol-javob',
  //     'InDoc Platformasiga dopusk',
  //     'InDoc Qbankda alohida akkaunt',
  //     'Mentorlardan online konsultatsiya olish',
  //     'Doimiy nazorat va monitoring',
  //     "O'tilgan darslarni qayta ko'rish imkoniyati",
  //     'Online chat',
  //     'Quizlar, case va elektron kitoblar',
  //     'Testlar va anki',
  //   ],
  //   buttonText: 'Xarid qilish',
  //   detailText: 'Sinov darsi',
  //   popular: true,
  // },
  {
    title: 'OFFLINE INTENSIV KURS',
    price: '*********',
    features: [
      "Mentorlar bilan haftada 6 marta ko'rishish",
      'Haftada 3 marta Case review',
      'Haftada 3 marta mentor bilan savol-javob',
      'InDoc Platformasiga dopusk',
      'InDoc Qbankda alohida akkaunt',
      'Maqsadli Step-takrorlar muhiti',
      'Mentorlardan konsultatsiya olish',
      "Shaxsiy o'quv rejangizni muhokama qilish va murabbiylik yordami",
      'Doimiy nazorat va monitoring',
      'Kitoblarning elektron shakli',
      'Kutubxonadan foydalanish',
      'Elektron kitoblar, testlar, Case, anki',
      'Choy, qahva va bepul wifi',
    ],
    buttonText: 'Xarid qilish',
    detailText: 'Batafsil',
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <div className='bg-blue-100 py-12'>
      <div className='container mx-auto px-6'>
        <h2 className='text-center text-3xl font-bold mb-6'>KURS NARXLARI</h2>
        <p className='text-center text-gray-600 mb-12'>
          {
            "USMLE STEP 1 birinchi bosqich shifokordagi fundamental tibbiy bilimlarni sinash uchun tuzilgan testlar to'plami bo'lib: Embriologiya, Anatomiya, Fiziologiya, Biokimyo, Genetika, Mikrobiologiya, Patologiya, Immunologiya va boshqalarni o'z ichiga oladi."
          }
        </p>

        {/* <div className='grid grid-cols-1 md:grid-cols-3 gap-8'> */}
        <div className='text-center w-fit m-auto'>
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg ${
                plan.popular ? 'bg-blue-500 text-white' : 'bg-white'
              }`}
            >
              <h3
                className={`text-2xl font-semibold mb-4 ${
                  plan.popular ? 'text-white' : 'text-blue-600'
                }`}
              >
                {plan.title}
              </h3>
              <p
                className={`text-4xl font-bold mb-4 ${
                  plan.popular ? 'text-white' : 'text-blue-600'
                }`}
              >
                UZS {plan.price} <span className='text-lg'>/ oy</span>
              </p>
              <ul
                className={`mb-6 ${
                  plan.popular ? 'text-white' : 'text-gray-700'
                }`}
              >
                {plan.features.map((feature, i) => (
                  <li key={i} className='mb-2'>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className='w-40 m-auto'>
                <a
                  href='#'
                  className={`block text-center py-2 px-4 border rounded-md transition ${
                    plan.popular
                      ? 'bg-white text-blue-600 border-white hover:bg-gray-100'
                      : 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {plan.buttonText}
                </a>
                <a
                  href='#'
                  className='block text-center mt-4 text-sm text-gray-600'
                >
                  {plan.detailText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
