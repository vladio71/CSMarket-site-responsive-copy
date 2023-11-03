import css from "../About/about.module.css";
import {FiFacebook, FiInstagram} from "react-icons/fi";
import {useEffect, useLayoutEffect, useRef, useState} from "react";


export default function ModalNavigation({navigate}) {


    const [isModalActive, setModalActive] = useState(false)
    const [unmountDelay, setUnmountDelay] = useState(false)
    const icon = useRef(null)
    const aboutDiv = useRef(null)
    const retailDiv = useRef(null)
    const foodDiv = useRef(null)
    const communitytDiv = useRef(null)
    const modal = useRef(null)
    const mounted = useRef(0)


    useEffect(() => {
        if (isModalActive)
            document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'visible'
        }
    }, [isModalActive])

    useLayoutEffect(() => {
        let timeoutId
        if (mounted.current < 2) {
            mounted.current++
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
            // setModalActive(!isModalActive)
            timeoutId = setTimeout(() =>{
                setModalActive(!isModalActive)
            }, 100)
        }
        return () => {
            clearTimeout(timeoutId)
        }
    }, [unmountDelay])

    function handleNavigate(id) {
        navigate(id)
        window.scrollTo(0, 0)

        const node = id === 1 ? aboutDiv : id === 2 ? foodDiv : id === 3 ? retailDiv : communitytDiv

        aboutDiv.current.style.display = 'none'
        foodDiv.current.style.display = 'none'
        retailDiv.current.style.display = 'none'
        communitytDiv.current.style.display = 'none'
        node.current.animate([
            {
                display: 'block',
            },
            {
                display: 'block',
                height: '100%',
                fontSize: '2rem',
                width: '100vw',
                padding: '80px 60px'
            },

        ], {
            duration: 200,
            iterations: 1,
            fill: "forwards"
        })
        setTimeout(() => {

            setUnmountDelay(!unmountDelay)
        }, 600)


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
                        <div ref={aboutDiv} onClick={() => handleNavigate(1)}>
                            <div>
                                About
                            </div>
                        </div>
                        <div ref={foodDiv} onClick={() => handleNavigate(2)}>
                            <div>
                                Food
                            </div>
                        </div>
                        <div ref={retailDiv} onClick={() => handleNavigate(3)}>
                            <div>
                                Retail
                            </div>
                        </div>
                        <div ref={communitytDiv} onClick={() => handleNavigate(4)}>
                            <div>
                                Community
                            </div>
                        </div>
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