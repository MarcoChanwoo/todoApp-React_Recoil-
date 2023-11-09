import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../todoAtoms";

const TodoListStats = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return <ul>TodoListStats</ul>;
};

export default TodoListStats;
