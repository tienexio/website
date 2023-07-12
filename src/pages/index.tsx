import { useState,useEffect,useRef } from 'react';

export default function Accordion() {
  const titleBar = ['Home','Docs']
  useEffect(() => {
    const scrollToTop = ()=>{
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      const navigationClassList = document.querySelector('main > div:nth-child(1)');
      if(scrollTop>=1000) navigationClassList?.classList.add('hidenavigation');
      else {
        navigationClassList?.classList.remove('hidenavigation')
        navigationClassList?.classList.add('shownavigation');
      }
    }
    window.addEventListener('scroll', scrollToTop);
    return () => {
      window.removeEventListener('scroll', scrollToTop);
    };
  }, []);

  const toshare = (index:any)=>{
    if(index == 0) window.location.href = 'https://twitter.com/tienex_io'
  }
  
  return (
    <>
      <main className='home-bg-img w-full min-h-screen'>
        <div className='fixed top-0 flex items-center justify-between px-96 h-[70px] bg-white w-full text-[#453D6A] z-10 sm:px-2'>
          <div className='flex items-center gap-10 sm:gap-2'>
            <img src="/img/logo.png" className='w-28 h-9 sm:w-16 sm:h-6' />
            {titleBar.map((item,index)=>{
              return <text key={item} className={`text-base ${index==0 && 'text-[blue]'}`}>{item}</text>
            })}
          </div>

          <div className='flex gap-3 items-center sm:gap-1'>
            {Array(4).fill('').map((item,index)=>{
              return <img src={`/img/share${index}.png`} alt="" className='w-6 h-6' onClick={()=>toshare(index)}/>
            })}
            <div className='flex items-center w-24 h-8 bg-[#0B5EFE] rounded-full justify-around text-[#ffffff] px-3 ml-3 sm:w-16 sm:h-6 sm:ml-1'>
              <img src="/img/app_icon.png" alt="" className='sm:w-4'  />
              <text className='sm:text-xs'>App</text>
            </div>
          </div>
        </div>

        <div className='w-full bg-black relative sm:mt-[70px]'>
          <img src="/img/head_bg.svg" className='w-full' />
          <div className='absolute text-[#3D4C6A] top-1/2 -translate-y-1/2 px-96 sm:w-80 sm:-translate-x-1/2 sm:px-2 sm:left-1/2'>
          {/* <div className='absolute w-[900px] text-[#3D4C6A] top-1/2 -translate-y-1/2 left-1/2 -translate-x-2/3 sm:w-80 sm:-translate-x-1/2'> */}
            <h1 className='text-7xl leading-snug font-semibold break-keep sm:text-base'>Tienex - Reshaping DeFi. Bridging traditional and decentralized finance.</h1>
            <p className='text-2xl mt-4 leading-snug break-keep sm:text-sm'>Tienex is a pioneer in the world of DeFi, providing a platform for creating, managing, and trading synthetic assets, including Real-World Assets (RWA). Embrace the democratized access to diverse financial markets made possible by blockchain technology.</p>
          </div>
        </div>

        <div className=' relative h-[700px] sm:h-[500px]'>
          <img src={`/img/asset_bg.svg`} className='w-full h-full' />
          <div className={`absolute flex items-center justify-between top-0 w-full h-full sm:flex-col px-96 sm:px-2`}>
            <img src={`/img/asset0.svg`} className='w-[520px] h-[418px]' />
            <div className='text-[#3D4C6A] w-[600px] sm:w-full sm:text-center'>
              <p className='text-6xl break-keep relative leading-snug sm:text-base'>Synthetic Asset Management</p>
              <p className='text-2xl break-keep mt-4 leading-snug sm:text-base'>Create, manage, and trade synthetic assets that mirror their real-world counterparts.</p>
            </div>
          </div>
        </div>

        <div className='w-full relative h-[700px] sm:h-[500px]'>
          <div className='absolute top-0 px-96 w-full h-full sm:px-2'>
            <div className={` flex items-center justify-between w-full h-full sm:flex-col-reverse relative`}>
              <div className='text-[#3D4C6A] w-[620px] sm:w-full sm:text-center'>
                <p className='text-6xl break-keep relative leading-snug sm:text-base'>Tokenization of R eal-World Assets (RAW)</p>
                <p className='text-2xl break-keep mt-4 leading-snug sm:text-base'>Tokenize physical or abstract assets, allowing wider investment participation and improved asset liquidity.</p>
              </div>
              <img src={`/img/asset1.svg`} className='w-[580px] h-[828px] absolute right-0 sm:top-0 sm:h-96' />
            </div>
          </div>
        </div>

        <div className='w-full relative h-[700px] sm:h-[500px]'>
          <div className={`absolute flex items-center justify-between top-0 w-full h-full sm:flex-col px-96 sm:px-2`}>
          <img src={`/img/asset2.svg`} className='w-[530px] h-[616px]' />
            <div className='text-[#3D4C6A] w-[600px] sm:w-full sm:text-center'>
              <p className='text-6xl break-keep relative leading-snug sm:text-base'>Accessibility</p>
              <p className='text-2xl break-keep mt-4 leading-snug sm:text-base'>Reduced geographical barriers and reliance on intermediaries thanks to blockchain technology.</p>
            </div>
          </div>
        </div>
        
        <div className='w-full relative h-[700px] sm:h-[500px]'>
          <img src={`/img/asset_bg.svg`} className='w-full h-full' />
          <div className={`absolute flex items-center justify-between top-0 w-full h-full sm:flex-col-reverse px-96 sm:px-2 sm:justify-end`}>
            <div className='text-[#3D4C6A] w-[600px] sm:w-full sm:text-center sm:-mt-10'>
              <p className='text-6xl break-keep relative leading-snug sm:text-base '>Security</p>
              <p className='text-2xl break-keep mt-4 leading-snug sm:text-base'>Operates on the secure and efficient blockchain, ensuring trustless and safe transactions.</p>
            </div>
            <img src={`/img/asset3.svg`} className='w-[702px] h-[864px] sm:h-[400px]' />
          </div>
        </div>


        <div className='flex justify-between bg-[#D9E3FF] px-96 py-16 h-80 text-[#616D8D] sm:px-2 sm:py-4 sm:flex-col sm:h-auto'>
          <div className='w-[485px] break-keep sm:w-full'>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <p> Blandit id fringilla turpis tempor enim. Vel tristique suspendisse</p>
            {/* <div className='w-64 h-8 my-12'></div> */}
            <p className='text-lg'>Developers: GITHUB</p>
          </div>
          <div className='text-right pr-24 sm:pr-0 sm:text-left sm:pt-4'>
            <div className='#625F70 text-lg font-semibold'>Excess income</div>
            <div className='w-72 break-keep sm:w-full'>Tienex provides LP pools. Users can earn more by holding an LP consisting of tAssets and USDT.</div>
          </div>
        </div>

        <div className='flex justify-between bg-[#D9E3FF] px-96 items-center h-20 text-[#616D8D] border-t-1 border-[#AEBCE0] sm:px-2'>
          <img src="/img/logo.png" className='w-28 h-9' />
          <p className='pr-24 sm:pr-0 sm:w-48'>Copyright 2023. All right reserved.</p>
        </div>
      </main>
    </>
  );
}