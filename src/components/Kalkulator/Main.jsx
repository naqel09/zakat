import React from 'react'

function Main() {
    return (
        <section>
            <h1 className='text-[5rem] font-semibold text-pink-400 text-center'>Kalkulator <span className='text-yellow-400'> Zakat </span></h1>
            <div className='max-w-3xl p-3 mx-auto my-10 bg-gray-400 rounded-2xl'>
                <div className='block md:flex gap-8 justify-between mx-15'>
                    <div className='flex flex-col'>
                        <h1 className='font-semibold text-2xl capitalize'>perhitungan zakat Fitrah</h1>
                        <label htmlFor="anggota" className='text-sm mt-5'>Masukkan jumlah anggota</label>
                        <input type="number" placeholder='0' min="0" className='bg-white pl-3 rounded-lg py-1 my-1 appearance-none [&::-webkit-outer-spin-button]:appearance-none 
             [&::-webkit-inner-spin-button]:appearance-none 
             [moz-appearance:textfield]' />
                        <label htmlFor="beras">Masukkan total beras</label>
                        <input type="text" placeholder='0 Kg' className='bg-white pl-3 rounded-lg py-1 my-1' />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-2xl font-semibold capitalize'>perhitungan zakat Maal</h1>
                        <label htmlFor="penghasilan" className='text-sm mt-5'>Masukkan jumlah penghasilan</label>
                        <input type="number" placeholder='0' min="0" className='bg-gray-100 pl-3 rounded-lg py-1 my-1 appearance-none [&::-webkit-outer-spin-button]:appearance-none 
             [&::-webkit-inner-spin-button]:appearance-none 
             [moz-appearance:textfield]' />
                        <label htmlFor="penghasilan" className='text-sm mt-3'>Masukkan pendapatan lain (Bonus THR)</label>
                        <input type="number" placeholder='0' min="0" className='bg-gray-100 pl-3 rounded-lg py-1 my-1 appearance-none [&::-webkit-outer-spin-button]:appearance-none 
             [&::-webkit-inner-spin-button]:appearance-none 
             [moz-appearance:textfield]' />
                        <label htmlFor="penghasilan" className='text-sm mt-3'>Masukkan pengeluaran kebutuhan pokok</label>
                        <input type="number" placeholder='0' min="0" className='bg-gray-100 pl-3 rounded-lg mb-2 py-1 my-1 appearance-none [&::-webkit-outer-spin-button]:appearance-none 
             [&::-webkit-inner-spin-button]:appearance-none 
             [moz-appearance:textfield]' />
                        <p className='mt-3'>Gaji penghasilan</p>
                        <div className='bg-white p-3 rounded-lg'>
                            <div>
                                <input type="radio" id='perbulan' defaultChecked />
                                <label htmlFor="perbulan" className='pl-2 text-gray-700'>Perbulan</label>
                            </div>
                            <div>
                                <input type="radio" className='mt-3' id='pertahun'/>
                                <label htmlFor="Pertahun" className='pl-2 text-gray-700'>Pertahun</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='block md:flex gap-8 justify-between mt-2 mx-15'>
                    <div className='flex flex-col '>
                        <h2 className='text-2xl font-semibold capitalize' >Hasil Zakat Fitrah</h2>
                        <label htmlFor="total fitrah" className='text-sm mt-5'>jumlah Total Fitrah</label>
                        <input type="number" min="0" className='bg-gray-100 pl-3 rounded-lg py-1 px-17 my-1 appearance-none [&::-webkit-outer-spin-button]:appearance-none 
             [&::-webkit-inner-spin-button]:appearance-none 
             [moz-appearance:textfield]' />
                    </div>
                    <div className='flex flex-col md:mx-16'>
                        <h2 className='text-2xl font-semibold capitalize'>Hasil Zakat Fitrah</h2>
                        <label htmlFor="total maal" className='text-sm mt-5'>jumlah Total maal</label>
                        <input type="numerik" min="0" className='bg-gray-100 pl-3 rounded-lg py-1 px-17 my-1 appearance-none [&::-webkit-outer-spin-button]:appearance-none 
             [&::-webkit-inner-spin-button]:appearance-none 
             [moz-appearance:textfield]' />
                    </div>
                </div>
                <div className='flex justify-center gap-2 my-5'>
                    <button className='bg-purple-700 cursor-pointer hover:bg-blue-500 p-3 rounded-lg mr-10 text-white'>Hitung Total Zakat</button>
                    <button className='bg-yellow-500 cursor-pointer hover:bg-yellow-600 p-3 rounded-lg text-white'>Reset Perhitungan</button>
                </div>
            </div>
        </section>
    )
}

export default Main
