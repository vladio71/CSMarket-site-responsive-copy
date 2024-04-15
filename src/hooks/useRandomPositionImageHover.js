import {useEffect, useState} from "react";


export default function useRandomPositionImageHover(overlay, secondOverlay, urlArr) {

    const [showOverlayId, setShowOverlayId] = useState(-1)
    const [animating, setAnimating] = useState(false)

    const handleMouseEnter = (id) => {
        setShowOverlayId(id)
    }

    const handleMouseLeave = () => {
        setShowOverlayId(-1)
    }


    useEffect(() => {

        const node = animating ? secondOverlay.current : overlay.current
        if (showOverlayId >= 0) {
            node.style.top = `${getRandomInt(45)}%`
            node.style.left = `${getRandomInt(80)}%`
            node.animate([
                {},
                {
                    opacity: 1
                },

            ], {
                duration: 600,
                iterations: 1,
                fill: "forwards"
            })
            node.style.backgroundImage = `url(${urlArr[showOverlayId]})`
        } else {
            setAnimating(!animating)
            node.animate([
                {},
                {
                    opacity: 0
                },

            ], {
                duration: 200,
                iterations: 1,
                fill: "forwards"
            })
            overlay.current.style.opacity = 0
        }


    }, [showOverlayId])

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    return {
        handleMouseEnter,
        handleMouseLeave
    }

}