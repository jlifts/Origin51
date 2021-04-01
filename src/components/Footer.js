import React, {Component} from 'react'
import '../styles/Footer.scss'
import emailjs from 'emailjs'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook,faTwitter,faInstagram } from "@fortawesome/free-brands-svg-icons"

function SendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_81vvdk3', 'template_1rbf3m9', e.target, 'user_Qz3RcXkkyg8Mr6nP2Urv4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
}


class Footer extends Component{

    state = {
        isActive: false
    }

    handleShow = () => {
        this.setState({
            isActive: true
        })
    }

    handleHide = () => {
        this.setState({
            isActive: false
        })
    }

    render() {
        return (
            <footer>
                <div className='socials'>
                    <h3>Follow Us</h3>
                    <a href="https://twitter.com/bluejay_mr" className="facebook social"><FontAwesomeIcon icon={faFacebook} size='2x'/></a>
                    <a href="https://twitter.com/bluejay_mr" className="twitter social"><FontAwesomeIcon icon={faTwitter} size='2x'/></a>
                    <a href="https://twitter.com/bluejay_mr" className="insta social"><FontAwesomeIcon icon={faInstagram} size='2x'/></a>
                    </div>
                    <div className='contact'>
                     <> 
                        {this.state.isActive ?(
                        <div className='thank'><h4 className='t-message'>Thank you human, we will be in touch soon!</h4></div>) :
                        (<h3 className='form-title'>Signal Us</h3>)}
                    </>
                    <form onSubmit={SendEmail}>
                        <div className='form-group'>
                            <input type='email' placeholder='Email' className='form-control' name='email'/>
                            <label htmlFor="email" className="form-label">Email</label>
                        </div>
                        <div className='form-group'>
                            <input type='text' placeholder='Subject' className='form-control' name='subject'/>
                            <label htmlFor="subject" className="form-label">Subject</label>
                        </div>
                        <div className='form-group'>
                            <textarea className='form-control' placeholder='Message' cols='30' rows='8' name='message'/>
                            <label htmlFor="message" className="messaging">Message</label>
                        </div>
                        <div className='form-btn'>
                            <input type='submit' className='btn-submit' value='Send' onClick={this.handleShow}/>
                        </div>
                    </form>
                </div>
                <div className='legal'>
                    <h3>Legal</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et egestas dui. Suspendisse potenti. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque volutpat ante, consectetur semper enim blandit tristique. In dictum feugiat ante, quis ultricies elit lacinia lobortis. Phasellus nec finibus dui. Donec iaculis condimentum metus, eget vulputate tellus faucibus nec. Etiam gravida condimentum libero, in suscipit dui pretium id. Suspendisse dictum erat a laoreet pharetra. Sed non aliquam nibh, eu feugiat nisl.</p>
                </div>
            </footer>
        )
    }
}

export default Footer