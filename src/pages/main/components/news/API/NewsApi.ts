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
  protected url = process.env.NEXT_PUBLIC_GUARDIAN_URL;
  protected key = process.env.NEXT_PUBLIC_GUARDIAN_KEY;

  async getNews(): Promise<NewsList> {
    const response = await fetch(`${this.url}&api-key=${this.key}`);
    const data = await response.json();
    return data;
  }
}

export const workWithNews = new NewsApi();
