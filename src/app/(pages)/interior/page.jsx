import React from "react";

import AppData from "@data/app.json";
import Data from "@data/pages/interior.json";

import Image from "next/image";
import ImageCarousel from "../../_components/sliders/ImagesCarousel";
import Link from "next/link";

export const metadata = {
  title: {
    default: "Interior Design",
  },
  description: AppData.settings.siteDescription,
};

const Interior = () => {
  const myImages = [
    {
      src: Data.images[0].url,
      alt: "Interior design sample1",
    },
    {
      src: Data.images[1].url,
      alt: "Interior design sample2",
    },
    {
      src: Data.images[2].url,
      alt: "Interior design sample3",
    },
    {
      src: Data.images[0].url,
      alt: "Interior design sample1",
    },
    {
      src: Data.images[2].url,
      alt: "Interior design sample1",
    },
    {
      src: Data.images[1].url,
      alt: "Interior design sample1",
    },
  ];
  return (
    <>
      <section className="container page-content">
        <div className="mil-p-0-30 ">
          {/* Top section with text */}
          <div className="row justify-content-between align-items-center mil-mb-60">
            <div className="col-lg-8">
              <div className="mil-mb-90">
                <h1
                  className="mil-mb-15 mil-light mil-h1"
                  dangerouslySetInnerHTML={{ __html: Data.title }}
                />
              </div>
              <div className="mil-mb-120">
                <h2
                  className="mil-mb-15 mil-light mil-h2"
                  dangerouslySetInnerHTML={{ __html: Data.subtitle1 }}
                />
                <p
                  className="mil-up mil-mb-30 mil-light"
                  dangerouslySetInnerHTML={{ __html: Data.description }}
                />
              </div>
              <div>
                <h2
                  className="mil-mb-15 mil-light mil-h2"
                  dangerouslySetInnerHTML={{ __html: Data.subtitle2 }}
                />
                <p
                  className="mil-up mil-mb-30 mil-light"
                  dangerouslySetInnerHTML={{ __html: Data.description }}
                />
              </div>
            </div>
          </div>
          <div>
            <Link
              href={"/projects"}
              style={{
                width: "100%",
                textAlign: "right",
                textDecoration: "underline",
              }}
              className="mil-light text-end d-block mb-3 "
            >
              Show more projects
            </Link>
            <ImageCarousel images={myImages} autoSlideInterval={2000} />
          </div>
        </div>
      </section>
    </>
  );
};
export default Interior;
