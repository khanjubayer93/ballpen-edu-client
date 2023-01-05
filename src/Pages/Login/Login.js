import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const { loginUser, userPasswordReset } = useContext(AuthContext);
    const [userEmail, setUserEmail] = useState('')
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || "/";

    const handleLoginUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate(from, { replace: true });

            })
            .catch((error) => {
                const errorMessage = error.message;
                console.error(errorMessage)
            });

    }

    const handleBlurEmail = (event) => {
        const email = event.target.value;
        setUserEmail(email)
    }

    const handleResetPassword = () => {
        userPasswordReset(userEmail)
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className="hero bg-base-200 rounded">
            <div className="">
                <h1 className='text-center my-5 font-bold text-xl'>Log In</h1>
                <div className="card shadow-2xl w-96">
                    <form onSubmit={handleLoginUser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onBlur={handleBlurEmail} name='email' type="text" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <div className='flex justify-between'>
                                <label className="label">
                                    <Link onClick={handleResetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                                <label className="label">
                                    <Link to='/signup' className="label-text-alt link link-hover">Create a new account</Link>
                                </label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
