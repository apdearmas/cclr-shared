import './App.css';
import './globals.css';
import './styleguide.css';
import { BookingHeader } from './components/booking-header';

function App() {
  return (
    <BookingHeader
      address="3 Days Bahamas from Miami, FL"
      carnivalLiberty="Carnival Liberty"
      oct62022Oct8="Fri Nov 18, 2021 - Mon Nov 21, 2021"
      price="USD"
      text1="683.98"
      price2="$"
      total="Total:"
      iconTriangleDown="https://anima-uploads.s3.amazonaws.com/projects/61483da3704f6c8cbbb9a5b3/releases/6148440c6a31d3d018cf16bd/img/icon-triangle-down@2x.png"
    />
  );
}

export default App;
