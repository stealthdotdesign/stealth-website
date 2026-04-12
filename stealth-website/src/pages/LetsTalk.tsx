import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './LetsTalk.css'

export default function LetsTalk() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const location = useLocation()

  useEffect(() => {
    setStatus('idle')
    setFormData({ firstName: '', lastName: '', company: '', email: '', phone: '' })
  }, [location.key])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const body = new FormData()
      body.append('access_key', '7e425b1b-d93f-4f61-902e-29d291d6926f')
      body.append('botcheck', '')
      body.append('firstName', formData.firstName)
      body.append('lastName', formData.lastName)
      body.append('company', formData.company)
      body.append('email', formData.email)
      body.append('phone', formData.phone)

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body,
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setStatus('sent')
        setFormData({ firstName: '', lastName: '', company: '', email: '', phone: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="page lets-talk">
      <div className="lets-talk-header">
        <h1 className="lets-talk-title">Partner with Stealth</h1>
      </div>
      <div className="lets-talk-form">
        {status === 'sent' ? (
          <p className="form-success">Thank you for reaching out. We'll be in touch.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
            <div className="form-row">
              <div className="form-field">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-field">
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <div className="form-field">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send'}
            </button>
            {status === 'error' && (
              <p className="form-error">Something went wrong. Please try again.</p>
            )}
          </form>
        )}
      </div>
    </div>
  )
}
