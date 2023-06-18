import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Cards from "./Cards";

function TodoCard({ key, type, length, data, color }) {
  const initialDnDState = {
    draggedFrom: null,
    draggedTo: null,
    isDragging: false,
    originalOrder: [],
    updatedOrder: [],
  };

  const [list, setList] = React.useState(data);
  const [dragAndDrop, setDragAndDrop] = React.useState(initialDnDState);

  const onDragStart = (event) => {
    const initialPosition = Number(event.currentTarget.dataset.position);

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition,
      isDragging: true,
      originalOrder: list,
    });

    // Note: this is only for Firefox.
    // Without it, the DnD won't work.
    // But we are not using it.
    event.dataTransfer.setData("text/html", "");
  };

  const onDragOver = (event) => {
    // in order for the onDrop
    // event to fire, we have
    // to cancel out this one
    event.preventDefault();

    let newList = dragAndDrop.originalOrder;

    // index of the item being dragged
    const draggedFrom = dragAndDrop.draggedFrom;

    // index of the droppable area being hovered
    const draggedTo = Number(event.currentTarget.dataset.position);

    const itemDragged = newList[draggedFrom];
    const remainingItems = newList.filter(
      (item, index) => index !== draggedFrom
    );

    newList = [
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo),
    ];

    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop({
        ...dragAndDrop,
        updatedOrder: newList,
        draggedTo: draggedTo,
      });
    }
  };

  const dynamicClassName = `my-2 h-2 bg-${color}`;
  const onDrop = (event) => {
    setList(dragAndDrop.updatedOrder);

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false,
    });
  };

  // onDragLeave = () => {
  //   setDragAndDrop({
  //     ...dragAndDrop,
  //     draggedTo: null,
  //   });
  // };

  // Not needed, just for logging purposes:
  React.useEffect(() => {
    console.log("Dragged From: ", dragAndDrop && dragAndDrop.draggedFrom);
    console.log("Dropping Into: ", dragAndDrop && dragAndDrop.draggedTo);
  }, [dragAndDrop]);

  React.useEffect(() => {
    console.log("List updated!");
  }, [list]);

  return (
    <div>
      <div
        className="max-w-sm bg-[#F5F5F5] p-4 rounded-lg flex flex-col gap-5"
        data-position={key}
      >
        <div className="flex justify-between items-center mt-2">
          <div className="flex justify-center items-center gap-3">
            <div
              className="rounded-md 
              w-2 h-2 flex items-center justify-center"
              style={{ backgroundColor: color }}
            ></div>
            <div className="text-[#0D062D] font-semibold text-lg"> {type} </div>

            <div
              className="text-sm text-[#625F6D] bg-[#E0E0E0]
              rounded-full w-6 h-6 flex items-center justify-center"
            >
              {" "}
              {length}{" "}
            </div>
          </div>
          {type === "To Do" && (
            <div className="text-[#5030E5]  text-xl font-extrabold bg-[#FDF3E7] rounded-md p-1">
              <AiOutlinePlus />{" "}
            </div>
          )}
        </div>
        <hr className="my-2 h-2" style={{ backgroundColor: color }} />

        {list.map((item, index) => {
          return (
            <>
              <Cards
                key={index}
                item={item}
                index={index}
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDrop={onDrop}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default TodoCard;
