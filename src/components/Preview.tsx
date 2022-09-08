import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"

export function Preview() {
  return (
    <div className="w-full flex flex-col mb-20 items-center px-8 md:px-12">
      <span className="w-10 h-10 rounded-full bg-pink-400 flex justify-center items-center text-black mb-6">2</span>
      <strong className="text-pink-400 text-2xl mb-6 ">Preview</strong>
      <p className="text-4xl md:text-6xl font-bold mb-10 text-center">Accelerate with your team</p>
      <p className="text-gray-400 text-sm text-center">
        Frontend development is not meant to be a solo activity.
        The Vercel platform makes it <br /> a collaborative experience
        with deploy previews for every code change, by seamlessly
        integrating<br /> with <a href="#" className="text-pink-400">GitHub</a>,
        <a href="#" className="text-pink-400"> GitLab</a>, and
        <a href="#" className="text-pink-400"> Bitbucket</a>.
      </p>

      <div className="mt-10 flex flex-col gap-20 relative">


        <div className="flex flex-col lg:flex-row items-center gap-20">
          <img src={image2} />
          <div className="flex flex-col gap-3">
            <strong className="text-2xl">Push to deploy</strong>
            <p className="text-gray-400 text-base">Import your repo with one click, then push. Our built-in CI/CD system triggers for every code change.</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-20">
          <img src={image3} />
          <div className="flex flex-col gap-3">
            <strong className="text-2xl">Get your Preview URL</strong>
            <p className="text-gray-400 text-base">Every Git branch and PR receives a live, production-like URL that everyone on your team can visit.</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <img src={image4} />
          <div className="flex flex-col gap-3"> 
            <strong className="text-2xl">Share and Collaborate</strong>
            <p className="text-gray-400 text-base">Avoid surprises by iterating with your entire team. Test from the perspective of your users, on every platform.</p>
          </div>
        </div>
      </div>

    </div>
  )
}