import React, { Component } from "react";
import { formatNumber } from "./helpers/formatHelpers";

import css from "./module.css";

export default class Header extends Component {
  //essa parte seria cabeçalho  poderia ter feito junto  mais como trabalho com botão
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
    if( !filter){
     
    }if(filter.value === 0 ){
      return<h4>Nenhum Pais Foi encontrado com esse filtro.</h4>;
    }
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
        <ul>
        <span className={css.separator}>|</span>{"  "}
        <span className={css.population}>
          População : <strong>{formatNumber(totalPopulation)} </strong>
        </span>
        </ul>
       
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