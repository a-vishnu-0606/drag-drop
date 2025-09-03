import { useDrag } from "react-dnd";

function Card({card, location}){

    const [{isDrag}, drag]=useDrag(()=>({
        type:"CARD",
        item:{id:card.id, from:location},
        collect:(check)=>({isDrag: check.isDragging()})
    }))

    return(
        <div ref={drag} className={`card ${isDrag ? "isDragging":""}`}>
            {card.text}
        </div>
    );
}


export default Card;