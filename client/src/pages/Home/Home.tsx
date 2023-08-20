import Counter from '../../components/home/Counter';
import UpgradeToLatestTest from '../../components/home/UpgradeToLatestTest';
import OurProducts from '../../components/home/OurProducts/OurProducts';
import SimpleAndDeliciousFood from '../../components/home/SimpleAndDeliciousFood';
import Gallery from '../../components/home/Gallery';

const Home = () => {
  return (
    <div>
      <UpgradeToLatestTest />
      <SimpleAndDeliciousFood />
      <OurProducts />
      <Gallery />
      <UpgradeToLatestTest />
      <Counter />
    </div>
  );
};

export default Home;
