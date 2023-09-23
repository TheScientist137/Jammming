let accessToken = ''
const clientId = 'a0adec2a386e463780f8df55d499ecb9'
const redirectURI = 'http://localhost:3000/callback'

const Spotify = {
  getAccessToken () {
    if (accessToken) {
      return accessToken
    }

    const urlAccessToken = window.location.href.match(/access_token=([^&]*)/)
    const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/)
    if (urlAccessToken && urlExpiresIn) {
      console.log(urlAccessToken[1])
      console.log(urlExpiresIn)
      accessToken = urlAccessToken[1]
      const expiresIn = Number(urlExpiresIn[1])

      window.setTimeout(() => (accessToken = ''), expiresIn * 1000)
      window.history.pushState('Access Token', null, '/')
    } else {
      const redirect = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
      window.location = redirect
    }
  },

  async search (term) {
    const accessToken = Spotify.getAccessToken()
    console.log(accessToken)
    const response = await fetch(
      `https://api.spotify.com/v1/search?type=track&q=${term}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` }
      }
    )
    const jsonResponse = await response.json()
    if (!jsonResponse.tracks) {
      return []
    }
    console.log(jsonResponse)
    return jsonResponse.tracks.items.map(tracks => ({
      id: tracks.id,
      name: tracks.name,
      artist: tracks.artists[0].name,
      album: tracks.album.name,
      uri: tracks.uri,
      preview_url: tracks.preview_url
    }))
  },

  savePlaylist (name, trackURIs) {
    if (!name || !trackURIs) {
      return
    }

    const accessToken = Spotify.getAccessToken()
    const headers = { Authorization: `Bearer ${accessToken}` }
    let userId

    return fetch('https://api.spotify.com/v1/me', { headers: headers })
      .then(response => response.json())
      .then(jsonResponse => {
        userId = jsonResponse.id
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify({ name: name })
        })
          .then(response => response.json())
          .then(jsonResponse => {
            const playlistId = jsonResponse.id
            return fetch(
              `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
              {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({ uris: trackURIs })
              }
            )
          })
      })
  }
}

export default Spotify
