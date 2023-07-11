import lottie from 'lottie-web'
import { createRef, useEffect , useState } from 'react'

export default function Loading(prop:any){
    const { show } = prop
    const loadRef = createRef() as any;
    
    const [, setLottie] = useState(null);

    function clickHandler(e:any){
        console.log("触发")
        if(show){
            e.preventDefault()
            e.stopPropagation()
        }
    }

    useEffect(()=>{
        setLottie(
            (lottie as any).loadAnimation({
                container:loadRef.current,
                renderer:'svg',
                loop:true,
                autoplay:true,
                // path:'https://maxst.icons8.com/vue-static/landings/animated-icons/icons/circles-menu-1/circles-menu-1.json',
                // path:'https://assets4.lottiefiles.com/packages/lf20_kxsd2ytq.json',
                animationData:require('./loading.json'),
                // path:'loading.json',
            })
        )
        // pointer-events-none
    },[])

    return (
        
        <div 
            className='fixed bg-transparent  z-[10000000000] w-full h-[100vh] flex justify-center items-center' 
            style={{background:'rgba(0,0,0,.5)',visibility:show?'visible':'hidden'}} 
            onClick={clickHandler}
        >
            <div className='lottie bg-transparent w-[10rem] h-[10rem]' ref={loadRef} ></div>
        </div>
    )
}