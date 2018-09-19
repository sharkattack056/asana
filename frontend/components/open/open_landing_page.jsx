import React from "react";
import { connect } from "react-redux";
import SvgUtil from "../../util/svg_util";

import { logout } from "../../actions/session_actions";
import { setSelectedLink } from "../../actions/open_landing_page_actions";
import { openModal } from "../../actions/modal_actions";
import { toggleSidebar } from "../../actions/sidebar_actions";

import AppSidebar from "./app_sidebar";
import Index from "./index";

const OpenLandingPage = (props) => {
  let menuButton;
  let sidebarClass;
  let contentClass;

  if (props.sidebar) {
    sidebarClass = "app-sidebar-show";
    contentClass = "content-closed";
    menuButton = null;
  } else {
    sidebarClass = "app-sidebar-hide";
    contentClass = "content-open";
    menuButton = SvgUtil.renderMenuButton("open-menu", props.toggleSidebar);
  }

  return (
    <div className="open-landing-page">
      <AppSidebar
        setSelectedLink={ props.setSelectedLink }
        openModal={ props.openModal }
        toggleSidebar={ props.toggleSidebar }
        class={ sidebarClass } />
      <div className={ `content-container ${ contentClass }` }>
        <div className="app-header">
          <div className="left-header">
            { menuButton }
            <h1 id="app-location">{ props.selectedLink }</h1>
          </div>
          <div className="right-header">
            <button onClick={ props.logout }>Log Out</button>
          </div>
        </div>
        <div className="app-content">
          <Index />
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    selectedLink: state.ui.openLandingPage.selectedLink,
    sidebar: state.ui.sidebar.show
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      return dispatch(logout());
    },
    setSelectedLink: (link) => {
      return dispatch(setSelectedLink(link));
    },
    openModal: (modal) => {
      return dispatch(openModal(modal));
    },
    toggleSidebar: () => {
      return dispatch(toggleSidebar());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenLandingPage);
