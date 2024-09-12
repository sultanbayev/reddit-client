import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { App } from "@/app/1"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
