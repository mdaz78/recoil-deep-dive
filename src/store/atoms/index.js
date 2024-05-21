import { atom } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 102,
});

export const jobsAtom = atom({
  key: "jobsCount",
  default: 0,
});

export const messagingAtom = atom({
  key: "messagingCount",
  default: 0,
});

export const notificationsAtom = atom({
  key: "notificationsCount",
  default: 12,
});
