"use client";
import React, { useState } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import login from '@/redux/services/auth';

const Login: React.FC = () => {
    const [email, setEmail] = useState('918949031714596534@royalspirit.ae');
    const [password, setPassword] = useState('Royal@123');
    const dispatch = useAppDispatch();
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      dispatch(login({ email, password }));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
            <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Left Section - Illustration */}
                <div className="hidden md:block w-1/2 p-8 bg-gray-100">
                    <div className="flex items-center justify-center h-full">
                        <img
                            src="https://devroyalspiritadminportal.azurewebsites.net/static/media/login.e97b9f18.png"
                            alt="loginImg"
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* Right Section - Login Form */}
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Login</h2>
                    <p className="text-sm text-gray-500 mb-6 inline-block">
                        Welcome back, please login to your account.
                    </p>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-500">
                                Email
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    className="w-full pl-[35px] py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </span>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-500">
                                Password
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    className="w-full pl-[35px] py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-500"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                </span>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full bg-red-800 text-white py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;