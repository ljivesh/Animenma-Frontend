
import { Grid } from '@mui/material'
import './App.css'
import Navbar from './components/navbar'
import TopCharts from './pages/topcharts/topcharts'

function App() {

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={10}>
          <TopCharts />
        </Grid>
      </Grid>
    </>
  )
}

export default App
