// DENNE KOMPONENTEN ER IKKE I BRUK, KUN FOR LÆRDOM

import Image from "next/image";

type ButtonProps = {
    type: 'button' | 'submit';
    title: string,
    icon?: string;
    variant: 'btn-dark-red';
}



const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
    className={`flexCenter gap-3 rounded-full border p-3`}
    type={type}>
        {icon && <Image src={icon} alt={title} width={24} height={24} /> }
        <label className="bold-14 whitespace-nowrap">{title}</label>
    </button>
  )
}
// UBRUKT - UNDER ER EKSEMPEL PÅ BRUK
<Button type='button' title='LOGG INN' variant='btn-dark-red' />

export default Button