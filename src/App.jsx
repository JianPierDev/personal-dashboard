import { RouterProvider } from "react-router/dom";
import { router } from "./router/router";
import { UserProvider } from "./providers/user-provider";

export function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  )
}