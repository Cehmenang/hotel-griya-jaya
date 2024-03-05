
import Link from "next/link"

export default function Links(){
    const navLink = [
        { title: 'Home', page: '/' },
        { title: 'Rooms', page: '/rooms' },
        { title: 'Service', page: '/service' },
        { title: 'Reservation', page: '/reservation' },
        { title: 'About', page: '/about' }
    ]

    const ShowLinks = navLink.map(({title, page}, index)=>{
        return (
            <div key={index}>
                <Link href={page}>{title}</Link>
            </div>
        )
    })

    return (
        <>
        <div className="links flex gap-x-8 text-md">
            {ShowLinks}
        </div>
        </>
    )
}