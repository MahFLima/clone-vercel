import { useEffect, useRef, useState } from "react"
import classNames from "classnames"

export function Home() {
  const developRef = useRef<HTMLSpanElement>(null);
  const previewRef = useRef<HTMLSpanElement>(null);
  const shipRef = useRef<HTMLSpanElement>(null);
  const [borderAnimate, setBorderAnimate] = useState("border-blue-400")
  const [hbgButton, setHbgButton] = useState("hover:bg-blue-400")

  useEffect(() => {
    setInterval(() => {
      developRef.current?.classList.remove("animate-animateDevelop")

    }, 4000);
    setInterval(() => {
      previewRef.current?.classList.add("animate-animatePreview")
      setBorderAnimate("border-pink-400")
      setHbgButton("hover:bg-pink-400")
    }, 4000);
    setInterval(() => {
      previewRef.current?.classList.remove("animate-animatePreview")

    }, 8000);
    setInterval(() => {
      developRef.current?.classList.add("animate-animateDevelop")
      setBorderAnimate("border-blue-400")
      setHbgButton("hover:bg-blue-400")
    }, 8000);
  }, [developRef])

  return (
    <div className="flex flex-col items-center my-10">
      <section className="flex flex-col">
        <span ref={developRef} className="font-bold text-center text-[6rem] sm:text-[10rem] tracking-tighter animate-animateDevelop">Develop.</span>
        <span ref={previewRef} className="font-bold text-center text-[6rem] sm:text-[10rem] tracking-tighter">Preview.</span>
        <span ref={shipRef}    className="font-bold text-center text-[6rem] sm:text-[10rem] tracking-tighter">Ship.</span>
      </section>
      <div className="mt-10 flex justify-center gap-8 px-4">
        <button className=" bg-white border text-black py-4 px-8 rounded hover:bg-black hover:text-white hover:border-white transition-color">Start Deploying</button>
        <button className={classNames(" bg-black border text-white py-4 px-8 rounded transition-colors duration-500 delay-200 hover:text-black", borderAnimate, hbgButton)}>Get a Demo</button>
      </div>
      <p className="text-center mt-12 text-gray-400 text-lg">
        Vercel combines the best developer experience with an obsessive focus on end-user performance.<br/>
        Our platform enables frontend teams to do their best work.
      </p>
    </div>
  )
}
