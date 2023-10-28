/* eslint-disable react/prop-types */
function ServiceCard({ imageSrc, position, children }) {
  // Gunakan conditional classes untuk mengatur posisi gambar dan teks
  const imagePositionClass = position === 'right' ? 'order-2' : 'order-1'
  const textPositionClass = position === 'right' ? 'order-1' : 'order-2'

  return (
    <div className="flex flex-wrap items-center mb-20">
      {/* Gambar */}
      <div
        className={`w-full md:w-1/2 lg:w-6/12 mt-10 lg:mt-0 ${imagePositionClass}`}
      >
        <img
          src={imageSrc}
          className={`w-full h-auto lg:w-10/12 hidden md:flex ${
            position === 'right' ? 'lg:ml-16' : ''
          }`}
        />
      </div>

      {/* Teks */}
      <div className={`w-full md:w-1/2 p-4 ${textPositionClass}`}>
        {children}

        <div className="mt-8 text-base font-semibold flex items-center space-x-3 justify-end">
          <p>
            <a href="#">Service Detail</a>
          </p>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.1665 10H15.8332"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 4.16675L15.8333 10.0001L10 15.8334"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
