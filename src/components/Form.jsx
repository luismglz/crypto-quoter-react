import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useSelectCurrencies from "../hooks/useSelectCurrencies";
import { currencies } from '../data/currencies'


const InputSubmit = styled.input`
  background-color: #9497FF;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFF;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color .3s ease;
  margin-top: 30px;

  &:hover{
    background-color: #7A7DFE;
    cursor: pointer;
  }

`


const Form = () => {

  const [cryptos, setCryptos] = useState([]);

  const [currency, SelectCurrencies] = useSelectCurrencies('Select a currency', currencies);

  const [cryptocurrency, SelectCryptocurrencies] = useSelectCurrencies('Select a cryptocurrency', cryptos);

  useEffect(() => {
    const callAPI = async () => {
      const URL = `https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=10&tsym=${currency}`;

      const response = await fetch(URL);

      const result = await response.json()
      console.log(result);

      const topCryptos = result.Data.map(crypto => {
        const cryptoObj = {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName
        }
        return cryptoObj;
      })

      //setState with cryptos array
      setCryptos(topCryptos);
    }


    callAPI();
  }, [])

  

  return (
    <form>
      <SelectCurrencies />
      <SelectCryptocurrencies />
      <InputSubmit
        type="submit"
        value="Quote"
      />
    </form>
  )
}


export default Form