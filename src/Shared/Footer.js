import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../hospital-mng/src/assets/images/footer.png'

const Footer = () => {
    return (
        <footer style={{
            background:`url(${footer})`,
            backgroundSize:'cover'
        }} className=" p-10 ">
       <div className='footer'>
       <div>
          <span className="footer-title">Services</span> 
          <Link to=""  className="link link-hover">Emergency CheckUp </Link>
          <Link to="" className="link link-hover">Monthly CheckUp</Link>
          <Link to="" className="link link-hover">Weekly checkUp</Link>
          <Link to="" className="link link-hover">deeply CheckUp</Link>
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <Link to="" className="link link-hover">About us</Link>
          <Link to="" className="link link-hover">Contact</Link>
          <Link to="" className="link link-hover">Jobs</Link>
          <Link to="" className="link link-hover">Press kit</Link>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <Link to="" className="link link-hover">Terms of use</Link>
          <Link to="" className="link link-hover">Privacy policy</Link>
          <Link to="" className="link link-hover">Cookie policy</Link>
        </div>
       </div>

        <div className='my-10 text-center'>
    <p>Copyright © 2022 - All right reserved by BSH Industries Ltd</p>
  </div>

      </footer>
    );
};

export default Footer;