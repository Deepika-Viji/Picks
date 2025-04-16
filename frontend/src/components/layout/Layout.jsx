import React, { useContext } from "react";
import { DigiContext } from "../../context/DigiContext";
import Header from "../header/Header";
import RightSidebar from "../sidebar/RightSidebar";
import MainSidebar from "../sidebar/MainSidebar";
import { Outlet } from "react-router-dom";
import RightSidebarButton from "../header/RightSidebarButton";
import ProfileRightSidebar from "../sidebar/right-sidebar/ProfileRightSidebar";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  const {
    isExpanded,
    layoutPosition,
    backgroundImageStyle,
    isNavExpanded,
    isRtl,
    isSmallScreen,
  } = useContext(DigiContext);

  return (
    <div
      className={`body-padding body-p-top ${
        isNavExpanded.isSmall && !isExpanded
          ? "expanded"
          : isExpanded && isNavExpanded.reset
          ? "expanded"
          : ""
      } ${isNavExpanded.reset && isExpanded ? "reset" : ""} ${
        layoutPosition.horizontal ? "overflow-hidden has-horizontal" : ""
      } ${
        layoutPosition.twoColumn ? "has-two-column-menu has-fixed-sidebar" : ""
      } ${layoutPosition.flush ? "overflow-hidden" : ""} ${
        layoutPosition.twoColumn && isExpanded && !isSmallScreen
          ? "has-two-column-menu expanded has-fixed-sidebar"
          : ""
      } ${
        isNavExpanded.hoverOpen && isNavExpanded.hover
          ? "overflow-hidden hover-menu"
          : ""
      } ${isRtl ? "rtl-view" : ""}
      `}
      style={backgroundImageStyle}
      dir={`${isRtl ? "rtl" : ""}`}
    >
      <Header />
      <RightSidebar />
      <ProfileRightSidebar />
      <RightSidebarButton />
      <MainSidebar />
      <ToastContainer />
      <Outlet />
    </div>
  );
};

export default Layout;
