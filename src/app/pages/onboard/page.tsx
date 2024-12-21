import './style.css';

const Onboard=({})=>{
    return(
        <div className="onboard">
        
        <div className="logo">
          <img src="/assets/images/logos/Big_logo.svg" alt="Logo" />
        </div>
  
        
        <div className="word">
          <p>High 킥으로 당신의 킥을 만들어 보세요</p>
        </div>
  
        
        <div className="start_button">
          <button>시작하기</button>
        </div>
      </div>
    );
}

export default Onboard;