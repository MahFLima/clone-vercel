export function Ship() {
  return (
    <div className="w-full flex flex-col mb-20 items-center">
      <span className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center text-black mb-6">3</span>
      <strong className="text-orange-400 text-2xl mb-6 ">Ship</strong>
      <p className="text-4xl md:text-6xl font-bold">Delight every visitor</p>
      <div className="flex flex-col md:flex-row gap-10 mt-8 mb-16 px-8 md:px-12">
        <p className="text-gray-400 text-sm">
          Merged changes instantly go live on our 
          <a href="#" className="text-red-400"> global edge network</a>, 
          putting your content as close as possible to your customers. 
          Everything is taken care of for you, from 
          <a href="#" className="text-red-400"> SSL encryption </a> 
          to <a href="#" className="text-red-400">asset compression</a> and 
          <a href="#" className="text-red-400"> cache invalidation</a>.
        </p>
        <p className="text-gray-400 text-sm">
          Speed is critical to customers - and for SEO. Vercel goes beyond just caching 
          static content, scaling to <a href="#" className="text-red-400">millions of pages</a> through <a href="#" className="text-red-400">dynamic code execution</a>.
        </p>
      </div>

      <div className="bg-gray-700 w-full py-6 px-8 flex justify-center gap-10 lg:gap-0 border-y border-gray-500 flex-col lg:flex-row">
        <span className="lg:border-r border-gray-500 px-10 flex flex-col items-center gap-2 text-sm text-gray-400">
          <strong className="text-6xl text-white">90</strong>
          CITIES
        </span>
        <span className="lg:border-r border-gray-500 px-10 flex flex-col items-center gap-2 text-sm text-gray-400">
          <strong className="text-6xl text-white">25B+</strong>
          REQUESTS PER WEEK
        </span>
        <span className="lg:border-r border-gray-500 px-10 flex flex-col items-center gap-2 text-sm text-gray-400">
          <strong className="text-6xl text-white">10PB</strong>
          DATA SERVED
        </span>
        <span className="lg:border-r border-gray-500 px-10 flex flex-col items-center gap-2 text-sm text-gray-400">
          <strong className="text-6xl text-white">99.99%</strong>
          GUARANTEED UPTIME
        </span>
      </div>
    </div>
  )
}