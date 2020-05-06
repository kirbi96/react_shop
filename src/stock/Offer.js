import React from "react";
import "./Offer.css"

const Offer = (props) =>(
<div className="d-flex Offer">
    { props.data.map( data =>
        <div key={data.id} className="Offer-component d-flex flex-column col-4">
            <img src={data.img}/>
            <div className="Offer-name">{data.name}</div>
            <p>{data.description}</p>
        </div>
    )}
</div>


)

export {Offer}