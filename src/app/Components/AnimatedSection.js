import css from "../FoodPage/food.module.css";

export default function AnimatedSection({
                                            children,
                                            text = "The Best of NYC",
                                            caption = "All under one roof!",
                                            isBottomAnimating = true,
                                        }) {


    const back = {
        backgroundImage: "linear-gradient(-45deg, transparent 67%, black 68%, transparent 25%),linear-gradient(45deg, transparent 65%, black 68%, transparent 35%)"
    }


    return (

        <section style={isBottomAnimating ? {} : back} className={css.AnimatedSection}>
            <div className={`${css.AnimatedSectionleftSushi}`}>
                <div className={css.ScaleSvg}>

                    {children}
                </div>
            </div>
            <div className={css.AnimatedText}>
                {text}
            </div>
            <div className={css.AnimatedCaption}>
                {caption}
            </div>
            <div className={css.AnimatedSectionRightSushi}>
                <div className={css.ScaleSvg}>

                    {children}
                </div>
            </div>
        </section>

    )
}