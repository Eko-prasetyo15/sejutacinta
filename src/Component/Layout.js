import React from "react";
import PropTypes from "prop-types";
// import { Container } from "reactstrap";
import Header from "./Header"
// import Footer from "./Footer";
// import 'bootstrap/dist/css/bootstrap.min.css';

const propTypes = {
    children: PropTypes.node.isRequired,
};

const defaultProps = {};

export default function Component(props) {
    const { children } = props;

    return (
        <div className="container">
            <Header className="mb-3"/>
            <div className="section" style={{}}>{children}</div>
            {/* <Footer /> */}
        </div>
    );
}

Component.propTypes = propTypes;
Component.defaultProps = defaultProps;