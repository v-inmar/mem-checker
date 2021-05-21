import React, { useState, useEffect } from 'react'

const Body = () => {
    const [freeMemory, setFreeMemory] = useState(services.memoryApi.getFreeMemory());

    useEffect(()=>{
        setInterval(()=>{
            setFreeMemory(services.memoryApi.getFreeMemory());
        }, 1000);
    }, [freeMemory])

    return (
        <div className='fcnw'>
            <div className='frnw' style={{justifyContent: 'center'}}>
                <span style={{ fontSize: '1.5rem' }}>Total Memory: <span style={{ color: '#ffff00'}}>{services.memoryApi.getTotalMemory()}</span> MB</span>
            </div>
            <div className='fcnw' style={{alignItems: 'center'}}>
                <span style={{fontSize: '8rem'}}><span style={{ color: '#cddc39'}}>{freeMemory}</span> MB</span>
                <span>Free Memory</span>
            </div>
        </div>
    );
}

export default Body;