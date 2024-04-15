import foodCss from "../FoodPage/food.module.css";
import aboutCss from "../About/about.module.css";
import css from "./community.module.css"
import Footer from "../../sections/Footer";
import AnimatedSection from "../../sections/AnimatedSection";
import {Header} from "@/components/sections/Header";
import MusicSvg from "@/components/layouts/CommunityPage/musicSvg";



export default function CommunityPage({isFirstRender}) {


    return (

        <main className={foodCss.Container}>

            <Header
                arrowText={"Community"}
                heading={"Canal St. Community"}
                imageText={"文化"}
                imgSrc={"https://images.pexels.com/photos/6151959/pexels-photo-6151959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                isAnimationCanceled={!isFirstRender}
            >
                <>
                    Our mixed-use space hosts<br/>
                    ongoing events, podcasts<br/>
                    & artists in residence<br/>
                </>
            </Header>


            <section className={css.EventsGrid}>
                <h2>
                    Market Events
                </h2>
                <div className={css.EventsRow}>
                    <div className={css.firstRowElement}>
                        <div className={css.EventsItemCaption}>
                            09/21 (past)
                        </div>
                        <div className={css.EventsItemText}>
                            Small Business Retail Pop Up Weekend!
                        </div>
                    </div>
                    <div className={`${css.firstRowElement} ${css.empty}`}></div>
                    <div className={`${css.firstRowElement} ${css.empty}`}></div>
                    <div className={css.firstRowElement}>
                        <div className={css.EventsItemCaption}>
                            02/07 (past)
                        </div>
                        <div className={css.EventsItemText}>
                            New Balance x Paperboy Paris by Greenhouse @ Canal Street Market
                        </div>

                    </div>
                </div>
                <div className={css.EventsRow}>
                    <div className={css.secondRowElement}>
                        <div className={css.EventsItemCaption}>
                            12/11 (past)
                        </div>
                        <div className={css.EventsItemText}>
                            Hack City 12/11
                        </div>

                    </div>
                    <div className={`${css.secondRowElement}  ${css.empty}`}></div>
                    <div className={`${css.secondRowElement}  ${css.empty}`}></div>
                    <div className={css.secondRowElement}>
                        <div className={css.EventsItemCaption}>
                            07/27 (past)
                        </div>
                        <div className={css.EventsItemText}>
                            Taiwanese Wave
                        </div>
                    </div>
                </div>
                <div
                    className={`button ${aboutCss.EventsButton} ${css.fullWidthButton}`}>
                    view all
                </div>
            </section>


            <section className={css.FeaturesGrid}>
                <h2>
                    Features
                </h2>
                <div>
                    <div
                        style={{backgroundImage: `url("https://images.pexels.com/photos/3889827/pexels-photo-3889827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}
                        className={css.SingleFeatureImage}/>
                    <div className={css.SingleFeatureText}>
                        <span>
                            <span className={css.SingleFeatureInnerSpan}>
                            CSM Community - AMDC
                            </span>
                        </span>
                    </div>
                </div>
                <div>
                    <div
                        style={{backgroundImage: `url("https://images.pexels.com/photos/14332659/pexels-photo-14332659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}
                        className={css.SingleFeatureImage}/>
                    <div className={css.SingleFeatureText}>
                        <span>
                            <span className={css.SingleFeatureInnerSpan}>
                                CSM Community - Joe&apos;s Steam Rice Rolls
                            </span>
                        </span>
                    </div>
                </div>
                <div>
                    <div
                        style={{backgroundImage: `url("https://images.pexels.com/photos/7598560/pexels-photo-7598560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}
                        className={css.SingleFeatureImage}/>
                    <div className={css.SingleFeatureText}>
                        <span>
                            <span className={css.SingleFeatureInnerSpan}>
                                CSM Community - Bereop Tech
                            </span>
                        </span>
                    </div>
                </div>
                <div>
                    <div
                        style={{backgroundImage: `url("https://images.pexels.com/photos/5864800/pexels-photo-5864800.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")`}}
                        className={css.SingleFeatureImage}/>
                    <div className={css.SingleFeatureText}>
                        <span>
                            <span className={css.SingleFeatureInnerSpan}>
                                CSM Community - Izakaya
                            </span>
                        </span>
                    </div>
                </div>

            </section>


            <AnimatedSection
                isBottomAnimating={false}
                text={"Market Radio"}
                caption={"Podcasted from the market"}
            >
             <MusicSvg/>
            </AnimatedSection>

            <div style={{marginTop:"-6rem"}}>
                <div className={aboutCss.runningBorder}>
                    <div>
                        <div>10/29</div>
                        <div>S3E38: Sorry for the Weird Audio Asians</div>
                    </div>
                    <div>
                        <div>10/09</div>
                        <div>Challenge Cup MVP Kristen Hamilton and NC Courage&apos;s Tyler Lussi Interviews + Saying
                            Farewell to
                            USWNT Legends + NWSL Predictions
                        </div>
                    </div>
                    <div>
                        <div>05/22</div>
                        <div>Episode 13: Sarinya Srisakul</div>
                    </div>
                    <div
                        className={`button ${aboutCss.EventsButton} ${aboutCss.fullWidthButton} ${css.pageBackground}`}>
                        see all
                    </div>
                </div>
            </div>

            <Footer/>
        </main>
    )
}