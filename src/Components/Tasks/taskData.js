// import React from "react";
// import { useState } from "react";
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// import taskList from "../../Static/tasks";

// const TaskData = () => {
//   const [taskRoll, updateTaskRoll] = useState(taskList);

//   const handleOnDrag = (result) => {
//     if (result.destination) return;
//     const items = Array.from(taskRoll);
//     const [reorderedItem] = items.splice(result.source.index, 1);
//     items.splice(result.destination.index, 0, reorderedItem);
//     updateTaskRoll(items);
//   };
//   return (
//     <>
//       <div className="tasker">
//         <DragDropContext onDragEnd={handleOnDrag()}>
//           {Object.entries(taskRoll).map(([id, column]) => {
//             return (
//               <div className="container">
//                 <Droppable droppableId={id}>
//                   {(provided) => {
//                     return (
//                       <div
//                         className="weekly box"
//                         {...provided.droppableProps}
//                         ref={provided.innerRef}
//                       >
//                         <h3>Weekly Tasks</h3>
//                         {taskRoll.map((item, index) => {
//                           console.log('hello');
//                           return (
//                             <Draggable key={id} draggableId={id} index={index}>
//                               {(provided) => (
//                                 <p
//                                   id="task"
//                                   {...provided.draggableProps}
//                                   {...provided.dragHandleProps}
//                                   ref={provided.innerRef}
//                                 >
//                                   {}
//                                 </p>
//                               )}
//                               {provided.placeholder}
//                             </Draggable>
//                           );
//                         })}
//                       </div>
//                     );
//                   }}
//                 </Droppable>

//                 <Droppable id="tasketet">
//                   {(provided) => (
//                     <div
//                       className="daily box"
//                       {...provided.droppableProps}
//                       {...provided.innerRef}
//                     >
//                       <h3>Daily Target</h3>
//                       {provided.dragHandleProps}
//                     </div>
//                   )}
//                 </Droppable>
//               </div>
//             );
//           })}
//         </DragDropContext>
//       </div>
//     </>
//   );
// };

// export default TaskData;

import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function TaskData({ data , deleteTask}) {
  const [weeklyTaskRoll, updateWeeklyTaskRoll] = useState(data);
  const [dailyTargetRoll, updateDailyTargetRoll] = useState([]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    if (result.source.droppableId === result.destination.droppableId) {
      if (result.source.droppableId === "weekly-task") {
        let tasks = Array.from(weeklyTaskRoll);
        const [reorderedItems] = tasks.splice(result.source.index, 1);
        tasks.splice(result.destination.index, 0, reorderedItems);
        updateWeeklyTaskRoll(tasks);
      } else {
        let tasks = Array.from(dailyTargetRoll);
        const [reorderedItems] = tasks.splice(result.source.index, 1);
        tasks.splice(result.destination.index, 0, reorderedItems);
        updateDailyTargetRoll(tasks);
      }
    } else {
      let items = weeklyTaskRoll;
      let tempDaily = dailyTargetRoll;
      if (result.source.droppableId === "weekly-task") {
        const [removed] = items.splice(result.source.index, 1);
        tempDaily.splice(result.destination.index, 0, removed);
        updateWeeklyTaskRoll(items);
        updateDailyTargetRoll(tempDaily);
      } else {
        const [removed] = tempDaily.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, removed);
        updateWeeklyTaskRoll(items);
        updateDailyTargetRoll(tempDaily);
      }
    }
  };

  return (
    <div className="tasker">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="contain">
          <Droppable droppableId="weekly-task">
            {(provided) => (
              <div
                className="weekly box"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h3>Weekly Tasks</h3>
                {data.map(({ id, content }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <p
                          className="task"
                        onClick={()=>{deleteTask(id)}}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          {content }
                        </p>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="daily-target">
            {(provided) => (
              <div
                className="daily box"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h3>Daily Target</h3>
                {dailyTargetRoll.map(({ id, item }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <p
                          className="modal--task"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {item}
                        </p>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
}
