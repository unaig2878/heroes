export interface Comic {
    id: number;
    title: string;
    issueNumber: number;
    description: string;
    thumbnail: Image;
  }
  interface Image {
    path: string;
    extension: string;
  }