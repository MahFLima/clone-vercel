import nextIcon from "../assets/next-js.svg"
import reactIcon from "../assets/react.svg"
import nuxtIcon from "../assets/nuxt-js.svg"
import vueIcon from "../assets/vue.svg"
import emberIcon from "../assets/ember.svg"
import svelteIcon from "../assets/svelte.svg"
import angularIcon from "../assets/angular.svg"
import hugoIcon from "../assets/hugo.svg"
import gatsbyIcon from "../assets/gatsby.svg"

export function ListIcon() {
  return (
    <div className="flex gap-8 mt-10 flex-wrap justify-center">
      <img src={nextIcon} className="w-10 h-10" />
      <img src={reactIcon} className="w-10 h-10" />
      <img src={nuxtIcon} className="w-10 h-10" />
      <img src={vueIcon} className="w-10 h-10" />
      <img src={emberIcon} className="w-10 h-10" />
      <img src={svelteIcon} className="w-10 h-10" />
      <img src={angularIcon} className="w-10 h-10" />
      <img src={hugoIcon} className="w-10 h-10" />
      <img src={gatsbyIcon} className="w-10 h-10" />
    </div>
  )
}