import {
    AiFillStar,
    AiOutlineStar,
    AiOutlineShoppingCart,
} from "react-icons/ai";
import toast from "react-hot-toast";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cartSlice";
import { makeToast } from "@/utils/helper";

interface propsType{
    id: string;
    img: string;
    category: string;
    title: string;
    price: number;
}

const ProductCard =({ id, img, category, title, price}: propsType) => {
    const dispacth = useAppDispatch();

    const addProductToCart = () => {
        const payLoad = {
            id,
            img,
            title,
            price,
            quantity: 1,
        };

        dispacth(addToCart(payLoad));
        makeToast("Added to Cart");
    };

    return (
        <div className="border border-gray-200">
            <div className="text-center border-b border-gray-200">
                <img src={img} className="inline-block" alt={title} />
            </div>

            <div className="mt-3 flex text-[#FFB21D] items-center">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar/>
                <p className="text-gray-600 text-[14px] ml-2">(3 Review)</p>
            </div>
        
            <div className="flex justify-between items-center mt-4">
                <h2 className="font-medium text-accent text-xl">${price}</h2>
                <div className="flex gap-2 items-center bg-pink text-white px-4 py--2 cursor-pointer hover:bg-accent"
                onClick={addProductToCart}>
                    <AiOutlineShoppingCart/> Add To Cart
                </div>
            </div>
        </div>
    );
};

export default ProductCard;