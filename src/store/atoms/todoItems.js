import { atomFamily, selectorFamily } from "recoil";
// import { TODOS as TodoItems } from "../../data/todos";
import axios from "axios";

// export const todoItemsAtomFamily = atomFamily({
//   key: "todoItemsAtomFamily",
//   default: (id) => TodoItems.find((todo) => todo.id === id),
// });

export const todoItemsAtomFamily = atomFamily({
  key: "todoItemsAtomFamily",
  default: selectorFamily({
    key: "todoItemsSelectorFamily",
    get: (id) => async () => {
      const res = await axios.get(
        "https://sum-server.100xdevs.com/todo?id=" + id
      );
      return res.data.todo;
    },
  }),
});
