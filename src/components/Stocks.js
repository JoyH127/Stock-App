import { useState, useEffect } from "react";
import axios from "axios";
import { CLIENT_URL } from "../services/constants";
import Headers from "./Header";
function Stocks() {
  const [stocks, setStocks] = useState([]);

  const TOKEN = "/quote?token=pk_194d66f4bdde414eabebad40c2819297";
  useEffect(() => {
    const symbols = "fb";
    const fetchData = async () => {
      try {
        const response = await axios.get(`${CLIENT_URL}${symbols}${TOKEN}`);
        const result = [];
        result.push(response.data);

        console.log(result);
        setStocks(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
