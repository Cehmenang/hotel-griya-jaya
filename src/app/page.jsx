import Image from "next/image"
import Background from '../../public/hero-img/griya.jpg'

const hero = {
  container: 'h-[100vh] absolute w-[1366px] top-[0px] box-border overflow-hidden -z-[10] left-[-103px]',
  kosong: 'kosong w-full h-[100vh] bg-black absolute top-0 -z-[12] opacity-[0.7]',
  bg: 'relative top-[-100px] -z-[15] blur-sm'
}

export default function Home() {
  return (
    <>
     <div className="content h-[83vh] flex flex-col items-center justify-center text-white">
        <h1 className="text-[40px] font-semibold">Welcome!</h1>
        
      </div>

      <div className={hero.container}>
        <div className={hero.kosong}></div>
        <Image src={Background} alt="Gambar Hotel" width={2000} height={2000} className={hero.bg}/>
      </div>
    </>

   
  );
}
