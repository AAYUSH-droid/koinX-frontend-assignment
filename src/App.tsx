import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CoinPage from './pages/CoinPage';
// fixing deployment
function App() {
  return (
    <div>
      <Navbar />
      <CoinPage />
      <Footer />
    </div>
  );
}

export default App;
