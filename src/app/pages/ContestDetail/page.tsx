'use client';
import './style.css';
import '@/app/globals.css';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import {useState } from "react";
import ContestDetailImageBox from '@/app/components/ContestDetail/ImageBox';

const FirstMain = () => {
    const [heart_state,setHeart_state]=useState(false);
    const HeartSet=({})=>{
        if(heart_state==false){
            setHeart_state(true);
        }
        else if(heart_state==true){
            setHeart_state(false);
        }
    }
  return (
    <div className='ContestDetailLayout'>
        <Header/>
            <div className='ContestDetailContainer'>
                <div className='ContestDetailImageContainer'>
                    <div className='DetailName'>
                        공재욱님
                    </div>
                    <div className='DetailTheme'>
                        크리스마스 코디
                    </div>
                    <div className='DetailImagesContainer'>
                        <img src="/assets/images/big_Image/Frame 5.png" alt="image" className='DetailImage'/>
                    </div>
                </div>
                <div className='DetailHeart'>
                    <div onClick={HeartSet}>
                        <img src={heart_state==false?"/assets/images/heart/bin_heart.svg":"/assets/images/heart/full_heart.svg"} alt="heart" />
                    </div>
                    <p className='DetailHeartText'>900</p>
                </div>
                <div className='CodyListContainer'>
                    <div className='CodyListText'>코디 정보</div>
                    <div className='CodyList'>
                        <ContestDetailImageBox image_url='/assets/images/small_Image/Frame 4.png'/>
                        <ContestDetailImageBox image_url='/assets/images/small_Image/Frame 4.png'/>
                        <ContestDetailImageBox image_url='/assets/images/small_Image/Frame 4.png'/>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
  );
};

export default FirstMain;
