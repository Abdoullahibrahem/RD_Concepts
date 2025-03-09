import React from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";
import Data from "@data/pages/aboutRd.json";

import PageBanner from "@components/PageBanner";
import AwardsSection from "@components/sections/Awards";
import CallToActionTwoSection from "@components/sections/CallToActionTwo";
import ContactInfoSection from "@components/sections/ContactInfo";
import ServicesTwoSection from "@components/sections/ServicesTwo";
import Image from "next/image";

const PartnersSlider = dynamic(() => import("@components/sliders/Partners"), {
  ssr: false,
});
const TestimonialSlider = dynamic(
  () => import("@components/sliders/Testimonial"),
  { ssr: false }
);
const CompanySlider = dynamic(() => import("@components/sliders/Company"), {
  ssr: false,
});
const ProcessSlider = dynamic(() => import("@components/sliders/Process"), {
  ssr: false,
});
const CompanyTwoSlider = dynamic(
  () => import("@components/sliders/CompanyTwo"),
  { ssr: false }
);

export const metadata = {
  title: {
    default: "About",
  },
  description: AppData.settings.siteDescription,
};

const About = () => {
  return (
    <>
      {/* <PageBanner
        pageTitle={"About us"}
        breadTitle={"About"}
        bgImage={"/img/AboutPage/Header.jpg"}
      /> */}
      {/* <ServicesTwoSection />
      <ContactInfoSection />
      <CompanyTwoSlider />
      <ProcessSlider paddingTop={"0"} />
      <CompanySlider />
      <PartnersSlider bgStyle={"soft"} />
      <AwardsSection />
      <TestimonialSlider showPartners={0} />
      <CallToActionTwoSection /> */}

      <section className="container ">
        <div className="position-relative mil-banner mil-banner-sm mil-mb-90">
          <Image
            src={Data.HeroImage.url}
            fill
            priority
            // style={{ objectFit: "fill" }}
          />
        </div>
        <div className="container mil-mb-90 ">
          <div className="row">
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-5">
              <div className="col-12 col-md-6 mb-4 mb-md-0">
                <h2 className="mb-4">Lorem ipsum dolor</h2>
                <p className="mb-1 mil-light">
                  Lorem ipsum dolor sit amet consectetur. Auctor proin nunc
                  pretium vestibulum. Sed enim aliquam eu fames dictumst ornare
                  morbi neque amet. Risus vehicula eget cras blandit habitasse
                  erat nam commodo. Id mauris urna ut pharetra nulla.
                </p>
                <p className="mil-light">
                  Lorem ipsum dolor sit amet consectetur. Purus luctus ultricies
                  diam augue mauris ultricies. Turpis non neque integer quis
                  suspendisse enim. Et enim turpis ultrices sed enim laoreet
                  fermentum non. Lorem euismod enim rhoncus auctor arcu
                </p>
              </div>
              <div className="col-12 col-md-6">
                <Image
                  src={Data.aboutImg1.url}
                  width={Data.aboutImg1.width}
                  height={Data.aboutImg1.height}
                  style={{
                    objectFit: "cover",
                    maxWidth: "100%",
                    height: "auto",
                  }}
                  alt={Data.aboutImg1.alt}
                />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="container mil-mb-90">
          <div className="row">
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-5">
              <div className="col-12 col-md-6">
                <Image
                  src={Data.aboutImg2.url}
                  width={Data.aboutImg2.width}
                  height={Data.aboutImg2.height}
                  style={{
                    objectFit: "cover",
                    maxWidth: "100%",
                    height: "auto",
                  }}
                  alt={Data.aboutImg2.alt}
                />
              </div>
              <div className="col-12 col-md-6 mb-4 mb-md-0">
                <h2 className="mb-4">Lorem ipsum dolor</h2>
                <p className="mb-1 mil-light">
                  Lorem ipsum dolor sit amet consectetur. Auctor proin nunc
                  pretium vestibulum. Sed enim aliquam eu fames dictumst ornare
                  morbi neque amet. Risus vehicula eget cras blandit habitasse
                  erat nam commodo. Id mauris urna ut pharetra nulla.
                </p>
                <p className="mil-light">
                  Lorem ipsum dolor sit amet consectetur. Purus luctus ultricies
                  diam augue mauris ultricies. Turpis non neque integer quis
                  suspendisse enim. Et enim turpis ultrices sed enim laoreet
                  fermentum non. Lorem euismod enim rhoncus auctor arcu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
