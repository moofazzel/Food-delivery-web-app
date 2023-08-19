import CountUp from 'react-countup'
import img1 from '../../assets/countIcons/icon-1.png'
import img2 from '../../assets/countIcons/icon-2.png'
import img3 from '../../assets/countIcons/icon-3.png'
import img4 from '../../assets/countIcons/icon-4.png'

interface ICountData {
    id: number;
    img: string;
    text: string;
    countEnd: number;
}

const Counter = () => {
    const countData: ICountData[] = [
        { id: 1, img: img1, text: 'Menu Types', countEnd: 200 },
        { id: 2, img: img2, text: 'Different Origin', countEnd: 50 },
        { id: 3, img: img3, text: 'Pasta & Noodles', countEnd: 850 },
        { id: 4, img: img4, text: 'Meals To Go', countEnd: 580 },
    ];
    return (
      <>
        <div className="grid grid-cols-1 gap-4 py-20 md:grid-cols-2 lg:grid-cols-4">
          {countData.map((data) => (
            <div key={data.id} className="flex flex-col items-center py-4">
              <img src={data.img} loading="lazy" width={60} alt="" />
              <p className="py-4 text-2xl font-semibold text-gray">
                {data.text}
              </p>
              <CountUp start={0} end={data.countEnd} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span
                      className="text-3xl font-semibold text-primary"
                      ref={countUpRef}
                    />
                  </div>
                )}
              </CountUp>
            </div>
          ))}
        </div>
      </>
    );
};

export default Counter;