import { useNavigate } from "react-router-dom";
function Section({ change, companyName, latestPrice, symbol }) {
  const navigate = useNavigate();
  return (
    <div className="stock" onClick={() => navigate(`/${symbol}`)}>
      <h2>{symbol}</h2>
      <p>{companyName}</p>
      <div className="leftbox">
        <div className="latest">{latestPrice}</div>
        <div className={change > 0 ? "changeGreen" : "changeRed"}>{change}</div>
      </div>
    </div>
  );
}
export default Section;
