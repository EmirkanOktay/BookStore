import './App.css';
import CaresoualHeader from './Compenents/CaresoualHeader';
import LatestBooks from './Compenents/LatestBooks';
import SectionTop from './Compenents/SectionTop';
import Header from './Pages/Header';


function App() {
  return (
    <div>

      <div>
        <Header />
        <CaresoualHeader />
        <SectionTop />
        <LatestBooks />
      </div>

    </div>
  );
}

export default App;
