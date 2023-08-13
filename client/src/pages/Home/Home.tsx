import Counter from '../../components/home/Counter';
import InternationalCuisines from '../../components/home/InternationalCuisines';
import UpgradeToLatestTest from '../../components/home/UpgradeToLatestTest';
import SimpleAndDeliciousFood from './SimpleAndDeliciousFood';

const Home = () => {
  return (
    <div>
      <InternationalCuisines/>
      <UpgradeToLatestTest/>
      <SimpleAndDeliciousFood />
      <Counter />
    </div>
  );
};

export default Home;

