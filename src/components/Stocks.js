import { useState, useEffect } from "react";
import axios from "axios";
import { CLIENT_URL } from "../services/constants";
import Headers from "./Headers";

function Stocks() {
  const [stocks, setStocks] = useState([]);
  // const [company, setCompany] = useState([]);
  const symbols = ["fb", "snap", "spy"];
  const TOKEN = "/quote?token=pk_194d66f4bdde414eabebad40c2819297";
  useEffect(() => {
    const fetchData = async (company) => {
      try {
        const response = await axios.get(`${CLIENT_URL}${company}${TOKEN}`);
        const result = [];
        result.push(response.data);

        console.log(result);
        setStocks((prevState) => prevState.concat(result));
      } catch (error) {
        console.log(error);
      }
    };
    const iterate = symbols.map(fetchData);
  }, []);

  // useEffect(() => {
  //   const fetchCompany = async () => {
  //     const companyData = await Promise.all(
  //       ["fb", "snap", "spy"].map(fetchData)
  //     );
  //     setCompany((prevState) => prevState.concat(companyData));
  //   };
  //   fetchCompany();
  // }, []);

  return (
    <div>
      <div>
        {(stocks || []).map((stock, index) => {
          const { changePercent, companyName, latestPrice, symbol } = stock;
          return (
            <Headers
              changePercent={changePercent}
              companyName={companyName}
              latestPrice={latestPrice}
              symbol={symbol}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Stocks;
