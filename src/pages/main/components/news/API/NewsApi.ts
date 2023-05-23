type News = {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
};

export type NewsList = {
  status: string;
  totalResults: number;
  articles: News[];
};

interface WorkWithNews {
  getNews(numberOfPages: number): Promise<NewsList>;
}

class NewsApi implements WorkWithNews {
  protected url =
    "https://newsapi.org/v2/top-headlines?country=us&category=sports";
  protected key = "f7a190316e4542c8ac0edb8b51aa089c";

  async getNews(numberOfPages = 5): Promise<NewsList> {
    const response = await fetch(
      `${this.url}&apiKey=${this.key}&pageSize=${numberOfPages}`
    );
    const data = await response.json();
    return data;
  }
}

export const workWithNews = new NewsApi();
