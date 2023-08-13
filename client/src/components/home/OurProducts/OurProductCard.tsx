import IOurProducts from '../../../types/OurProductsType';
import Rating from '../../Rating';
import '../../../styles/OurProducts.css';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const OurProductCard = ({ products }: { products: IOurProducts }) => {
  return (
    <div className="text-center cursor-pointer card">
      {/* Animation Part Starting */}
      <p className="card-top-to-left-border"></p>
      <p className="card-top-to-bottom-border"></p>
      <p className="card-bottom-to-right-border"></p>
      <p className="card-bottom-to-top-border"></p>
      {/* Animation Part Ending */}
      <div className="relative w-[96%] mt-6 mx-auto">
        <img src={products.img} alt="Food Image" />
        <div className="icons-container">
          <div className="w-12 h-12 bg-primary flex items-center justify-center text-white mb-3">
            <RemoveRedEyeIcon />
          </div>
          <div className="w-12 h-12 bg-primary flex items-center justify-center text-white mb-3">
            <ShoppingBagIcon />
          </div>
          <div className="w-12 h-12 bg-primary flex items-center justify-center text-white mb-3">
            <FavoriteBorderIcon />
          </div>
        </div>
      </div>
      <Rating rating={products.rating} />
      <h5 className="font-bold text-lg my-3">{products.name}</h5>
      {/* Animation Part Starting */}
      <div className="flex items-center justify-center  mb-3">
        <div className="relative w-[40%]">
          <p className="card-left-border"></p>
        </div>
        <div className="w-[10%]">
          <p className="bg-primary w-3 h-3 mx-auto rotate-45"></p>
        </div>
        <div className="relative w-[40%]">
          <p className="card-right-border"></p>
        </div>
      </div>
      {/* Animation Part Ending */}
      <p className="text-gray font-light text-xl mb-6">{products.price}</p>
    </div>
  );
};

export default OurProductCard;
