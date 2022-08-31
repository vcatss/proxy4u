import Navbar from '/src/layout/navBar.js'
import Footer from '/src/layout/footer.js'
import 'tailwindcss/tailwind.css'

export default function Layout({children}) {
    return (
        <>
            <div className="w-full flex flex-wrap p-3 shadow-md">
                <Navbar></Navbar>
            </div>
            <main className="w-full flex flex-wrap">
                {children}
            </main>
            <div className="w-full flex flex-wrap">
                <Footer/>
            </div>
        </>
    )
}