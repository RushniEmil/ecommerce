import ReactStars from 'react-rating-stars-component';

const Star = ({ rating }) => {
  return (
    <ReactStars
      count={5}
      value={rating}
      size={24}
      activeColor='#ffd700'
      edit={false}
      isHalf={true}
    />
  );
};

export default Star;
