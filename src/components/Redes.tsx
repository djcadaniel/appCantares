import { AiFillTikTok } from "react-icons/ai"
import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa"

export const Redes = () => {
  return (
    <div className="text-white">
      <ul className="flex flex-col gap-2">
        <li className="text-2xl border border-[#17dbc4] rounded-[50%] p-1 red"><a className="icon-link" href=""><FaFacebook /></a></li>
        <li className="text-2xl border border-[#17dbc4] rounded-[50%] p-1 red"><a href=""><FaYoutube /></a></li>
        <li className="text-2xl border border-[#17dbc4] rounded-[50%] p-1 red"><a href=""><FaInstagramSquare /></a></li>
        <li className="text-2xl border border-[#17dbc4] rounded-[50%] p-1 red"><a href=""><AiFillTikTok /></a></li>
      </ul>
    </div>
  )
}
