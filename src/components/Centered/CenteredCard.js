import "./index.css";
function Cardss(childen) {
  return (
    <div className="dad">
      <span>
        {" "}
        How does {childen.names} moves? They {childen.move}
        <br />
        Where does {childen.names} lives? In the {childen.local}
      </span>
    </div>
  );
}
export default Cardss;
