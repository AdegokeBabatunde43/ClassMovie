import ReviewProvider from './ReviewContext';
import './App.css';
import ReviewList from './components/ReviewList';
import ReviewForm from './components/ReviewForm';
import Banner from './components/Banner';

function App() {
  return (
    <ReviewProvider>
      <ReviewForm />
      <Banner />
    <ReviewList />
    </ReviewProvider>
  );
}

export default App;
