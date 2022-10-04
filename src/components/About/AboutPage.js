import { Header } from '../Header/Header';
import './AboutPage.css';
import jslogo from '../About/jslogo.svg';
import htmllogo from '../About/htmllogo.ico';
import expresslogo from '../About/expresslogo.webp';
import csslogo from '../About/csslogo.webp';
import mongodblogo from '../About/mongodblogo.webp';
import nodejslogo from '../About/nodejslogo.webp';
import gitlogo from '../About/gitlogo.svg';
import npmlogo from '../About/npmlogo.webp';
import reactlogo from '../About/reactlogo.webp';
import webpacklogo from '../About/webpacklogo.webp';

function AboutPage(){
    return (
        <div className="aboutContent">
            <Header navlist={['Home', 'Projects', 'Contact']}/>
            <div className="mainContent">
                <div className="aboutLeft">
                    <h1>About Me</h1>
                    <div className="texts">
                        <p>Hello!<br></br>
                            I'm <span className='purple'>Anton Jarayseh</span>/<span className='purple'>Antoniue</span>, from<span className='purple'> Israel</span>,<br></br>
                            a <span className='purple'>front-end </span>web developer.
                        </p>
                        <p>
                            As a kid I've always been interested in <span className='purple'>Computers </span>, many hours were spent on games like <span className='purple'>Runescape </span>, which made me fall in love with <span className='purple'>Technology </span> from that point on.
                            In Middle-School I built my first computer which was an accomplishment at that time.
                            Then in High-School I took <span className='purple'>Computer Science </span> for <span className='purple'>3 years </span> mainly focusing on <span className='purple'>Object-Orientated Programming(OOP) </span> using <span className='purple'>C#</span>.<br></br>
                        </p>
                        <p>
                            I'm an <span className='purple'>Ambitious</span> man, I'm working on my <span className='purple'>knowledge</span> and <span className='purple'>skill set</span>, I aspire to climb the ladder of development, currently I'm studying
                            the <span className='purple'>back end</span>.
                        </p>
                    </div>
                </div>
                <div className="aboutRight">
                    <h1 className='toolKit'>Toolkit</h1>
                    <div className="images">
                        <img src={jslogo} alt="Javascript" />
                        <img src={htmllogo} alt="HTML" />
                        <img src={csslogo} alt="CSS" />
                        <img src={reactlogo} alt="React" />
                        <img src={nodejslogo} alt="node.js" />
                        <img src={webpacklogo} alt="webpack" />
                        <img src={npmlogo} alt="npm" />
                        <img src={gitlogo} alt="git" />
                        <img src={mongodblogo} alt="mongo db" />
                        <img src={expresslogo} alt="express" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export {AboutPage};