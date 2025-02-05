document.addEventListener("DOMContentLoaded", function () {
    const reviewForm = document.getElementById("reviewForm");
    const reviewsList = document.getElementById("reviewsList");

    // Load reviews from localStorage
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    // Function to save reviews to localStorage
    function saveReviews() {
        localStorage.setItem("reviews", JSON.stringify(reviews));
    }

    // Function to format date
    function formatDate() {
        const date = new Date();
        return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    }

    // Function to display reviews
    function displayReviews() {
        reviewsList.innerHTML = ""; // Clear existing reviews
        reviews.forEach((review, index) => {
            const div = document.createElement("div");
            div.classList.add("review-card");

            div.innerHTML = `
                <div class="review-header">
                    <strong>${review.name}</strong>
                    <span>${review.date}</span>
                </div>
                <p class="review-text">${review.rating} ⭐ - ${review.text}</p>
                <button onclick="deleteReview(${index})">❌ Delete</button>
            `;

            reviewsList.appendChild(div);
        });
    }

    // Show stored reviews on page load
    displayReviews();

    // Handle review submission
    reviewForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const clientName = document.getElementById("clientName").value.trim();
        const reviewText = document.getElementById("reviewText").value.trim();
        const rating = document.getElementById("rating").value;
        const reviewDate = formatDate();

        // Ensure fields are not empty
        if (clientName === "" || reviewText === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Create a review object
        const review = { name: clientName, text: reviewText, rating: rating, date: reviewDate };
        reviews.push(review);
        saveReviews();
        displayReviews();

        reviewForm.reset(); // Clear the form
    });

    // Function to delete review
    window.deleteReview = function (index) {
        reviews.splice(index, 1);
        saveReviews();
        displayReviews();
    };
});