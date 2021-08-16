export interface Hero {
  comics: object;
  description: string;
  events: object;
  id: number;
  modified: string;
  name: string;
  resourceURI: string;
  series: {
    available: number;
    items: [name: string, type: string];
  };
  stories: {
    items: [name: string, resourceURI: string, type: string];
  };
  thumbnail: {
    extension: string;
    path: string;
  };
  urls: [];
}
