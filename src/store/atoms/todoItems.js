import { atomFamily } from "recoil";
import { TODOS as TodoItems } from "../../data/todos";

export const todoItemsAtomFamily = atomFamily({
  key: "todoItemsAtomFamily",
  default: (id) => TodoItems.find((todo) => todo.id === id),
});
