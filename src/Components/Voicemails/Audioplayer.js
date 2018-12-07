import React from 'react';
import './Audioplayer.css'
class Audioplayer extends React.Component {
  render () {
    return (
      <div className="container-audio">
        <audio controls id = "player" controlsList="nodownload">
          <source src = "http://geralex.site/media/audio/brain-music.mp3" />
          <p> Your browser doesn't support the audio tag </p>
        </audio>
      </div>
    )
  }
}

export default Audioplayer