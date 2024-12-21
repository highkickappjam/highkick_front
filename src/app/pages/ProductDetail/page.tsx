import './style.css';
import '@/app/globals.css';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import HashTag from '@/app/components/ProductDetail/HashTag';
import Button from '@/app/components/Button';

const ProductDetail = ({text}:{text:string}) => {
  return (
    <div className='ProductDetailLayout'>
        <Header/>
        <div className='Products'>
            <div className='ProductText'>{text}</div>
            <div className='ProductImage'>
                <img className='ProductImage2' src="/assets/images/big_Image/Frame 5.png" alt="image" />
            </div>
            <div className='HashTags'>
                <HashTag text='크리스마스'/>
                <HashTag text='요정'/>
                <HashTag text='모자'/>
            </div>
        </div>
        <div className='ProductDetailButton'>
            <Button text='상품 보러가기'/>
        </div>
        <Footer/>
    </div>
  );
};

export default ProductDetail;
