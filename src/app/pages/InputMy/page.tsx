"use client";
import './style.css';
import '@/app/globals.css';
import Header from '@/app/components/Header';
import Button from '@/app/components/Button';
import Footer from '@/app/components/Footer';
import React, { useState } from 'react';

const FirstMain = () => {
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setImagePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleClick = () => {
      const fileInput = document.getElementById('fileInput') as HTMLInputElement;
      if (fileInput) {
        fileInput.click();
      }
    };
  return (
    <div className='InputMyLayout'>
        <Header/>
        <div className='InputMyContainer'>
            <div className='write'>
                    <input type="text"  placeholder='제목'/>
            </div>
            <div className="ImageWrite" onClick={handleClick}>
                <input 
                    type="file" 
                    accept="image/*" 
                    id="fileInput" 
                    style={{ display: 'none' }} 
                    onChange={handleFileChange} 
                />
                {imagePreview ? (
                    <img src={imagePreview} alt="Preview" style={{ width: '200px', height: '200px' }} />
                ) : (
                    <>
                    <div>사진 첨부하기</div>
                    <img src="/assets/images/icons/plus_gray.svg" alt="plus" />
                    </>
                )}
            </div>

            <div className='ProductContainer'>
                <div className='ProductTe'>상품 정보</div>
                <div className='Productwrite'>
                    <input type="text"  placeholder='제목'/>
                </div>
            </div>
        </div>
        <div className='Product_button'>
            <Button text='상품 등록하기'/>
        </div>
        <Footer/>
    </div>
  );
};

export default FirstMain;
