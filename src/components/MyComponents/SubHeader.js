import React from "react";
import EditIcon from "../../assets/arrow-square-up.png";
import fileIcon from "../../assets/Group 626.png";
import group from "../../assets/Group.png";
import Vector from "../../assets/Vector.png";
import user from "../../assets/profileuser.png";
import groupBlue from "../../assets/GroupBlue.png";
import divider from "../../assets/divider.png";
import calander from "../../assets/calendar.svg";

function SubHeader() {
  return (
    <div className=" w-full  ">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <div className="flex gap-1 cursor-pointer">
            <h1 className="text-3xl font-bold">Mobile App</h1>
            <img src={fileIcon} alt="" />
            <img src={EditIcon} alt="" />
          </div>
          <div className="hidden md:flex cursor-pointer">
            <img src={group} alt="" />
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="flex gap-2">
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              class="flex items-center justify-between w-full p-1 text-[#787486] rounded-md  md:border-2  md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent gap-1 px-3"
            >
              <img src={Vector} alt="" />
              Filter
              <svg
                class="w-5 h-5 ml-1"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>

            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              class="flex items-center justify-between w-full p-1 text-[#787486] rounded-md  md:border-2  md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent gap-1 px-3"
            >
              <img src={calander} alt="" />
              Today
              <svg
                class="w-5 h-5 ml-1"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div className="flex  justify-center items-center gap-4 ">
            <button className="text-[#787486] border px-3 py-2 rounded-md flex justify-center items-center gap-1 ">
              <img src={user} alt="" className="w-4 h-4" />
              Share
            </button>
            <div>
              <img src={divider} alt="" />
            </div>
            <div>
              <img src={groupBlue} alt="" className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
