import { Routes, Route } from 'react-router-dom'
import Biodata from './pages/Biodata'
import BiodataUpdate from './pages/BiodataUpdate'
import Profiling from './pages/Profiling'
import Submitted from './pages/Submitted'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Biodata />} />
        <Route path="/biodata_update" element={<BiodataUpdate />} />
        <Route path="/profiling" element={<Profiling />} />
        <Route path="/profiling2" element={<Profiling />} />
        <Route path="/profiling3" element={<Profiling />} />
        <Route path="/profiling4" element={<Profiling />} />
        <Route path="/profiling5" element={<Profiling />} />
        <Route path="/profiling6" element={<Profiling />} />
        <Route path="/profiling7" element={<Profiling />} />
        <Route path="/profiling8" element={<Profiling />} />
        <Route path="/profiling9" element={<Profiling />} />
        <Route path="/profiling10" element={<Profiling />} />
        <Route path="/submitted" element={<Submitted />} />
      </Routes>
    </>
  )
}
