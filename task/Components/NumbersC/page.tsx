import React from 'react'

const NumbersC = () => {
    let numbers = [
        {
          nuum: '12',
          info: "Years Of Experiance",
          borderRifht: '2px solid #CDA274',
        },
        {
          nuum: '85',
          info: "Success project",
          borderRifht: '2px solid #CDA274',
        },
        {
          nuum: '15',
          info: "Active Project",
          borderRifht: '2px solid #CDA274',
        },
        {
          nuum: '95',
          info: "Happy CUstomers",
        },
      ]
    return (
        <div >
            <div className='numberCCC' style={{ width: '100%', backgroundColor: '#F4F0EC',  }}>
                <div className='containeR' style={{ margin: 'auto', display: 'flex', justifyContent: 'center' }}>
                    {numbers.map((e, i) => {
                        return <div className='numberCD' key={i} style={{ textAlign: 'center', borderRight: e.borderRifht,  }}>
                            <p className='numberCnum' style={{ color: '#CDA274',  fontFamily: 'serif', fontWeight: '600' }}>{e.nuum}</p>
                            <p className='numberCp' style={{ opacity: '0.8', whiteSpace: 'nowrap' }}>{e.info}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default NumbersC