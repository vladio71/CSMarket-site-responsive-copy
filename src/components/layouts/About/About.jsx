'use client'

import '../../../app/globals.css'
import css from './about.module.css'
import {useContext, useEffect, useState} from "react";
import {BsPencil} from "react-icons/bs";
import {FiFacebook, FiInstagram} from "react-icons/fi";
import Image from "next/image";
import AboutSvg from "@/components/svgs/aboutSvg";
import {AppContext} from "@/providers/contextProvider";


export default function About({isFirstRender}) {

    const context = useContext(AppContext);

    useEffect(() => {

        function inViewport(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(css.inViewport, entry.isIntersecting)
                }
            })

        }

        const observer = new IntersectionObserver(inViewport, {
            threshold: .2,
        })
        const observerOpt = {}
        document.querySelectorAll(`[data-inviewport="fade-in"]`).forEach(el => {
            observer.observe(el, observerOpt)
        })
        if (isFirstRender || window.innerWidth < 770) {
            document.querySelectorAll(`[data-delayed="fade-in"]`).forEach(el => {
                observer.observe(el, observerOpt)
            })
        } else {
            setTimeout(() => {
                document.querySelectorAll(`[data-delayed="fade-in"]`).forEach(el => {
                    observer.observe(el, observerOpt)
                })
            }, 1400)
        }

    }, [])



    console.log("context:" ,context.value)
     return (
        <main id={'scrollArea'} className={css.container}>
            {/*<div className={css.headerLogo}*/}
            {/*     data-inviewport={!isFirstRender ? "fade-in" : "false"}*/}
            {/*     // style={{*/}
            {/*     //     opacity: !isFirstRender ? 0 : 1*/}
            {/*     // }}*/}
            {/*    style={style}*/}
            {/*>*/}
            {/*    <AboutSvg cancelAnimation={!isFirstRender || context.value === ""}/>*/}
            {/*</div>*/}
            <header className={css.header} data-delayed={'fade-in'}>
                <h1>
                    Canal Street Market is a carefully curated retail market, food hall & community space open
                    year-round at 265 Canal Street. Support Small Business this weekend!
                </h1>
            </header>

            <section className={css.spaceBackground}
                     data-inviewport={'fade-in'}
            >
            </section>

            <section>
                <h2 className={css.heading}>
                    A New Kind of Market
                </h2>
                <div className={css.flexCards}>
                    <article data-inviewport={'fade-in'}>
                        <img alt={''}
                             src={"https://images.pexels.com/photos/6151959/pexels-photo-6151959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
                        <div>
                            Merging retail, food, art, and culture, Canal Street Market highlights top retail and design
                            concepts, restaurants, and up-and-coming players in the downtown New York City community.
                        </div>
                    </article>
                    <article data-inviewport={'fade-in'}>
                        <img alt={''}
                             src={"https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
                        <div>
                            Retail Market Hours:<br/>
                            Thursday – Sun: 11:00AM - 7:00PM
                        </div>
                    </article>
                    <article data-inviewport={'fade-in'}>
                        <img alt={''}
                             src={"https://images.pexels.com/photos/8951199/pexels-photo-8951199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
                        <div>
                            Food Hall Hours:<br/>
                            Mon – Sun: 11:00AM - 8:00PM
                        </div>
                    </article>

                </div>
            </section>
            <div className={css.flexEvents}>
                <div>活動</div>
                <div>Market Events</div>
                <div>活動</div>

            </div>
            <div className={css.runningBorder}>
                <div>
                    <div>09/21</div>
                    <div>Small Business Retail Pop Up Weekend!</div>
                </div>
                <div>
                    <div>02/07</div>
                    <div>New Balance x Paperboy Paris by Greenhouse @ Canal Street Market</div>
                </div>
                <div>
                    <div>12/11</div>
                    <div>Hack City 12/11</div>
                </div>
                <div className={`button ${css.EventsButton} ${css.fullWidthButton}`}>
                    see all
                </div>
            </div>

            <section className={css.LocationFlex}>
                <div className={css.roundRunningBorder}>
                    265 Canal St. New<br/> York, NY
                </div>
                <div className={css.roundRunningBorder}>

                    <Image src={"/images/location.png"} fill={true}/>
                </div>
            </section>
            <section>
                <div className={css.VendorSection}>
                    <div>
                        Interested in becoming a vendor?
                    </div>
                    <div className={`button ${css.fullWidthButton}`}>
                        click here
                    </div>

                </div>
                <div className={css.SocialLinksFlex}>
                    <div className={css.roundRunningBorder}>
                        <div className={css.icon}>
                            <BsPencil/>
                        </div>
                        <div>
                            Email Us
                        </div>
                    </div>
                    <div className={css.roundRunningBorder}>
                        <div className={css.icon}>
                            <FiFacebook/>
                        </div>
                        <div>
                            Follow us<br/>
                            on facebook
                        </div>
                    </div>
                    <div className={css.roundRunningBorder}>
                        <div className={css.icon}>
                            <FiInstagram/>
                        </div>
                        <div>
                            Follow us<br/>
                            on instagram
                        </div>
                    </div>
                </div>
                <div className={`${css.roundRunningBorder} ${css.footerEmail}`}>
                    <div>
                        Stay up to date<br/> with our newsletter
                    </div>
                    <div className={css.footerEmailInput}>
                        <input/>
                    </div>
                </div>
            </section>
            <footer className={css.footerFlex}>
                <div>
                    <span>Copyright Canal Street Market 2022</span>
                    <span className={css.pointer}>
                        <u>
                            Privacy Policy
                        </u>
                    </span>
                    <span className={css.pointer}>
                        <u>
                            Vendor Login
                        </u>
                    </span>
                </div>
                <div className={css.pointer}>
                    copied by Vladio
                </div>
            </footer>


        </main>
    )
}
