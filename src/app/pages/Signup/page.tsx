"use client";

import { useState } from "react";
import "./style.css";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [sex, setSex] = useState<string>(""); // 성별 상태 관리
  const [error, setError] = useState<string | null>(null); // 에러 상태
  const router = useRouter(); // useRouter 훅 가져오기

  // 남자 버튼 클릭
  const toggleMaleColor = () => {
    setSex("male");
  };

  // 여자 버튼 클릭
  const toggleFemaleColor = () => {
    setSex("female");
  };

  // 회원가입 버튼 클릭 핸들러
  const handleSignup = async () => {
    const data = {
      id,
      password,
      sex,
      name,
    };

    try {
      const response = await axios.post("http://192.168.225.44:3000/signup", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("회원가입 성공:", response.data);

      // onboard 페이지로 이동
      router.push("/pages/onboard");
    } catch (err: any) {
      if (err.response) {
        setError(`Error ${err.response.status}: ${err.response.data.message || "Unknown error"}`);
      } else if (err.request) {
        setError("No response received from server");
      } else {
        setError(`Request error: ${err.message}`);
      }
    }
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
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* 성별 선택 버튼 */}
      <div className="genderBox">
        <button
          onClick={toggleMaleColor}
          style={{
            backgroundColor: sex === "male" ? "blue" : "white",
            color: sex === "male" ? "white" : "black",
          }}
        >
          남자
        </button>

        <button
          onClick={toggleFemaleColor}
          style={{
            backgroundColor: sex === "female" ? "red" : "white",
            color: sex === "female" ? "white" : "black",
          }}
        >
          여자
        </button>
      </div>

      {/* 회원가입 버튼 */}
      <div className="login">
        <button onClick={handleSignup}>회원가입</button>
      </div>

      {/* 성공/에러 메시지 */}
      {error && <p className="error-message">{error}</p>}

      {/* 하단 텍스트 */}
      <div className="text2">
        <p>로그인</p>
      </div>
    </div>
  );
}