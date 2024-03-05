import Links from './Links'

export default function Nav(){
    return (
        <nav className="pt-8 flex flex-col items-center gap-y-2 text-white">
            <p className="text-3xl font-semibold">Griya Sentana Hotel</p>
            <Links/>
        </nav>
    )
}