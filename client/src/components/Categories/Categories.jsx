import { CategoryCard } from './CategoryCard.jsx';
import { useSelector } from "react-redux";

export default function Categories () {

    const categories = useSelector((state) => state.products.categories);

    return (
        <div>
            {categories?.map((c, i) => {
                return (
                    <div key={i}>
                    <CategoryCard category={c} />
                    </div>
                );
            })}
        </div>
    )
}