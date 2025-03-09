"use client";

import Link from "next/link";
import AppData from "@data/app.json";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faBehance,
  faPinterest,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
const DefaultFooter = () => {
  const asPath = usePathname();

  return (
    <>
      {/* footer */}
      <footer className="mil-relative">
        <div className="container mt-5">
          <div className="row align-items-baseline ">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <Link href="/" className="mil-mb-30">
                <Image
                  src={AppData.footer.logo.image}
                  alt={AppData.footer.logo.alt}
                  width={64}
                  height={64}
                />
              </Link>
              <h4
                className=""
                dangerouslySetInnerHTML={{ __html: AppData.footer.title }}
                style={{ fontWeight: 900, color: "#ffffff" }}
              />
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div>
                  <div className="mil-footer-navigation justify-content-lg-end">
                    <nav>
                      <ul>
                        <p>Company</p>
                        {AppData.footer.menu1.map((item, key) => (
                          <li
                            key={`footer-menu-item-${key}`}
                            className={
                              (asPath.indexOf(item.link) != -1 &&
                                item.link != "/") ||
                              asPath == item.link
                                ? "mil-active"
                                : ""
                            }
                          >
                            <Link href={item.link}>{item.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                    <nav>
                      <div className="mil-footer-navigation  mil-mb-90 ">
                        <ul>
                          <p>Services</p>
                          {AppData.footer.menu2.map((item, key) => (
                            <li
                              key={`footer-menu-item-${key}`}
                              className={
                                (asPath.indexOf(item.link) != -1 &&
                                  item.link != "/") ||
                                asPath == item.link
                                  ? "mil-active"
                                  : ""
                              }
                            >
                              <Link href={item.link}>{item.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-md-flex justify-content-between mb-5">
              <div className="d-flex gap-3">
                <div className="d-flex icon_gap-1 mb-3 mb-md-0">
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ fontSize: "24px" }}
                    color="white"
                  />
                  <span style={{ color: "white" }}>+966 50 183 8933</span>
                </div>

                <div className="d-flex  icon_gap-1">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ fontSize: "24px" }}
                    color="white"
                  />
                  <span style={{ color: "white" }}>Al-Khobar, KSA</span>
                </div>
              </div>
              <div className="d-flex icon_gap-2 me-4 mt-3 mt-md-0">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ fontSize: "24px" }}
                  color="white"
                />
                <FontAwesomeIcon
                  icon={faBehance}
                  style={{ fontSize: "24px" }}
                  color="white"
                />
                <FontAwesomeIcon
                  icon={faPinterest}
                  style={{ fontSize: "24px" }}
                  color="white"
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ fontSize: "24px" }}
                  color="white"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer end */}
    </>
  );
};
export default DefaultFooter;
