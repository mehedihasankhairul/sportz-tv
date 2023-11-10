
import './App.css'
import VideoPlayer from './components/common/VideoPlayer'
import TVScreen from './components/common/TVScreen'
import Channels from './components/common/Channels'

function App() {

  return (
    <div className="container mx-auto">
      <h1 className="text-xl font-bold">Live TV Application</h1>
      <Channels />
    </div>
  )
}

export default App
