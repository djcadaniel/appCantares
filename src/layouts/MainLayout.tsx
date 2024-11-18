import Footer from "../components/Common/Footer/Footer"
import Navbar from "../components/Common/Navbar/Navbar"
import { useMenu } from "../hooks/useMenu";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({children}: MainLayoutProps) {

  const {handleMenuBody} = useMenu();
  const {menuActive} = useMenu();

  return (
    <>
      <Navbar/>
      <div onClick={handleMenuBody} className={`-mt-[80px] z-20 ${menuActive ? 'blur-sm backdrop-blur-sm' : ''}`}>
        {children}
      </div>
      <Footer />
    </>
  )
}