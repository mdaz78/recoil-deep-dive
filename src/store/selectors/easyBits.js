import { selector } from "recoil";
import { notifications } from "../atoms/easyBits";

export const totalNotifications = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const notificationAtom = get(notifications);
    let sum = 0;
    for (let key in notificationAtom) {
      sum += notificationAtom[key];
    }

    return sum;
  },
});
