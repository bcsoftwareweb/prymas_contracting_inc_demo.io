import { Outlet } from 'react-router-dom'
import { useScrollToTopOnNavigate } from '../../hooks/useScrollToTopOnNavigate'
import { DemoCredit } from './DemoCredit'
import { DemoWatermark } from './DemoWatermark'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { ScrollToTopButton } from './ScrollToTopButton'

export function Layout() {
  useScrollToTopOnNavigate()

  return (
    <div className="min-h-screen bg-concrete-50">
      <DemoWatermark />
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
      <DemoCredit />
    </div>
  )
}
