import Card from "../components/Card";
import Mainarea from "../components/Mainarea";
import Sidebar from "../components/Sidebar";
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend";
import "../assets/css/styles.css"

function Dashboard(){
    return(
        <DndProvider backend={HTML5Backend}>
            <div className="container">
                <Sidebar />
                <div className="container1">
                    <h2>Main Page</h2>
                    <Mainarea />
                </div>
            </div>
        </DndProvider>
    );
}

export default Dashboard;