import './home.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Productcard from './productcard';


function home() {
  return (
    <div id='home'>
      <div id='intro'>
        <p className='display-5 pt-3 text-white' >Welcome to our website, your go-to destination for buying and selling used items! </p>
      </div>
      <div className='d-flex-row' id='details'>
        <div id="point1" className='d-flex justify-content-start align-items-center'>
          <p className='num'>1</p>
          <p id='detail1'>Our platform is designed to connect buyers and sellers of pre-owned goods in a simple and convenient way.</p></div>

        <div id="point2" className='d-flex justify-content-start align-items-center'>
          <p className='num'>2</p><p id='detail2'>At our website, we believe in the benefits of reusing and recycling, and we're committed to reducing waste and promoting sustainability. By buying used items, you're not only saving money but also helping to reduce your carbon footprint.</p></div>
      </div>
      <hr id='hr2' className='mt-2'/>
      <div id='cardarea' className='mt-3 mb-3'>
        <Productcard/>
        <Button variant="secondary" className='ta-centre'>Load More <span>&#62;</span></Button>
      </div>
    </div>
  );
}
export default home
