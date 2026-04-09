import { useEffect, useState } from 'react'
import './Home.css'

function formatTime(timeZone: string) {
  const now = new Date()
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).formatToParts(now)

  const h = parts.find(p => p.type === 'hour')!.value
  const m = parts.find(p => p.type === 'minute')!.value
  const s = parts.find(p => p.type === 'second')!.value
  return `${h}:${m}:${s}`
}

export default function Home() {
  const [dubai, setDubai] = useState('')
  const [mumbai, setMumbai] = useState('')

  useEffect(() => {
    const tick = () => {
      setDubai(formatTime('Asia/Dubai'))
      setMumbai(formatTime('Asia/Kolkata'))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="home">
      <div className="home-center">
        <p className="tagline">WE DESIGN AND BUILD CREATIVE, TECHNOLOGY-DRIVEN EXPERIENCES.</p>
        <p className="subtitle">FROM AI PRODUCT DESIGN AND FULL-STACK ENGINEERING TO STRATEGY AND AI DIGITAL TRANSFORMATION, WE HELP COMPANIES BUILD INTELLIGENT DIGITAL EXPERIENCES ACROSS THE 360° BRAND LIFECYCLE</p>
      </div>
      <div className="home-images">
        <img src="/serve-society.jpg" alt="Serve Society" />
        <img src="/serve-society.jpg" alt="Project" />
      </div>
      <div className="home-address">
        <p>STEALTH TECHNOLOGY LIMITED</p>
        <p>UNIT 201, LEVEL 1 GATE AVENUE - SOUTH ZONE DUBAI INTERNATIONAL FINANCIAL CENTRE DUBAI, UNITED ARAB EMIRATES</p>
      </div>
      <div className="home-clock">
        <p><span className="home-clock-label">DXB</span> {dubai}</p>
        <p><span className="home-clock-label">MUM</span> {mumbai}</p>
      </div>
    </div>
  )
}
