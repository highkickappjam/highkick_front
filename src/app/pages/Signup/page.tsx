"use client";
import { useState } from "react";
import "./style.css";

export default function Signup() {
  // 남자 버튼 클릭 여부
  const [isMaleClicked, setIsMaleClicked] = useState(false);

  // 여자 버튼 클릭 여부
  const [isFemaleClicked, setIsFemaleClicked] = useState(false);

  // 남자 버튼 클릭 시 토글
  const toggleMaleColor = () => {
    setIsMaleClicked((prev) => !prev);
  };

  // 여자 버튼 클릭 시 토글
  const toggleFemaleColor = () => {
    setIsFemaleClicked((prev) => !prev);
  };

  return (
    <div className="signup">
      {/* 로고 */}
      <div className="logo">
        <img src="/assets/images/logos/Middle_logo.svg" alt="logo" />
      </div>

      {/* 안내 문구 */}
      <div className="word2">
        <p>안녕하세요.</p>
        <p>High 킥에 회원가입하세요!</p>
      </div>

      {/* 입력 필드 */}
      <div className="inputBox">
        <input type="text" placeholder="이름" />
        <input type="text" placeholder="아이디" />
        <input type="text" placeholder="비밀번호" />
      </div>

      {/* 성별 선택 버튼 */}
      <div className="genderBox">
        <button
          onClick={toggleMaleColor}
          style={{
            backgroundColor: isMaleClicked ? "blue" : "white",
            color: isMaleClicked ? "white" : "black",
          }}
        >
          남자
        </button>

        <button
          onClick={toggleFemaleColor}
          style={{
            backgroundColor: isFemaleClicked ? "red" : "white",
            color: isFemaleClicked ? "white" : "black",
          }}
        >
          여자
        </button>
      </div>

      {/* 로그인 하러가기 버튼 */}
      <div className="login">
        <button>로그인 하러가기</button>
      </div>

      {/* 하단 텍스트 */}
      <div className="text2">
        <p>로그인</p>
      </div>
    </div>
  );
}