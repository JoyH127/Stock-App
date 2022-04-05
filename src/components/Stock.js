import { useParams } from "react-router-dom";
function Stock(props) {
  console.log("props", props);
  const arr = [];
  arr.push(props);
  console.log("array", arr[0][3]);

  const size = Object.keys(arr[0]).length;
  const { stock_id } = useParams();
  // this line can help you to access the object value
  // if you have object object results come out.
  const data = Object.values(arr[0]);
  const store = [];
  const renderData = data.map((stock) => {
    if (stock.symbol === stock_id) {
      return store.push(stock);
    }
  });
  console.log(store[0].symbol);

  return (
    <div>
      <h3>{store[0].symbol}</h3>
      <p>{store[0].companyName}</p>
      <p>${store[0].change}</p>
      <p>{store[0].latest}</p>
      <p>latest Price: ${store[0].latestPrice}</p>
      <p>week52 High: ${store[0].week52High}</p>
      <p>week52 Low: ${store[0].week52Low}</p>
      <p>Primary exchaage: {store[0].primaryExchange}</p>
    </div>
  );
}

// {data.map((stock) => {
//   if (stock.symbol === stock_id) {
//     const {
//       symbol,
//       companyName,
//       change,
//       latest,
//       latestPrice,
//       week52High,
//       week52Low,
//       primaryExchange,
//     } = stock;
//     return(<>
// <h2>{symbol}<h2/>
// <p>{companyName}</p>
// <p>{change}</p>
// <p>{latest}</p>
// <p>{latestPrice}</p>
// <p>{week52High}</p>
// <p>{week52Low}</p>
// <p>{primaryExchange}</p>

//     )
//   })}

export default Stock;

// stock symbol
// full company name
// primary exchange
// latest price
// 52 week high price
// 52 week low price
// market cap
