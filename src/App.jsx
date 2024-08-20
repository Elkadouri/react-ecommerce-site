import './App.css'
import Header from './components/1-header/Header'
import Hero from './components/2-hero/Hero'
import Main from './components/3-main/Main'
import Cart from './components/1-header/header2/Cart'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';
import Popup from './components/1-header/header2/Popup'
import User from './components/1-header/header2/User'
import Footer from './components/4-footer/Footer'

function App() {

  const [active, setActive] = useState("All Categories");

  const [up , setUp] = useState({opa:0 , showHide:'hide'});

  const [display , setDisplay] = useState('none');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setUp({opacity:1 , showHide:'show'});
      } else {
        setUp({opacity:0 , showHide:'hide'});
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [productsData, setProductsData] = useState(() => {
    const storedProducts = localStorage.getItem('products');
    return storedProducts && storedProducts.length > 0 ? JSON.parse(storedProducts) : [];
  });

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(productsData));
  }, [productsData]);

  const [userDisplay , setUserDisplay] = useState('none');
  const [popupDisplay , setPopupDisplay] = useState('none');
  const [search , setSearch] = useState('');

  return (
    <>
      <Header 
        active={active} setActive={setActive}
        display={display} setDisplay={setDisplay}
        productsData={productsData}
        search={search} setSearch={setSearch}
        setUserDisplay={setUserDisplay}
        popupDisplay={popupDisplay} setPopupDisplay={setPopupDisplay}
      />
      <Hero/>
      <Main 
        active={active} setActive={setActive}
        display={display} setDisplay={setDisplay}
        productsData={productsData} setProductsData={setProductsData}
        search={search} setSearch={setSearch}
      />
      <Footer/>
      <button onClick={() => window.scrollTo(0, 0)} style={{opacity: up.opa}} className={`scrool-up ${up.showHide}`}>
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
      <Cart display={display} setDisplay={setDisplay} productsData={productsData} setProductsData={setProductsData} />
      <User userDisplay={userDisplay} setUserDisplay={setUserDisplay} />
      <Popup popupDisplay={popupDisplay} setPopupDisplay={setPopupDisplay} setUserDisplay={setUserDisplay} />
    </>
  );
}

export default App;
