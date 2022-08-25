import { Link } from "./Link"

export function HeaderMobile(){
  const menu = ["Features", "Templates", "Integrations", "Customers", "Pricing", "Contact", "Documentation", "Experts", "Security", "Blog", "Careers", "Frameworks", "Resources"]
  return(
    <div className="flex flex-col mt-10">
      <div className="flex flex-col gap-6 px-6"> 
        <button className="w-full border border-gray-500 py-2 rounded text-sm text-gray-500">Login</button>
        <button className="w-full bg-blue-500 py-2 rounded">Sign up</button>
      </div>
      <ul className="flex flex-col px-6 mt-6 mb-6">
        {menu.map((item, index) => {
          return(<Link key={index} title={item}/>)
        })}
      </ul>
    </div>
  )
}