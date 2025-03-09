import "two-up-element";
import "./App.css";
import { useRef } from "react";

function App() {
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <>
      <div className="box">
        <two-up>
          <img src="cromo-anakin.jpg" alt="anakin" />
          <img src="obiwan.webp" alt="vader" />
        </two-up>
        <button onClick={playAudio}>Reproducir música</button>
        <audio
          ref={audioRef}
          src="Star Wars - Battle of the Heroes.mp3"
        ></audio>
      </div>
    </>
  );
}

export default App;
