import { useState } from "react";
import { Explorer } from "../components/Explorer";
import { Header } from "../components/Header";
import { HeaderMobile } from "../components/HeaderMobile";
import { Home } from "../components/Home";

export function HomePage(){
  const [isActive, setIsActive] = useState(false)

  function handleActive(){
    isActive ? setIsActive(false) : setIsActive(true)
    console.log(isActive)
  }

  return(
    <div className="w-full flex flex-col">
      <Header onClick={handleActive}/>
      {isActive ? (<HeaderMobile/>) : 
      (
        <>
          <Home/>
          <Explorer/>
        </>
      )}
    </div>
  )
}