import { Play, Pause } from './Player.jsx'
import { usePlayerStore } from '../../stote/PlayerStore.js'

export const CardPlayButton = ({ id, size = 'small' }) => {
  const { isPlaying, currentMusic, setIsPlaying, setCurrentMusic } =
    usePlayerStore((state) => state)
  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id

  const handleClick = () => {
    if (isPlayingPlaylist) {
      setIsPlaying(false)
      return
    }
    setCurrentMusic({ playlist: { id } })
    fetch(`/api/get-info-playlist.json?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        const { songs, playlist } = data
        setIsPlaying(true)
        setCurrentMusic({ playlist, songs, song: songs[0] })
      })
  }
  const iconClassName = size === 'small' ? 'w-4 h-4' : 'w-5 h-5'

  return (
    <button
      onClick={handleClick}
      className='card-play-button rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400'
    >
      {isPlayingPlaylist ? (
        <Pause className={iconClassName} />
      ) : (
        <Play className={iconClassName} />
      )}
    </button>
  )
}
