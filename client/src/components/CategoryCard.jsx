import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { getProductsByCategory } from '../redux/slices/products'

const CategoryCard = ({ category }) => {
  const color = `rgba(255, 255, 255, 1)`;

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleClick = (e) => {
        e.preventDefault();
        dispatch(getProductsByCategory(category))
        navigate(`/list/${category}`)
  }
  return (
      <button onClick={handleClick}
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
      </button>
  );
};

export default CategoryCard;
