import Footer from "./Footer/Footer"
import Principal from "./Principal/Principal"
import Sidebar from "./Sidebar/Sidebar"
import './App.css'

export const App =()=>{
    return(
        <div>
            <div className="main-content">
                <Sidebar/>
                <Principal/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
        
    )
}