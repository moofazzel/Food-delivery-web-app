import Counter from '../../components/home/Counter';
import UpgradeToLatestTest from '../../components/home/UpgradeToLatestTest';
import SimpleAndDeliciousFood from './SimpleAndDeliciousFood';

const Home = () => {
  return (
    <div>
      <SimpleAndDeliciousFood />
      <UpgradeToLatestTest/>
      <Counter />
    </div>
  );
};

export default Home;

