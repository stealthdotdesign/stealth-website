import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <div className="home-center">
        <p className="tagline">WE DESIGN AND BUILD CREATIVE, TECHNOLOGY-DRIVEN EXPERIENCES.</p>
        <p className="subtitle">FROM AI PRODUCT DESIGN AND FULL-STACK ENGINEERING TO STRATEGY AND AI DIGITAL TRANSFORMATION, WE HELP COMPANIES BUILD INTELLIGENT DIGITAL EXPERIENCES ACROSS THE 360° BRAND LIFECYCLE</p>
      </div>
      <div className="home-images">
        <video autoPlay loop muted playsInline>
          <source src="/exterior-video.mp4" type="video/mp4" />
        </video>
        <img src="/pacha.jpg" alt="Pacha" />
      </div>
      <div className="home-images-secondary">
        <img src="/serve-society.jpg" alt="Serve Society" />
      </div>
    </div>
  )
}
