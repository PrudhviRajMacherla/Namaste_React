import { FaStar, FaRegStar } from "react-icons/fa"; // Import Font Awesome icons

const useStars=(rating)=>{
    const filledStars = Math.floor(rating); // Get whole number of filled stars
        const emptyStars = 5 - filledStars; // Fill remaining stars with empty stars

        const stars = [];
        // Add filled stars
        for (let i = 0; i < filledStars; i++) {
            stars.push(<FaStar key={`star-${i}`} className="text-yellow-500" />);
        }
        // Add empty stars
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<FaRegStar key={`empty-star-${i}`} className="text-gray-300" />);
        }

        return stars;
}
export default useStars;