// import Link from "next/link";
import "../app/globals.css"

export default function Navbar() {

    return (
        <>
            <div className="navbar ">
                <div className="logo p-1.5 ">
                    🤦🏾‍♀️
                </div>
                <nav className="navbar p-1.5">
                    <a href="#home">Accueil</a>
                    <a href="#education">Parcours</a>
                    <a href="#projets">Projets</a>
                    <a href="CVDevWebPortefolio.pdf" target="_blank">CV</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>

        </>
    )
}