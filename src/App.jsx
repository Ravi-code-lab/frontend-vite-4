import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'

function HomePage() {
  return (
    <main className="min-h-screen bg-brand-navy">
      <Hero />
    </main>
  )
}

function ContactPage() {
  return (
    <main className="min-h-screen bg-brand-navy flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-4xl font-semibold mb-4">Contact Us</h1>
        <p className="text-white/70">Reach out to our advisors in Jaipur.</p>
      </div>
    </main>
  )
}

function CalculatorsPage() {
  return (
    <main className="min-h-screen bg-brand-navy flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-4xl font-semibold mb-4">Calculators</h1>
        <p className="text-white/70">Financial tools coming soon.</p>
      </div>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/calculators" element={<CalculatorsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
