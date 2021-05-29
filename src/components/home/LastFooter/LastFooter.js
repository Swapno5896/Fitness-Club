import React from 'react';
import css from "./LastFooter.css"
import {FaCcAmazonPay} from 'react-icons/fa';

const LastFooter = () => {
    return (
        <div className="row p-3 text-center foot-color">
           <div className="container">
           <h6>Copyright © 2021 Gladiator. All Rights Reserved Developed by- Sofie Soft  <FaCcAmazonPay/></h6>
           </div>
        </div>
    );
};

export default LastFooter;