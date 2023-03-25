import React, { useEffect, useState } from 'react';
import Countriesshow from './Countriesshow';

const Country = () => {
    const [countries,setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
<h1>            Number of Country: {countries.length} 
</h1>          
<div style={{border:'1px solid red' , width:'1200px', margin:'auto', display:'grid', gridTemplateColumns:'repeat(3, 1fr)'  }}>
{
                countries.map(country => <Countriesshow name={country} ></Countriesshow>)
            }
</div>
            
        </div>
        
    );
};

export default Country;