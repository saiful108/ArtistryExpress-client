import { FaGithub,  FaLinkedinIn } from 'react-icons/fa';
import { FaFacebook, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer  text-black footer-center p-10">
  <aside>
  <img src="https://i.ibb.co/d2MnSRR/pav-removebg-preview1.png" alt="pav-removebg-preview1" border="0" />
    <p className="font-bold">
    ArtistryExpress
      <br />
      Providing reliable tech since 2020
    </p>
    <p>Copyright © ${new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a>
      <FaFacebook/>
      </a>
      <a>
       <FaTwitter/>
         
        
        
      </a>
      <a>
       <FaLinkedinIn/>
         
      </a>
      <a >
        <FaGithub/>
      </a>
    </div>
  </nav>
</footer>
    );
};

export default Footer;