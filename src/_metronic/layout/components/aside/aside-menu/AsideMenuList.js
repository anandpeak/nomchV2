/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url) => {
    return checkIsActive(location, url)
      ? " menu-item-active menu-item-open "
      : "";
  };

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/dashboard")}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/General/Fire.svg")} />
            </span>
            <span className="menu-text">Өнөөдөр</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/builder")}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/builder">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl(
                  "/media/svg/icons/General/Notification2.svg"
                )}
              />
            </span>
            <span className="menu-text">Мэдээллийн самбар</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/* Components */}
        {/* begin::section */}
        <li className="menu-section ">
          <h4 className="menu-text">Сурлагын самбар</h4>
          <i className="menu-icon flaticon-more-v2"></i>
        </li>
        {/* end:: section */}

        {/* Material-UI */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/attendance")}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/attendance">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl(
                  "/media/svg/icons/Communication/Clipboard-list.svg"
                )}
              />
            </span>
            <span className="menu-text">Ирц</span>
          </NavLink>
        </li>

        {/*end::1 Level*/}

        {/* Bootstrap */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/react-bootstrap"
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/react-bootstrap">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl(
                  "/media/svg/icons/Communication/Clipboard-check.svg"
                )}
              />
            </span>
            <span className="menu-text">Гэрийн даалгавар</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu ">
            <ul className="menu-subnav">
              <ul className="menu-subnav">
                <li
                  className="menu-item  menu-item-parent"
                  aria-haspopup="true"
                >
                  <span className="menu-link">
                    <span className="menu-text">Bootstrap</span>
                  </span>
                </li>

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/alert"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/alert">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Alerts</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/badge"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/badge">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Badge</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/breadcrumb"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink
                    className="menu-link"
                    to="/react-bootstrap/breadcrumb"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Breadcrumb</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/buttons"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/buttons">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Buttons</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/button-group"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink
                    className="menu-link"
                    to="/react-bootstrap/button-group"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Button Group</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/cards"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/cards">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Cards</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/carousel"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/carousel">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Carousel</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/dropdowns"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink
                    className="menu-link"
                    to="/react-bootstrap/dropdowns"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Dropdowns</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/forms"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/forms">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Forms</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/input-group"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink
                    className="menu-link"
                    to="/react-bootstrap/input-group"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Input Group</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/images"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/images">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Images</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/figures"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/figures">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Figures</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/jumbotron"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink
                    className="menu-link"
                    to="/react-bootstrap/jumbotron"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Jumbotron</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/list-group"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink
                    className="menu-link"
                    to="/react-bootstrap/list-group"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">List group</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/modal"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/modal">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Modal</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/navs"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/navs">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Navs</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/navbar"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/navbar">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Navbar</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/overlays"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/overlays">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Overlays</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/pagination"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink
                    className="menu-link"
                    to="/react-bootstrap/pagination"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Pagination</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/popovers"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/popovers">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Popovers</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/progress"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/progress">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Progress</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/spinners"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/spinners">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Spinners</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/table"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/table">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Table</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/tabs"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/tabs">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Tabs</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/tooltips"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/tooltips">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Tooltips</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/toasts"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/toasts">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Toasts</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}
              </ul>
            </ul>
          </div>
        </li>
        {/*end::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/exam")}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/exam">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Devices/Diagnostics.svg")}
              />
            </span>
            <span className="menu-text">Шалгалт</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/grade")}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/grade">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Shopping/Chart-line1.svg")}
              />
            </span>
            <span className="menu-text">Улирлын дүн</span>
          </NavLink>
        </li>
        {/* Applications */}
        {/* begin::section */}
        <li className="menu-section ">
          <h4 className="menu-text">Цахим хичээл</h4>
          <i className="menu-icon flaticon-more-v2"></i>
        </li>
        {/* end:: section */}

        {/* eCommerce */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/e-commerce"
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/e-commerce">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Media/Movie-Lane2.svg")}
              />
            </span>
            <span className="menu-text">Цахим хичээл</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive("/archive")}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/archive">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl(
                  "/media/svg/icons/Communication/Archive.svg"
                )}
              />
            </span>
            <span className="menu-text">Файлын сан</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive("/e-test")}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/e-test">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Design/PenAndRuller.svg")}
              />
            </span>
            <span className="menu-text">Цахим шалгалт</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/* Custom */}
        {/* begin::section */}
        <li className="menu-section ">
          <h4 className="menu-text">Нэмэлт</h4>
          <i className="menu-icon flaticon-more-v2"></i>
        </li>
        {/* end:: section */}

        {/* Error Pages */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/invoice")}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/invoice">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Money.svg")} />
            </span>
            <span className="menu-text">Төлбөр</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive("/food")}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/food">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl(
                  "/media/svg/icons/Cooking/Fork-spoon-knife.svg"
                )}
              />
            </span>
            <span className="menu-text">Хоол</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive("/bus")}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/bus">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Map/Direction2.svg")} />
            </span>
            <span className="menu-text">Автобус</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive("/research")}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/research">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Design/PenAndRuller.svg")}
              />
            </span>
            <span className="menu-text">Судалгаа</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}
      </ul>

      {/* end::Menu Nav */}
    </>
  );
}
