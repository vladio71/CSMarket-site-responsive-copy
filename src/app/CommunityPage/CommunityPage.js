import foodCss from "../FoodPage/food.module.css";
import aboutCss from "../About/about.module.css";
import css from "./community.module.css"
import Footer from "../Components/Footer";
import AnimatedSection from "../Components/AnimatedSection";
import ModalNavigation from "../Components/ModalNavigation";


export default function CommunityPage() {


    return (

        <main className={foodCss.Container}>
             <header>
                <div className={foodCss.HeaderHours}>
                    <div className={foodCss.Header_caption}>
                        Community
                    </div>
                    <span>
                    Our mixed-use space hosts<br/>
                    ongoing events, podcasts<br/>
                    & artists in residence<br/>
                 </span>
                </div>

                <div className={foodCss.HeaderNameAndPhoto}>
                    <div>
                        Canal St. Community
                    </div>
                    <div>
                        <img alt={''}
                             src={"https://images.pexels.com/photos/6151959/pexels-photo-6151959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
                        <div className={foodCss.HeaderPhotoCaption}>
                            文化
                        </div>
                    </div>

                </div>

            </header>

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
                <div style={{
                    transform: 'rotate(-90deg)'
                }}>

                    <svg fill="#000000" viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg" className="cf-icon-svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M16.417 9.583A7.917 7.917 0 1 1 8.5 1.666a7.917 7.917 0 0 1 7.917 7.917zm-2.828.124a5.09 5.09 0 1 0-8.688 3.599.396.396 0 0 0 .56-.56 4.298 4.298 0 1 1 6.078 0 .396.396 0 1 0 .56.56 5.056 5.056 0 0 0 1.49-3.599zm-2.992 2.097a2.966 2.966 0 1 0-4.194 0 .396.396 0 1 0 .56-.56 2.174 2.174 0 1 1 3.074 0 .396.396 0 0 0 .56.56zm-.661 2.8a.396.396 0 0 0-.396-.396h-.644v-3.55a1.03 1.03 0 1 0-.792 0v3.55H7.46a.396.396 0 1 0 0 .792h2.08a.396.396 0 0 0 .396-.396z"></path>
                        </g>
                    </svg>
                </div>
            </AnimatedSection>

            <div className={css.closerToTop}>
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