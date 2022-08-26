import image from "../assets/image.png"

export function Develop() {
  return (
    <div className="flex flex-col items-center">
      <span className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-black mb-6">1</span>
      <strong className="text-blue-400 text-2xl mb-6 ">Develop</strong>
      <p className="text-6xl font-bold text-center">Start with the developer</p>
      <div className="flex flex-col md:flex-row gap-10 px-20 mt-8 mb-16">
        <p className="text-gray-400 text-sm">
          Developers love <a href="#" className="text-blue-400">Next.js</a>,
          the open source React framework Vercel built together with Google and Facebook.
          Next.js powers the biggest websites like <a href="#" className="text-blue-400"> Patreon</a>,
          for use cases in <a href="#" className="text-blue-400"> e-commerce</a>,
          <a href="#" className="text-blue-400"> travel</a>,
          <a href="#" className="text-blue-400"> news</a>, and <a href="#" className="text-blue-400">marketing</a>.
        </p>
        <p className="text-gray-400 text-sm">Vercel is the best place to deploy any frontend app.
          Start by deploying with zero configuration
          to our <a href="#" className="text-blue-400">global edge network</a>.
          <a href="#" className="text-blue-400"> Scale dynamically </a>
          to millions of pages without breaking a sweat.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-8 px-20">
        <img src={image}/>
        <div className="flex flex-col">
          <strong className="text-2xl mb-3">Fast Refresh</strong>
          <p className="text-gray-400 text-base mb-16">Reliable live-editing experience for your UI components.</p>

          <strong className="text-2xl mb-3">Flexible Data Fetching</strong>
          <p className="text-gray-400 text-base mb-16">Connect your pages to any data source, headless CMS, or API and make it work in everyone’s dev environment.</p>

          <strong className="text-2xl mb-3">Fast Refresh</strong>
          <p className="text-gray-400 text-base">From caching to Serverless Functions, all our cloud primitives work perfectly on localhost.</p>
        </div>
      </div>
      <p className="text-xs font-semibold text-center mt-12 tracking-widest">WORKS WITH 30+ FRAMEWORKS</p>
      <div className="flex gap-8">
      </div>
    </div>
  )
}