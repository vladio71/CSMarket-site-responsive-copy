'use client'
import Link from "next/link";
import css from './page.module.css'
import {useState} from "react";
import About from "./About/About";
import FoodPage from "./FoodPage/FoodPage";
import RetailPage from "./RetailPage/RetailPage";
import CommunityPage from "./CommunityPage/CommunityPage";
import ModalNavigation from "./Components/ModalNavigation";


export default function Home() {

    return (
        <Layout/>
    )

}

function WithModal({children, navigate}) {
    return (
        <>
            <ModalNavigation navigate={navigate}/>
            {children}
        </>
    )
}


function Layout() {
    const [section, setSection] = useState(1)

    function handleChangeMainSection(number) {
        setSection(number)
    }


    return (
        <main className={css.Maincontainer}>
            <ModalNavigation navigate={setSection}/>
            <nav className={css.fixedFlex}>
                <div onClick={() => handleChangeMainSection(1)}
                     className={`${section !== 1 || css.mainSection}`}>
                    {section === 1 ?
                        <About/>
                        :
                        <div className={css.navigationLayout}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                          d="M6 15h2.4q.475 0 .813-.338t.337-.812v-3.7q0-.475-.338-.813T8.4 9H6v6Zm1.15-1.15v-3.7H8.4v3.7H7.15ZM10.875 15l2.45-.025V13.85h-2.05v-1.3h1.3V11.4h-1.3v-1.25h2.05V9h-2.45q-.325 0-.537.212t-.213.538v4.5q0 .325.213.537t.537.213Zm5.15-.025q.325 0 .563-.213t.312-.537L18.3 9h-1.2l-1.075 4.1L14.95 9h-1.2l1.4 5.225q.075.325.313.538t.562.212ZM5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Zm0-2h14V5H5v14ZM5 5v14V5Z"/>
                                </svg>
                            </div>
                            <div>

                            </div>
                        </div>
                    }
                </div>
                <div onClick={() => handleChangeMainSection(2)}
                     className={`${section !== 2 || css.mainSection}`}>
                    {section === 2 ?
                        <FoodPage/>
                        :
                        <div className={css.navigationLayout}>
                            <div>
                                餐饮
                            </div>
                            <div>
                                Food
                            </div>
                        </div>
                    }
                </div>
                <div onClick={() => handleChangeMainSection(3)}
                     className={`${section !== 3 || css.mainSection}`}>
                    {section === 3 ?
                        <RetailPage/>
                        :
                        <div className={css.navigationLayout}>
                            <div>
                                購物
                            </div>
                            <div>
                                Retail
                            </div>
                        </div>
                    }
                </div>
                <div onClick={() => handleChangeMainSection(4)}
                     className={`${section !== 4 || css.mainSection}`}>
                    {section === 4 ?
                        <CommunityPage/>
                        :
                        <div className={css.navigationLayout}>
                            <div>
                                文化
                            </div>
                            <div>
                                Community
                            </div>
                        </div>
                    }
                </div>

            </nav>


        </main>
    )
}


