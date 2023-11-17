import { Box } from '@mui/material';
import './App.css';
import ContentHeader from './components/ContentHeader';
import Header from './components/Header';
import Footer from './components/Footer';
import Articles from './components/Articles';
function App() {
  return (
    <Box>
      <Header />
      <ContentHeader />
      <Articles />
      <Footer />
    </Box>  
  );
}
export default App;
