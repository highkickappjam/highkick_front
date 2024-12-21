import './style.css';
import '@/app/globals.css';


const Footer = () => {
  return (
    <div className='FooterLayout'>
      <div>
        <img src="/assets/images/icons/medal.svg" alt="medal" />
      </div>
      <div>
        <img src="/assets/images/icons/home.svg" alt="home" />
      </div>
      <div>
        <img src="/assets/images/icons/profile.svg" alt="profile" />
      </div>
    </div>
  );
};

export default Footer;
