import { useParams } from "react-router-dom";
function Stock(props) {
  console.log("props", props);
  const { stock_id } = useParams();

  return (
    <>
      <p>{stock_id}</p>
    </>
  );
}

export default Stock;

// stock symbol
// full company name
// primary exchange
// latest price
// 52 week high price
// 52 week low price
// market cap
