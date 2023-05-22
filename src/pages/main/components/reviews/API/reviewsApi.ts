import reviewsList from "../mocks/reviewsList";

class ReviewsApi {
  getReviews() {
    return reviewsList;
  }
}

export const workWithReviewsApi = new ReviewsApi();
