import Counter from '../../components/home/Counter';
import UpgradeToLatestTest from '../../components/home/UpgradeToLatestTest';
import OurProducts from '../../components/home/OurProducts/OurProducts';
import SimpleAndDeliciousFood from '../../components/home/SimpleAndDeliciousFood';
import BannerSlider from '../../components/bannerSlider/BannerSlider';

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <UpgradeToLatestTest />
      <SimpleAndDeliciousFood />
      <OurProducts />
      <UpgradeToLatestTest />
      <Counter />
    </div>
  );
};

export default Home;
