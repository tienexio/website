import { usdtContract } from "@/contracts/usdtContract";
import { Web3Button, useWeb3Modal } from "@web3modal/react";
import { useEffect, useState } from "react";
import { useAccount, useBalance, useDisconnect } from "wagmi";
import Image from "next/image";
import moment from 'moment';
import { getTimeleft } from '@/utils/timeleft';
import { t } from "i18next";

export default function Timeleft(props: any) {
  const { onClose, saleTime }  = props
  var timer = null as any;
  const [timeleft,setTimeleft] = useState(getTimeleft(moment(),moment()))
  useEffect(() => {
    if(moment(saleTime).diff(moment(), 'seconds')<=0) return
    if (!timer) {
      const task = () => {
        const t = getTimeleft(moment(saleTime),moment())
        if (t.duration == 0 && timer != null) {
          clearInterval(timer)
          timer = null;
          onClose();
          return
        }
        setTimeleft(t)
        console.log(t,'result');
      }
      timer = setInterval(task, 1000)
      task();
    }
    // 组件卸载时清除定时器
    return () => {
      clearInterval(timer);
      timer = null;
    };
  }, [])
  

  return (
    <>
    { timeleft.duration > 0 ?
      <div className='presaleT-bg w-[500px] h-[208px] flex justify-center items-center flex-col p-[65px] rounded-lg text-[#686799] text-center mt-5 sm:w-full'>
        <div className='flex gap-24 pb-1 sm:gap-20'><span>天</span><span>时</span><span>分</span><span>秒</span></div>
        <div className='textstyle flex leading-[68px] gap-4 font-semibold sm:gap-1.5'>
          <span className='time-bg w-[68px] h-[68px] rounded-lg'>{timeleft.days}</span> <span>:</span> 
          <span className='time-bg w-[68px] h-[68px] rounded-lg'>{timeleft.hours}</span> <span>:</span> 
          <span className='time-bg w-[68px] h-[68px] rounded-lg'>{timeleft.minutes}</span> <span>:</span> 
          <span className='time-bg w-[68px] h-[68px] rounded-lg'>{timeleft.seconds}</span>
        </div>
        <div className='pt-4'>預售時間：{moment(saleTime).format('YYYY-MM-DD HH:mm')} (GMT+0)預售即將開啟，敬請期待！</div>
      </div>
      : null }
    </>
  );
}