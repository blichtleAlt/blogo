import './App.css';
import {PostList} from './PostList'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';



function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <PostList />
        <Button variant="contained">Hello World</Button>

      </Box>
    </Container>
  );
}

export default App;
