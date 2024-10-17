const teamMembers = [
  {
    name: 'Asilxon',
    title: 'Chief Executive Officer',
    img: 'https://indoc.uz/assets/img/team/Abbaskhan_2.webp', // Replace with actual image URL
  },
  {
    name: 'Abbosxon',
    title: 'Academic Director',
    details: ['USMLE Step 1 (235)', 'USMLE Step 2 (soon)', 'OET (soon)'],
    img: 'https://indoc.uz/assets/img/team/Abbaskhan_2.webp', // Replace with actual image URL
    socialLinks: [
      { platform: 'telegram', url: 'https://telegram.org' },
      { platform: 'facebook', url: 'https://facebook.com' },
      { platform: 'instagram', url: 'https://instagram.com' },
      { platform: 'linkedin', url: 'https://linkedin.com' },
    ],
  },
  {
    name: "Maratxo'ja",
    title: 'Art Director',
    img: 'https://indoc.uz/assets/img/team/Abbaskhan_2.webp', // Replace with actual image URL
  },
];

const TeamSection = () => {
  return (
    <div className='bg-blue-50 py-12'>
      <div className='container mx-auto px-6'>
        <h2 className='text-center text-3xl font-bold mb-4'>JAMOA</h2>
        <p className='text-center text-gray-600 mb-12'>
          {
            "Bizning kichik xalqaro jamoamiz o'z ishiga ishtiyoqli odamlardan iborat. Va biz sifatli xizmatlarning muhimligini to'liq tushunamiz."
          }
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${member.img})` }}
              className='bg-white shadow-md rounded-lg overflow-hidden text-center h-[400px] flex justify-center items-end'
            >
              {/* <img
                className='w-full h-64 object-cover'
                src={member.img}
                alt={member.name}
              /> */}
              <div className='p-4 h-fit'>
                <h3 className='text-xl font-semibold'>{member.name}</h3>
                <p className='text-gray-600'>{member.title}</p>
                {member.details && (
                  <ul className='mt-2 text-gray-600'>
                    {member.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
                {member.socialLinks && (
                  <div className='flex justify-center mt-4 space-x-4'>
                    {member.socialLinks.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <img
                          src={`https://cdn.pixabay.com/photo/2021/05/04/11/13/telegram-6228343_640.png`}
                          alt={link.platform}
                          className='w-6 h-6'
                        />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
