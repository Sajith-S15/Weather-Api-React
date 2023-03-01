import React, { useEffect, useState } from 'react';

function Fetch() {

    const [data, setData] = useState([])


    const api =()=>{
        fetch('https://all-the-weather.herokuapp.com/cities')
        .then((response) =>response.json())
        .then((json) => {
            console.log(json.items);
            setData(json.items);
        });
    };

    useEffect(() => {
        api();

    }, []);




    return (
        <>
        <div>
                 
                        <div>
                            <table>
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>COUNTRY CODE</th>
                                    <th>REGION CODE</th>
                                </tr>
                            </thead>


                        
                        {data.map((item) =>(
                            <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.countryCode}</td>
                            <td>{item.regionCode}</td>
                        </tr>
                        ))}

                    </table>
                </div>
                    
                     
             </div>
        </>
        // <div>
        //    Weather <br/>

        // <button onClick={api}> Get Today's Weather </button>
        // <br />

        // {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
           

        //    <div>

        //     

        //    </div>
        // </div>
    );
}

export default Fetch;