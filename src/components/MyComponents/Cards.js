import React from "react";
import man1 from "../../assets/man1.png";
import man2 from "../../assets/man2.png";
import man3 from "../../assets/man3.png";
import message from "../../assets/message.png";
import file from "../../assets/file.png";

function Cards({ item, index, onDragStart, onDragOver, onDrop }) {
  return (
    <div>
      <div
        className="flex flex-col max-w-xs 
        bg-white rounded-2xl shadow-md p-4 gap-2"
        data-position={index}
        draggable
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        <div className="flex justify-between items-center">
          <p
            className="text-xs font-semibold 
             p-2 px-3
            rounded-md flex items-center justify-center"
            style={{
              color: item?.priority === "Completed" ? "#8bc48a" : "#D58D49",
              backgroundColor:
                item?.priority === "Completed" ? "#F0F9F0" : "#FDF3E7",
            }}
          >
            {item?.priority}
          </p>
          <p className="cursor-pointer">
            <svg
              width="14"
              height="5"
              viewBox="0 0 14 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.53414 3.79517C1.12561 3.77376 0.783245 3.61168 0.507044 3.30893C0.234627 3.00638 0.111014 2.65094 0.136207 2.24261C0.153438 1.84145 0.31323 1.50655 0.615582 1.23791C0.921915 0.965692 1.27935 0.840287 1.68788 0.861697C2.07371 0.881918 2.40662 1.0435 2.6866 1.34645C2.97057 1.64581 3.10393 1.99607 3.0867 2.39724C3.06865 2.66939 2.98379 2.91339 2.83214 3.12924C2.68426 3.34528 2.49527 3.51365 2.26515 3.63435C2.03882 3.75524 1.79515 3.80885 1.53414 3.79517ZM6.86495 4.07455C6.45642 4.05314 6.11405 3.89106 5.83785 3.58831C5.56544 3.28576 5.44182 2.93032 5.46702 2.52198C5.48425 2.12082 5.64404 1.78592 5.94639 1.51729C6.25272 1.24507 6.61016 1.11966 7.01869 1.14107C7.40452 1.16129 7.73743 1.32288 8.01741 1.62582C8.30138 1.92519 8.43474 2.27545 8.41751 2.67661C8.39946 2.94877 8.3146 3.19277 8.16294 3.40861C8.01507 3.62465 7.82608 3.79302 7.59596 3.91372C7.36963 4.03462 7.12596 4.08823 6.86495 4.07455ZM12.1958 4.35392C11.7872 4.33251 11.4449 4.17043 11.1687 3.86768C10.8962 3.56513 10.7726 3.20969 10.7978 2.80136C10.8151 2.4002 10.9748 2.0653 11.2772 1.79666C11.5835 1.52444 11.941 1.39904 12.3495 1.42045C12.7353 1.44067 13.0682 1.60225 13.3482 1.9052C13.6322 2.20456 13.7656 2.55483 13.7483 2.95599C13.7303 3.22814 13.6454 3.47214 13.4938 3.68799C13.3459 3.90403 13.1569 4.0724 12.9268 4.1931C12.7004 4.31399 12.4568 4.3676 12.1958 4.35392Z"
                fill="#0D062D"
              />
            </svg>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-[#0D062D]">
            {item?.title}
          </h2>
          {item?.image ? (
            <div className="flex gap-2">
              <img className="" src={item?.image} alt="" />
              <img className="" src={item?.image2} alt="" />
            </div>
          ) : (
            <p className="text-xs text-[#787486] ">{item?.description}</p>
          )}
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex ">
            <img className="w-8 h-8 rounded-full" src={man1} alt="" />
            <img className="w-8 h-8 rounded-full -ml-2" src={man2} alt="" />
            <img className="w-8 h-8 rounded-full -ml-2" src={man3} alt="" />
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex justify-center items-center  text-xs text-[#787486] gap-1 cursor-pointer">
              <img src={message} alt="" className="w-4 h-4" />
              <p className="text-[#787486] text-xs ">
                {item?.comments} comments
              </p>
            </div>
            <div>
              <p className="text-[#787486] text-xs flex justify-center items-center gap-1 cursor-pointer">
                <img src={file} alt="" className="w-4 h-4" />
                {item?.files}files
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
