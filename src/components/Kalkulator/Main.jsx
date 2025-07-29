import React from 'react'

function Main() {
  return (
    <section className=''>
        <h1>Kalkulator <span> Zakat </span></h1>
        <div className='max-w-3xl flex p-3 gap-8 justify-between mx-auto bg-gray-500'>
            <div className='flex flex-col'>
                <h1>perhitungan zakat Fitrah</h1>
                <label htmlFor="">masukkan jumlah anggota</label>
                <input type="number" placeholder='0' min="0" />
                <label htmlFor="">masukkan total beras</label>
                <input type="text" placeholder='0 Kg'/>
            </div>
            <div f>
                <h1>perhitungan zakat Maal</h1>
                <label htmlFor="">masukkan jumlah anggota</label>
                <input type="number" placeholder='0' min="0" />
            </div>
        </div>
    </section>
  )
}

export default Main
