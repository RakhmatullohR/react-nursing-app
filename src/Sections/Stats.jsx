// StatsSection.jsx

const StatsSection = () => {
  return (
    <div className='bg-blue-50 py-12'>
      <div className='container mx-auto px-4'>
        {/* Stats Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-4 gap-8 text-center'>
          {/* Stat 1 */}
          <div>
            <h3 className='text-5xl font-bold text-blue-900'>5</h3>
            <p className='text-gray-600 mt-2'>Yil dars berish tajribasi</p>
          </div>

          {/* Stat 2 */}
          <div>
            <h3 className='text-5xl font-bold text-blue-900'>11</h3>
            <p className='text-gray-600 mt-2'>Blok darslik</p>
          </div>

          {/* Stat 3 */}
          <div>
            <h3 className='text-5xl font-bold text-blue-900'>250</h3>
            <p className='text-gray-600 mt-2'>Soatdan ortiq videodarsliklar</p>
          </div>

          {/* Stat 4 */}
          <div>
            <h3 className='text-5xl font-bold text-blue-900'>12</h3>
            <p className='text-gray-600 mt-2'>Oy intensiv tayyorlov</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
