import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

function ContactPage(){
    return(
        <>
        <div className="content">
            <Header navlist={['Home', 'About', 'Projects']}/>
            <h1 className='contactText'>WORK IN PROGRESS,<br></br>
            CURRENTLY LEARNING THE BACK END TO IMPLEMENT THIS.
            </h1>
            <Footer />
        </div>
        </>
    )
}
export {ContactPage}