import CardPromo from '../components/CardPromo';
import ToggleSection from '../components/ToggleSecion';
import Crypto from '../components/crypto';
import PageHeader from '../components/pageHeader';

const CoinPage = () => {
  return (
    <div className='h-full w-screen bg-slate-200/40'>
      <PageHeader />
      <div className='w-screen flex'>
        <div className='w-8/12'>
          <Crypto />
          <ToggleSection />
        </div>
        <div className='4/12'>
          <CardPromo />
        </div>
      </div>
    </div>
  );
};

export default CoinPage;
