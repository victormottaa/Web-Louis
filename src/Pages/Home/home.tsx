import {Link} from 'react-router-dom'
import './style.css'



function Home () {
    return(
        <>
        
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css"></link>
        <div className="main-content">
        <div className="title-container">
            <h1>luis hzvd</h1>
        </div>
    
        <div className="button-container">
            <Link to='/work'><button className="btn">seguir para o site</button></Link>
        </div>

        <div>
            <ul className="socialIcon">
                <li><Link to="https://twitter.com/victormottaa"><i className="bi bi-twitter"></i></Link></li>
                <li><Link to="https://twitter.com/victormottaa"><i className="bi bi-linkedin"></i></Link></li>
                <li><Link to="https://twitter.com/victormottaa"><i className="bi bi-instagram"></i></Link></li>
                <li><Link to="https://twitter.com/victormottaa"><i className="bi bi-youtube"></i></Link></li>
            </ul>
        </div>

</div>
</>
    )
}

export default Home