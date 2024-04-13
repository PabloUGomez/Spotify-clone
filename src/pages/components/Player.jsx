import { usePlayerStore } from '../../stote/PlayerStore.js'
import { useEffect, useRef, useState } from 'react'
import { Slider } from './Slider.tsx'

export const Pause = ({ className }) => (
  <svg
    className={className}
    role='img'
    height='16'
    width='16'
    aria-hidden='true'
    viewBox='0 0 16 16'
  >
    <path d='M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z'></path>
  </svg>
)

export const Play = ({ className }) => (
  <svg
    className={className}
    role='img'
    height='16'
    width='16'
    aria-hidden='true'
    viewBox='0 0 16 16'
  >
    <path d='M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z'></path>
  </svg>
)

export const VolumeSilence = () => (
  <svg
    fill='currentColor'
    role='presentation'
    height='16'
    width='16'
    aria-hidden='true'
    aria-label='Volumen apagado'
    viewBox='0 0 16 16'
  >
    <path d='M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z'></path>
    <path d='M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z'></path>
  </svg>
)

export const Volume = () => (
  <svg
    fill='currentColor'
    role='presentation'
    height='16'
    width='16'
    aria-hidden='true'
    aria-label='Volumen alto'
    id='volume-icon'
    viewBox='0 0 16 16'
  >
    <path d='M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z'></path>
    <path d='M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z'></path>
  </svg>
)

const CurrentSong = ({ image, title, artists }) => {

  return (
    <div className='flex items-center gap-2 relative overflow-hidden flex-row w-[190px]'>
      <picture className='w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden'>
        <img src={image} alt={title} />
      </picture>
      <div>
        <h3 className='text-sm font-bold block'>{title}</h3>
        <p className='text-xs text-white/80'>{artists?.join(', ')}</p>
      </div>
    </div>
  )
}

const SongControl = ({ audio }) => {
  const [currentTime, setCurrentTime] = useState(0)
  
  useEffect(() => {
    audio.current.addEventListener('timeupdate', handleTimeUpdate)
    return () => {
      audio.current.removeEventListener('timeupdate', handleTimeUpdate)
    }
  })

  const handleTimeUpdate = () => {
    setCurrentTime(audio.current.currentTime)
  }

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00'

    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)

    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
  }
 
  const duration = audio?.current?.duration ?? 0

  return (
    <div className='flex text-xs gap-x-2 items-center '>
      <span className='text-white/80 w-10 text-right'>{formatTime(currentTime)}</span>
      <Slider
        defaultValue={[0]}
        value={[currentTime]}
        max={audio?.current?.duration ?? 0}
        min={0}
        className='w-[500px]'
        onValueChange={(value) => {
          audio.current.currentTime = value
        }}
      />
      <span className='text-white/80 w-10 text-left'>{duration ? formatTime(duration): null}</span>
    </div>
  )
}

const VolumeControl = () => {
  const volume = usePlayerStore((state) => state.volume)
  const setVolume = usePlayerStore((state) => state.setVolume)
  const previousVolume = useRef(volume)

  const handleClickVolume = () => {
    if (volume < 0.1) {
      setVolume(previousVolume.current)
    } else {
      previousVolume.current = volume
      setVolume(0)
    }
  }

  return (
    <div className='flex justify-center gap-x-2 text-white'>
      <button
        className='opacity-70 hover:opacity-100 transition'
        onClick={handleClickVolume}
      >
        {volume < 0.1 ? <VolumeSilence /> : <Volume />}
      </button>
      <Slider
        defaultValue={[50]}
        value={[volume * 100]}
        max={100}
        min={0}
        className='w-24'
        onValueChange={(value) => {
          const [newVolume] = value
          const volumeValue = newVolume / 100
          setVolume(volumeValue)
        }}
      />
    </div>
  )
}

export default function Player () {
  const { isPlaying, setIsPlaying, currentMusic, volume } = usePlayerStore(
    (state) => state
  )
  const audioRef = useRef()

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause()
  }, [isPlaying])

  useEffect(() => {
    audioRef.current.volume = volume
  }, [volume])

  useEffect(() => {
    const { song, playlist } = currentMusic
    if (song) {
      const src = `/music/${playlist.id}/${playlist.id}.mp3`
      audioRef.current.src = src
      audioRef.current.volume = volume
      audioRef.current.play()
    }
  }, [currentMusic])

  const handlePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className='flex justify-between flex-row w-full px-2 py-1 z-50'>
      <CurrentSong {...currentMusic.song} />
      <div className='flex flex-col justify-center gap-2 items-center'>
        <button className='bg-white rounded-full p-2' onClick={handlePlay}>
          {isPlaying ? (
            <Pause className='text-black' />
          ) : (
            <Play className='text-black' />
          )}
        </button>
        <SongControl audio={audioRef} />
      </div>
      <div className='grid place-content-center'>
        <VolumeControl />
      </div>
      <audio ref={audioRef} />
    </div>
  )
}
