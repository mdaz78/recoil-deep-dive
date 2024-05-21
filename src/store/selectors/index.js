import { selector } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationsAtom,
} from "../atoms";

export const totalNotifications = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    return (
      get(networkAtom) +
      get(jobsAtom) +
      get(messagingAtom) +
      get(notificationsAtom)
    );
  },
});
