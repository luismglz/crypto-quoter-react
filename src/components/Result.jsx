import styled from "@emotion/styled"
import { hydrate } from "react-dom";

const ResultContainer = styled.div`
  color: #FFF;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 30px;
`;

const Text = styled.p`
  font-size: 18px;
  span{
    font-weight: 700;
  }
`;

const Price = styled.p`
  font-size: 28px;
  span{
    font-weight: 700;
    font-size: 32px;
  }
`;

const CryptoLogo = styled.img`
  display: block;
  width: 120px;
`;

const Result = ({result}) => {
  

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = result;


  return (
    <ResultContainer>
      <CryptoLogo src={`https://cryptocompare.com/${IMAGEURL}`}/>
      <div>
        <Price>The price is: <span>{PRICE}</span></Price>
        <Text>Highest price of the day: <span>{HIGHDAY}</span></Text>
        <Text>Lowest price of the day: <span>{LOWDAY}</span></Text>
        <Text>Last 24 h variation: <span>{CHANGEPCT24HOUR}</span></Text>
        <Text>Last update: <span>{LASTUPDATE}</span></Text>
      </div>
    </ResultContainer>
  )
}

export default Result