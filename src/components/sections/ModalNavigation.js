import css from "../layouts/About/about.module.css";
import {FiFacebook, FiInstagram} from "react-icons/fi";
import {useContext, useEffect, useLayoutEffect, useRef, useState} from "react";
import {useParams, useRouter} from "next/navigation";
import {getBackground, getRoute} from "@/app/[[...section]]/page";
import {AppContext} from "@/providers/contextProvider";


export default function ModalNavigation({overlay}) {


    const [isModalActive, setModalActive] = useState(false)
    const [unmountDelay, setUnmountDelay] = useState(false)
    const context = useContext(AppContext);
    const router = useRouter()
    const params = useParams()
    const icon = useRef(null)
    const aboutDiv = useRef(null)
    const retailDiv = useRef(null)
    const foodDiv = useRef(null)
    const communitytDiv = useRef(null)
    const overlayRef = useRef(null)
    const modal = useRef(null)
    const mounted = useRef(false)
    const route = useRef(getRoute(params))


    useEffect(() => {
        if (isModalActive)
            document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'visible'
        }
    }, [isModalActive])

    useLayoutEffect(() => {
        let timeoutId
        if (!mounted.current) {
            setTimeout(() => mounted.current = true, 100)
        } else {
            icon.current.animate([
                {
                    transform: "translateX(0) scale(1)",
                    opacity: 1
                },
                {transform: `translateX(${isModalActive ? "-2rem" : "2rem"}) scale(0)`, opacity: 0},
            ], {
                duration: 500,
                iterations: 1,
            })
            timeoutId = setTimeout(() => {
                setModalActive(!isModalActive)
            }, 100)
        }

        return () => {
            clearTimeout(timeoutId)
        }
    }, [unmountDelay])

    function handleNavigate(section, node) {
        if (route.current === section) return
        window.scrollTo(0, 0)
        aboutDiv.current.style.zIndex = '-1'
        foodDiv.current.style.zIndex = '-1'
        retailDiv.current.style.zIndex = '-1'
        communitytDiv.current.style.zIndex = '-1'
        node.current.animate([
            {

                // display: 'block',
                zIndex: 1,
                height: '50%',
                width: '50%',
            },
            {
                height: '100%',
                width: '100%',
                zIndex: 1,
            },

        ], {
            duration: 300,
            iterations: 1,
            fill: "forwards"
        })

        const color = getBackground(section)
        setTimeout(() => {
            overlayRef.current.animate([
                {},
                {

                    background: color
                },

            ], {
                duration: 200,
                iterations: 1,
                fill: "forwards"
            })
        }, 300)


        setTimeout(() => {
            context.handleCancelAnimation(true)
            context.handlePreviousRoute(null)
            router.push(section)
        }, 500)

    }

    return (
        <>
            <nav className={css.mobileNav}
                 onClick={() => setUnmountDelay(!unmountDelay)}
            >
                <div>
                    <div ref={icon} style={{position: 'relative', zIndex: '100'}}>
                        {isModalActive ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                                <path fill="currentColor"
                                      d="M202.83 197.17a4 4 0 0 1-5.66 5.66L128 133.66l-69.17 69.17a4 4 0 0 1-5.66-5.66L122.34 128L53.17 58.83a4 4 0 0 1 5.66-5.66L128 122.34l69.17-69.17a4 4 0 1 1 5.66 5.66L133.66 128Z"/>
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                                <path fill="currentColor"
                                      d="M220 128a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4ZM40 68h176a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8Zm176 120H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8Z"/>
                            </svg>
                        }
                    </div>
                </div>
            </nav>
            <div>
                {isModalActive &&
                    <div ref={modal} className={css.ModalNavigation} onClick={(e) => e.stopPropagation()}>
                        <div className={css.ModalNavigationGrid}>
                            <div ref={aboutDiv} className={css.modalItem} onClick={() => handleNavigate("/", aboutDiv)}>
                            <span>
                                About
                            </span>
                            </div>
                            <div ref={foodDiv} className={css.modalItem}
                                 onClick={() => handleNavigate("food", foodDiv)}>
                            <span>
                                Food
                            </span>
                            </div>
                            <div ref={retailDiv} className={css.modalItem}
                                 onClick={() => handleNavigate("retail", retailDiv)}>
                            <span>
                                Retail
                            </span>
                            </div>
                            <div ref={communitytDiv} className={css.modalItem}
                                 onClick={() => handleNavigate("community", communitytDiv)}>
                            <span>
                                Community
                            </span>
                            </div>
                            <div style={{
                                position: "absolute",
                                background: "transparent",
                                bottom: '-400px',
                                height: '400px',
                                width: '100%',
                                animationTimingFunction: 'ease-in-out',
                                zIndex: 100
                            }} ref={overlayRef}/>
                        </div>
                        <div className={css.ModalNavigationInfo}>
                            <div className={`button ${css.fullWidthButton}`}>
                                become a vendor
                            </div>
                            <div>
                                265 Canal Street<br/>
                                New York, New York
                            </div>
                            <div>
                                Food Hall Hours:<br/>
                                Mon – Sun: 10AM- 10PM
                            </div>
                            <div>

                                Retail Market Hours:<br/>
                                Mon – Sat: 11AM- 7PM<br/>
                                Sun: 11AM-6PM
                            </div>
                            <div>
                                Email us
                            </div>
                            <div className={css.ModalNavigationInfo_SocialLinks}>
                                <div className={`${css.icon} ${css.ModalNavigationButton}`}>
                                    <FiInstagram/>
                                </div>
                                <div className={`${css.icon} ${css.ModalNavigationButton}`}>
                                    <FiFacebook/>
                                </div>


                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}