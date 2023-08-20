import specialImg from '../../assets/img-1.webp';
import specialImgBg from '../../assets/specialImage.webp';

import icon_7 from '../../assets/icons/icon-7.png';
import icon_8 from '../../assets/icons/icon-8.png';
import icon_9 from '../../assets/icons/icon-9.webp';
import icon_10 from '../../assets/icons/icon-10.png';

import paper from '../../assets/Common/paper-design.webp';

interface SpecialMenus {
  title: string;
  description: string;
  image: string;
}

const specialMenus: SpecialMenus = [
  {
    title: 'Pure Ingredients',
    description:
      'Vestibulum morbi blandit cursus risus at ultrices mi. Facilisis gravida neque convallis a.',
    image: icon_7,
  },
  {
    title: 'Sustainability',
    description:
      'Laculis eu non diam phasellus. Dictum non consectetur a erat nam at. Quam adipiscing vitae proin sagittis.',
    image: icon_8,
  },
  {
    title: 'Environmentalism',
    description:
      'Bibendum est ultricies integer quis auctor elit sed. Accumsan tortor posuere ac ut consequat semper.',
    image: icon_9,
  },
  {
    title: 'Formula Transparency',
    description:
      'Facilisi nullam vehicula ipsum a. Ornare massa eget egestas purus viverra accumsan in nisl nisi.',
    image: icon_10,
  },
];

function SpecialMenus() {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${specialImgBg})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        position: 'relative',
      }}
    >
      <img
        src={paper}
        alt="Paper Design"
        className=" w-full z-50 absolute -top-[135px] hidden md:block"
      />

      <div className="container ">
        <div className="flex flex-col lg:flex-row justify-center w-full items-center gap-16 my-20 lg:h-[870px]">
          <img className="xl:w-[40%]" src={specialImg} alt="specialImg" />

          <div>
            <h2 className="font-bold text-[2rem] mb-6 text-black">
              What Makes Our Menus Special ?
            </h2>
            {/* Right menus */}
            <div className="text-left space-y-14 order-2 md:order-none lg:w-[520px]">
              {specialMenus.map((cuisine, index) => (
                <div key={index} className="flex items-center gap-5 ">
                  <img
                    className=" w-[80px] h-[80px]"
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
      </div>

      <img
        src={paper}
        alt="Paper Design"
        className=" w-full z-50 absolute -bottom-[135px] hidden md:block"
      />
    </div>
  );
}

export default SpecialMenus;
