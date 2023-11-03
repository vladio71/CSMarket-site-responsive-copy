import '../globals.css'
import css from './food.module.css'
import {useEffect, useRef, useState} from "react";
import Footer from "../Components/Footer";
import AnimatedSection from "../Components/AnimatedSection";
import ModalNavigation from "../Components/ModalNavigation";


export default function FoodPage() {

    const [showOverlayId, setShowOverlayId] = useState(-1)
    const [animating, setAnimating] = useState(false)
    const overlay = useRef(null)
    const secondOverlay = useRef(null)


    const urlArr = ["https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1600", "https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/7441761/pexels-photo-7441761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/17593640/pexels-photo-17593640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/12077972/pexels-photo-12077972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]

    useEffect(() => {

        const node = animating ? secondOverlay.current : overlay.current

        if (showOverlayId >= 0) {
            node.style.top = `${getRandomInt(50)}%`
            node.style.left = `${getRandomInt(80)}%`
            node.style.opacity = 1
            node.style.backgroundImage = `url(${urlArr[showOverlayId]})`
        } else {
            setAnimating(!animating)
            secondOverlay.current.style.opacity = 0
            overlay.current.style.opacity = 0
        }


    }, [showOverlayId])

    function handleMouseEnter(id) {
        setShowOverlayId(id)
    }

    function handleMouseLeave() {
        setShowOverlayId(-1)
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }


    return (

        <main className={css.Container}>
            <header>
                <div className={css.HeaderHours}>
                    <div className={css.Header_caption}>
                        Food
                    </div>
                    <span>
                Food Hall Hours:<br/>
                Mon – Sun: 11:00AM - 8:00PM
                </span>
                </div>

                <div className={css.HeaderNameAndPhoto}>
                    <div>
                        The Food Hall
                    </div>
                    <div>
                        <img alt={''}
                             src={"https://images.pexels.com/photos/8951199/pexels-photo-8951199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
                        <div className={css.HeaderPhotoCaption}>
                            餐饮
                        </div>
                    </div>

                </div>

            </header>
            <section className={css.ProductsGrid}>
                <div className={css.pointer}
                     onMouseEnter={() => handleMouseEnter(0)}
                     onMouseLeave={handleMouseLeave}
                >
                    <div className={css.ProductCaption}>
                        Khao Man Gai
                    </div>
                    <div className={css.ProductName}>
                        Betong
                    </div>
                </div>
                <div className={css.pointer}
                     onMouseEnter={() => handleMouseEnter(1)}
                     onMouseLeave={handleMouseLeave}
                >
                    <div className={css.ProductCaption}>
                        Coffee, Pastries & Smoothies
                    </div>
                    <div className={css.ProductName}>
                        Chinatown Deli
                    </div>
                </div>
                <div className={css.pointer}
                     onMouseEnter={() => handleMouseEnter(2)}
                     onMouseLeave={handleMouseLeave}
                >
                    <div className={css.ProductCaption}>
                        Artisanal Chocolates
                    </div>
                    <div className={css.ProductName}>
                        Daniel Corpuz Chocolatier
                    </div>
                </div>

                <div className={css.pointer}>
                    <div className={css.ProductCaption}>
                        Napoli Style Pizza
                    </div>
                    <div className={css.ProductName}>
                        Enzo Bruni La Pizza Gourmet
                    </div>
                </div>
                <div className={css.pointer}>
                    <div className={css.ProductCaption}>
                        Chinese Classics
                    </div>
                    <div className={css.ProductName}>
                        Joe&apos;s Rice and Noodles
                    </div>
                </div>
                <div className={css.pointer}
                     onMouseEnter={() => handleMouseEnter(3)}
                     onMouseLeave={handleMouseLeave}
                >
                    <div className={css.ProductCaption}>
                        Cantonese Steamed Rice Rolls
                    </div>
                    <div className={css.ProductName}>
                        Joe&apos;s Steam Rice Roll
                    </div>
                </div>

                <div className={css.pointer}>
                    <div className={css.ProductCaption}>
                        Delicious Filipino Classics
                    </div>
                    <div className={css.ProductName}>
                        Kabisera
                    </div>
                </div>
                <div className={css.pointer}
                     onMouseEnter={() => handleMouseEnter(4)}
                     onMouseLeave={handleMouseLeave}
                >
                    <div className={css.ProductCaption}>
                        Bingsoo Sundaes & Bubble Tea
                    </div>
                    <div className={css.ProductName}>
                        Lazy Sundaes
                    </div>
                </div>
                <div className={css.pointer}
                     onMouseEnter={() => handleMouseEnter(5)}
                     onMouseLeave={handleMouseLeave}
                >
                    <div className={css.ProductCaption}>
                        Sushi, Handrolls & Chirashi
                    </div>
                    <div className={css.ProductName}>
                        Mastunori
                    </div>
                </div>

                <div className={css.pointer}
                     onMouseEnter={() => handleMouseEnter(6)}
                     onMouseLeave={handleMouseLeave}
                >
                    <div className={css.ProductCaption}>
                        Filipino Inspired Taqueria
                    </div>
                    <div className={css.ProductName}>
                        Mucho Sarap
                    </div>
                </div>

                <div ref={overlay} className={css.PhotoOverlay}/>
                <div ref={secondOverlay} className={css.PhotoOverlay}/>
            </section>

            <AnimatedSection>
                <svg height="153px" width="153px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" xmlSpace="preserve"
                     fill="#000000">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g>
                            <path style={{fill: "#E6E6E6"}}
                                  d="M21.737,28H3.263c-2.226,0-3.797-2.227-3.093-4.384l0,0C1.459,19.665,2.922,17,7,17h11 c4.078,0,5.541,2.665,6.83,6.616l0,0C25.534,25.773,23.962,28,21.737,28z"></path>
                            <path style={{fill: "#455560"}}
                                  d="M24.959,25.149C24.735,26.713,23.428,28,21.737,28H3.263c-1.691,0-2.998-1.287-3.222-2.851 C0.019,25.154,0,25.17,0,25.199v16.558C0,44.652,2.348,47,5.243,47h14.513C22.652,47,25,44.652,25,41.757V25.199 C25,25.17,24.981,25.154,24.959,25.149z"></path>
                            <ellipse style={{fill: "#D75A4A"}} cx="12.5" cy="22.5" rx="5.5" ry="2.5"></ellipse>
                            <path style={{fill: "#E6E6E6"}}
                                  d="M33.737,12H15.263c-2.226,0-3.797-2.227-3.093-4.384l0,0C13.459,3.665,14.922,1,19,1h11 c4.078,0,5.541,2.665,6.83,6.616l0,0C37.534,9.773,35.962,12,33.737,12z"></path>
                            <ellipse style={{fill: "#D75A4A"}} cx="24.5" cy="6.5" rx="5.5" ry="2.5"></ellipse>
                            <path style={{fill: "#E6E6E6"}}
                                  d="M47.83,23.616L47.83,23.616C46.541,19.665,43.078,17,39,17H27c-3.248,0-1.836,1.695-3,4.381 c0.297,0.685,0.568,1.432,0.83,2.235v0c0.419,1.283,0.02,2.58-0.83,3.429C24.579,27.624,25.362,28,26.263,28h18.474 C46.962,28,48.534,25.773,47.83,23.616z"></path>
                            <g>
                                <path style={{fill: "#38454F"}}
                                      d="M47.959,25.149C47.735,26.713,46.428,28,44.737,28H26.263c-0.454,0-0.878-0.099-1.263-0.265v14.021 c0,1.145-0.377,2.196-1,3.059C24.952,46.133,26.493,47,28.243,47h14.513C45.652,47,48,44.652,48,41.756V25.199 C48,25.17,47.981,25.154,47.959,25.149z"></path>
                            </g>
                            <path style={{fill: "#38454F"}}
                                  d="M18,17c3.248,0,4.836,1.695,6,4.381C25.164,18.695,23.752,17,27,17h10V9.199 c0-0.028-0.019-0.044-0.041-0.05C36.735,10.713,35.428,12,33.737,12H15.263c-1.691,0-2.998-1.287-3.222-2.851 C12.019,9.154,12,9.17,12,9.199V17H18z"></path>
                            <ellipse style={{fill: "#D75A4A"}} cx="35.5" cy="22.5" rx="5.5" ry="2.5"></ellipse>
                            <path style={{fill: "#546A79"}}
                                  d="M5,44c-0.552,0-1-0.447-1-1v-6c0-0.553,0.448-1,1-1s1,0.447,1,1v6C6,43.553,5.552,44,5,44z"></path>
                            <path style={{fill: "#546A79"}}
                                  d="M5,34.997c-0.552,0-1-0.447-1-1V31c0-0.553,0.448-1,1-1s1,0.447,1,1v2.997 C6,34.55,5.552,34.997,5,34.997z"></path>
                            <path style={{fill: "#546A79"}}
                                  d="M30,44c-0.552,0-1-0.447-1-1v-6c0-0.553,0.448-1,1-1s1,0.447,1,1v6C31,43.553,30.552,44,30,44z"></path>
                            <path style={{fill: "#546A79"}}
                                  d="M30,34.997c-0.552,0-1-0.447-1-1V31c0-0.553,0.448-1,1-1s1,0.447,1,1v2.997 C31,34.55,30.552,34.997,30,34.997z"></path>
                        </g>
                    </g>
                </svg>
            </AnimatedSection>

           <Footer/>

        </main>
    )


}