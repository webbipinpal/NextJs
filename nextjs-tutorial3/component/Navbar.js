import Link from 'next/link'

const Navbar = () => {
    return(
        <>
            <nav>
                <li><Link href="/home">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contactus">Contact us</Link></li>
            </nav>
        </>
    )
}

export default Navbar;