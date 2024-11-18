import banner from '/img/banners/banner.jpg'

export default function Home() {

  return (
    <section className="relative w-full bg-mainBg">
      <div className='w-full h-[calc(100vh)] z-5'>
        <img src={banner} alt="" className='h-full object-cover w-full'/>
      </div>
      <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-[100vh] bg-[rgba(0,0,0,.8)]'></div>
      <div className="contain2 absolute top-0 left-0 right-0 bottom-0">
          <div className='w-full h-full flex flex-col justify-center items-start text-white px-20'>
            <div className='w-full flex flex-row'>
              <div className='w-[50%]'>
                <div className='flex items-end gap-2'>
                  <h1 className='text-6xl text-mainText'>Ministerio <span className='text-white'>Cantares</span></h1>
                  {/* <span className='text-7xl'>Cantares</span> */}
                </div>
                <p className='text-2xl mt-4'>Sirvan al Señor con temor; <br /> con temblor ríndanle alabanza.</p>
                <span className='text-2xl'>(Salmo 2:11)</span><br />
                <button className='text-xl bg-[#1db6a4] hover:bg-[#189082] transition ease-in-out duration-300 rounded-3xl px-5 py-3 text-white font-bold mt-5'>Contáctanos</button>
              </div>
              <div className='w-[50%] flex justify-center items-end gap-5'>
                <div>
                  <div className='rounded-xl text-center h-[200px] w-[200px] flex flex-col items-center justify-center border border-[#1db6a4] font-title text-xl hover:bg-[#1db6a4] transition ease-in-out duration-300'>
                    <p className='text-8xl'>50</p>
                    <span>estudiantes</span>
                    <span>de la biblia</span>
                  </div>
                </div>
                <div>
                  <div className='rounded-xl text-center h-[200px] w-[200px] flex flex-col items-center justify-center border border-[#1db6a4] font-title text-xl hover:bg-[#1db6a4] transition ease-in-out duration-300'>
                    <p className='text-8xl'>10</p>
                    <span>bautismos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}