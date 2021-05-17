import './Footer.scss';

function Footer() {

    // scrollToTop
    let scrollToTop = () => {
        return window.scrollTo({
                left: 0,
                top: 0,
                behavior: 'smooth',
        });
    }

    return (
        <footer className='footer'>
            <div className="main-container">
                <div className="about-us">
                    <h3>about us</h3>
                    <hr />
                    <p>Lorem ipsum dolor sit amen, consectetur advising elite. Nam vitae orange massa, at consecrate ipsum. Sed ullamcorper, dui consecrate vehicle volta, dolor negus hendrix eliot
                    </p>
                </div>
                <div className="contact">
                    <div className="contact-info">
                        <h3>contact info</h3>
                        <hr />
                        <div className="email">
                            <span><i className="fas fa-paper-plane"></i></span>
                            <span><a href="..">info.beach-resort@check-home.de</a></span>
                        </div>
                        <div className="phone">
                            <span><i className="fas fa-phone-alt"></i></span>
                            <span><a href="..">+49 005 4678 112</a></span>
                        </div>
                        <div className="location">
                            <span><i className="far fa-map"></i></span>
                            <span><a href="..">location</a></span>
                        </div>
                    </div>

                    <div className="contact-social-media">
                        <h3>contact us</h3>
                        <hr />
                        <span><a href=".."><i className="fab fa-github"></i></a></span>
                        <span><a href=".."><i className="fab fa-linkedin"></i></a></span>
                        <span><a href=".."><i className="fab fa-xing-square"></i></a></span>
                        <span><a href=".."><i className="fab fa-facebook"></i></a></span>
                        <span><a href=".."><i className="fab fa-twitter"></i></a></span>
                        <span><a href=".."><i className="fab fa-instagram"></i></a></span>
                    </div>
                </div>

                <div className="payment">
                    <h3>payment accepted</h3>
                    <hr />
                    <span>Visa</span>
                    <span className="payPal">PayPal</span>
                    <span>MasterCard</span>
                </div>

                <div className="newsletter">
                    <h3>newsletter</h3>
                    <hr />
                    <input type="text" name="newsletter" id="newsletter" placeholder="your email address..."/>
                    <button className="btn-newsletter btn-primary">subscribe</button>
                </div>
            </div>
            <div className="footer-container">
                {/*<div className="question">Have questions?
                    <span><i className="far fa-comment"></i></span>
                </div>*/}
                <div className="copyright">
                    <p>all rights ©️ 2020 - 2021</p>
                    <span><a href="..">AGB</a></span>
                    <span><a href="..">Impressum</a></span>
                </div>
                <div className="go-top" onClick={scrollToTop}>
                    <i className="fas fa-arrow-up"></i>
                </div>
            </div>
        </footer>
    )
}

export default Footer;



/*

<div className="contact-list">
                <div className="icon-address">
                    <div className="icon">
                        <ImLocation />
                    </div>
                    <h5>Address -</h5>
                    <span>Süderdeich 12, 25881 Westerhever</span>
                </div>
                <div className="icon-phone">
                    <div className="icon">
                        <FiPhone />
                    </div>
                    <h5>Phone -</h5>
                    <span><a href="..">+49 005 4678 112</a></span>
                </div>
                <div className="icon-email">
                    <div className="icon">
                        <SiMinutemailer />
                    </div>
                    <h5>email -</h5>
                    <span><a href="..">info.beach-resort@check-home.de</a></span>
                </div>
                <div className="icon-website">
                    <div className="icon">
                        <BiWorld />
                    </div>
                    <h5>website -</h5>
                    <span><a href="..">www.beach-resort.de</a></span>
                </div>
            </div>
            <div className="social-media">
                <div className="linkedIn">
                    <div className="icon">
                        <a href=".."><FaLinkedin /></a>
                    </div>
                    <span>LinkedIn</span>
                </div>
                <div className="github">
                    <div className="icon">
                        <a href=".."><AiFillGithub /></a>
                    </div>
                    <span>GitHub</span>
                </div>
                <div className="xing">
                    <div className="icon">
                        <a href=".."><FaXing /></a>
                    </div>
                     <span>xing</span>
                </div>
            </div>

*/