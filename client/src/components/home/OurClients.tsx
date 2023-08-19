import { useState } from 'react';
import img1 from '../../assets/ourClientIcons/img1.png';
import img2 from '../../assets/ourClientIcons/img2.png';
import img3 from '../../assets/ourClientIcons/img3.png';
import img4 from '../../assets/ourClientIcons/img4.png';
import img5 from '../../assets/ourClientIcons/img5.png';
import img6 from '../../assets/ourClientIcons/img6.png';

const OurClients = () => {
  const [startIndex, setStartIndex] = useState(0);

  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? ourClientsData.length - 5 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex === ourClientsData.length - 5 ? 0 : prevIndex + 1
    );
  };

  const ourClientsData = [
    { id: 1, img: img1 },
    { id: 1, img: img2 },
    { id: 1, img: img3 },
    { id: 1, img: img4 },
    { id: 1, img: img5 },
    { id: 1, img: img6 },
  ];
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <div className="flex overflow-x-hidden relative">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${startIndex * (100 / 5)}%)` }}
          >
            {ourClientsData.map((data) => (
              <div
                key={data.id}
                className="mr-4"
                style={{ flex: `0 0 ${100 / 5}%` }}
              >
                <img src={data.img} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <button
            onClick={prevSlide}
            className="px-2 py-1 bg-gray-200 text-gray-600 hover:bg-gray-300"
          >
            Previous
          </button>
          <button
            onClick={nextSlide}
            className="px-2 py-1 bg-gray-200 text-gray-600 hover:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>

      {/* <div className='flex'>
                {
                    ourClientsData.map(data => <div key={data.id}>
                        <img src={data.img} alt='' />
                    </div>)
                }
            </div> */}
    </div>
  );
};

export default OurClients;
