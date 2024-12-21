"use client";

import './style.css';
import { useRouter } from 'next/navigation'; // useRouter 훅 가져오기

const Onboard = () => {
  const router = useRouter(); // useRouter 초기화

  const handleStartClick = () => {
    router.push('/pages/FirstMain'); // FirstMain 페이지로 이동
  };

  return (
    <div className="onboard">
      <div className="logo">
        <img src="/assets/images/logos/Big_logo.svg" alt="Logo" />
      </div>

      <div className="word">
        <p>High 킥으로 당신의 킥을 만들어 보세요</p>
      </div>

      <div className="start_button">
        <button onClick={handleStartClick}>시작하기</button>
      </div>
    </div>
  );
};

export default Onboard;