function Headers({ changePercent, companyName, latestPrice, symbol }) {
  return (
    <div className="stock">
      <h2>{symbol}</h2>
      <p>{companyName}</p>
      <div className="leftbox">
        <div className="latest">{latestPrice}</div>
        <div className="changePercent">{changePercent}</div>
      </div>
    </div>
  );
}
export default Headers;
