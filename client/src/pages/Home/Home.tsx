import Counter from '../../components/home/Counter';
import InternationalCuisines from '../../components/home/InternationalCuisines';
import UpgradeToLatestTest from '../../components/home/UpgradeToLatestTest';
import OurProducts from '../../components/home/OurProducts/OurProducts';
import SimpleAndDeliciousFood from '../../components/home/SimpleAndDeliciousFood';

const Home = () => {
  return (
    <div>
      <UpgradeToLatestTest />
      <InternationalCuisines />
      <UpgradeToLatestTest />
      <SimpleAndDeliciousFood />
      <UpgradeToLatestTest />
      <Counter />
    </div>
  );
};

export default Home;
