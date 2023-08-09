import { Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const App = () => {
  return (
    <div>
      <h2>Hello</h2>
      <div className="bg-red-500">
        <Button variant="contained" sx={{ backgroundColor: '#008000' }}>
          Contained
        </Button>
        <AccountCircleIcon />

        this is a testing
      </div>
    </div>
  );
};

export default App;
