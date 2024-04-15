import css from "../FoodPage/food.module.css";
import Footer from "../../sections/Footer";
import AnimatedSection from "../../sections/AnimatedSection";
import {Header} from "@/components/sections/Header";
import RoseSvg from "@/components/layouts/RetailPage/RoseSvg";
import {Products} from "@/components/sections/Products";

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


export default function RetailPage({isFirstRender}) {


    return (
        <main className={css.Container}>
            <Header
                arrowText={"Retail"}
                heading={"The Retail Market"}
                imageText={"購物"}
                imgSrc={"https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                isAnimationCanceled={!isFirstRender}
            >
                <>
                    Retail Market Hours:<br/>
                    Thurs – Sun: 11:00AM - 7:00PM
                </>
            </Header>
            <Products products={products}/>
            <AnimatedSection>
              <RoseSvg/>
            </AnimatedSection>
            <Footer/>

        </main>

    )
}