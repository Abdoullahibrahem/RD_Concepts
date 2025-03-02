import Data from "@data/sections/services.json";
import Image from "next/image";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <>
      {/* services */}
      <section className=" mil-relative services_section mt-5">
        {/* <img src="/img/other/bg.svg" className="mil-bg-img" alt="image" /> */}

        <div className="container mil-p-120-90">
          <div className="mil-mb-10">
            <h2
              className="mil-upper mil-up"
              dangerouslySetInnerHTML={{ __html: Data.title }}
              style={{ fontWeight: 900 }}
            />
          </div>
          <div className="row gx-5 align-items-center mil-mb-120">
            <div className="col-md-6 mb-5 mb-md-0">
              <div className="d-flex flex-column gap-5">
                <h3
                  className="mil-upper mil-up"
                  style={{ fontWeight: 900 }}
                  dangerouslySetInnerHTML={{ __html: Data.subtitle1 }}
                />
                <p dangerouslySetInnerHTML={{ __html: Data.decription1 }} />
                <div>
                  <Link href="/" className="mil-button-secondary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 d-flex">
              <div className=" mb-4">
                <Image
                  src={Data.item1[0].image1.url}
                  width={Data.item1[0].image1.width}
                  height={Data.item1[0].image1.height}
                  style={{
                    objectFit: "cover",
                    maxWidth: "100%",
                    height: "auto",
                    display: "block",
                  }}
                  alt={Data.item1[0].image1.alt}
                />
              </div>
              <div className=" ps-md-4">
                <Image
                  src={Data.item1[1].image2.url}
                  width={Data.item1[1].image2.width}
                  height={Data.item1[1].image2.height}
                  style={{
                    objectFit: "cover",
                    maxWidth: "100%",
                    height: "auto",
                    display: "block",
                  }}
                  alt={Data.item1[1].image2.alt}
                />
              </div>
            </div>
          </div>

          <div className="row gx-5 align-items-center mil-mb-120">
            <div className="col-lg-6 col-12">
              <Image
                src={Data.item2[0].image1.url}
                width={Data.item2[0].image1.width}
                height={Data.item2[0].image1.height}
              />
              <Image
                src={Data.item2[1].image2.url}
                width={Data.item2[1].image2.width}
                height={Data.item2[1].image2.height}
                className="mil-mb-120 ms-3 "
              />
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-column gap-5 ">
                <h3
                  className=" mil-upper mil-up "
                  style={{ fontWeight: 900 }}
                  dangerouslySetInnerHTML={{ __html: Data.subtitle2 }}
                />
                <p dangerouslySetInnerHTML={{ __html: Data.decription2 }} />
                <Link href="/" className="mil-button-secondary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          <div className="row gx-5 align-items-center">
            <div className="col-md-6">
              <div className="d-flex flex-column gap-5 ">
                <h3
                  className=" mil-upper mil-up "
                  style={{ fontWeight: 900 }}
                  dangerouslySetInnerHTML={{ __html: Data.subtitle3 }}
                />
                <p dangerouslySetInnerHTML={{ __html: Data.decription3 }} />
                <Link href="/" className="mil-button-secondary">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <img
                src={Data.item3[0].image1.url}
                width={Data.item3[0].image1.width}
                height={Data.item3[0].image1.height}
                className=""
              />
              <img
                src={Data.item3[1].image2.url}
                width={Data.item3[1].image2.width}
                height={Data.item3[1].image2.height}
                className="mil-mb-120 ms-3 "
              />
            </div>
          </div>
        </div>
      </section>
      {/* services end */}
    </>
  );
};

export default ServicesSection;
