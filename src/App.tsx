import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { ClosingCta } from './components/sections/ClosingCta'
import { Community } from './components/sections/Community'
import { DashboardShowcase } from './components/sections/DashboardShowcase'
import { FrameworkQuickstart } from './components/sections/FrameworkQuickstart'
import { Hero } from './components/sections/Hero'
import { LogoWall } from './components/sections/LogoWall'
import { OpenSource } from './components/sections/OpenSource'
import { ProductBento } from './components/sections/ProductBento'
import { Templates } from './components/sections/Templates'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ProductBento />
        <LogoWall />
        <DashboardShowcase />
        <FrameworkQuickstart />
        <Templates />
        <Community />
        <OpenSource />
        <ClosingCta />
      </main>

      <Footer />
    </>
  )
}
