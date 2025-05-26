import { lazy } from "react";
const EditUser = lazy(() => import("../pages/userManagement/editUser/EditUser"));
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const UserList = lazy(() => import("../pages/userManagement/UserList"));


export const routing = [
    { path: "", element: <Dashboard /> },
    { path: "userManagement/userList", element: <UserList /> },
    { path: "userManagement/editUser", element: <EditUser /> },
]