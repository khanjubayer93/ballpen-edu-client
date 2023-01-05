import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Signup = () => {
    const { createUser, verifyEmail, updateUserProfile } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    const handleCreateUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                handleVerifyEmail();
                handleUserProfile(name, photoURL);
                form.reset();
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.error(errorMessage)
            });
    }
    const handleAccepted = (event) => {
        setAccepted(event.target.checked)

    }

    const handleUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
    }

    const handleVerifyEmail = ()=>{
        verifyEmail()
        .then(()=>{})
        .catch(error=> console.error(error))
    }
    return (
        <div className="hero bg-base-200">
            <div className="">
                <h1 className='text-center my-5 font-bold text-xl'>Sign Up</h1>
                <div className="card shadow-2xl w-96">
                    <form onSubmit={handleCreateUser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name='photoURL' type="text" placeholder="photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <span>Have an account?</span>
                                <Link to='/login' className="label-text-alt link link-hover">Login now</Link>
                            </label>
                            <div className="flex items-center">
                                <input
                                    onClick={handleAccepted}
                                    type="checkbox"
                                    name="remember"
                                    id="remember"
                                    aria-label="Remember me"
                                    className="mr-1 rounded-sm focus:ring-sky-600 focus:border-sky-600 focus:ring-2 accent-sky-600" />
                                <label for="remember" className="text-sm text-gray-600">Accept terms and conditions</label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" disabled={!accepted}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;