import './style.css';
import '@/app/globals.css';

const ImageBox = ({text}:{text:string}) => {
  return (
    <div className='HashTagContainer'>
        #{text}
    </div>
  );
};

export default ImageBox