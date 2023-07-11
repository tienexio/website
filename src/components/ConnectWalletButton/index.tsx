import { usdtContract } from "@/contracts/usdtContract";
import { Web3Button, useWeb3Modal } from "@web3modal/react";
import { useState } from "react";
import { useAccount, useBalance, useDisconnect } from "wagmi";
import Image from "next/image";

export default function ConnectWalletButton() {
  const { address, isConnected } = useAccount()
  // 获取USDT余额
  const { data: usdtBanalce } = useBalance({
    address: address,
    token: usdtContract.address,
    enabled: Boolean(address),
    watch: true,
  })

  if (isConnected) {
    return (
      <div className="flex items-center justify-center gap-2 p-1 bg-white bg-opacity-10 rounded-xl border-1 border-white border-opacity-10">
        <div className="flex sm:hidden">
          <Image
            src="/img/usdt.svg"
            alt=""
            className="ml-2"
            width={22}
            height={22}
            priority
          ></Image>
          <div className="mx-2">
            { Number( usdtBanalce ? usdtBanalce.formatted : 0 ).toFixed(0).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,'$&,') }
          </div>
        </div>
        <Web3Button icon="show" label="Connect Wallet" balance="hide"/>
      </div>
    );
  }

  return (
    <Web3Button icon="show" label="Connect Wallet" balance="hide" />
  );
}