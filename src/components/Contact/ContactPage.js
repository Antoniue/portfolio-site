import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import '../Contact/ContactPage.css';

function ContactPage(){
    return(
        <>
        <div className="content">
            <Header navlist={['Home', 'About', 'Projects']}/>
            <div className="pageContent">
                <h1>Contact Me</h1>
                <form className="contactForm">
                    <label htmlFor="fullName" className='fullName'>Full Name: <input type="text" name="fullName" id="fullNameInput" />
                    </label>
                    <label htmlFor="email" className='email'>E-mail: <input type="email" name="email" id="emailInput" />
                    </label>
                    <label htmlFor="subject" className='subject'>Subject: <input type="text" name="subject" id="subjectInput" />
                    </label>
                    <label htmlFor="message" className='message'>Message: <textarea rows={5} cols={50} type="text" name="message" id="messageInput" />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <Footer />
        </div>
        </>
    )
}
export {ContactPage}