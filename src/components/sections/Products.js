import usePreloadImages from "@/hooks/usePreloadImages";
import {useRef} from "react";
import useRandomPositionImageHover from "@/hooks/useRandomPositionImageHover";
import css from "@/components/layouts/FoodPage/food.module.css";

export function Products({products}) {

    usePreloadImages(products.map(({url}) => url))
    const overlay = useRef(null)
    const secondOverlay = useRef(null)
    const {
        handleMouseEnter,
        handleMouseLeave
    } = useRandomPositionImageHover(overlay, secondOverlay, products.map(({url}) => url))

    return (
        <section className={css.ProductsGrid}>
            {products.map((product, id) => {

                return <div key={id} className={css.pointer}
                            onMouseEnter={() => handleMouseEnter(id)}
                            onMouseLeave={handleMouseLeave}>
                    <div className={css.ProductCaption}>
                        {product.caption}
                    </div>
                    <div className={css.ProductName}>
                        {product.name}
                    </div>
                </div>
            })}
            <div ref={overlay} className={css.PhotoOverlay}/>
            <div ref={secondOverlay} className={css.PhotoOverlay}/>
        </section>
    )
}