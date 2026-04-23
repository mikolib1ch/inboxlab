import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Dashboard } from "./components/Dashboard";
import { Messages } from "./components/Messages";
import { Inbox } from "./components/Inbox";
import { Profile } from "./components/Profile";
import { Settings } from "./components/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Dashboard },
      { path: "compose", Component: Messages },
      { path: "inbox", Component: Inbox },
      { path: "profile", Component: Profile },
      { path: "settings", Component: Settings },
    ],
  },
]);