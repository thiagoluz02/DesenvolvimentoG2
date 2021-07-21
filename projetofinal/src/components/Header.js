import React, { Component } from "react";
import { formatNumber } from "./helpers/formatHelpers";

import css from "./module.css";

export default class Header extends Component {
  // handleInputChange=(evt)=>{
  //     // console.log(evt.target.value)
  //     const newText = evt.target.value
  //     this.props.onChangeFilter(newText)
  // };

  componentDidMount() {
    this.textInput.focus();
  }
  render() {
    const {
      filter,
      countryCount,
      totalPopulation,
      onChangeFilter,
    } = this.props;
    return (
      <div className={css.flexRow}>
        <div class="input-field col s12">
          <input
            className={css.centeredTitle}
            placeholder="País"
            type="text"
            ref={(element) => (this.textInput = element)}
            value={filter}
            onChange={onChangeFilter}
          />
        </div>{" "}
        <br></br>{" "}
        <span className={css.countries}>
          {countryCount > 1 ? "Países" : "País"} :{"  "}
          <strong>{countryCount}</strong>
        </span>{" "}
        <span className={css.separator}>|</span>{"  "}
        <span className={css.population}>
          População : <strong>{formatNumber(totalPopulation)} </strong>
        </span>
      </div>
    );
  }
}

// const styles= {
//   centeredTitle:{
//     textAlign: 'left',
//     color: 'blue',
//     fontFamily: 'Montserrat'

//   }
// }