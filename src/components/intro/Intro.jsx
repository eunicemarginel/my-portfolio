import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true, 
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Developer", "Designer", "Content Creator"],
         });
    },[]);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello,</h2>
                    <h1>I'm Eunice</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>

                    <div className="social">
                        <a href="https://twitter.com/eunicemarginel" target="_blank">
                        <img src="assets/twitter.png" alt="twitter.com" height="50px" weight="50px" />
                        </a>

                        <a href="https://github.com/eunicemarginel" target="_blank">
                        <img src="assets/github.png" alt="github.com" height="50px" weight="50px" />
                        </a>

                        <a href="https://www.linkedin.com/in/eunice-marginel-valderama-a46a5a187/" target="_blank">
                        <img src="assets/linkedin.png" alt="linkedin.com" height="50px" weight="50px" />
                        </a>
                        
                        <a href="https://www.instagram.com/eunicemarginel/" target="_blank">
                        <img src="assets/ig.png" alt="instagram.com" height="50px" weight="50px" />
                        </a>
                        
                        <a href="mailto:eunicemarginel@gmail.com" target="_blank">
                        <img src="assets/email.png" alt="gmail.com" height="50px" weight="50px" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
