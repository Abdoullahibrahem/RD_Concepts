"use client";

import Data from "@data/sections/about.json";

import "react-modal-video/css/modal-video.css";
import Image from "next/image";
import Link from "next/link";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const AboutSection = () => {
  return (
    <>
      {/* about */}
      <section>
        <div className="container mil-p-0-30">
          {/* Top section with text */}
          <div className="row justify-content-between align-items-center">
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

          {/* Main content area - replace nested about-flex with grid */}
          <div className="row">
            {/* Images section */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="row">
                <div className="col-6 mb-4">
                  <Image
                    src={Data.image1.url}
                    alt={Data.image1.alt}
                    width={Data.image1.width}
                    height={Data.image1.height}
                    style={{
                      objectFit: "cover",
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </div>
                <div className="col-6 mb-4">
                  <Image
                    src={Data.image2.url}
                    alt={Data.image2.alt}
                    width={Data.image2.width}
                    height={Data.image2.height}
                    style={{
                      objectFit: "cover",
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Right side content with button and progress bars */}
            <div className="col-lg-6">
              <div className="d-flex flex-column gap-5">
                {/* Button section */}
                <div className="d-flex align-items-center flex-wrap justify-content-between">
                  <div className="mb-4 mb-md-0">
                    <Image
                      src={Data.image3.url}
                      alt={Data.image3.alt}
                      width={Data.image3.width}
                      height={Data.image3.height}
                      style={{
                        objectFit: "cover",
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                  <div className="ms-0 ms-md-5">
                    <Link
                      href="/"
                      className="mil-button-secondary px-4 px-md-5 p-3"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>

                {/* Progress bars */}
                <div className="row gy-4">
                  <div className="col-12 col-sm-4">
                    <div className="mx-auto" style={{ maxWidth: 120 }}>
                      <CircularProgressbar
                        value={70}
                        text={`${30}+`}
                        strokeWidth={3}
                        counterClockwise
                        styles={{
                          path: { stroke: "#fefefe" },
                          trail: { stroke: "#1e1e1e" },
                          text: {
                            fontFamily: "Header",
                            fill: "#fefefe",
                            fontSize: "20px",
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
                  </div>
                  <div className="col-12 col-sm-4">
                    <div className="mx-auto" style={{ maxWidth: 120 }}>
                      <CircularProgressbar
                        value={85}
                        text={`${150}+`}
                        strokeWidth={3}
                        counterClockwise
                        styles={{
                          path: { stroke: "#fefefe" },
                          trail: { stroke: "#1e1e1e" },
                          text: {
                            fontFamily: "Header",
                            fill: "#fefefe",
                            fontSize: "20px",
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
                  </div>
                  <div className="col-12 col-sm-4">
                    <div className="mx-auto" style={{ maxWidth: 120 }}>
                      <CircularProgressbar
                        value={80}
                        text={`${80}+`}
                        strokeWidth={3}
                        counterClockwise
                        styles={{
                          path: { stroke: "#fefefe" },
                          trail: { stroke: "#1e1e1e" },
                          text: {
                            fontFamily: "Header",
                            fill: "#fefefe",
                            fontSize: "20px",
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
          </div>
        </div>
      </section>

      {/* about end */}
    </>
  );
};

export default AboutSection;
