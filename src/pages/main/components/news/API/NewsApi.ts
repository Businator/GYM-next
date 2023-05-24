type News = {
  apiUrl: string;
  id: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
  sectionId: string;
  sectionName: string;
  type: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  fields: {
    thumbnail: string;
  };
};

export type NewsList = {
  response: {
    status: string;
    userTier: string;
    total: number;
    startIndex: number;
    pageSize: number;
    currentPage: number;
    pages: number;
    orderBy: string;
    results: News[];
  };
};

interface WorkWithNews {
  getNews(): Promise<NewsList>;
}

class NewsApi implements WorkWithNews {
  protected url =
    "https://content.guardianapis.com/search?section=sport&show-elements=image&show-fields=thumbnail&page-size=5";
  protected key = "959373c5-1d02-4552-8b97-9934891f59ce";

  async getNews(): Promise<NewsList> {
    const response = await fetch(`${this.url}&api-key=${this.key}`);
    const data = await response.json();
    return data;
  }
}

export const workWithNews = new NewsApi();
