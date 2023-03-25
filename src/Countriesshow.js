import React from 'react';

const Countriesshow = (props) => {
    const {name, area, population, flags} = props.name ;
    console.log(props.name);
    return (
        <div>

            <h1>County area: {area} </h1>
            <h1>County population: {population} </h1>
            <img src={flags.png} style={{width:'100px', height:'100px', border:'2px solid grey'}} alt="" />
            <h1>Name of country: {name.common}</h1>

        </div>
    );
};

export default Countriesshow;