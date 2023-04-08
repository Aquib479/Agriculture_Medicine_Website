import React, { useEffect, useState } from 'react'
import LoginForm from './LoginForm'
import LoadingBar from 'react-top-loading-bar'
import IMG from '../Images/ag1.png'



const Login = (props) => {
    var api = process.env.REACT_APP_BASE_URL

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [matched, setMatched] = useState('');
    const [progress, setProgress] = useState(0);

    // set state for the login button disability !!
    const [isValue, setValue] = useState(true);


    const handleEmail = (value) => {
        setEmail(value);
    }
    const handlePassword = (value) => {
        setPassword(value);
    }

    const HandleLoginForm = () => {
        setProgress(10);
        let Logindata = {
            username: email,
            password: password
        }
        console.log(Logindata);
        if (Logindata.username === '' && Logindata.password === '') {
            setMatched('Enter Username & Password');
        } else {
            setProgress(100);
            // api for the post request !!
        }
        setEmail('');
        setPassword('');
    }
    useEffect(() => {
        if (email.length > 0 && password.length > 0) {
            setValue(false);
        } else {
            setValue(true);
        }
    })

    return (
        <>
            <LoadingBar
                color='#f11946'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            {!props.IsLoggedIn ? (
                <div className="signup_conatiner fixed w-[100%] h-[100vh] overflow-hidden z-30 top-0 left-0">
                    <div className=''>
                        <img src={IMG} alt="Loading..." className='w-full h-auto md:h-[100vh] object-cover' />
                    </div>
                    <div className="LoginForm absolute top-[20%] w-full flex rounded-lg">
                        <LoginForm
                            email={email}
                            password={password}
                            matched={matched}
                            HandleLoginForm={HandleLoginForm}
                            handleEmail={handleEmail}
                            handlePassword={handlePassword}
                            isValue={isValue}
                        />
                    </div>
                </div>) : (setTimeout(() => {
                    window.location = "/dashboard";
                }, 500))
            }
        </>
    )
}

export default Login