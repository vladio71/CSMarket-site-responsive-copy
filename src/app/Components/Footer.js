import css from "../About/about.module.css";
import {BsPencil} from "react-icons/bs";
import {FiFacebook, FiInstagram} from "react-icons/fi";


export default function Footer() {


    return (
        <>
            <section>
                <div className={css.VendorSection}>
                    <div>
                        Interested in becoming a vendor?
                    </div>
                    <div className={`button ${css.fullWidthButton}`}>
                        click here
                    </div>

                </div>
                <div className={css.SocialLinksFlex}>
                    <div className={css.roundRunningBorder}>
                        <div className={css.icon}>
                            <BsPencil/>
                        </div>
                        <div>
                            Email Us
                        </div>
                    </div>
                    <div className={css.roundRunningBorder}>
                        <div className={css.icon}>
                            <FiFacebook/>
                        </div>
                        <div>
                            Follow us<br/>
                            on facebook
                        </div>
                    </div>
                    <div className={css.roundRunningBorder}>
                        <div className={css.icon}>
                            <FiInstagram/>
                        </div>
                        <div>
                            Follow us<br/>
                            on instagram
                        </div>
                    </div>
                </div>
                <div className={`${css.roundRunningBorder} ${css.footerEmail} ${css.RunningBorderAdjustAnimation}`}>
                    <div>
                        Stay up to date<br/> with our newsletter
                    </div>
                    <div className={css.footerEmailInput}>
                        <input/>
                    </div>
                </div>
            </section>
            <footer className={css.footerFlex}>
                <div>
                    <span>Copyright Canal Street Market 2022</span>
                    <span className={css.pointer}>
                        <u>
                            Privacy Policy
                        </u>
                    </span>
                    <span className={css.pointer}>
                        <u>
                            Vendor Login
                        </u>
                    </span>
                </div>
                <div className={css.pointer}>
                    copied by Vladio
                </div>

            </footer>
        </>
    )
}