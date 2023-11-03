'use client'

import '../globals.css'
import css from './about.module.css'
import {useEffect} from "react";
import {BsPencil} from "react-icons/bs";
import {FiFacebook, FiInstagram} from "react-icons/fi";


export default function About() {




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
        document.querySelectorAll(`[data-inviewport]`).forEach(el => {
            observer.observe(el, observerOpt)
        })
    }, [])


    return (
        <main id={'scrollArea'} className={css.container}>
            <div className={css.headerLogo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
                    <path fill="currentColor"
                          d="M6 15h2.4q.475 0 .813-.338t.337-.812v-3.7q0-.475-.338-.813T8.4 9H6v6Zm1.15-1.15v-3.7H8.4v3.7H7.15ZM10.875 15l2.45-.025V13.85h-2.05v-1.3h1.3V11.4h-1.3v-1.25h2.05V9h-2.45q-.325 0-.537.212t-.213.538v4.5q0 .325.213.537t.537.213Zm5.15-.025q.325 0 .563-.213t.312-.537L18.3 9h-1.2l-1.075 4.1L14.95 9h-1.2l1.4 5.225q.075.325.313.538t.562.212ZM5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Zm0-2h14V5H5v14ZM5 5v14V5Z"/>
                </svg>
            </div>
            <header className={css.header} data-inviewport={'fade-in'}>
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
