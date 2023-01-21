import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProductsByCategory } from "../redux/slices/products.js";

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getProductsByCategory(category));
    navigate(`/list/${category}`);
  };

  return (
    <button
      className="cardstyles flex is-flex-direction-row is-justify-content-space-around is-align-items-center is-rounded has-background-white"
      onClick={handleClick}
      style={{
        margin: 10,
        height: 260,
        width: 390,
      }}
    >
      <img
        src={require(`../assets/${category}_bike.jpeg`)}
        alt="Img not found"
        style={{ width: "50%", height: "60%" }}
      />
      <div
        style={{
          font: "Audiowide",
          fontSize: 24,
          width: "40%",
          textTransform: "uppercase",
        }}
      >
        {category}
      </div>
    </button>
  );
};

export default CategoryCard;
