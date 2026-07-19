import { SiteLayout } from './components/layout/SiteLayout'
import { useRoute } from './hooks/useRoute'
import { AppRoutes } from './routes/AppRoutes'
import './styles/App.css'

function App() {
  const { route, navigate } = useRoute()

  return (
    <SiteLayout route={route} navigate={navigate}>
      <AppRoutes route={route} navigate={navigate} />
    </SiteLayout>
  )
}

export default App
