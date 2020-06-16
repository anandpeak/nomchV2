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
            "/homework"
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/homework">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl(
                  "/media/svg/icons/Communication/Clipboard-check.svg"
                )}
              />
            </span>
            <span className="menu-text">Гэрийн даалгавар</span>
          </NavLink>
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
