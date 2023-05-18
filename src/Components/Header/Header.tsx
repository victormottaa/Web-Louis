import './style.css'
import {Link} from 'react-router-dom'

function Header () {
    return(
        <header>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css"></link>
        <Link className="a-logo" to="/"><div className="logo">luishzvd</div></Link> 
           <div className="nav-container">
             <div className="links"><Link to="https://www.youtube.com/@luishzvd">YOUTUBE</Link></div>
             <div className="links"><Link to="">WORK</Link></div>
             <div className="links"><Link to="./contato.html">CONTATO</Link></div>
             <div>
                 <ul className="socialIcon">
                     <li><Link to=""><i className="bi bi-twitter"></i></Link></li>
                     <li><Link to=""><i className="bi bi-linkedin"></i></Link></li>
                     <li><Link to=""><i className="bi bi-instagram"></i></Link></li>
                     <li><Link to="https://www.youtube.com/@luishzvd"><i className="bi bi-youtube"></i></Link></li>
                 </ul>
             </div>
         </div>
     </header>
    )
}

export default Header