import React , {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const ArticleCard = ({ id, image, title, description } ) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    navigate(`/blank/article/${id}`);
  };

  return (
    <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden"
      onClick={handleClick}
     >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold hover:underline hover:cursor-pointer">{title}</h3>
      <p className="text-gray-600  mt-2">{description}</p>
      <button
        onClick={() => setOpen(!open)}
        className="mt-4 text-blue-600 hover:underline flex items-center"
      >
        {open ? "Hide Details" : "Show Details"}
        <ChevronDownIcon className={`w-5 h-5 ml-2 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
        {/* {open && <p className="mt-4 text-gray-800">{details}</p>} */}
    </div>
  </div>

    // <div
    //   onClick={handleClick}
    //   className="cursor-pointer p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    // >
    //   <img
    //     src={img} // Replace with the actual image URL from the article
    //     alt={title}
    //     className="w-full h-48 object-cover rounded-lg"
    //   />
    //   <h3 className="text-xl font-semibold hover:underline mt-4">{title}</h3>
    //   <p className="text-gray-600 mt-2">{description}</p>
    // </div>





  );
};

export default ArticleCard;
