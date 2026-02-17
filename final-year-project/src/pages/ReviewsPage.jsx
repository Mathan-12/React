import { useNavigate } from "react-router-dom";
import "./ReviewsPage.css";


function ReviewsPage() {
  const navigate = useNavigate();

  return (
    <div className="reviews-container">
      <h1>Reviews</h1>

      <div className="review-box" onClick={() => navigate("/review1")}>Review 1</div>
      <div className="review-box" onClick={() => navigate("/review2")}>Review 2</div>
      <div className="review-box" onClick={() => navigate("/review3")}>Review 3</div>
      <div className="review-box final" onClick={() => navigate("/review4")}>Final Review 📝</div>
    </div>
  );
}

export default ReviewsPage;
