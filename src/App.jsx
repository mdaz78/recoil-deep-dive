import { RecoilRoot, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationsAtom,
} from "./store/atoms";
import { totalNotifications } from "./store/selectors";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const messagingCount = useRecoilValue(messagingAtom);
  const notificationsCount = useRecoilValue(notificationsAtom);

  const totalNotificationsCount = useRecoilValue(totalNotifications);

  return (
    <>
      <div>
        <button>Home</button>
        <button>
          My Network (
          {networkNotificationCount > 99 ? "99+" : networkNotificationCount})
        </button>
        <button>Jobs ({jobsCount})</button>
        <button>Messaging ({messagingCount})</button>
        <button>Notifications ({notificationsCount})</button>
        <button>Me ({totalNotificationsCount})</button>
      </div>
    </>
  );
}

export default App;
