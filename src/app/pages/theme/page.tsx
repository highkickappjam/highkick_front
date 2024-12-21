import './style.css';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import Head from 'next/head';

const Theme=({})=>{
    return(
        <div className="theme">

            <Header />
        
            <hr />

        <div className='interest'>
                <p>오늘의 관심사</p>        
        </div>

            <div className='write'>
                <input type="text"  placeholder='관심사를 작성해주세요'/>
            </div>

        <div className='submit'>
                <button>입력 완료</button>
        </div>

        <Footer />



      </div>
    );
}

export default Theme;