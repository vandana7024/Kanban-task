import React from "react";
import Cards from "../../components/MyComponents/Cards";
import TodoCard from "../../components/MyComponents/TodoCard";
import SubHeader from "../../components/MyComponents/SubHeader";
import mask from "../../assets/Mask Group.png";
import unplash1 from "../../assets/unsplash1.png";
import unplash2 from "../../assets/unsplash2.png";
import unplash3 from "../../assets/unsplash3.png";

function DashBoard() {
  const dataToda = [
    {
      id: 1,
      type: "To Do",
      length: 3,
      color: "#5030E5",
      data: [
        {
          id: 1,
          title: "Brainstorming",
          description:
            "Brainstorming brings team members' diverse experience into play",
          priority: "High",
          Comments: "2",
          file: "2",
        },
        {
          id: 2,
          title: "Research",
          description:
            "User research helps you to create an optimal product for users.",
          priority: "High",
          Comments: "2",
          file: "2",
        },
        {
          id: 3,
          title: "Wireframes",
          description:
            "Low fidelity wireframes include the most basic content and visuals.",
          Comments: "2",
          file: "2",
          priority: "Low",
        },
      ],
    },
    {
      id: 2,
      type: "On Progress",
      length: 2,
      color: "#FFA500",
      data: [
        {
          id: 22,
          title: "Onboarding Illustrations ",
          description:
            "Brainstorming brings team members' diverse experience into play",
          priority: "High",
          image: mask,
          Comments: "2",
          file: "2",
        },
        {
          id: 22,
          title: "Moodboard",
          description:
            "User research helps you to create an optimal product for users.",
          priority: "High",
          Comments: "2",
          file: "2",
          image: unplash1,
          image2: unplash2,
        },
      ],
    },
    {
      id: 3,
      type: "Done",
      length: 2,
      color: "#8BC48A",
      data: [
        {
          id: 32,
          title: "Mobile App Design",
          description:
            "Brainstorming brings team members' diverse experience into play",
          priority: "Completed",
          Comments: "2",
          file: "2",
          image: unplash3,
        },
        {
          id: 32,
          title: "Design System",
          description:
            "User research helps you to create an optimal product for users.",
          priority: "Completed",
          Comments: "2",
          file: "2",
        },
      ],
    },
  ];

  return (
    <div className="flex justify-center items-center flex-col m-7 gap-10 w-full">
      <SubHeader />

      <div className="flex flex-col md:flex-row justify-center items-start gap-4 w-full">
        {dataToda.map((item) => (
          <TodoCard
            key={item.id}
            type={item.type}
            length={item.length}
            data={item.data}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
}

export default DashBoard;
