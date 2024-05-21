import { RecoilRoot, useRecoilValue } from "recoil";
import { notifications } from "./store/atoms";
import { totalNotifications } from "./store/selectors";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const notificationsAtom = useRecoilValue(notifications);

  const totalNotificationsCount = useRecoilValue(totalNotifications);

  const {
    network: networkNotificationCount,
    jobs: jobsCount,
    messaging: messagingCount,
    notifications: notificationsCount,
  } = notificationsAtom;

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
