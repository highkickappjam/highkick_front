import './style.css';
import '@/app/globals.css';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import OutputBox from '@/app/components/MyPage/OutputBox';

const MyPage = () => {
  return (
    <div className='MyPageLayout'>
        <Header/>
        <OutputBox text='이름' output_text='정소울'/>
        <OutputBox text='아이디' output_text='soul1213'/>
        <OutputBox text='비밀번호' output_text='soul1213@'/>
        <OutputBox text='성별' output_text='남'/>
        <Footer/>
    </div>
  );
};

export default MyPage;
