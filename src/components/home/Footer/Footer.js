import React from 'react';
import css from "./Footer.css"
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa';
import Picture from "../../../images/Picture.PNG"
const Footer = () => {
    return (
        <div className="footer text-white">
        <div className="container footer ">
        <div className="row ">
            <div className="col-md-4 mt-4">
            <img src={Picture}/>
            <p className="text-justify">We are the only Gym in the Gulshan-2 circle (Tri-State) area which contains wide range of updated/modern equipments with a floor size of approx. 5000sqft. We are also an expat friendly gym.</p>
            </div>

            <div className="col-md-2 mt-5">
            <h4>QUICK LINK</h4> 
           <ul>
              <li>Equipment</li> 
              <li>Classes</li> 
              <li>Trainers</li> 
              <li>Membership</li> 
              <li>Packages</li> 
           </ul>
            </div>
            <div className="col-md-2 mt-5">
            <h4>SUPPORT</h4>
            <ul>
              <li>Contact</li> 
              <li>Privacy Policy</li> 
              <li>FAQ</li> 
              <li>About</li> 
              <li>Terms and Condition</li> 
           </ul>
            </div>

            <div className="col-md-4 mt-5">
            <h1>GET IN TOUCH</h1>
            <h2><FaFacebookF/> <FaTwitter/> <FaInstagram/> <FaYoutube/> </h2>

            <h6>Stay Connected with us</h6>
            <div class="input-group">
  <div class="form-outline">
    <input type="search" id="form1" class="form-control" />
  </div>
  <button type="button" class="btn btn-warning">SUBSCRIBE</button>
</div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Footer;