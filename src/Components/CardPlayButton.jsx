import { Play, Pause } from './Player'
import { usePlayerStore } from '@/stote/PlayerStore'

export const CardPlayButton = ({ id }) => {
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

  return (
    <button
      className='card-play-button rounded-full bg-green-500 p-4'
      onClick={handleClick}
    >
      {isPlayingPlaylist ? <Pause /> : <Play />}
    </button>
  )
}
