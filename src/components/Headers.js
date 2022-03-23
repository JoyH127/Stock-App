function Headers({ change, companyName, latestPrice, symbol }) {
  return (
    <div className="stock">
      <h2>{symbol}</h2>
      <p>{companyName}</p>
      <div className="leftbox">
        <div className="latest">{latestPrice}</div>
        <div className={change > 0 ? "changeGreen" : "changeRed"}>{change}</div>
      </div>
    </div>
  );
}
export default Headers;
