import { Develop } from "./Develop";

export function Explorer(){
  return(
    <div className="w-full flex flex-col items-center mt-24">
      <p className="text-xs font-semibold text-center mb-16 tracking-widest">EXPLORE THE VERCEL WAY</p>
      <Develop/>
    </div>
  )
}