"use client";

import Data from "@data/sections/hero-1.json";
import Link from "next/link";

import { useEffect } from "react";
import { ScrollAnimation } from "@common/scrollAnims";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HeroOne = () => {
  useEffect(() => {
    ScrollAnimation();
  }, []);

  return (
    <>
      {/* banner */}
      <section className="mil-banner mil-mb-120">
        <Image
          src={Data.bg_image}
          className="mil-bg-img mil-scale"
          data-value-1=".4"
          data-value-2="1.4"
          alt="image"
          fill
        />

        {/* <div className="mil-overlay" /> */}
        <div className="container position-relative">
          <div className="mil-background-grid mil-top-space" />
          <div className="mil-banner-content">
            <div className="row">
              <div className="col-12 col-lg-10 col-xl-6">
                <div className="mil-mb-30 mt-4 mt-md-5">
                  <h1
                    className="mil-light mil-h1"
                    dangerouslySetInnerHTML={{ __html: Data.title }}
                  />
                </div>
                <div className="glass mil-mb-30 p-3 p-md-4 ">
                  <p
                    className="mb-3 "
                    style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}
                  >
                    Lorem ipsum dolor sit amet consectetur. Elementum iaculis
                    quam lorem neque vitae amet et. Tortor sem ut faucibus dolor
                    ac enim ut tortor. Donec purus mattis eget nisl nibh a
                    ornare. Mauris lectus ut lectus placerat vestibulum vehicula
                    lorem tortor porttitor.
                  </p>
                  <a href="#" className="glass-cta mt-2 mt-md-3 ">
                    Get contact{" "}
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
