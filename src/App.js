import Header from './components/Header/Header'
import "./App.sass"
import Footer from "./components/Footer/Footer";
import {RouterProvider} from "react-router-dom";
import router from "./routing/Routing";


function App() {

    return (
        <div className="App">
            <Header/>
            <RouterProvider router={router}/>
            <Footer/>
        </div>
    );
}

export default App;
