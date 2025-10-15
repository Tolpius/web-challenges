export interface BlogEntry {
  title: string;
  image: string;
  author: string;
  createdAt: Date;
  teaser: string;
  content: string;
}

export type BlogEntries = BlogEntry[]