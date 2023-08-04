import { Grid } from "@mui/material"
import AnimeCard from "./AnimeCard"


const AnimeList = () => {
    const arr = [1,2,3,4,5]

  return (
    <Grid container rowSpacing={4} sx={{padding: 3}} justifyContent='center'>
        {arr.map(
            ()=> 
                <Grid item xs={12} sm={5} md={4} lg={3} sx={{display: 'flex', justifyContent: 'center'}}>
                    <AnimeCard />
                </Grid>    
        )}
    </Grid>
  )
}

export default AnimeList