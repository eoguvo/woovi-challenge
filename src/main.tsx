import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "@/routes";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

createRoot(root).render(<RouterProvider router={router} />);
