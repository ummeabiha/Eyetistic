import Maham from '../images/Maham.jpg';
import Abiha from '../images/Abiha.jpg';
import Hamna from '../images/Hamna.jpeg';
import Linkedin from '../images/lin.png';
import Fb from '../images/fb.png';
import Insta from '../images/insta.png';
import Gmail from '../images/gmail.png';
import './Developer.css';

export default function Developer(){
    return(
        <div className="dev">
                <h1> A Team of Professionals</h1>
            <section className="adeveloper">

                <div class="adev-container">
                    <div class="adev-card">
                        <div class="adev-image">
                            <img src={Maham} alt="maham"/>
                        </div>

                        <div class="adev-details">
                            <div class="adev-content">
                                <h2>Maham Tariq Khan</h2>
                                <h4>Software Engineering Undergraduate</h4>
                                <p>Skilled in Python, Data Science, Web Engineering, Research Writing, and Graphic Designing.
                                </p>
                            </div>
                            <div class="adev-icons">
                                <a class="adev-icon-link" href="https://www.linkedin.com/in/maham-khan-04a99822b/"
                                    target="_blank">
                                    <img src={Linkedin} alt="linkedin"/>
                                </a>
                                <a class="adev-icon-link" href="mailto:mahamtkhan2@gmail.com" target="_blank">
                                    <img src={Gmail} alt="gmail"/>
                                </a>
                                <a class="adev-icon-link" href="https://www.facebook.com/profile.php?id=100035640073756"
                                    target="_blank">
                                    <img src={Fb} alt="fb"/>
                                </a>
                                <a class="adev-icon-link" href="https://www.instagram.com/its.maham19/" target="_blank">
                                    <img src={Insta} alt="insta"/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="adev-card">
                        <div class="adev-image">
                            <img src={Abiha} alt="abiha"/>
                        </div>

                        <div class="adev-details">
                            <div class="adev-content">
                                <h2>Syeda Umm E Abiha Rizvi</h2>
                                <h4>Software Engineering Undergraduate</h4>
                                <p>Skilled in Python, Data Science, Web Engineering, Research Writing, and Graphic Designing.
                                </p>
                            </div>
                            <div class="adev-icons">
                                <a class="adev-icon-link" href="https://www.linkedin.com/in/ummeabiha/" target="_blank">
                                    <img src={Linkedin} alt="linkedin"/>
                                </a>
                                <a class="adev-icon-link" href="mailto:ummeabiha.2004@gmail.com" target="_blank">
                                    <img src={Gmail} alt="gmail"/>
                                </a>
                                <a class="adev-icon-link" href="https://www.facebook.com/ummeabiha.2004" target="_blank">
                                    <img src={Fb} alt="fb"/>
                                </a>
                                <a class="adev-icon-link" href="https://www.instagram.com/umm.e.abiha/" target="_blank">
                                    <img src={Insta} alt="insta"/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="adev-card">
                        <div class="adev-image">
                            <img src={Hamna} alt="hamna"/>
                        </div>

                        <div class="adev-details">
                            <div class="adev-content">
                                <h2>Hamna Aamir</h2>
                                <h4>Software Engineering Undergraduate</h4>
                                <p>Skilled in Python, Cyber Security, Research Writing and Web Engineering.</p>
                            </div>
                            <div class="adev-icons">
                                <a class="adev-icon-link" href="https://linkedin.com/in/hamna-aamir-603a29235" target="_blank">
                                    <img src={Linkedin} alt="linkedin"/>
                                </a>
                                <a class="adev-icon-link" href="mailto:hamnaaamir593@gmail.com" target="_blank">
                                    <img src={Gmail} alt="gmail"/>
                                </a>
                                <a class="adev-icon-link" href="https://www.facebook.com/profile.php?id=100009734851976"
                                    target="_blank">
                                    <img src={Fb} alt="fb"/>
                                </a>
                                <a class="adev-icon-link" href="https://www.instagram.com/hamna.404/" target="_blank">
                                    <img src={Insta} alt="insta"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}