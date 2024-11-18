import { IoLogoWhatsapp } from 'react-icons/io'
import { Redes } from '../components/Redes'
import banner from '/img/banners/banner.jpg'

export default function Home() {

  return (
    <section className="relative w-full bg-mainBg">
      <div className='w-full h-[calc(100vh)] z-5'>
        <img src={banner} alt="" className='h-full object-cover w-full'/>
      </div>
      <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-[100vh] bg-[rgba(0,0,0,.8)]'></div>
      <div className='fixed bottom-1 lg:bottom-5 left-1 lg:left-5'>
        <Redes />
      </div>
      <div className="contain2 absolute top-0 left-0 right-0 bottom-0">
          <div className='w-full h-full flex flex-col justify-center items-start text-white px-20'>
            <div className='w-full flex flex-col lg:flex-row'>
              <div className='w-full lg:w-[50%] text-center lg:text-left'>
                <div className='flex flex-col items-center lg:items-start gap-5 lg:gap-2'>
                  <p className='text-2xl lg:text-3xl'>Somos</p>
                  <h1 className='text-4xl lg:text-6xl text-mainText'>Ministerio <span className='text-white'>Cantares</span></h1>
                </div>
                <p className='text-xl lg:text-2xl mt-8 lg:mt-4'>Sirvan al Señor con temor; <br /> con temblor ríndanle alabanza.</p>
                <span className='text-lg lg:text-2xl'>(Salmo 2:11)</span><br />
                <div className='flex w-full justify-center items-center text-center lg:justify-start'>
                  <a className='flex gap-2 text-xl bg-[#1db6a4] hover:bg-[#189082] transition ease-in-out duration-300 rounded-3xl px-5 py-3 text-white font-bold mt-5' href='https://wa.link/hq2nap' target='_blank'>Contáctanos <IoLogoWhatsapp className='text-4xl' /></a>

                </div>
              </div>
              <div className='w-full lg:w-[50%] flex justify-center items-end gap-5 py-14'>
                <div>
                  <div className='rounded-xl text-center h-[130px] lg:h-[200px] w-[130px] lg:w-[200px] flex flex-col items-center justify-center border border-[#1db6a4] font-title text-xl hover:bg-[#1db6a4] transition ease-in-out duration-300'>
                    <p className='text-5xl lg:text-8xl'>50</p>
                    <span>estudiantes</span>
                    <span>de la biblia</span>
                  </div>
                </div>
                <div>
                  <div className='rounded-xl text-center h-[130px] lg:h-[200px] w-[130px] lg:w-[200px] flex flex-col items-center justify-center border bordr-[#1db6a4] font-title text-xl hover:bg-[#1db6a4] transition ease-in-out duration-300'>
                    <p className='text-5xl lg:text-8xl'>10</p>
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