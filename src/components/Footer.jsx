import "./Footer.scss";
import { Link } from "react-router-dom";



const Footer = () => {

  return (
    <>
    <div>
    <footer className="footer">
    
    
    <div className="footer__derechos">
      <p className="footer__derechos__copy">Copyright@InTEch. All right reserved. </p>
      
    </div>
    <div className="footer__siguenos">
      <h2 >SIGUENOS</h2>
    
      
        <span className="footer__siguenos__fb"><i className="fa-brands fa-facebook"></i></span>
        <span className="footer__siguenos__tw"><i className="fa-brands fa-x-twitter"></i></span>
        <span className="footer__siguenos__in"><i className="fa-brands fa-instagram"></i></span>
        <span className="footer__siguenos__yt"><i className="fa-brands fa-youtube"></i></span>
      
    </div>
   </footer> 
   <div className="whatsapp"><i className="fa-brands fa-whatsapp fa-2xl"></i></div>
   </div>
    </>
    
  );
};

export default Footer;