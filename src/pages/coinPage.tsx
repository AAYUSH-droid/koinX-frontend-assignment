import AboutBitcoinCard from '../components/AboutBitcoin';
import CardPromo from '../components/CardPromo';
import SentimentCard from '../components/SentimentCard';
import ToggleSection from '../components/ToggleSecion';
import TrendingCoins from '../components/TrendingCoins';
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
          {/* now all the components will come under here */}
          <SentimentCard />
          <AboutBitcoinCard />
        </div>
        <div className='4/12'>
          <CardPromo />
          <TrendingCoins />
        </div>
      </div>
    </div>
  );
};

export default CoinPage;
