import React from 'react'
import './Contact.css'
import Resume from '../../assets/Resume.pdf'

export const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "41925b9e-135f-41fa-8545-d5ace60c3770");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message)
        }
      };
    

    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Get in Touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>You can contact me by filling the form, I'll get email from  your side.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <i className="fa-solid fa-envelope"></i><p>yashvyas498@gmail.com </p>
                        </div>
                        <div className="contact-detail">
                            <i className="fa-solid fa-square-phone"></i><p> +91 8107799753 </p>
                        </div>
                    </div>
                    <div className="social-icons">
                        <a target='_blank' href="https://github.com/yashvyas1"><i className="fa-brands fa-square-github"></i></a>
                        <a target='_blank' href="https://www.linkedin.com/in/yash-kumar-vyas-78643a266/"><i className="fa-brands fa-linkedin"></i></a>
                        <a target='_blank' href="https://x.com/YashKumarVyas5"><i className="fa-brands fa-square-twitter"></i></a>
                        <a target='_blank' href="#"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                    <a href={Resume} download className='btn'>Download CV</a>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" placeholder='Enter your name' />
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" placeholder='Enter your email' />
                    <label htmlFor="">Message</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type="submit" className='contact-submit btn'>Submit</button>
                </form>
            </div>
            <hr />
                <div className="copyright">
                    <p>Copyright <i className="fa-regular fa-copyright"></i> 2024-2025 Portfolio Website. All Rights
                        Reserved
                    </p>
                </div>
        </div>
    )
}
