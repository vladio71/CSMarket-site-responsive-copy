import {useEffect} from "react";


export default function usePreloadImages(imagesUrlArr){

    useEffect(() => {
        imagesUrlArr.forEach(el => {
            let i = new Image()
            i.src = el

        })
    }, [])


}