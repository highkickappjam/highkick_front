"use client";

import './style.css';
import '@/app/globals.css';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import OutputBox from '@/app/components/MyPage/OutputBox';
import { useEffect, useState } from 'react';
import axios from 'axios';

// User 데이터 타입 정의
interface User {
  id: string;
  password: string;
  sex: string;
  name: string;
}

// MyPage 컴포넌트
const MyPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get<User>(`http://192.168.225.44:3000/users?id={id}`);
        setUser(response.data);
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

    fetchUserData();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!user) return <p>Loading...</p>;

  return (
    <div className="MyPageLayout">
      <Header />
      <OutputBox text="이름" output_text={user.name} />
      <OutputBox text="아이디" output_text={user.id} />
      <OutputBox text="비밀번호" output_text={user.password} />
      <OutputBox text="성별" output_text={user.sex === 'male' ? '남' : '여'} />
      <Footer />
    </div>
  );
};

export default MyPage;