'use client'
import './index.scss'
import Image from 'next/image'
import ButtonAtv from '@/components/_ui/button/ButtonAtv'
import { SiInstagram, SiLinkedin, SiYoutube, SiTiktok, SiFacebook } from "react-icons/si"
import { IoMenu } from "react-icons/io5";
import { useState } from 'react'

export default function Page() {
  const [isVisible, setIsVisible] = useState(false)
  const [isRotate, setIsRotate] = useState(false)

  const handleClick = () => {
    setIsVisible(!isVisible)
    setIsRotate(!isRotate)
  }

  return (
    <main>
      <div className="page">
        <div className="page__logo">
          <Image
            src='/logo.png'
            width={240}
            height={240}
          />
          <h1>Ômega Screen</h1>
          <h2>Indústria</h2>
        </div>
        {
          isVisible && (
            <>
              <div className="page__content">
                <ButtonAtv link="" target="_blank" largura="15rem" nome="Silk xTreme" />
                <ButtonAtv link="https://www.omegascreen.com.br/" target="_blank" largura="15rem" nome="Site Oficial" />
                <ButtonAtv link="https://www.canva.com/design/DAFQKSiFu9E/mkECBY5Sy9WzJY-5Hbx6Xw/view?utm_content=DAFQKSiFu9E&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" largura="15rem" nome="Portfólio" />
                <ButtonAtv link="https://api.whatsapp.com/send/?phone=5581982810058&text&type=phone_number&app_absent=0" target="_blank" largura="15rem" nome="Atendimento" />
              </div>
              <div className="page__content">
                <a href="https://www.tiktok.com/@omegascreen.ind?is_from_webapp=1&sender_device=pc" target='_blank'><SiTiktok size={22} /></a>
                <a href="https://www.youtube.com/@omegascreen" target='_blank'><SiYoutube size={22} /></a>
                <a href="https://www.linkedin.com/company/%C3%B4mega-ind%C3%BAstria-e-com%C3%A9rcio-de-tintas-ltda/?originalSubdomain=br" target='_blank'><SiLinkedin size={22} /></a>
                <a href="https://www.facebook.com/profile.php?id=100086183216972" target='_blank'><SiFacebook size={22} /></a>
                <a href="https://www.instagram.com/omegascreen.ind" target='_blank'><SiInstagram size={22} /></a>
              </div>
            </>
          )
        }
        <div className="page__btntoggle">
          <IoMenu size={30} onClick={handleClick} className={isRotate ? 'rotateX' : 'rotateY'} />
        </div>
      </div>
    </main >
  )
}
