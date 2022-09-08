import { Develop } from "./Develop";
import { Preview } from "./Preview";
import { Ship } from "./Ship";

export function Explorer(){
  return(
    <div className="w-full flex flex-col mt-24 items-center">
      <p className="text-xs font-semibold mb-16 tracking-widest">EXPLORE THE VERCEL WAY</p>
      <Develop/>
      <Preview/>
      <Ship/>
    </div>
  )
}