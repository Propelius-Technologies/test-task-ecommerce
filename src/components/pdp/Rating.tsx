import React, { useEffect, useState } from "react";

const Rating = ({ rating }: { rating: number }) => {
  const [starts, setStarts] = useState<React.JSX.Element[]>([]);
  useEffect(() => {
    if (rating) {
      const fullStars = Math.floor(rating);
      const remainingStars = rating - fullStars;

      const _stars = [];

      for (let i = 0; i < fullStars; i++) {
        _stars.push(<span key={i}>&#9733;</span>); // Full star (★)
      }

      if (remainingStars >= 0.75) {
        _stars.push(<span key="three-quarter">&#9733;</span>); // Three-quarter star (★)
      } else if (remainingStars >= 0.25) {
        _stars.push(<span key="half">&#9733;</span>); // Half star (★)
      } else if (remainingStars > 0) {
        _stars.push(<span key="quarter">&#9734;</span>); // Quarter star (☆)
      }

      const emptyStars = 5 - fullStars - _stars.length;
      for (let i = 0; i < emptyStars; i++) {
        _stars.push(<span key={`empty${i}`}>&#9734;</span>); // Empty star (☆)
      }
      setStarts(_stars);
    }
  }, [rating]);

  return <div>{starts}</div>;
};

export default Rating;
