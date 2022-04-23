import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="If you’re a VIP, executive, celebrity, rapper, artist, politician, banker or just looking for personal protection and are looking to hire a bodyguard."
            price={11.96}
            rating={5}
            image="https://i.pinimg.com/564x/f4/01/4e/f4014e6c7867f7c271ef3d094adb9c74.jpg"
          />
          <Product
            id="49538094"
            title="Head Ti. Conquest Racquet (Strung)"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/71brH0xIwWL._AC_SX679_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Rent Donald Jonn Trump. Donald John Trump was born in Queens, New York, on June 14, 1946. His father, Fred Trump, was a highly successful real estate developer."
            price={199.99}
            rating={3}
            image="https://www.whitehouse.gov/wp-content/uploads/2021/01/45_donald_trump.jpg"
          />
          <Product
            id="23445930"
            title="Learn French: French for Beginners (A1 / A2) - Short Stories to Improve Your Vocabulary and Learn French by Reading (French Edition)"
            price={14.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/515E53QLAqL.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
