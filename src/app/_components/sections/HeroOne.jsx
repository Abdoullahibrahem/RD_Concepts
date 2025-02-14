"use client";

import Data from "@data/sections/hero-1.json";
import Link from "next/link";

import { useEffect } from "react";
import { ScrollAnimation } from "@common/scrollAnims";

const HeroOne = () => {
  useEffect(() => {
    ScrollAnimation();
  }, []);

  return (
    <>
      {/* banner */}
      <section className="mil-banner">
        <img
          src={Data.bg_image}
          className="mil-bg-img mil-scale"
          data-value-1=".4"
          data-value-2="1.4"
          alt="image"
        />

        {/* <div className="mil-overlay" /> */}
        <div className="container">
          <div className="mil-background-grid mil-top-space" />
          <div className="mil-banner-content">
            <div className="row">
              <div className="col-xl-9">
                <div className="mil-mb-30 mt-5">
                  <h1
                    className="mil-light mil-h2"
                    dangerouslySetInnerHTML={{ __html: Data.title }}
                  />
                </div>
                <div className="glass ">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Elementum iaculis
                    quam lorem neque vitae amet et. Tortor sem ut faucibus dolor
                    ac enim ut tortor. Donec purus mattis eget nisl nibh a
                    ornare. Mauris lectus ut lectus placerat vestibulum vehicula
                    lorem tortor porttitor.
                  </p>
                  <a href="#" className="glass-cta">
                    Get contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner end */}
    </>
  );
};
export default HeroOne;
