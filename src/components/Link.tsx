type Props = {
  title: string
}

export function Link({title}: Props){
  return(
    <li className="w-full border-b py-4 border-gray-500 lg:border-none lg:text-gray-400 ">
      <a className="hover:text-white text-base lg:text-sm" href="#">
        {title}
      </a>
    </li>
  )
}