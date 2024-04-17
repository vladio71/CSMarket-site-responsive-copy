'use client'
import Link from "next/link";
import css from '../page.module.css'
import {createContext, useContext, useEffect, useMemo, useRef, useState} from "react";
import About from "../../components/layouts/About/About";
import FoodPage from "../../components/layouts/FoodPage/FoodPage";
import RetailPage from "../../components/layouts/RetailPage/RetailPage";
import CommunityPage from "../../components/layouts/CommunityPage/CommunityPage";
import ModalNavigation from "../../components/sections/ModalNavigation";
import {notFound, useParams, usePathname} from "next/navigation";
import {useRouter} from 'next/navigation'
import {AppContext} from "@/providers/contextProvider";
import AboutSvg from "@/components/svgs/aboutSvg";




export function getRoute(pathname) {
    return pathname.slice(1)

}

export function getBackground(route) {
    switch (route) {
        case "retail":
            return `var(--light-red)`
        case "food":
            return `var(--light-blue)`
        case "":
            return `white`
        case "community":
            return `var(--light-orange)`

    }
}

export default function Page() {
    const context = useContext(AppContext);
    const router = useRouter()
    const pathname = usePathname()
    const route = useRef(getRoute(pathname))
    const overlayRef = useRef()
    const mountRef = useRef(true)
    const [section, setSection] = useState(
        context.value !== null ? context.value : route.current
    )
    const isFirstRender = !!context.cancelAnimation


    useEffect(() => {
        if (!checkRoute()) {
            notFound()
        }
        if (context.value !== null) {
            setTimeout(() => {
                setSection(
                    route.current
                )
            }, 100)
            mountRef.current = false
        }

    }, [])


    function checkRoute() {
        let r = route.current
        return r === "retail" || r === "food" || r === "" || r === "community"
    }

    function handleChangeMainSection(segment) {
        if (segment !== section) {
            context.handlePreviousRoute(section)
            context.handleCancelAnimation(true)
            if (segment === "") {
                router.push("/")

            } else {
                router.push(segment)
            }
        }
    }


    const containerStyle = {
        background: getBackground(route.current)
    }

    const cancelAnimationStyle =
        useMemo(() =>
                isFirstRender ? {
                    animation: 'none',
                    opacity: 1
                } : {}
            , [isFirstRender])

    const navProps = {
        cancelAnimationStyle,
        handleChangeMainSection,
        section
    }


    return (
        <>
            <div className={css.containerOverlay} ref={overlayRef} style={containerStyle}></div>
            <main className={css.Maincontainer}>
                <ModalNavigation overlay={overlayRef}/>
                <nav className={css.fixedFlex}>
                    <NavigationPage
                        {...navProps}
                        route={""}
                        svg={() => <AboutSvg cancelAnimation={!!context.value}/>}
                    >
                        <About isFirstRender={isFirstRender}/>
                    </NavigationPage>
                    <NavigationPage
                        {...navProps}
                        route={"food"}
                        caption={"餐饮"}
                    >
                        <FoodPage isFirstRender={isFirstRender}/>
                    </NavigationPage>
                    <NavigationPage
                        {...navProps}
                        route={"retail"}
                        caption={"購物"}
                    >
                        <RetailPage isFirstRender={isFirstRender}/>
                    </NavigationPage>
                    <NavigationPage
                        {...navProps}
                        route={"community"}
                        caption={"文化"}
                    >
                        <CommunityPage isFirstRender={isFirstRender}/>
                    </NavigationPage>
                </nav>


            </main>
        </>
    )
}

function NavigationPage({
    handleChangeMainSection,
    section,
    cancelAnimationStyle,
    route,
    svg,
    caption,
    children,
}) {

    const context = useContext(AppContext);
    const svgDiv = useRef();

    const svgTransition = section === route ? {
        left: '3.5rem',
        position: "fixed",
        transform: 'scale(1)',
        opacity: !(!!context?.cancelAnimation)? 0 : 1
    }: {}
    return (
        <>
            <div onClick={() => handleChangeMainSection(route)}
                 className={`${section !== route || css.mainSection}`}
                 style={cancelAnimationStyle}
            >
                {svg &&
                    <div className={css.navSvg}
                         ref={svgDiv}
                         data-inviewport={!(!!context?.cancelAnimation) ? "fade-in" : "false"}
                        style={svgTransition}
                    >
                        {svg()}
                    </div>
                }
                {section === route ?
                    <>
                        {children}
                    </>
                    :
                    <>
                        <div className={css.navigationLayout}>

                            {caption &&
                                <p>
                                    {caption}
                                </p>
                            }
                            <div>
                                {route && route}
                            </div>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

