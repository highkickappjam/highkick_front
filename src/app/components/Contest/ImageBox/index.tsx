'use client';
import './style.css';
import '@/app/globals.css';
import {useState } from "react";

const ContestImageBox = ({image_url}:{image_url:string}) => {
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
    <div className='ContestImageBox'>
        <img src={image_url} alt="image_url" className='BoxImage'/>
        <div className='Contest_bottom'>
            <div onClick={HeartSet} className='ContestImages'>
                <img src={heart_state==false?"/assets/images/heart/bin_heart.svg":"/assets/images/heart/full_heart.svg"} alt="heart" />
            </div>
        </div>
    </div>
  );
};

export default ContestImageBox;
