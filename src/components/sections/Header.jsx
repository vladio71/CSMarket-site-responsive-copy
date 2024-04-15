import css from "@/components/layouts/FoodPage/food.module.css";

export function Header({
    arrowText,
    heading,
    imageText,
    imgSrc,
    isAnimationCanceled,
    children
}) {

    return (
        <>
            <header>
                <div className={css.HeaderHours}>
                    <div className={css.Header_caption}>
                        {arrowText}
                    </div>
                    <p>
                        {children}
                    </p>
                </div>

                <div className={css.HeaderNameAndPhoto}>
                    <div>
                        {heading}
                    </div>
                    <div>
                        <img alt={''}
                             style={isAnimationCanceled ? {
                                 animation: "none",
                                 opacity: 1
                             } : {}}
                             src={imgSrc}/>
                        <div className={css.HeaderPhotoCaption}>
                            {imageText}
                        </div>
                    </div>


                </div>
            </header>

        </>
    )
}