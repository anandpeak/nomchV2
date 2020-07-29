/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import * as auth from "../../../../../app/modules/Auth/_redux/authRedux";

import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

class HeaderMenu extends React.Component {
    constructor(props) {
        super(props)

        console.log("headerProps = ", props)

        this.state = {
            students: props.students ? props.students : []
        }
    }

    componentWillReceiveProps = (nextProps) => {
        console.log('nextProps = ', nextProps)

        if (nextProps.students) {
            this.setState({ students: nextProps.students })
        }
    }

    changeStudent = (stuId) => {
        console.log('studentId = ', stuId)

        this.props.changeStudent(stuId);
    }

    renderStudentsList = () => {
        const { students } = this.state;

        let stuNames = [];

        students.forEach(stu => {
            stuNames.push(
                <li className={`menu-item menu-item-rel`} onClick={() => this.changeStudent(stu.studentId)}>
                    <div className="menu-link">
                        <span className="menu-text">{stu.firstName}</span>
                        {this.props.layoutProps.rootArrowEnabled && (<i className="menu-arrow" />)}
                    </div>
                </li>
            )
        });

        return stuNames;
    }

    render() {
        return <div
            id="kt_header_menu"
            className={`header-menu header-menu-mobile ${this.props.layoutProps.ktMenuClasses}`}
        // {...layoutProps.headerMenuAttributes}
        >
            {/*begin::Header Nav*/}
            <ul className={`menu-nav ${this.props.layoutProps.ulClasses}`}>
                {/*begin::1 Level*/}
                {this.renderStudentsList()}
            </ul>
            {/*end::Header Nav*/}
        </div>;
    }

}


const mapStateProps = (state) => {
    console.log('headState = ', state)
    return {
        students: state.auth.user.data ? state.auth.user.data.students : []
    }
};

export default connect(mapStateProps, auth.changeStudentActions)(HeaderMenu);

