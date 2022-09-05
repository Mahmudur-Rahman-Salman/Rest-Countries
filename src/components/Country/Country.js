import React from 'react';

const Country = (props) => {

    const { flags, area, name, population, region } = props.country;
    return (
        <>
            <div className="col">
                <div className="card h-100">
                    <img src={flags.png} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title">Name: {name.common}</h3>
                        <h4 className="card-text">Region: {region}</h4>
                        <h5 className="card-text">Area: {area}</h5>
                        <h6 className="card-text">Population: {population}</h6>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Country;