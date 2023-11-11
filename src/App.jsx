
import './App.css'
import VideoPlayer from './components/common/VideoPlayer'
import TVScreen from './components/common/TVScreen'
import Channels from './components/common/Channels'

function App() {

  return (
    <div className="container mx-auto">
      <h1 className="text-xl font-bold">Live TV Application</h1>
      <p>To avoid Ads Please use Brave Browser or Ads Blocker</p>
      <Channels />
    </div>
  )
}

export default App
