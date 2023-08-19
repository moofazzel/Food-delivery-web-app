import icon_1 from '../../assets/icons/icon-1.webp';
import icon_2 from '../../assets/icons/icon-2.webp';
import icon_3 from '../../assets/icons/icon-3.webp';
import icon_4 from '../../assets/icons/icon-4.webp';
import icon_5 from '../../assets/icons/icon-5.webp';
import icon_6 from '../../assets/icons/icon-6.webp';
import paper from '../../assets/Common/paper-design.webp';

import cuisinesImage from '../../assets/internationalCcuisines/middle-img.webp';

function InternationalCuisines() {
  interface Cuisine {
    title: string;
    description: string;
    image: string;
  }

  const cuisines: Cuisine = [
    {
      title: 'African Cuisines',
      description:
        'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetelis in mei. Meianpe icula euripidis,partem.',
      image: icon_6,
    },
    {
      title: 'American Cuisines',
      description:
        'Ultrices neque ornare aenean euismod elementum nisi quis. Ac turpis egestas maecenas pharetra convallis posuere morbi',
      image: icon_5,
    },
    {
      title: 'Asian Cuisines',
      description:
        'Molestie ac feugiat sed lectus. Eget mi proin sed libero enim. In metus vulputate eu scelerisque felis. Vitae congue eu consequat.',
      image: icon_1,
    },
    {
      title: 'European Cuisines',
      description:
        'Molestie ac feugiat sed lectus. Eget mi proin sed libero enim. In metus vulputate eu scelerisque felis. Vitae congue eu consequat.',
      image: icon_4,
    },
    {
      title: 'Oceanic Cuisines',
      description:
        'Molestie ac feugiat sed lectus. Eget mi proin sed libero enim. In metus vulputate eu scelerisque felis. Vitae congue eu consequat.',
      image: icon_3,
    },
    {
      title: 'Indian Cuisines',
      description:
        'Molestie ac feugiat sed lectus. Eget mi proin sed libero enim. In metus vulputate eu scelerisque felis. Vitae congue eu consequat.',
      image: icon_2,
    },
  ];
  return (
    <>
      <div className="relative">
        <img
          src={paper}
          alt="Paper Design"
          className=" w-full z-50 absolute -top-[135px] hidden md:block"
        />

        <div className="container my-24">
          {/* headlines */}
          <div className="text-center">
            <h2 className="font-bold text-[2rem] mb-4 text-black">
              International Cuisines
            </h2>
            <h6 className="mb-6 text-lg font-bold text-black">
              Incredibly Tasty International Dish
            </h6>
          </div>

          <div className="flex lg:flex-row md:flex-row-reverse flex-wrap justify-between items-center ">
            {/* left menus */}
            <div className=" md:text-right space-y-8 lg:w-[30%] w-full md:w-1/2 order-1 md:order-none">
              {cuisines.slice(0, 3).map((cuisine, index) => (
                <div
                  key={index}
                  className="md:flex-row flex-row-reverse flex gap-5 "
                >
                  <div>
                    <a href="" className="text-xl font-bold text-primary">
                      {cuisine.title}
                    </a>
                    <p className="mt-2.5 text-base text-gray">
                      {cuisine.description}
                    </p>
                  </div>
                  <img
                    className=" w-[50px] h-[50px]"
                    src={cuisine.image}
                    alt=""
                  />
                </div>
              ))}
            </div>

            {/* center image */}
            <div className="flex justify-center lg:w-[33%]">
              <img src={cuisinesImage} alt="cuisinesImage" />
            </div>

            {/* Right menus */}
            <div className="text-left space-y-8 lg:w-[30%] w-full order-2 md:order-none">
              {cuisines.slice(3, 6).map((cuisine, index) => (
                <div key={index} className="flex gap-5 ">
                  <img
                    className=" w-[50px] h-[50px]"
                    src={cuisine.image}
                    alt=""
                  />
                  <div>
                    <a href="" className="text-xl font-bold text-primary">
                      {cuisine.title}
                    </a>
                    <p className="mt-2.5 text-base text-gray">
                      {cuisine.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <img
          src={paper}
          alt="Paper Design"
          className=" w-full z-50 absolute -bottom-[135px] hidden md:block"
        />
      </div>
    </>
  );
}

export default InternationalCuisines;
