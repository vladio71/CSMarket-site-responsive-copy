import '../../../app/globals.css'
import css from './food.module.css'
import Footer from "../../sections/Footer";
import AnimatedSection from "../../sections/AnimatedSection";
import SushiSvg from "@/components/layouts/FoodPage/sushiSvg";
import {Header} from "@/components/sections/Header";
import {Products} from "@/components/sections/Products";

export const metadata = {
    title: '...',
    description: '...',
    link: ''
}

const urlArr = [
    {
        caption: "Khao Man Gai",
        name: "Betong",
        url: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        caption: "Coffee, Pastries & Smoothies",
        name: "Chinatown Deli",
        url: "https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        caption: "Artisanal Chocolates",
        name: "Daniel Corpuz Chocolatier",
        url: "https://images.pexels.com/photos/7441761/pexels-photo-7441761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        caption: "Napoli Style Pizza",
        name: "Enzo Bruni La Pizza Gourmet",
        url: "https://images.pexels.com/photos/17593640/pexels-photo-17593640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        caption: "Chinese Classics",
        name: "Joe&apos;s Rice and Noodles",
        url: "https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        caption: "Cantonese Steamed Rice Rolls",
        name: "Joe&apos;s Steam Rice Roll",
        url: "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        caption: "Delicious Filipino Classics",
        name: "Kabisera",
        url: "https://images.pexels.com/photos/12077972/pexels-photo-12077972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        caption: "Bingsoo Sundaes & Bubble Tea",
        name: "Lazy Sundaes",
        url: "https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        caption: "Sushi, Handrolls & Chirashi",
        name: "Mastunori",
        url: "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        caption: "Filipino Inspired Taqueria",
        name: "Mucho Sarap",
        url: "https://images.pexels.com/photos/12077972/pexels-photo-12077972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }]


export default function FoodPage({isFirstRender}) {


    return (

        <main className={css.Container}>
            <Header
                arrowText={"Food"}
                heading={"The Food Hall"}
                imageText={"餐饮"}
                imgSrc={"https://images.pexels.com/photos/8951199/pexels-photo-8951199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                isAnimationCanceled={!isFirstRender}
            >
                <>
                    Food Hall Hours:<br/>
                    Mon – Sun: 11:00AM - 8:00PM
                </>
            </Header>
            <Products products={urlArr}/>
            <AnimatedSection>
                <SushiSvg/>
            </AnimatedSection>

            <Footer/>

        </main>
    )


}