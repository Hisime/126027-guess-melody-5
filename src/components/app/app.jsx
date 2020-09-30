import React from "react";
import propTypes from "prop-types";
import {Welcome} from "../welcome/welcome";

export const App = (props) => {
  const {errorsCount} = props;
  return <Welcome errorsCount = {errorsCount}/>;
};

App.propTypes = {
  errorsCount: propTypes.number.isRequired
};
