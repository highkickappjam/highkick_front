import './style.css';
import '@/app/globals.css';
import Header from '@/app/components/Header';
import Button from '@/app/components/Button';
import Footer from '@/app/components/Footer';

const FirstMain = () => {
  return (
    <div className='FirstMainLayout'>
        <Header/>
        <div className='FirstText'>
          <p>새로운 코디를 받기 위해</p>
          <p>새로운 코디 받기 버튼을 클릭해주세요.</p>
        </div>
        <div className='FirstMainButton'>
          <Button text='새로운 코디 받기'/>
        </div>
        <Footer/>
    </div>
  );
};

export default FirstMain;
