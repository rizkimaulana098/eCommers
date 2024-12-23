import FeatureCard from "./FeatureCard";
import { TbTruckDelivery } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";

const data = [
    {
        icon: <TbTruckDelivery className="text-4x1" />,
        title: "Free Delivery",
        desc: "Orders From All Items",
    },
    {
        icon: <TbTruckDelivery className="text-4x1" />,
        title: "Return & Refund",
        desc: "Money Back Guarantee",
    },
    {
        icon: <TbTruckDelivery className="text-4x1" />,
        title: "Member Discount",
        desc: "On Order Over $99.00",
    },
    {
        icon: <TbTruckDelivery className="text-4x1" />,
        title: "Support 24/7",
        desc: "Contact us 24 hours a day",
    },
];

const Feature = () => {
    return (
        <div className="container grid gap-1 sm:grid-cols-2 lg:grid_cols-4 mt-8">
            {data.map((item) => (
                <FeatureCard
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    desc={item.desc}
                />
            ))}
        </div>
    );
};


export default Feature; 