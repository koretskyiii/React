import './App.css'
import Header from './components/Header/Header'
import Piano from './components/Piano/Piano'

function App() {

  return (
    <div className='min-h-screen bg-slate-200 p-8'>
      <Header/>
      <div className='flex justify-center h-screen items-center'>
        <Piano/>
      </div>
    </div> 
  )
}

export default App
