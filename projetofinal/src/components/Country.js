import React, { Component } from "react";
import css from "./module.css";
import { formatNumber } from "./helpers/formatHelpers";

export default class Country extends Component {
  render() {
    const { country } = this.props;
    const { name, flag, population, capital } = country;
    return (
      <div className={`${css.border} ${css.country}`}>
          <img className={css.flag} src={flag} alt={name} />
    <span className={css.countryName}> {name}</span><span className={css.countryName}>{formatNumber(population)}</span><span className={css.countryName}>({capital})</span>
      </div>
    );
  }
}
