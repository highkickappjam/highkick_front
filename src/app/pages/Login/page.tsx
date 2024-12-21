"use client";

import './style.css';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [id, setId] = useState<string>(''); // 사용자 ID 상태
  const [password, setPassword] = useState<string>(''); // 비밀번호 상태
  const [error, setError] = useState<string | null>(null); // 에러 상태
  const router = useRouter(); // useRouter 훅 가져오기

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    const data = {
      id,
      password,
    };

    try {
      const response = await axios.post('http://192.168.225.44:3000/login', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('로그인 성공:', response.data);

      // FirstMain 페이지로 이동
      router.push('/pages/FirstMain'); // 페이지 이동
    } catch (err: any) {
      if (err.response) {
        setError(`Error ${err.response.status}: ${err.response.data.message || 'Unknown error'}`);
      } else if (err.request) {
        setError('No response received from server');
      } else {
        setError(`Request error: ${err.message}`);
      }
    }
  };

  return (
    <div className="login">
      <div className="logo">
        <img src="/assets/images/logos/Middle_logo.svg" alt="logo" />
      </div>

      <div className="word3">
        <p>안녕하세요.</p>
        <p>High 킥에 로그인하세요!</p>
      </div>

      <div className="login_input">
        <input
          type="text"
          placeholder="아이디"
          value={id}
          onChange={handleIdChange}
        />{' '}
        <br />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      <div className="login_submit">
        <button onClick={handleLogin}>로그인 하기</button>
      </div>

      {error && <p className="error-message">{error}</p>} {/* 에러 메시지 */}

      <div className="signin">
        <p>회원가입</p>
      </div>
    </div>
  );
};

export default Login;