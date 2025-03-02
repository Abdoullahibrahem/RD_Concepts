import Image from "next/image";
import Data from "../../../data/sections/latest-projects.json";
import Link from "next/link";

const LatestProjectsSection = () => {
  return (
    <>
      <section>
        <div className="container mil-p-120-90">
          <div className="mil-mb-10 d-flex justify-content-between align-items-center mb-5">
            <h2
              className="mil-upper mil-up"
              dangerouslySetInnerHTML={{ __html: Data.title }}
              style={{ fontWeight: 900 }}
            />
            <Link className="mil-button-secondary px-md-5 p-3" href="/">
              View More
            </Link>
          </div>
          <div className="d-md-flex gap-3">
            <div className="d-flex flex-column justify-content-between">
              <div className="projects-description px-5 py-5">
                <p dangerouslySetInnerHTML={{ __html: Data.description }} />
              </div>
              <div>
                <Image
                  src={Data.images[0].image1.url}
                  width={Data.images[0].image1.width}
                  height={Data.images[0].image1.height}
                  alt={Data.images[0].image1.alt}
                  sizes="100vw"
                ></Image>
                <h4
                  className="mil-upper mil-up "
                  dangerouslySetInnerHTML={{
                    __html: Data.images[0].image1.imgTitle,
                  }}
                  style={{ fontWeight: 900, color: "#ffffff" }}
                />
                <p
                  className="mil-light-soft"
                  dangerouslySetInnerHTML={{
                    __html: Data.images[0].image1.description,
                  }}
                />
              </div>
            </div>
            <div>
              <Image
                src={Data.images[1].image2.url}
                width={Data.images[1].image2.width}
                height={Data.images[1].image2.height}
                alt={Data.images[1].image2.alt}
                sizes="100vw"
              ></Image>
              <h4
                className="mil-upper mil-up "
                dangerouslySetInnerHTML={{
                  __html: Data.images[1].image2.imgTitle,
                }}
                style={{ fontWeight: 900, color: "#ffffff" }}
              />
              <p
                className="mil-light-soft"
                dangerouslySetInnerHTML={{
                  __html: Data.images[1].image2.description,
                }}
              />
            </div>
            <div>
              <Image
                src={Data.images[2].image3.url}
                width={Data.images[2].image3.width}
                height={Data.images[2].image3.height}
                alt={Data.images[2].image3.alt}
                sizes="100vw"
              ></Image>
              <h4
                className="mil-upper mil-up "
                dangerouslySetInnerHTML={{
                  __html: Data.images[2].image3.imgTitle,
                }}
                style={{ fontWeight: 900, color: "#ffffff" }}
              />
              <p
                className="mil-light-soft"
                dangerouslySetInnerHTML={{
                  __html: Data.images[2].image3.description,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestProjectsSection;
