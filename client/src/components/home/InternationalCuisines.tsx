import icon_1 from '../../assets/icons/icon-1.webp';
import icon_2 from '../../assets/icons/icon-2.webp';
import icon_3 from '../../assets/icons/icon-3.webp';
import icon_4 from '../../assets/icons/icon-4.webp';
import icon_5 from '../../assets/icons/icon-5.webp';
import icon_6 from '../../assets/icons/icon-6.webp';

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
      image: icon_6,
    },
  ];
  return (
    <>
      <div className="container">
        {/* headlines */}
        <div className="text-center">
          <h2 className="font-bold text-[2rem] mb-4 text-black">
            International Cuisines
          </h2>
          <h6 className="mb-6 text-lg font-bold text-black"></h6>
        </div>

        {/* left menus */}
        <div className="w-[30%] text-right space-y-8">
          {cuisines.slice(0, 3).map((cuisine, index) => (
            <div key={index} className="flex gap-5 ">
              <div>
                <a href="" className="text-xl font-bold text-primary">
                  {cuisine.title}
                </a>
                <p className="mt-2.5 text-base text-gray">
                  {cuisine.description}
                </p>
              </div>
              <div className="w-[6rem] h-16 mt-2">
                <img className="object-cover w-full" src={icon_6} alt="" />
              </div>
            </div>
          ))}
        </div>
        {/* center image */}
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
}

export default InternationalCuisines;
