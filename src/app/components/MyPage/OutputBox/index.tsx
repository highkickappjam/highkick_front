import './style.css';
import '@/app/globals.css';

const OutputBox = ({text,output_text}:{text:string,output_text:string}) => {
  return (
    <div className='MyPageOutputBox'>
        <div className='MyPageText'>
          {text}
        </div>
        <div className='MyPageText'>
          {output_text}
        </div>
    </div>
  );
};

export default OutputBox