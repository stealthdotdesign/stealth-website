import { useEffect, useState } from 'react'
import './Clock.css'

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

export default function Clock() {
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
    <div className="clock">
      <p><span className="clock-label">DXB</span> {dubai}</p>
      <p><span className="clock-label">MUM</span> {mumbai}</p>
    </div>
  )
}
