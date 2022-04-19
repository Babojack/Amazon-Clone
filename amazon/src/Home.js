import "./Home.css";
import React from "react";
import Product from "./Product.js";

function Home() {
  return (
    <div className="Home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/61ATFA5aSoL._SX3740_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            title="Khabibs Glovs"
            price="129,99€"
            image="https://m.media-amazon.com/images/I/71gGKDXdoPL._AC_SX679_.jpg"
            rating={4}
          />

          <Product
            title="Conors Legacy"
            price="159,99€"
            image="https://i.pinimg.com/564x/a0/66/e7/a066e7791510cac74013cce9b2d214b0.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            title="GyroVu USB to Sony NP-FM500H Dummy Battery Intelli"
            price="36€"
            image="https://www.bhphotovideo.com/images/images2000x2000/gyrovu_gv_usb_fm500h_usb_to_sony_np_fm500h_1600609.jpg"
            rating={5}
          />
          <Product
            title="Sensei DOC-CK Deluxe Optics Care and Cleaning Kit"
            price="159,99€"
            image="https://www.bhphotovideo.com/images/images2500x2500/sensei_doc_ck_deluxe_optics_care_cleaning_1400928.jpg"
            rating={5}
          />
          <Product
            title="Marketing for Dummies"
            price="5,96€"
            image="https://productimages.worldofbooks.com/047050210X.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            title="Fujifilm X-S10 + XF 18-55mm f2,8-4 Kit"
            price="159,99€"
            image="https://media.foto-erhardt.de/images/product_images/popup_images/179/fujifilm-x-s10-xf-18-55mm-f28-4-kit-160275760317920304.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
