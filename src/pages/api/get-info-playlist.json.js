import { allPlaylists, songs as allSongs } from "../../lib/data.tsx";

export async function GET({ request}) {
    const { url } = request
    const urlObject = new URL(url)
    const id = urlObject.searchParams.get('id')

    const playlist = allPlaylists.find(playlist => playlist.id === id)
    const songs = allSongs.filter(song => song.albumId === playlist?.albumId)

    return new Response(JSON.stringify({ playlist, songs}))
}