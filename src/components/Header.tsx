import { useState } from "react"
import { List } from "phosphor-react"
import { Link } from "./Link"

type Props = React.HTMLProps<HTMLButtonElement>
 
export function Header({onClick}: Props) {
  const menu = ["Features", "Templates", "Integrations", "Customers", "Pricing"]
  return (
    <div className="w-full flex items-center justify-between px-10 py-6">
      <strong className="text-2xl">Clone Vercel</strong>
      <button onClick={onClick} className="lg:hidden"><List size={32} /></button>
      
      <ul className="hidden lg:flex items-center gap-8">
        {menu.map((item, index) => {
          return(
            <Link key={index} title={item}/>
          )
        })}
      </ul>
      <div className="hidden lg:flex gap-6 items-center">
        <Link title="Contact"/>
        <Link title="Login"/>
        <a className="flex-none px-4 py-2 bg-white text-black rounded border hover:bg-black hover:text-white hover:border-white"href="#">Sign Up</a>
      </div>
    </div>
  )
}