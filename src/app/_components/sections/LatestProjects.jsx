import Image from "next/image";
import Data from "../../../data/sections/latest-projects.json";
import Link from "next/link";

const LatestProjectsSection = () => {
  return (
    <>
      <section>
        <div className="container mil-p-120-90">
          {/* Header with title and view more button */}
          <div className="mil-mb-10 d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 gap-sm-0 mb-5">
            <h2
              className="mil-upper mil-up me-4"
              dangerouslySetInnerHTML={{ __html: Data.title }}
              style={{ fontWeight: 900 }}
            />
            <Link className="mil-button-secondary px-4 px-md-5 p-3" href="/">
              View More
            </Link>
          </div>

          {/* Projects grid */}
          <div className="row gy-4">
            {/* First column with description and image */}
            <div className="col-12 col-md-4">
              <div className="d-flex flex-column justify-content-between h-100">
                <div className="projects-description px-4 py-4 px-sm-5 py-sm-5 mb-4">
                  <p dangerouslySetInnerHTML={{ __html: Data.description }} />
                </div>
                <div>
                  <div className="mb-3">
                    <Image
                      src={Data.images[0].image1.url}
                      width={Data.images[0].image1.width}
                      height={Data.images[0].image1.height}
                      alt={Data.images[0].image1.alt}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                  <h4
                    className="mil-upper mil-up mb-2"
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
            </div>

            {/* Second image column */}
            <div className="col-12 col-md-4">
              <div className="mb-3">
                <Image
                  src={Data.images[1].image2.url}
                  width={Data.images[1].image2.width}
                  height={Data.images[1].image2.height}
                  alt={Data.images[1].image2.alt}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <h4
                className="mil-upper mil-up mb-2"
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

            {/* Third image column */}
            <div className="col-12 col-md-4">
              <div className="mb-3">
                <Image
                  src={Data.images[2].image3.url}
                  width={Data.images[2].image3.width}
                  height={Data.images[2].image3.height}
                  alt={Data.images[2].image3.alt}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <h4
                className="mil-upper mil-up mb-2"
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
