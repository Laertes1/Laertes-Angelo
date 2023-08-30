import './index.css'
import lua from '../../assets/icons/moon.svg'
import logo from '../../assets/icons/ns..svg'

import image from '../../assets/Vector.svg'
/*----Icons----*/
import gitHubIcon from '../../assets/icons/Icon=github, Theme=dark, State=active.svg'
import linkedin from '../../assets/icons/Icon=linkedin, Theme=dark, State=active.svg'
export default function Index(){
    return(
            <>
            {/*--------Nav Bar-----*/}
            <nav>
                <div className="box1">
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <section className="box2">
                    <div className="box2-box1">
                        <p className="navBar-p p1">Home</p>
                        <p className="navBar-p p2">Projects</p>
                        <p className="navBar-p p3">About</p>
                        <p className="navBar-p p4">Resume</p>
                    </div>
                    <div className="box2 box1">
                        <img src={lua} alt="icone da lua" className='lua' />   
                    </div>
                </section>
            </nav>
            {/*-----Home----*/}
            <main>
                <section className="main-sec1">
                <div className="main-sec1-div1"><h3 className="title">Olá, Eu sou Laertes.</h3>
                <h4 className="main-sec1-div1-h4">Front-end Developer</h4>
                </div>
                <div className="main-sec1-div2">
                    <p className="main-sec1-div2-paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div className="main-sec1-div3">
                    <img src={gitHubIcon} alt="" className='gitIcon'/>
                    <img src={linkedin} alt="icon linkedin" className="linkedinIcon" />

                    <button className="btn-contato">Entrar em contato</button>

                    <button className="resume">Resume</button>
                </div>
                </section>
                <section className="main-sec2">
                    <div className="boxImage">
                        <img src={image} alt="" className="main-image" />
                    </div>
                </section>
            </main>
            </>
        )
}