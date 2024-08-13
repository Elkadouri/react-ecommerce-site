import "./hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight , faChevronRight,  faChevronLeft, faTruck, faShieldAlt, faCalendarDay, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const features = [
  {
    title: "Fast Delivery",
    subtitle: "Start from $10",
    icon: faTruck,
  },
  {
    title: "Money Guarantee",
    subtitle: "7 Days Back",
    icon: faShieldAlt,
  },
  {
    title: "365 Days",
    subtitle: "For free return",
    icon: faCalendarDay,
  },

  {
    title: "Payment",
    subtitle: "Secure system",
    icon: faCreditCard,
  },
];




export default function Hero() {

  const [slider , setSlider] = useState({img: 1 , sex: 'Men'})
  return (
    <section className="hero-container">
      <div className="hero">
        <div className="left">
      
         <div className="slide">
           <img src={`/public/images/img${slider.img}.jpg`} alt="" />
          
           <div className="info">
               <span className="a">Lifestyle collection</span>
               <span className="b">{slider.sex}</span>
               <span className="c">SALE UP TO <span>30% OFF</span></span>
               <span className="d">Get Free Shipping on orders over $99.00</span>
               <button className="e">
                  <a href="#products">Shop Now</a>
               </button>
           </div>
      
           <div className="slid-btns">
              <span style={{backgroundColor:slider.img === 1 ? '#1F2937' : ''}}></span>
              <span style={{backgroundColor:slider.img === 2 ? '#1F2937' : ''}}></span>
           </div>
      
           <div className="slid-moves">
            
              <button onClick={() => setSlider(slider.img === 1 ? {img: 2 , sex: 'Women'} :{img: 1 , sex: 'Men'})}>
                <FontAwesomeIcon className="icon-button"  icon={faChevronLeft} />
              </button>
      
              <button  onClick={() => setSlider(slider.img === 1 ? {img: 2 , sex: 'Women'} :{img: 1 , sex: 'Men'})}>
                <FontAwesomeIcon className="icon-button" icon={faChevronRight} />
              </button>
      
           </div>
      
         </div>
          
        </div>
      
        <div className="right">
      
          <div className="img3">
      
              <img src="/public/images/img3.webp" alt="" />
      
              <div className="info">
                  <span className="a">NEW ARRIVALS</span>
                  <span className="b">SUMMER <br /> SALE 20% OFF</span>
      
                  <a href="#products" className="e">
                      <span>Shop Now</span>
                      <FontAwesomeIcon style={{fontSize:'12px' , marginLeft:'10px'}} icon={faArrowRight} />
                      <span className="line"></span>
                  </a>
      
              </div>
      
          </div>
      
          <div className="img4">
              <img src="/public/images/img4.webp" alt="" />
      
              <div className="info">
                  <span className="a">GAMING 4K</span>
                  <span className="b">DESKTOPS & <br /> LAPTOPS</span>
      
                  <a href="#products" className="e">
                      <span>Shop Now</span>
                      <FontAwesomeIcon style={{fontSize:'12px' , marginLeft:'10px'}} icon={faArrowRight} />
                      <span className="line"></span>
                  </a>
      
              </div>
      
          </div>
      
        </div>
      
      </div>

      <ul className="hero-list">
         {features.map((item) => {
           return (
              <li key={item.title}>

                <FontAwesomeIcon className="ico" icon={item.icon} />

                <div className="text">
                  <span className="title">{item.title}</span>
                  <span className="subtitle">{item.subtitle}</span>
                </div>

              </li>
           )
         })}
      </ul>

    </section>
  );
}
