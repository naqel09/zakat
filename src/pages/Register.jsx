import React from 'react'
import { assets } from '../assets/asset'
import {Link} from 'react-router-dom'

function Register() {
    return (
        <div className='min-h-screen bg-purple-900 flex items-center justify-center'>
            <div className='bg-white rounded-2xl grid lg:grid-cols-2 md:grid-cols-1 mt-10 mb-4 '>
                <div className='flex flex-col items-center justify-center text-center mx-3'>
                    <img src={assets.logo} alt="logo" className='h-45 mb-4' />
                    <h1 className='text-4xl font-bold text-purple-900'>Selamat Datang Pengguna Baru</h1>
                    <div className='text-md mb-2 text-justify w-9/12'>
                    <p className=''>Silahkan buat akun terlebih dahulu sebelum lanjut, pastikan mengisi form dengan tepat</p>
                    </div>
                </div>
                <div className='bg-purple-950 text-white p-10 lg:rounded-r-2xl md:rounded-none'>
                    <h1 className='text-xl font-bold text-white text-center'>Registrasi Akun</h1>
                    <form action="" className='mt-4'>
                        <div className='mb-4'>
                            <label htmlFor="Email" className='block mb-1 ml-4 text-md'>Email</label>
                            <input type="email" placeholder='Email' className='bg-white text-black px-4 py-2 outline-none w-full rounded-full'/>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="Nama" className='block mb-1 ml-4 text-md'>Nama Lengkap</label>
                            <input type="text" placeholder='Nama Lengkap' className='bg-white text-black px-4 py-2 outline-none w-full rounded-full'/>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="Nomor" className='block mb-1 ml-4 text-md'>Nomor Telepon</label>
                            <input type="number" placeholder='Nomor Telepon' className='bg-white text-black px-4 py-2 outline-none w-full rounded-full'/>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="Password" className='block mb-1 ml-4 text-md'>Password</label>
                            <input type="password" placeholder='*****' className='bg-white text-black px-4 py-2 outline-none w-full rounded-full'/>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="Konfimasi-Password" className='block mb-1 ml-4 text-md'>Konfirmasi Password</label>
                            <input type="password" placeholder='*****' className='bg-white text-black px-4 py-2 outline-none w-full rounded-full'/>
                        </div>
                        <Link to="/Login">
                            <button type="submit" className='bg-blue-700 hover:bg-blue-800 w-full py-2 rounded-full font-semibold cursor-pointer mt-4'>Login</button>
                        </Link>
                        
                    </form>
                </div>
                {/* <div className='bg-purple-950 text-white p-10 lg:rounded-r-2xl md:rounded-none'>
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
                                <input type="password" placeholder='Masukkan Password...' value={password} onChange={(e) => setPassword(e.target.value)} className='bg-transparent outline-none w-full' />
                            </div>
                        </div>
                        <button type="submit" className='bg-blue-700 hover:bg-blue-800 w-full py-2 rounded-full font-semibold cursor-pointer'>Login</button>
                    </form>
                    <Link to="/forgot-password" className='text-sm block pl-2 pt-2 text-blue-500'><p>lupa password?</p></Link>
                    <p className='text-sm text-center mt-2'>Belum punya akun? <Link to="/register" className='text-sm text-center text-blue-500'>Daftar</Link></p>
                </div> */}
            </div>
        </div>
    )
}

export default Register
