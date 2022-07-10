import React from 'react'
import './info.css'
import facebookLogo from '../../images/facebook.webp'
import instagramLogo from '../../images/instagram.jpg'
import linkedinLogo from '../../images/linkedin.png'
import twitterLogo from '../../images/twitter.webp'
import legalLogo from '../../images/legalImage.jpg'
import jewelLogo from '../../images/jewelImage.jpg'
import fashionLogo from '../../images/fashionImage.jpg'
import infoImage from '../../images/We\ Are\ Hiring\ \(Banner\ \(Landscape\)\)\ \(1\).png'
import mahendraSinghPhoto from '../../images/DSC_0532.jpg'
import adityaPhoto from '../../images/adityaPhoto.jpg'
import vishalPhoto from '../../images/vishalPhoto.jpg'

export default function Info() {
    return (
        <div className='info-container'>
            <div className='info-image div-size '>
                <img src={infoImage} />
            </div>
            <div className='details-info div-size '>
                <div className='about-company-info'>
                    <div className='about-company-info-heading heading-left'>
                        <h1>About company <i class="fa-solid fa-circle-info"></i> </h1>
                    </div>
                    <p className='information'>To carry on the business in India and elsewhere of designing, developing, and
                        maintaining applications, software, websites, and online platforms for e-commerce
                        solutions related to different sectors including but not limited to Legal, Fashion, Jewel,
                        etc. and to provide related support services.</p>
                </div>
                <div className='company-vision-info div-size '>
                    <div className='company-vision-heading heading-left'>
                        <h1>Company Vision <i class="fa-solid fa-eye"></i></h1>
                    </div>
                    <p className='information'>Innovate and use sustainable approaches to benefit all stakeholders and ensure their
                        well-being.
                    </p>
                </div>

                <div className='guiding-principle-info heading-left div-size '>
                    <h1>Guiding Principle</h1>
                    <div className='principle'>
                        <div className='principle-circle'>
                            <p>Encourage integrity of conduct</p>
                        </div>
                        <div className='principle-circle'>
                            <p>Ensure clarity in communication</p>
                        </div>
                        <div className='principle-circle'>
                            <p>Encourage socially responsible behavior</p>
                        </div>
                    </div>
                </div>

                <div className='company-culture-info div-size '>
                    <h1>Company Culture <i class="fa-solid fa-globe"></i> </h1>
                    <ul>
                        <li>Be Collaborative</li>
                        <li>Be Empathetic</li>
                        <li>Be Customer Focused</li>
                        <li>Be Inclusive</li>
                        <li>Be Creative</li>
                        <li>Be Humble</li>
                    </ul>
                </div>

                <div className='portfolio-info heading-left div-size '>
                    <h1>Company Product Portfolio  <i class="fa-solid fa-books"></i> </h1>
                    <div className='tech-info'>
                        <div className='tech'>
                            <h2>Legal Tech</h2>
                            <img src={legalLogo} />
                        </div>
                        <div className='tech'>
                            <h2>Fashion Tech</h2>
                            <img src={fashionLogo} />
                        </div>
                        <div className='tech'>
                            <h2>Jewel Tech</h2>
                            <img src={jewelLogo} />
                        </div>
                    </div>
                </div>
                <div className='work-experience heading-left div-size '>
                    <h1>Work Experience</h1>
                    <div className='experience-info'>
                        <div className='testimonial'>
                            <img src={adityaPhoto} />
                            <div><p>I am Aditya Chikte,a 2nd year MBA student of IIT Roorkee.
                                It's been a month since I joined Cosyugma info llp, I joined here as a product management intern. My tasks revolved around defining the roadmap from product development to launch, defining customer journey, understand in depth about the product, defining stakeholders, designing wireframes and documentation for the product. IT was overall a nice experince and Rishabh and team was supportive and full with knowledge and zeal for the development of the product.
                                Apart from the technical skills I gained, I learnt to become and manage my team as a leader. I gathered the required information, communicated the same to the development team, added my own insights about a possible solution. It gave me a chance to enhance my management skills as a Product Manager</p></div>
                        </div>
                        <div className='testimonial'>
                            <img src={vishalPhoto} />
                            <div><p>Being on a journey with IIM has made me realize the potential of the Indian market and how Startups are transforming it to get a better edge over the current heavyweight industry giants. With all the little resources and little capital they have, they spend high on research and create a solution to the existing problem to gain traction.
                                I am thrilled to be a part of your firm. I have started learning new things about the industry and how to collect data for the industry and make a data-based decision to come to a conclusion, which helps to decide on which problem we should spend more on to have maximum utility.</p></div>
                        </div>
                        <div className='testimonial'>
                            <img src={mahendraSinghPhoto} />
                            <div><p>My name is Mahendra Singh. I am working in Cosyugma info LLP as a Product Management Intern. “During my internship, I gained various soft and hard skills that will apply to my future career. Working for a startup allowed me to wear several different hats and try out a variety of business functions. My team was great to work with and the Director of the organization encouraged me to take on any project or task that I wanted to. It was an incredible feeling to know that the work I was doing was important and had a direct impact on the organization!”</p></div>
                        </div>
                    </div>
                </div>

                <div className='connect-info heading-left div-size '>
                    <h1>Connect on Social Media</h1>
                    <div className='social-media-logo'>
                        <div className='social-media-tag'>
                            <a href='https://www.facebook.com/pages/?category=your_pages&ref=bookmarks' target="_blank"><img src={facebookLogo} /></a>
                        </div>

                        <div className='social-media-tag'>
                            <a href='https://www.instagram.com/cosyugma_info/' target="_blank"> <img src={instagramLogo} /></a>
                        </div>

                        <div className='social-media-tag'>
                            <a href='https://www.linkedin.com/company/82135919/admin/' target="_blank"> <img src={linkedinLogo} /></a>
                        </div>

                        <div className='social-media-tag'>
                            <a href='https://twitter.com/Cosyugma_Info' target="_blank"> <img src={twitterLogo} /></a>
                        </div>
                    </div>
                </div>

                <div className='career heading-left div-size '>
                    <h1>Career</h1>
                </div>

                <div className='contact-us heading-left div-size '>
                    <h1>Contact Us</h1>
                    <div className='contact-number'>

                        <i class="fa-solid fa-phone"></i>
                        <span>7027436259</span>
                    </div>
                    <div className='contact-mail'>
                        <i class="fa-solid fa-square-envelope"></i>
                        <a href='https://mail.google.com/mail/u/0/#inbox?compose=new' type='email' target='_blank'>Cosyugmainfo@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
