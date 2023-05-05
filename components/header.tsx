import Link from "next/link";

interface HeaderProps {
    title: string,
}
export default function Header({title}:HeaderProps) {
    return(
        <div className="bg-sky-900 text-white p-3 text-1xl shadow flex flex-row gap-3 items-baseline">
            <div className="text-2xl mr-10"> {title} </div>
            <Link href="/persons">Persons</Link>
            <Link href="/starships">Starships</Link>
            <Link href="/movies">Films</Link>
        </div>
    );

}