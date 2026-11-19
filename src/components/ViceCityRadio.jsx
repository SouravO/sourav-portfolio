import { useEffect, useState } from 'react'
import { Play, Pause, SpeakerHigh, SpeakerSimpleSlash, FilmStrip } from '@phosphor-icons/react'
import soundscape from '../audio/audioEngine'

export default function ViceCityRadio({ onReplayIntro }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

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
          aria-label={isPlaying ? 'Pause Vice City synth BGM' : 'Play Vice City synth BGM'}
          title={isPlaying ? 'Pause music' : 'Play GTA 6 / Vice City BGM'}
        >
          {isPlaying ? <Pause size={14} weight="fill" /> : <Play size={14} weight="fill" />}
        </button>

        <div className="radio-label-group">
          <span className="radio-station">VICE CITY FM 98.6</span>
          <span className="radio-track-title">{isPlaying ? 'SUNSET CRUISE · GTA VI' : 'CHILL SYNTH (OFF)'}</span>
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

        {/* Replay Marvel Intro Button */}
        {onReplayIntro && (
          <button
            type="button"
            className="radio-intro-btn"
            onClick={onReplayIntro}
            title="Replay cinematic Marvel comic intro"
          >
            <FilmStrip size={14} weight="bold" />
            <span>INTRO</span>
          </button>
        )}
      </div>
    </div>
  )
}
