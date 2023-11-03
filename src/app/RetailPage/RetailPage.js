import css from "../FoodPage/food.module.css";
import Footer from "../Components/Footer";
import AnimatedSection from "../Components/AnimatedSection";
import {useEffect, useRef, useState} from "react";


export default function RetailPage() {


    const [showOverlayId, setShowOverlayId] = useState(-1)
    const [animating, setAnimating] = useState(false)
    const overlay = useRef(null)
    const secondOverlay = useRef(null)

    const products = [
        {
            caption: "Design Objects",
            name: "American Design Club",
            url: "https://images.pexels.com/photos/6624862/pexels-photo-6624862.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            caption: "Jewelry",
            name: "Beeshaus & Raum NYC",
            url: "https://images.pexels.com/photos/4735888/pexels-photo-4735888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            caption: "Jewelry",
            name: "Beroep Tech",
            url: "https://images.pexels.com/photos/15978343/pexels-photo-15978343.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            caption: "Bonsai Shop",
            name: "Dandy Farmer Bonsai Shop",
            url: "https://images.pexels.com/photos/10983783/pexels-photo-10983783.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            caption: "Fashion Apparel",
            name: "Friend Of A Friend Studio",
            url: "https://images.pexels.com/photos/1395306/pexels-photo-1395306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            caption: "Design Objects",
            name: "Leibal",
            url: "https://images.pexels.com/photos/6624862/pexels-photo-6624862.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            caption: "K Pop Apparel and Merchandise",
            name: "Mandu Apparel",
            url: "https://images.pexels.com/photos/4735888/pexels-photo-4735888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            caption: "Home Goods",
            name: "Mogutable",
            url: "https://images.pexels.com/photos/15978343/pexels-photo-15978343.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            caption: "Jewelry",
            name: "Mottive",
            url: "https://images.pexels.com/photos/10983783/pexels-photo-10983783.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            caption: "Newstand and Magazines",
            name: "Office Magazine Newstand",
            url: "https://images.pexels.com/photos/1395306/pexels-photo-1395306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            caption: "Fashion Apparel",
            name: "Preppy Trendy",
            url: "https://images.pexels.com/photos/6624862/pexels-photo-6624862.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            caption: "Sunglasses",
            name: "Savage Anchor",
            url: "https://images.pexels.com/photos/4735888/pexels-photo-4735888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            caption: "Jewelry",
            name: "Seven 50",
            url: "https://images.pexels.com/photos/15978343/pexels-photo-15978343.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            caption: "Sustainable lifestyle store",
            name: "Siizu",
            url: "https://images.pexels.com/photos/10983783/pexels-photo-10983783.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            caption: "Jewelry",
            name: "Swagychic",
            url: "https://images.pexels.com/photos/1395306/pexels-photo-1395306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
    ]


    useEffect(() => {

        const node = animating ? secondOverlay.current : overlay.current

        if (showOverlayId >= 0) {
            node.style.top = `${getRandomInt(50)}%`
            node.style.left = `${getRandomInt(80)}%`
            node.style.opacity = 1
            node.style.backgroundImage = `url(${products[showOverlayId].url})`
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
                        Retail
                    </div>
                    <span>
                        Retail Market Hours:<br/>
                        Thurs – Sun: 11:00AM - 7:00PM
                     </span>
                </div>

                <div className={css.HeaderNameAndPhoto}>
                    <div>
                        The Retail Market
                    </div>
                    <div>
                        <img alt={''}
                             src={"https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
                        <div className={css.HeaderPhotoCaption}>
                            購物
                        </div>
                    </div>

                </div>

            </header>
            <section className={css.ProductsGrid}>

                {products.map((product, id) => {

                    return <div className={css.pointer}
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


            <AnimatedSection>
                <div style={{
                    transform: 'rotate(-270deg)'
                }}>
                    <svg height="200px" width="200px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve"
                         fill="#000000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                             <g>
                                <path className="st0"
                                      d="M222.598,186.442c29.136,23.184,64.397,10.377,56.084-10.394c-41.721-15.548-58.381-67.814-40.19-87.473 c18.173-19.65,56.138,0.338,35.866-15.326c-20.256-15.662-55.515-2.857-69.274,20.549 C191.325,117.212,193.461,163.25,222.598,186.442z"></path>
                                <path className="st0"
                                      d="M312.038,160.099c33.338-15.939,30.544-70.172,9.025-80.789c-21.501-10.608-34.69-0.446-20.7,19.036 c18.404,23.236-18.03,51.821-35.1,44.978C265.262,143.324,278.683,176.047,312.038,160.099z"></path>
                                <path className="st0"
                                      d="M285.518,60.451c27.73-3.933,44.319,4.94,55.764,23.797c13.136-20.886-2.865-64.957-47.114-81.128 c-44.23-16.161-102.006,33.978-89.209,69.23C212.488,63.486,249.475,43.605,285.518,60.451z"></path>
                                <path className="st0"
                                      d="M129.509,238.655c10.804,7.716,51.208,20.54,85.969,31.718c34.744,11.177,69.95-12.353,68.49-50.193 c-105.387-7.013-105.174-84.608-99.602-107.346c-45.423-0.392-60.143,40.626-57.046,69.06 C130.631,212.152,118.118,230.512,129.509,238.655z"></path>
                                <path className="st0"
                                      d="M141.044,111.161c21.074-9.567,34.974-6.168,34.974-6.168s5.286-16.108,12.495-23.717 c-1.904-3.15-1.958-13.866-1.958-13.866s0.232-11.997,2.403-20.834c-18.013-8.428-56.744,7.556-58.933,11.035 C127.854,61.092,124.935,105.892,141.044,111.161z"></path>
                                <path className="st0"
                                      d="M414.044,126.13c-11-53.558-56.423-53.95-56.423-53.95s-0.552,13.243-7.476,19.597 c18.475,33.961-13.208,86.912-36.755,88.301c67.778,51.368,100.884-11.053,105.868-20.54 C424.278,150.052,416.02,139.995,414.044,126.13z"></path>
                                <path className="st0"
                                      d="M373.284,213.728c-15.218,6.025-51.332-5.402-69.719-21.492c-1.21,8.615-12.921,20.032-17.336,19.855 c14.346,10.643,22.302,43.83-12.264,68.393c8.276,13.625,54.981,16.126,85.204,5.659c4.913-1.709,18.351-27.65,23.94-43.233 C390.532,222.262,396.993,204.348,373.284,213.728z"></path>
                                <path className="st0"
                                      d="M259.958,92.045c-19.33,5.989-16.215,37.093,5.464,39.709c31.095-3.115,24.848-32.296,17.069-33.31 c-7.795-1.015,1.335,16.383-8.543,16.66c-11.712,0.302-16.766-7.957-10.804-14.239C267.968,95.783,269.142,89.598,259.958,92.045z"></path>
                                <path className="st0"
                                      d="M334.66,364.984c-49.267-20.682-83.957-10.51-107.381,4.743c3.329-7.093,6.426-13.972,9.185-20.415 c12.797-29.92,19.401-51.466,19.525-51.84l-23.441-7.52l-0.108,0.338c-1.21,3.906-13.117,41.044-34.512,83.228 c-7.138,14.097-15.431,28.692-24.598,42.842c11.089-30.792,23.851-63.116-12.424-98.535c-5.5,3.346-5.998,14.951-5.998,14.951 s-20.166-51.831-34.529-50.656c-14.364,1.184-39.479,56.023-14.454,87.937c-13.278-3.24-19.276,11.711-10.964,16.081 c7.938,4.183,57.278,39.861,60.784,55.097c-14.31,18.262-30.311,34.316-47.63,45.556c-6.016,3.898-8.224,12.264-4.967,18.68 c3.275,6.416,10.786,8.446,16.803,4.548c22.89-14.907,42.593-35.759,59.448-58.435c9.006-12.129,17.176-24.794,24.581-37.431 c61.958,36.79,105.424,16.5,109.98,6.746c4.912-10.519-17.71-4.326-17.71-4.326S355.164,377.034,334.66,364.984z"></path>
                            </g>
                        </g>
                    </svg>
                </div>
            </AnimatedSection>


            <Footer/>

        </main>

    )
}