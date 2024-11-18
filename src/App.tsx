import { AppProvider } from "./context/LandingContext"
import AppRoutes from "./routes/LandingRoutes"

function App() {

  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}

export default App