import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProductsByCategory } from "../../redux/slices/products.js";
import './CategoryCard.css'

export const CategoryCard = ({ category }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(category)
  const handleClick = () => {
    dispatch(getProductsByCategory(category));
    navigate(`/list/${category}`);
  };

  return (
    <>
    {category === 'road' ?
      <div className='category_container'>
        <div className="category_description_container">
          <p className='category_description'>
            Whether it's for peaceful road trips
          </p>
          <button onClick={() => handleClick()} className='category_button road'>Road bikes</button>
        </div>
        <div className="category_image_container">
          <img src={require(`../../assets/${category}_landscape-min.jpeg`)} alt='backgroundImage' className="category_image" />
        </div>
      </div>
    : category === 'mountain' ?
    <div className='category_container'>
      <div className="category_image_container">
        <img src={require(`../../assets/${category}_landscape.jpeg`)} alt='backgroundImage' className="category_image" />
      </div>
        <div className="category_description_container">
          <p className='category_description'>
            thrilling mountain adventures
          </p>
        <button onClick={() => handleClick()} className='category_button mountain'>Mountain bikes</button>
        </div>
    </div>
    : 
    <div className='category_container'>
      <div className="category_description_container">
        <p className='category_description'>
        or vibrant urban bike rides
        </p>
      <button onClick={() => handleClick()}  className='category_button urban'>Urban bikes</button>
      </div>

      <div className="category_image_container">
        <img src={require(`../../assets/${category}_landscape-min.jpeg`)} alt='backgroundImage' className="category_image" />
      </div>
    </div>}
    </>
  );
};