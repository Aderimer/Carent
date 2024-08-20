import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"


const Navbar = () => {
  return (
    <nav className='navbar-container text-red-700 inline-flex align-middle justify-between py-4 m-5 w-100 gap-10 font-semibold border-b-2'>
        <Link href="/">
            <Image src="/next.svg" alt="logo" width={75} height={75}/>
        </Link>

        <ul className="hidden h-full gap-12 lg:inline-flex">
          {[NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.label}
            </Link>
          ))]}
        </ul>
        
        <Image src="menu.svg" alt="menu" width={32} height={32} className="absolute right-10 top-8 cursor-grab lg:hidden" />


        <a className="absolute right-20 border-r-2 py-2 px-4 top-7" href='#'>LOGG INN</a>
    </nav>
  )
}

export default Navbar