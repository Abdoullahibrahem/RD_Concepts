"use client";

import { useState } from "react";
import Data from "@data/sections/about.json";

import "react-modal-video/css/modal-video.css";
import Image from "next/image";
import Link from "next/link";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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
            <div className="d-flex flex-column gap-5">
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
              <div className="d-flex justify-content-between ">
                <div style={{ width: 120, height: 120 }}>
                  {/* Adjust size here */}
                  <CircularProgressbar
                    value={70}
                    text={`${30}+`}
                    strokeWidth={3}
                    counterClockwise
                    styles={{
                      path: { stroke: "#fefefe" },
                      trail: { stroke: "#1e1e1e" },
                      text: {
                        fill: "#fefefe",
                        fontSize: "24px",
                        fontWeight: 900,
                      },
                    }}
                  />
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "14px",
                      color: "#fefefe",
                      marginTop: "5px",
                    }}
                  >
                    Residential projects
                  </p>
                </div>
                <div style={{ width: 120, height: 120 }}>
                  {/* Adjust size here */}
                  <CircularProgressbar
                    value={85}
                    text={`${150}+`}
                    strokeWidth={3}
                    counterClockwise
                    styles={{
                      path: { stroke: "#fefefe" },
                      trail: { stroke: "#1e1e1e" },
                      text: {
                        fill: "#fefefe",
                        fontSize: "24px",
                        fontWeight: 900,
                      },
                    }}
                  />
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "14px",
                      color: "#fefefe",
                      marginTop: "5px",
                    }}
                  >
                    Commercial projects
                  </p>
                </div>
                <div style={{ width: 120, height: 120 }}>
                  {/* Adjust size here */}
                  <CircularProgressbar
                    value={80}
                    text={`${80}+`}
                    strokeWidth={3}
                    counterClockwise
                    styles={{
                      path: { stroke: "#fefefe" },
                      trail: { stroke: "#1e1e1e" },
                      text: {
                        fill: "#fefefe",
                        fontSize: "24px",
                        fontWeight: 900,
                      },
                    }}
                  />
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "14px",
                      color: "#fefefe",
                      marginTop: "5px",
                    }}
                  >
                    Branding projects
                  </p>
                </div>
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
