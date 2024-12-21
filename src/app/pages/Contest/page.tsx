import './style.css';
import '@/app/globals.css';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ContestImageBox from '@/app/components/Contest/ImageBox';

const Contest = () => {
  return (
    <div className='ContestLayout'>
        <Header/>
            <div className='ContestBody'>
                <div className='ContestTitle'>
                    <div className='ContestTexts'>
                        <div className='ContestText'>
                            이번주 주제는
                        </div>
                        <div className='ContestTextBold'>
                            크리스마스
                        </div>
                        <div className='ContestText'>
                            입니다.
                        </div>
                    </div>
                    <div className='ContestText'>
                        남은시간 3일 11시간 5분
                    </div>
                </div>
                <div className='ContestBoxes'>
                    <div className='BoxImages'>
                        <ContestImageBox image_url='/assets/images/middle_Image/Frame 6.png'/>
                        <ContestImageBox image_url='/assets/images/middle_Image/Frame 6.png'/>
                    </div>
                    <div className='BoxImages'>
                        <ContestImageBox image_url='/assets/images/middle_Image/Frame 6.png'/>
                        <ContestImageBox image_url='/assets/images/middle_Image/Frame 6.png'/>
                    </div>
                </div>
                <div className='PlusButton'>
                    <img src="/assets/images/icons/plus.svg" alt="plus" />
                </div>
            </div>
            
        <Footer/>
    </div>
  );
};

export default Contest;
