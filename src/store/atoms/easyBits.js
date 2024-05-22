import { atom, selector } from "recoil";

// export const networkAtom = atom({
//   key: "networkAtom",
//   default: 102,
// });

// export const jobsAtom = atom({
//   key: "jobsCount",
//   default: 0,
// });

// export const messagingAtom = atom({
//   key: "messagingCount",
//   default: 0,
// });

// export const notificationsAtom = atom({
//   key: "notificationsCount",
//   default: 12,
// });

// export const notifications = atom({
//   key: "notificationsAtom",
//   default: {
//     network: 0,
//     jobs: 0,
//     notifications: 0,
//     messaging: 0,
//   },
// });

export const notifications = atom({
  key: "notificationsAtom",
  default: selector({
    key: "networkAtomSelector",
    get: async () => {
      const response = await fetch(
        "https://sum-server.100xdevs.com/notifications"
      );
      const data = await response.json();
      return data;
    },
  }),
});
