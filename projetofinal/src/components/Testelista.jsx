
import axios from 'axios';

 
const Testelista = axios.create({
  baseURL:'https://restcountries.eu/rest/v2/all' 
});

export default Testelista;
