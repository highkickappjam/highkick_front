import './style.css';
import '@/app/globals.css';

const Button = ({
    text,
  }: {
    text: string;
  }) => {
  return (
    <div className='ButtonContainer'>
        <p>{text}</p>
    </div>
  );
};

export default Button;
