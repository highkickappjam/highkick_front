import './style.css';

const Login=({})=>{
    return(
        <div className='login'>

            <div className="logo">
                <img src="/assets/images/logos/Middle_logo.svg" alt="logo" />
            </div>

            
            <div className="word3">
                <p>안녕하세요.</p>
                <p>High 킥에 로그인하세요!</p>
            </div>

            <div className='login_input'>
                <input type="text" placeholder='아이디'/> <br/>
                <input type="text" placeholder='비밀번호' />
            </div>

            <div className='login_submit'>
                <button>로그인 하기</button>
            </div>

            <div className='signin'>
                <p>회원가입</p>
            </div>

        </div>
    );
}

export default Login;