import './style.css';
import '@/app/globals.css';

const ImageBox = ({image_url}:{image_url:string}) => {
  return (
    <div className='ImageBoxContainer'>
        <img src={image_url} alt="image_box" />
    </div>
  );
};

export default ImageBox