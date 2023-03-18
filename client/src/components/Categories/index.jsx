import React, {Suspense} from 'react'
import useNearScreen from '../../CustomHooks/useNearScreen.jsx';
import Loader from '../Loader'

const Categories = React.lazy(
    () => import('./Categories.jsx')
)

export default function LazyCategories () {
    const {isNearScreen, fromRef} = useNearScreen();

    {/* <Suspense fallback={<Loader />}> */}        //conviene no envolver la app en Suspense, tener ctrol más granular, y fallbacks personalizados (incluso React Placeholders SVG)
    return (
        <div ref={fromRef}>
                {isNearScreen ? <Categories /> : <Loader />}
            {/* </Suspense> */}
        </div>
    )
}
