import { FaStar, FaRegStar } from "react-icons/fa";

const useStars=(rating)=>{
    const filledStars = Math.floor(rating); 
        const emptyStars = 5 - filledStars; 

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