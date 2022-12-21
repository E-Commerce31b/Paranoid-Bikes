import { Link } from "react-router-dom";

const ProductCard = ({ category }) => {
  const color = `rgba(255, 255, 255, 1)`;

  return (
    <Link to={`/list/${category}`}>
      <div
        style={{
          borderRadius: 5,
          backgroundColor: `${color}`,
          margin: 10,
          height: 260,
          width: 390,
          borderWidth: 2,
          borderColor: "black",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <img
          src={require(`../assets/${category}_bike.jpeg`)}
          alt="Img not found"
          style={{ width: "50%", height: "60%" }}
        />
        <div style={{ font: "Audiowide", fontSize: 24, width: "40%" }}>
          {category}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
