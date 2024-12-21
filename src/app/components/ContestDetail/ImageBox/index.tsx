import './style.css';
import '@/app/globals.css';

const ContestDetailImageBox = ({image_url}:{image_url:string}) => {
  return (
    <div className='ContestImageBoxContainer'>
        <img src={image_url} alt="image_box" />
        <div className='DetailButton'>
            상품 정보
        </div>
    </div>
  );
};

export default ContestDetailImageBox;