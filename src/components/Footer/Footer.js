import '../Footer/Footer.css';
import github from '../Footer/githublogo.png';
import discord from '../Footer/discordlogo.png';
function Footer(){
    return(
        <div className="footer">
            <a href="https://github.com/Antoniue" target='_blank' rel='noreferrer'>
                <img src={github} alt="Github" className='githubLogo'/>
            </a>
            <div className="discord">
                <img src={discord} alt="Discord" className='discordLogo'/>
                Versti#6552
            </div>
        </div>
    )
}
export {Footer};