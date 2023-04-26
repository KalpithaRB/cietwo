import Whyus from './Components/Note.jsx'
import About from './Components/About.jsx'
import Next from './Components/About1.jsx';
import Last from './Components/About2.jsx'
import './Builders.css'
import Footer from './Footer/Footer.jsx'

export default function Builders(){
    return(
        <>
        <div className="About-page">
      <Whyus />
      <About />
      <Next />
      <Last />
    </div>
    <div className='footer'>
        <Footer/>
    </div></>
    );
}
