import { IRating } from '../types/CommonType';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const Rating = ({ rating }: IRating) => {
  const maxStars = 5; // Maximum number of stars
  const fullStars = Math.floor(rating); // Number of full stars
  const hasHalfStar = rating % 1 !== 0; // Check if there's a half star
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0); // Number of empty stars

  // Array to hold the JSX for the stars
  const stars = [];

  // Generate full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<StarIcon key={`star-${i}`} />); // Use a star symbol (☆ or ★)
  }

  // Generate half star
  if (hasHalfStar) {
    stars.push(<StarHalfIcon key="half-star" />); // Use a star symbol (☆ or ★) plus half (½)
  }

  // Generate empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<StarOutlineIcon key={`empty-star-${i}`} />); // Use an empty star symbol (☆ or ★)
  }

  return (
    <div className="text-secondary flex justify-center gap-1">{stars}</div>
  );
};

export default Rating;
