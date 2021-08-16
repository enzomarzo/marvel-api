export interface Hero {
  comics: object
  description: string
  events: object
  id: number
  modified: string
  name: string
  resourceURI: string
  series:
    {
      available: number
      items: [
        name: string,
        type: string
      ]
    }
  stories: object
  thumbnail: {
    extension: string
    path: string
  }
  urls: []
}
