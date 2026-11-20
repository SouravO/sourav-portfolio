// Web Audio API engine for Marvel-style intro sound effects & GTA 6 / Vice City synthwave BGM.
// Zero external files, zero latency, zero bandwidth bloat, 100% responsive and browser safe.

class SoundScapeEngine {
  constructor() {
    this.ctx = null
    this.masterGain = null
    this.analyser = null
    this.bgmGain = null
    this.sfxGain = null
    this.isPlayingBgm = false
    this.timerId = null
    this.step = 0
    this.volume = 0.6
    this.listeners = new Set()
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext
      if (!AudioCtx) return null
      this.ctx = new AudioCtx()

      this.masterGain = this.ctx.createGain()
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime)

      this.analyser = this.ctx.createAnalyser()
      this.analyser.fftSize = 64
      this.analyser.smoothingTimeConstant = 0.8

      this.bgmGain = this.ctx.createGain()
      this.bgmGain.gain.setValueAtTime(0.5, this.ctx.currentTime)

      this.sfxGain = this.ctx.createGain()
      this.sfxGain.gain.setValueAtTime(0.7, this.ctx.currentTime)

      this.bgmGain.connect(this.masterGain)
      this.sfxGain.connect(this.masterGain)
      this.masterGain.connect(this.analyser)
      this.analyser.connect(this.ctx.destination)
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {})
    }
    return this.ctx
  }

  notify(event, data) {
    this.listeners.forEach((cb) => cb(event, data))
  }

  subscribe(cb) {
    this.listeners.add(cb)
    return () => this.listeners.delete(cb)
  }

  // --- MARVEL INTRO SOUND EFFECTS ---

  // Rapid comic page flip flutter
  playPageFlip(intensity = 1) {
    const ctx = this.ensureContext()
    if (!ctx) return

    const now = ctx.currentTime
    // Filtered noise burst for paper whoosh
    const bufferSize = Math.floor(ctx.sampleRate * 0.05)
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3))
    }

    const noise = ctx.createBufferSource()
    noise.buffer = buffer

    const filter = ctx.createBiquadFilter()
    filter.type = 'bandpass'
    filter.frequency.setValueAtTime(800 * intensity, now)
    filter.Q.setValueAtTime(3, now)

    const gain = ctx.createGain()
    gain.gain.setValueAtTime(0.18 * intensity, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05)

    noise.connect(filter)
    filter.connect(gain)
    gain.connect(this.sfxGain)

    noise.start(now)
  }

  // Cinematic Sub-Bass Impact Boom for Logo Slam
  playImpact() {
    const ctx = this.ensureContext()
    if (!ctx) return

    const now = ctx.currentTime

    // 1. Deep sub-bass sweep (130Hz -> 35Hz)
    const osc = ctx.createOscillator()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(140, now)
    osc.frequency.exponentialRampToValueAtTime(32, now + 1.2)

    const oscGain = ctx.createGain()
    oscGain.gain.setValueAtTime(0.8, now)
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 1.6)

    osc.connect(oscGain)
    oscGain.connect(this.sfxGain)
    osc.start(now)
    osc.stop(now + 1.7)

    // 2. Punchy transient noise burst
    const noiseBuf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.2), ctx.sampleRate)
    const noiseData = noiseBuf.getChannelData(0)
    for (let i = 0; i < noiseData.length; i++) {
      noiseData[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.04))
    }
    const noise = ctx.createBufferSource()
    noise.buffer = noiseBuf

    const noiseFilter = ctx.createBiquadFilter()
    noiseFilter.type = 'lowpass'
    noiseFilter.frequency.setValueAtTime(600, now)
    noiseFilter.frequency.exponentialRampToValueAtTime(100, now + 0.2)

    const noiseGain = ctx.createGain()
    noiseGain.gain.setValueAtTime(0.5, now)
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.3)

    noise.connect(noiseFilter)
    noiseFilter.connect(noiseGain)
    noiseGain.connect(this.sfxGain)
    noise.start(now)

    // 3. Brass/power chord swell
    const brassFreqs = [110, 164.81, 220, 277.18] // A major / heroic triad
    brassFreqs.forEach((freq) => {
      const bOsc = ctx.createOscillator()
      bOsc.type = 'sawtooth'
      bOsc.frequency.setValueAtTime(freq, now)

      const bFilter = ctx.createBiquadFilter()
      bFilter.type = 'lowpass'
      bFilter.frequency.setValueAtTime(250, now)
      bFilter.frequency.exponentialRampToValueAtTime(1800, now + 0.3)
      bFilter.frequency.exponentialRampToValueAtTime(400, now + 1.4)

      const bGain = ctx.createGain()
      bGain.gain.setValueAtTime(0.01, now)
      bGain.gain.linearRampToValueAtTime(0.12, now + 0.15)
      bGain.gain.exponentialRampToValueAtTime(0.001, now + 1.5)

      bOsc.connect(bFilter)
      bFilter.connect(bGain)
      bGain.connect(this.sfxGain)

      bOsc.start(now)
      bOsc.stop(now + 1.6)
    })
  }

  // --- GTA 6 / VICE CITY SYNTHWAVE BGM ENGINE ---
  // Nostalgic, sunset drive synthwave with rolling bassline, lush warm pads, and retro arpeggio.

  startBgm() {
    const ctx = this.ensureContext()
    if (!ctx || this.isPlayingBgm) return

    this.bgmGain.gain.setValueAtTime(0.5, ctx.currentTime)
    this.isPlayingBgm = true
    this.step = 0
    this.notify('bgm_state', { isPlaying: true })

    const bpm = 106
    const stepDuration = 60 / bpm / 4 // 16th note in seconds (~0.141s)

    // Classic Vice City sunset progression (D minor -> Bb major -> F major -> C major)
    const chords = [
      { bass: 73.42, pad: [146.83, 174.61, 220.0, 261.63], arp: [293.66, 349.23, 440.0, 523.25] }, // Dm (D2, D3, F3, A3, C4)
      { bass: 58.27, pad: [116.54, 146.83, 174.61, 233.08], arp: [233.08, 293.66, 349.23, 466.16] }, // Bb (Bb1, Bb2, D3, F3, Bb3)
      { bass: 87.31, pad: [130.81, 164.81, 174.61, 261.63], arp: [261.63, 329.63, 349.23, 523.25] }, // F (F2, C3, E3, F3, C4)
      { bass: 65.41, pad: [130.81, 164.81, 196.0, 261.63], arp: [261.63, 329.63, 392.0, 523.25] }, // C (C2, C3, E3, G3, C4)
    ]

    let chordIndex = 0

    const scheduleStep = () => {
      if (!this.isPlayingBgm) return

      const now = ctx.currentTime
      const currentChord = chords[chordIndex]
      const beat16 = this.step % 16

      // 1. Rolling 80s Synth Bass (plays on 16th notes with rhythmic emphasis)
      const bassPattern = [1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1]
      if (bassPattern[beat16]) {
        const bassOsc = ctx.createOscillator()
        const subOsc = ctx.createOscillator()
        bassOsc.type = 'sawtooth'
        subOsc.type = 'square'

        const octave = beat16 % 4 === 0 ? 1 : 1.0
        bassOsc.frequency.setValueAtTime(currentChord.bass * octave, now)
        subOsc.frequency.setValueAtTime((currentChord.bass / 2) * octave, now)

        const filter = ctx.createBiquadFilter()
        filter.type = 'lowpass'
        filter.Q.setValueAtTime(3.5, now)
        filter.frequency.setValueAtTime(180, now)
        filter.frequency.exponentialRampToValueAtTime(750, now + 0.03)
        filter.frequency.exponentialRampToValueAtTime(220, now + stepDuration * 0.9)

        const gain = ctx.createGain()
        gain.gain.setValueAtTime(0.24, now)
        gain.gain.exponentialRampToValueAtTime(0.001, now + stepDuration * 0.95)

        bassOsc.connect(filter)
        subOsc.connect(filter)
        filter.connect(gain)
        gain.connect(this.bgmGain)

        bassOsc.start(now)
        subOsc.start(now)
        bassOsc.stop(now + stepDuration)
        subOsc.stop(now + stepDuration)
      }

      // 2. Sunset Lush Pads (triggered at start of each 16-step bar)
      if (beat16 === 0) {
        currentChord.pad.forEach((freq, idx) => {
          const padOsc = ctx.createOscillator()
          padOsc.type = 'sawtooth'
          // Slight detune for that rich 80s chorus width
          padOsc.frequency.setValueAtTime(freq * (1 + (idx % 2 === 0 ? 0.003 : -0.003)), now)

          const padFilter = ctx.createBiquadFilter()
          padFilter.type = 'lowpass'
          padFilter.frequency.setValueAtTime(350, now)
          padFilter.frequency.linearRampToValueAtTime(900, now + stepDuration * 8)
          padFilter.frequency.linearRampToValueAtTime(450, now + stepDuration * 15.8)

          const padGain = ctx.createGain()
          padGain.gain.setValueAtTime(0.001, now)
          padGain.gain.linearRampToValueAtTime(0.065, now + stepDuration * 3)
          padGain.gain.linearRampToValueAtTime(0.001, now + stepDuration * 15.9)

          padOsc.connect(padFilter)
          padFilter.connect(padGain)
          padGain.connect(this.bgmGain)

          padOsc.start(now)
          padOsc.stop(now + stepDuration * 16)
        })
      }

      // 3. Shimmering Arp / Synth Pluck (80s Neon Sparkle on 8th notes)
      if (beat16 % 2 === 0) {
        const noteIdx = (beat16 / 2) % currentChord.arp.length
        const arpFreq = currentChord.arp[noteIdx]

        const arpOsc = ctx.createOscillator()
        arpOsc.type = 'sine'
        arpOsc.frequency.setValueAtTime(arpFreq, now)

        const arpFilter = ctx.createBiquadFilter()
        arpFilter.type = 'bandpass'
        arpFilter.frequency.setValueAtTime(arpFreq * 1.5, now)
        arpFilter.Q.setValueAtTime(2, now)

        const arpGain = ctx.createGain()
        arpGain.gain.setValueAtTime(0.04, now)
        arpGain.gain.exponentialRampToValueAtTime(0.001, now + stepDuration * 1.8)

        arpOsc.connect(arpFilter)
        arpFilter.connect(arpGain)
        arpGain.connect(this.bgmGain)

        arpOsc.start(now)
        arpOsc.stop(now + stepDuration * 2)
      }

      // 4. Subtle 80s Drum Machine Pulse (Kick on 0 & 8, Snare on 4 & 12, Hat on offbeats)
      // Kick:
      if (beat16 === 0 || beat16 === 8) {
        const kickOsc = ctx.createOscillator()
        kickOsc.type = 'sine'
        kickOsc.frequency.setValueAtTime(130, now)
        kickOsc.frequency.exponentialRampToValueAtTime(42, now + 0.12)

        const kickGain = ctx.createGain()
        kickGain.gain.setValueAtTime(0.35, now)
        kickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.14)

        kickOsc.connect(kickGain)
        kickGain.connect(this.bgmGain)
        kickOsc.start(now)
        kickOsc.stop(now + 0.15)
      }

      // Snare:
      if (beat16 === 4 || beat16 === 12) {
        const snareNoise = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.1), ctx.sampleRate)
        const d = snareNoise.getChannelData(0)
        for (let i = 0; i < d.length; i++) {
          d[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.02))
        }
        const sSource = ctx.createBufferSource()
        sSource.buffer = snareNoise

        const sFilter = ctx.createBiquadFilter()
        sFilter.type = 'highpass'
        sFilter.frequency.setValueAtTime(1000, now)

        const sGain = ctx.createGain()
        sGain.gain.setValueAtTime(0.12, now)
        sGain.gain.exponentialRampToValueAtTime(0.001, now + 0.1)

        sSource.connect(sFilter)
        sFilter.connect(sGain)
        sGain.connect(this.bgmGain)
        sSource.start(now)
      }

      // Advance clock
      this.step++
      if (this.step % 16 === 0) {
        chordIndex = (chordIndex + 1) % chords.length
      }

      this.timerId = setTimeout(scheduleStep, stepDuration * 1000)
    }

    scheduleStep()
  }

  stopBgm() {
    this.isPlayingBgm = false
    if (this.bgmGain && this.ctx) this.bgmGain.gain.setValueAtTime(0, this.ctx.currentTime)
    if (this.timerId) {
      clearTimeout(this.timerId)
      this.timerId = null
    }
    this.notify('bgm_state', { isPlaying: false })
  }

  stopAll() {
    this.stopBgm()
    if (this.ctx?.state === 'running') this.ctx.suspend().catch(() => {})
  }

  toggleBgm() {
    if (this.isPlayingBgm) {
      this.stopBgm()
      return false
    } else {
      this.startBgm()
      return true
    }
  }

  setMasterVolume(val) {
    this.volume = Math.max(0, Math.min(1, val))
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime)
    }
    this.notify('volume_change', { volume: this.volume })
  }

  getFrequencyData() {
    if (!this.analyser) return new Uint8Array(16)
    const arr = new Uint8Array(this.analyser.frequencyBinCount)
    this.analyser.getByteFrequencyData(arr)
    return arr
  }
}

export const soundscape = new SoundScapeEngine()
export default soundscape
