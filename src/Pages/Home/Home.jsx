import React from 'react'
import Header from '../../Components/Header/Header'
import "./Home.scss"
import Button from "../../Components/Hirebutton/Hireus"
import Social from '../../Components/SocialLinks/Social'
import AboutSection from '../HomeSections/AboutSection'
import Services from '../HomeSections/Services'
export default function Home() {
  return (
    <>
    <div className='MainHomepage'>
      <Header/>
        <div className="HomePage">
            
          <h1 data-aos="fade-right"
     data-aos-duration="400"
     data-aos-easing="ease-in-sine">We are creative film studio</h1>
      <Button/>
        </div>
        <AboutSection/>
        <Services/>
        
        <footer>
    <div class="row">
      
      <div class="column">
        <h4>About Us</h4>
        <p>Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit. Sed in metus euismod, 
          faucibus metus ut, semper nibh. Aenean 
          euismod justo eu enim dapibus suscipit.
        </p>
      </div>

      <div class="column">
        <h4>Quick Links</h4>
        <ul>
          <li>
            <a href="#">
              <i class="fa fa-angle-right"></i> 
              Subscription</a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-angle-right"></i> 
              Contact us</a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-angle-right"></i> 
              Bug report</a>
           </li>
        </ul>
      </div>

      <div class="column">
        <h4>Connect with Us</h4>
        <ul class="social-icons">
          <li>
            <a href="#">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>
           </li>
           <li>
             <a href="#">
               <i class="fa-brands fa-github"></i>
             </a>
           </li>
        </ul>
      </div>

    </div>
    <p class="copyright">© 2023 All Rights Reserved</p>
  </footer>
    </div>
    </>
  )
}
