/* eslint-disable react/prop-types */
const TeamCard = ({ name, position, imageUrl, socialLinks }) => {
  return (
    <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
      <div className='bg-white shadow-lg rounded-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300'>
        <div className='relative'>
          <img
            className='w-full aspect-square object-cover'
            src={imageUrl}
            alt={name}
          />
          <div className='absolute inset-0 bg-gray-900 bg-opacity-0 group-hover:bg-opacity-60 flex items-end justify-center space-x-4 transition-all duration-300'>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className='text-white opacity-0 group-hover:opacity-100 hover:text-blue-400 transition-colors mb-5'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className={`fab fa-${link.icon} fa-2x`}></i>
              </a>
            ))}
          </div>
        </div>
        <div className='p-6 text-center'>
          <h3 className='text-lg font-bold'>{name}</h3>
          <p className='text-gray-600'>{position}</p>
        </div>
      </div>
    </div>
  );
};

const teamMembers = [
  {
    name: 'Asilxon',
    position: 'Chief Executive Officer',
    imageUrl: 'https://indoc.uz/assets/img/team/Abbaskhan_2.webp',
    socialLinks: [
      { icon: 'telegram', url: 'https://t.me/maratxoja' },
      { icon: 'facebook', url: 'https://facebook.com/maratxoja' },
      { icon: 'instagram', url: 'https://instagram.com/maratxoja' },
      { icon: 'linkedin', url: 'https://linkedin.com/in/maratxoja' },
    ],
  },
  {
    name: 'Abbosxon',
    position: 'Academic Director',
    imageUrl: 'https://indoc.uz/assets/img/team/Abbaskhan_2.webp',
    socialLinks: [
      { icon: 'telegram', url: 'https://t.me/maratxoja' },
      { icon: 'facebook', url: 'https://facebook.com/maratxoja' },
      { icon: 'instagram', url: 'https://instagram.com/maratxoja' },
      { icon: 'linkedin', url: 'https://linkedin.com/in/maratxoja' },
    ],
  },
  {
    name: "Maratxo'ja",
    position: 'Art Director',
    imageUrl: 'https://indoc.uz/assets/img/team/Abbaskhan_2.webp',
    socialLinks: [
      { icon: 'telegram', url: 'https://t.me/maratxoja' },
      { icon: 'facebook', url: 'https://facebook.com/maratxoja' },
      { icon: 'instagram', url: 'https://instagram.com/maratxoja' },
      { icon: 'linkedin', url: 'https://linkedin.com/in/maratxoja' },
    ],
  },
];

const TeamSection = () => {
  return (
    <section className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-8'>JAMOA</h2>
        <p className='text-center text-gray-500 mb-12'>
          {
            "Bizning kichik xalqaro jamoamiz o'z ishiga ishtiyoqli iborat. Va biz sifatli xizmatlarining muhimligini to'liq tushunamiz."
          }
        </p>
        <div className='flex flex-wrap -mx-4'>
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              position={member.position}
              imageUrl={member.imageUrl}
              socialLinks={member.socialLinks}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
