import { useState } from 'react'
import './App.css'

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseMove = (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 20;
    const y = (window.innerHeight / 2 - e.clientY) / 20;
    setPosition({ x, y });
  };

  const handleImageClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300); // Reset after animation
  };

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <div
        className="image-container"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <img
          src="/funny_kitten_standing.png" // Replace with your image URL
          alt="Parallax Effect"
          className={`parallax-image ${isClicked ? "balloon" : ""}`}
          onClick={handleImageClick}
        />
      </div>
    </div>
  );
}

export default App
