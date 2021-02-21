import React from 'react';
import {Button,makeStyles,Icon} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));


function App() {
const classes = useStyles()


  return (
    <div className="App">
      <h1>MaTeriAL ui..</h1>
      <h1>sub maya hai.. </h1>
      <Button variant='contained' color="primary">HeLlO BisMillH..</Button>

  <div>
      <Button   variant="contained"
        color="default"
        className={classes.button}
        endIcon={<Icon>start</Icon>}>
          hey maya
      
        </Button>
        </div>
      
    </div>
  );
}

export default App;
