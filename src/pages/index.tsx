import { useState,useEffect,useRef } from 'react';

export default function Accordion() {
  const titleBar = ['Home','Docs']
  const centerlist = [
    {'title':'Synthetic Asset Management','text':'Create, manage, and trade synthetic assets that mirror their real-world counterparts.'},
    {'title':'Tokenization of R eal-World Assets','text':'Tokenize physical or abstract assets, allowing wider investment participation and improved asset liquidity.'},
    {'title':'Accessibility','text':'Reduced geographical barriers and reliance on intermediaries thanks to blockchain technology.'},
    {'title':'Security','text':'Operates on the secure and efficient blockchain, ensuring trustless and safe transactions.'},
  ]
  const imgdetail = [{'width':'520px','height':'418px'},{'width':'580px','height':'828px'},{'width':'530px','height':'616px'},{'width':'752px','height':'864px'}]

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
  
  return (
    <>
      <main className='home-bg-img w-full min-h-screen'>
        <div className='fixed top-0 flex items-center justify-between px-80 h-[70px] bg-white w-full text-[#453D6A]  z-10'>
          <div className='flex items-center gap-10'>
            <img src="/img/logo.png" className='w-28 h-9' />
            {titleBar.map((item)=>{
              return <text key={item} className='text-base'>{item}</text>
            })}
          </div>

          <div className='flex gap-3 items-center'>
            {Array(4).fill('').map((item,index)=>{
              return <img src={`/img/share${index}.png`} alt="" className='w-6 h-6'/>
            })}
            <div className='flex items-center w-24 h-8 bg-[#0B5EFE] rounded-full justify-around text-[#ffffff] px-3 ml-3'>
              <img src="/img/app_icon.png" alt="" />App
            </div>
          </div>
        </div>

        <div className='w-full'>
          <img src="/img/head_bg.svg" className='w-full ' />
          <div className='absolute w-[900px] text-[#3D4C6A] top-1/2 -translate-y-1/2 left-1/2 -translate-x-2/3'>
            <h1 className='text-7xl leading-snug font-semibold break-keep'>Tienex - Reshaping DeFi. Bridging traditional and decentralized finance.</h1>
            <p className='text-2xl mt-4 leading-snug break-keep'>Tienex is a pioneer in the world of DeFi, providing a platform for creating, managing, and trading synthetic assets, including Real-World Assets (RWA). Embrace the democratized access to diverse financial markets made possible by blockchain technology.</p>
          </div>
        </div>

        {
          centerlist.map((item, index) => (
            <div className='w-full relative h-[700px]' key={index}>
              {index % 2 === 0 && <img src={`/img/asset_bg.svg`} className='w-full h-full' />}
              <div className='absolute flex items-center justify-center top-0 w-full h-full'>
                {index % 2 === 0 && <img src={`/img/asset${index}.svg`} className={`${imgdetail[index]}`} />}
                <div className='text-[#3D4C6A] w-[600px]'>
                  <p className='text-6xl break-keep relative leading-snug'>{item.title}
                    {index==1 && <text className='absolute right-0 bottom-0 translate-x-1/2'>(RWA)</text>}
                  </p>
                  <p className='text-2xl break-keep mt-4 leading-snug'>{item.text}</p>
                </div>
                {index % 2 !== 0 && <img src={`/img/asset${index}.svg`} className={`${imgdetail[index]}`} />}
              </div>
            </div>
          ))
        }

        <div className='flex justify-between bg-[#D9E3FF] px-64 py-16 h-80 text-[#616D8D]'>
          <div className='w-[485px] break-keep'>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <p> Blandit id fringilla turpis tempor enim. Vel tristique suspendisse</p>
            <div className='w-64 h-8 my-12'></div>
            <p className='text-lg'>Developers: GITHUB</p>
          </div>
          <div className='text-right pr-24'>
            <div className='#625F70 text-lg font-semibold'>Excess income</div>
            <div className='w-72 break-keep '>Tienex provides LP pools. Users can earn more by holding an LP consisting of tAssets and USDT.</div>
          </div>
        </div>

        <div className='flex justify-between bg-[#D9E3FF] px-64 items-center h-20 text-[#616D8D] border-t-1 border-[#AEBCE0]'>
          <img src="/img/logo.png" className='w-28 h-9' />
          <p className='pr-24'>Copyright 2023. All right reserved.</p>
        </div>
      </main>
    </>
  );
}