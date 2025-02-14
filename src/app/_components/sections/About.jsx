"use client";

import { useState } from "react";
import Data from "@data/sections/about.json";

import "react-modal-video/css/modal-video.css";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* about */}
      <section>
        <div className="container mil-p-0-30">
          <div className="row justify-content-between align-items-center flex-sm-row">
            <div className="col-lg-6">
              <div className="mil-mb-90">
                <h2
                  className="mil-mb-15 mil-light mil-h2"
                  dangerouslySetInnerHTML={{ __html: Data.title }}
                />
                <p
                  className="mil-up mil-mb-30 mil-light"
                  dangerouslySetInnerHTML={{ __html: Data.description }}
                />
              </div>
            </div>
          </div>
          <div className="about-flex">
            <div className="about-flex">
              <Image
                src={Data.image1.url}
                alt={Data.image1.alt}
                width={Data.image1.width}
                height={Data.image1.height}
              />
              <Image
                src={Data.image2.url}
                alt={Data.image2.alt}
                width={Data.image2.width}
                height={Data.image2.height}
              />
            </div>
            <div className="">
              <div className="d-flex align-items-center">
                <Image
                  src={Data.image3.url}
                  alt={Data.image3.alt}
                  width={Data.image3.width}
                  height={Data.image3.height}
                />
                <Link href="/" className="mil-button-secondary ms-5">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about end */}
    </>
  );
};

export default AboutSection;
