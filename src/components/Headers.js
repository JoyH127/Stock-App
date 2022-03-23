function Headers({ changePercent, companyName, lastestPrice, symbol }) {
  return (
    <div>
      <h1>Stocks</h1>
      <div>changePercent:{changePercent}</div>
      <div>companyName: {companyName}</div>
      <div>lastestPrice:{lastestPrice}</div>
      <div>symbol:{symbol}</div>
    </div>
  );
}
export default Headers;
