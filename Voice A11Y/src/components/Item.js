import React from 'react';

const Item = (props) => (
    <article className="text-white" >
        <h3>{props.name}</h3>
        <div className="Info">
            <div className="Author">{props.email}</div>
        </div>
        <hr></hr>
    </article>
);

export default Item;