import { ReactDOM } from "react";
function HeroForm() {
  return (
    <form className="absolute right-gorilla-cut flex gap-1 flex-col rounded-xl w-gorilla-cut h-auto p-10 top-72 bg-white shadow-gray-900 shadow-sm">
        <label><b>Lokasjon</b></label>
        <select className="p-1">
            <option value="Oslo">Oslo</option>
            <option value="Under vann">Under vann</option>
            <option value="Trondheim">Trondheim?</option>
            <option value="Krakow">Krakow</option>
        </select>

        <label><b>Fra dato</b></label>
        <input className="border-2" type='date'/>

        <label><b>Til dato</b></label>
        <input className="border-2" type='date'/>

        <label><b>Prikker på førerkort?</b></label>
        <section className="inline-flex">
        {Array(6).fill(1).map((_, i) => (
            <input className="w-5 h-4 ring-1" type="checkbox"/>
        ))}
        </section>

        <label><b>Plan om å kjøre ut?</b></label>
        <input className="relative w-5 h-4" type="checkbox"/>

        <button className="text-white font-bold p-2 cursor-grab bg-red-700 rounded-full m-5">Finn kjøretøy</button>
    </form>
  )
}

export default HeroForm