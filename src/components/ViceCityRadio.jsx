import { useEffect, useState } from 'react'
import { Play, Pause, SpeakerHigh, SpeakerSimpleSlash } from '@phosphor-icons/react'
import soundscape from '../audio/audioEngine'

export default function ViceCityRadio() {
  const [isPlaying, setIsPlaying] = useState(soundscape.isPlayingBgm)
  const [isMuted, setIsMuted] = useState(soundscape.volume === 0)

  useEffect(() => {
    const unsub = soundscape.subscribe((event, data) => {
      if (event === 'bgm_state') {
        setIsPlaying(data.isPlaying)
      }
    })
    return () => unsub()
  }, [])

  const togglePlay = () => {
    if (isPlaying) {
      soundscape.stopBgm()
    } else {
      soundscape.startBgm()
      if (isMuted) {
        soundscape.setMasterVolume(0.6)
        setIsMuted(false)
      }
    }
  }

  const toggleMute = () => {
    if (isMuted) {
      soundscape.setMasterVolume(0.6)
      setIsMuted(false)
    } else {
      soundscape.setMasterVolume(0)
      setIsMuted(true)
    }
  }

  return (
    <div className="vice-city-radio-bar" role="region" aria-label="Audio controls">
      {/* 80s Cassette Deck / Radio Tuner */}
      <div className="radio-tuner-unit">
        <button
          type="button"
          className={`radio-play-btn ${isPlaying ? 'playing' : ''}`}
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause intro music' : 'Play intro music'}
          title={isPlaying ? 'Pause music' : 'Play intro music'}
        >
          {isPlaying ? <Pause size={14} weight="fill" /> : <Play size={14} weight="fill" />}
        </button>

        <div className="radio-label-group">
          <span className="radio-station">INTRO SOUNDTRACK</span>
          <span className="radio-track-title">Original synthwave · 106 BPM</span>
        </div>

        {/* Real-time HTML Equalizer Visualizer (No canvas element, preserving Three.js test assumptions) */}
        <div className="radio-visualizer-wrap" aria-hidden="true">
          <span className={`eq-bar eq-bar-0 ${isPlaying ? 'active' : ''}`} />
          <span className={`eq-bar eq-bar-1 ${isPlaying ? 'active' : ''}`} />
          <span className={`eq-bar eq-bar-2 ${isPlaying ? 'active' : ''}`} />
          <span className={`eq-bar eq-bar-3 ${isPlaying ? 'active' : ''}`} />
          <span className={`eq-bar eq-bar-4 ${isPlaying ? 'active' : ''}`} />
        </div>

        {/* Volume / Mute */}
        <button
          type="button"
          className="radio-mute-btn"
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute sound' : 'Mute sound'}
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <SpeakerSimpleSlash size={14} /> : <SpeakerHigh size={14} />}
        </button>


      </div>
    </div>
  )
}
