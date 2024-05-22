import { todoItemsAtomFamily } from "../store/atoms/todoItems";
import { useRecoilValue } from "recoil";

/* eslint-disable react/prop-types */
const Todo = ({ id }) => {
  // const { title, description } = useRecoilValue(todoItemsAtomFamily(id));
  const { title, description } = useRecoilValue(todoItemsAtomFamily(id));

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Todo;
