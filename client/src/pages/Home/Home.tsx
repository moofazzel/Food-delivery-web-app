import Counter from '../../components/home/Counter';
import OurProducts from '../../components/home/OurProducts/OurProducts';
import SimpleAndDeliciousFood from '../../components/home/SimpleAndDeliciousFood';
import UpgradeToLatestTest from '../../components/home/UpgradeToLatestTest';

const Home = () => {
  return (
    <div>
      <UpgradeToLatestTest />
      <SimpleAndDeliciousFood />
      <OurProducts />
      <Counter />
    </div>
  );
};

export default Home;
