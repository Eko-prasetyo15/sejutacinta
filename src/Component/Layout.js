import React from "react";
import PropTypes from "prop-types";
import Header from "./Header"

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
        </div>
    );
}

Component.propTypes = propTypes;
Component.defaultProps = defaultProps;