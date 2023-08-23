import Navbar from "./Navbar";

const Header = () => {
    return(
        <>
        <div className="header">
            <a href="#default" className="logo">CompanyLogo</a>
            <div className="header-right">
                <Navbar />
            </div>
            </div>
        </>
    )
}

export default Header;