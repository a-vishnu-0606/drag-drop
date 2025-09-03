import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { useDrop } from "react-dnd";
import { movetomain } from "../store/cardsSlice";

function Mainarea(){
    const dispatch=useDispatch();
    const dropped=useSelector((state)=>state.cards.drop);

    const [{isOver}, drop]=useDrop(()=>({
        accept:"CARD",
        drop:(val)=>{
            if(val.from==="sidebar"){
                dispatch(movetomain(val.id));
            }
        },
        collect:(check)=>({isOver: check.isOver()})
    }))

    return(
        <div ref={drop} className={`mainarea ${isOver?"is-over":""}`}>
            {dropped.map((val)=>(
                <Card key={val.id} card={val} location="main" />
            ))}
        </div>
    );
}

export default Mainarea;