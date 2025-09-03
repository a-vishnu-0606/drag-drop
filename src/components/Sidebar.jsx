import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { useDrop } from "react-dnd";
import { movetoside } from "../store/cardsSlice";

function Sidebar(){
    const dispatch=useDispatch();
    const available=useSelector((state)=>state.cards.available);

    const [{isOver}, drop]=useDrop(()=>({
        accept:"CARD",
        drop:(val)=>{
            if(val.from==="main"){
                dispatch(movetoside(val.id));
            }
        },
        collect:(check)=>({isOver: check.isOver()})
    }))

    return(
        <div ref={drop} className={`sidebar ${isOver?"is-over":""}`}>
            <h2>Sidebar</h2>
            {available.map((val)=>(
                <Card key={val.id} card={val} location="sidebar"/>
            ))}
        </div>
    );
}

export default Sidebar;