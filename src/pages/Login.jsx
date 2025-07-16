import React, { useState } from 'react'
import { assets } from '../assets/asset';
import { FaUser, FaLock } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Logic for handling login can be added here
        if (username === 'admin' && password === '123456') {
            navigate('/'); // Redirect to homepage on successful login
        } else {
            alert('Username atau Password salah');
        }
    }

    return (
        <div className='min-h-screen bg-purple-900 flex items-center justify-center'>
            <div className='bg-white rounded-2xl grid lg:grid-cols-2 md:grid-cols-1 mt-10'>
                <div className='flex flex-col items-center justify-center text-center mx-3'>
                    <img src={assets.logo} alt="logo" className='h-45 mb-4' />
                    <h1 className='text-4xl font-bold text-purple-900'>Selamat Datang</h1>
                    <p className='text-sm text-center mb-2'>silahkan masukkan username dan password anda</p>
                </div>
                <div className='bg-purple-950 text-white p-10 lg:rounded-r-2xl md:rounded-none'>
                    <h1 className='text-xl font-bold text-white text-center'>SIGN IN</h1>
                    <form onSubmit={handleLogin} className='mt-4'>
                        <div className='mb-4'>
                            <label htmlFor="username" className='block mb-1 text-sm'>username</label>
                            <div className='flex items-center bg-white text-black rounded-full px-4 py-2'>
                                <FaUser className="mr-2 text-purple-500" />
                                <input type="text" placeholder='Masukkan Username...' value={username}
                                    onChange={(e) => setUsername(e.target.value)} className='bg-transparent outline-none w-full' />
                            </div>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="Password" className='block mb-1 text-sm'>Password</label>
                            <div className='flex items-center bg-white text-black rounded-full px-4 py-2'>
                                <FaLock className="mr-2 text-purple-500" />
                                <input type="password" placeholder='Masukkan Password...' value={password} onChange={(e)=> setPassword(e.target.value)} className='bg-transparent outline-none w-full' />
                            </div>
                        </div>
                        <button type="submit" className='bg-blue-700 hover:bg-blue-800 w-full py-2 rounded-full font-semibold cursor-pointer'>Login</button>
                    </form>
                    <Link to="/forgot-password" className='text-sm block pl-2 pt-2 text-blue-500'><p>lupa password?</p></Link>
                    <p className='text-sm text-center mt-2'>Belum punya akun? <Link to="/register" className='text-sm text-center text-blue-500'>Daftar</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login
