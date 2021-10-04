import React, { Fragment, }from "react";
import "./style.scss";

//icons
import Logo from "../../Assets/Images/logo.png";
import { MdLocationOn,MdLocalPhone,MdMailOutline } from "react-icons/md";
import { AiFillFacebook,AiFillTwitterSquare,AiFillInstagram,AiFillYoutube,AiFillLinkedin } from "react-icons/ai";

import Media from "react-media";
import { useHistory } from "react-router-dom";

export default function FooterSection (props) {
  const history = useHistory()
      return (
          
             <Media
              queries={{
                small: "(max-width: 480px)",
                large: "(min-width: 481px)",
              }}
            >
              {(matches) => (
                <Fragment>
                  {matches.small && (
                    <footer class="footer-container">
                      <div class="footer-left">              
                        <img src={Logo} alt="" title="Egresapp"/>              
                          <ul class="footer-links">
                              <li><a href="/">Home</a></li>
                              <li><a href="/search">Universidades</a></li>
                              <li><a href="/search">Empresas</a></li>
                              <li><a href="/search">Egresados</a></li>
                              <li><a href="/search">Vacantes</a></li>
                          </ul>
                        <p class="">Egresapp © 2021</p>
                      </div>
                      <div class="footer-center">
                        <div>
                          <i><MdLocationOn size="30px"/></i>
                          <p><span>444 S. Cedros Ave</span> Veracruz, Mexico</p>
                        </div>              
                        <div>
                          <i><MdLocalPhone size="30px"/></i>
                          <p>+1.555.555.5555</p>
                        </div>              
                        <div>
                          <i><MdMailOutline size="30px"/></i>
                          <p><a href="mailto:alcala1500@gmail.com">alcala1500@gmail.com</a></p>
                        </div>              
                      </div>              
                      <div class="footer-right">
                        <span>About</span>              
                        <p class="footer-company-about">
                          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                        </p>              
                        <div class="footer-icons">              
                          <a href="https://www.facebook.com">{<AiFillFacebook size="40px"/>}</a>
                          <a href="https://www.twitter.com">{<AiFillTwitterSquare size="40px"/>}</a>
                          <a href="https://www.youtube.com">{<AiFillYoutube size="40px"/>}</a>
                          <a href="https://www.instagram.com">{<AiFillInstagram size="40px"/>}</a>
                          <a href="https://www.linkedin.com">{<AiFillLinkedin size="40px"/>}</a>              
                        </div>              
                      </div>              
                    </footer>
                            
                  )}
                  {matches.large && (
                    <footer class="footer-container">
                      <div class="footer-left">              
                        <img src={Logo} alt="" title="Egresapp"/>              
                          <ul class="footer-links">
                              <li><a href="/">Home</a></li>
                              <li><a href="/search">Universidades</a></li>
                              <li><a href="/search">Empresas</a></li>
                              <li><a href="/search">Egresados</a></li>
                              <li><a href="/search">Vacantes</a></li>
                            </ul>
                        <p class="">Egresapp © 2021</p>
                    </div>
                    <div class="footer-center">
                        <div>
                          <i><MdLocationOn size="35px"/></i>
                          <p><span>444 S. Cedros Ave</span> Veracruz, Mexico</p>
                        </div>              
                        <div>
                          <i><MdLocalPhone size="35px"/></i>
                          <p>+1.555.555.5555</p>
                        </div>              
                        <div>
                          <i><MdMailOutline size="35px"/></i>
                          <p><a href="mailto:alcala1500@gmail.com">alcala1500@gmail.com</a></p>
                        </div>              
                      </div>             
                      <div class="footer-right">
                        <span>About</span>              
                        <p class="footer-company-about">
                          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                        </p>              
                        <div class="footer-icons">              
                          <a href="https://www.facebook.com">{<AiFillFacebook size="40px"/>}</a>
                          <a href="https://www.twitter.com">{<AiFillTwitterSquare size="40px"/>}</a>
                          <a href="https://www.youtube.com">{<AiFillYoutube size="40px"/>}</a>
                          <a href="https://www.instagram.com">{<AiFillInstagram size="40px"/>}</a>
                          <a href="https://www.linkedin.com">{<AiFillLinkedin size="40px"/>}</a>        
                        </div>              
                      </div>               
                  </footer>
                  )}
                </Fragment>  
              )}
            </Media>
      );
  }


