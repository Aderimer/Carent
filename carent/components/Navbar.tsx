import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"


const Navbar = () => {
  return (
    <div className="bg-red-700 h-24">
      <nav className='navbar-container text-white inline-flex align-middle justify-between py-4 m-5 w-100 gap-10 font-semibold'>
          <Link className="relative bottom-2" href="/">
              <Image src="logo.svg" alt="logo" width={75} height={75}/>
          </Link>

          <ul className="hidden h-full gap-12 lg:inline-flex">
            {[NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key}>
                {link.label}
              </Link>
            ))]}
          </ul>
          
          <Image src="menu.svg" alt="menu" width={32} height={32} className="absolute right-10 top-8 cursor-grab lg:hidden" />


          <a className="absolute right-20 border-r-2 py-2 px-4 top-7 lg:right-10" href='#'>LOGG INN</a>
      </nav>
    </div>
  )
}

export default Navbar