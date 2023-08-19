import Counter from '../../components/home/Counter';
import InternationalCuisines from '../../components/home/InternationalCuisines';
import UpgradeToLatestTest from '../../components/home/UpgradeToLatestTest';
import OurProducts from '../../components/home/OurProducts/OurProducts';
import SimpleAndDeliciousFood from '../../components/home/SimpleAndDeliciousFood';
import BannerSlider from '../../components/bannerSlider/BannerSlider';
import FlavorfulMenu from '../../components/flavorfulMenu/FlavorfulMenu';

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <UpgradeToLatestTest />
      <InternationalCuisines />
      <UpgradeToLatestTest />
      <SimpleAndDeliciousFood />
      <UpgradeToLatestTest />
      <FlavorfulMenu />
      <Counter />
    </div>
  );
};

export default Home;
