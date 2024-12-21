import './style.css';
import '@/app/globals.css';
import Header from '@/app/components/Header';
import Button from '@/app/components/Button';
import Footer from '@/app/components/Footer';
import ImageBox from '@/app/components/Main/ImageBox';

const FirstMain = () => {
  return (
    <div className='MainLayout'>
        <Header/>
            <div className='MainText'>
                <p className='MainTextNomal'>당신의 테마는</p>
                <p className='MainTextBold'>크리스마스</p>
            </div>
            <div className='Body'>
                <img src="/assets/images/Body.png" alt="body" />
            </div>
            <div className='FirstImageBox'>
                <ImageBox image_url='/assets/images/small_Image/Frame 4.png'/>
            </div>
            <div className='SecondImageBox'>
                <ImageBox image_url='/assets/images/small_Image/Frame 8.png'/>
            </div>
            <div className='ThirdImageBox'>
                <ImageBox image_url='/assets/images/small_Image/Frame 11.png'/>
            </div>
            <div className='MainButton'>
                <Button text='새로운 코디 받기'/>
            </div>
            
        <Footer/>
    </div>
  );
};

export default FirstMain;
