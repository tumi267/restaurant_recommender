import Footer from "../components/(public)/Footer/Footer"
import Nav from "../components/(public)/Nav/Nav"

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <>
        <Nav/>
        <main >{children}</main>
        <Footer/>
    </>
    )
  }
  