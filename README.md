# zerotoproduction
- Website that holds a static list of karaoke songs

### Next time (2022/9/15):
- More functionality: interactivity
- Database
- Containerize

## Next time (2022/?/?):
- karaoke app building @ KUBEHUDDLE
- Break up into container + JavaScript and Go
- Roadmap
- Build this to run on Kubernetes
- Continuous Integration
- Github Actions


# Data
Data is held in a noSQL db in a general pool of songs

## Types
### Song
- id: String
- title: String
- genre: String[]
- img-url: String
- playlist-count: number

### Artist
- id: String
- name: String
- type: String
- gender: String | null
- img-url: String

### Paylist
- id: String
- songs: String[]

## Data Retrieval
New songs will be added to the general pool when a user adds a song to their playlist.
There will be an option to add songs to user's playlists, so they can choose to get songs suggested from the general pool or their own playlist.

![](/docs/dataflow-01.png)

When typing in a search term, the first lookup is in the general pool, with an easy option to add the song directly to the user's playlist
![](/docs/dataflow-02.png)

![](/docs/dataflow-03.png)

If the song is not in the general pool yet. We can actively search for it, by requesting the discogs API
![](/docs/dataflow-04.png)

After selecting a song, the user can do one last check of the metadata before adding it to their playlist & general pool.
Because the artist metadata will be crawled from MusicBrainz, it's not guaranteed we will be matching the right one. The user will have the option to choose the correct one from the dropdown.
![](/docs/dataflow-05.png)