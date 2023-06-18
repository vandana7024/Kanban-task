import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Home from "./components/Home";
import EmptyBoard from "./components/EmptyBoard";
import boardsSlice from "./redux/boardsSlice";
import DashBoard from "./pages/DashBoard/DashBoard";
import Navbar from "./components/MyComponents/Navbar";
import Sidebar from "./components/MyComponents/Sidebar";

function App() {
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards);
  const activeBoard = boards.find((board) => board.isActive);
  if (!activeBoard && boards.length > 0)
    dispatch(boardsSlice.actions.setBoardActive({ index: 0 }));
  return (
    <>
      <div>
        <div className="flex w-full">
          <Sidebar />
          <div className="flex flex-col w-full">
            <Navbar />
            <div className="flex flex-1 justify-center items-center">
              <DashBoard />
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className=" overflow-hidden  overflow-x-scroll">
    //   <>
    //     {boards.length > 0 ? (
    //       <>
    //         <Header
    //           setIsBoardModalOpen={setIsBoardModalOpen}
    //           isBoardModalOpen={isBoardModalOpen}
    //         />
    //         <Home
    //           setIsBoardModalOpen={setIsBoardModalOpen}
    //           isBoardModalOpen={isBoardModalOpen}
    //         />
    //       </>
    //     ) : (
    //       <>
    //         <EmptyBoard type="add" />
    //       </>
    //     )}
    //   </>
    // </div>
  );
}

export default App;
