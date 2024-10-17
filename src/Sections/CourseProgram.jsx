// CourseProgram.jsx

const courses = [
  {
    title: 'Embryology',
    icon: '🔄', // Replace with your icon
    totalVideos: '16ta',
    totalDuration: '32 soat',
  },
  {
    title: 'GROSS anatomy',
    icon: '🔬', // Replace with your icon
    totalVideos: '11ta',
    totalDuration: '18 soat',
  },
  {
    title: 'Neuroanatomy',
    icon: '🧠', // Replace with your icon
    totalVideos: '9ta',
    totalDuration: '12 soat',
  },
  {
    title: 'Physiology',
    icon: '📚', // Replace with your icon
    totalVideos: '31ta',
    totalDuration: '32 soat',
  },
  {
    title: 'Biochemistry',
    icon: '🧪', // Replace with your icon
    totalVideos: '12ta',
    totalDuration: '17 soat',
  },
  {
    title: 'Immunology',
    icon: '💉', // Replace with your icon
    totalVideos: '6ta',
    totalDuration: '7 soat',
  },
  {
    title: 'Microbiology',
    icon: '🦠', // Replace with your icon
    totalVideos: '14ta',
    totalDuration: '18 soat',
  },
  {
    title: 'Pathology',
    icon: '⚕️', // Replace with your icon
    totalVideos: '49ta',
    totalDuration: '77 soat',
  },
  {
    title: 'Pharmacology',
    icon: '💊', // Replace with your icon
    totalVideos: '22ta',
    totalDuration: '33 soat',
  },
];

const CourseProgram = () => {
  return (
    <div className='bg-blue-50 py-12'>
      <div className='container mx-auto px-4'>
        {/* Title */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-800'>KURS DASTURI</h2>
          <p className='text-gray-600'>
            {"Sizning klinik fikrlash tubdan o'zgaradi"}
          </p>
        </div>

        {/* Course Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {courses.map((course, index) => (
            <div
              key={index}
              className='bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300'
            >
              {/* Icon */}
              <div className='text-5xl mb-4'>{course.icon}</div>
              {/* Title */}
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                {course.title}
              </h3>
              {/* Details */}
              <p className='text-gray-600'>
                {'Umumiy videodarslar soni: '}
                {course.totalVideos}
              </p>
              <p className='text-gray-600'>
                {"To'liq modul davomiyligi: "}
                {course.totalDuration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseProgram;
