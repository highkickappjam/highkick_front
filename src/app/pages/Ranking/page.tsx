import './style.css';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import Rank from '@/app/components/Ranking';
import Head from 'next/head';

const Ranking=({})=>{
    return(
        <div className="ranking">



            <Header />
            <div className='rankText'>
                <p>랭킹</p>
            </div>
            <div className='ranking'>
                
                <Rank />
                <Rank />
                <Rank />
                <Rank />
                <Rank />
                
            </div>

            
                
            <div className='myRank'>
                <Rank />
            </div>

            <Footer />

            


      </div>
    );
}

export default Ranking; 