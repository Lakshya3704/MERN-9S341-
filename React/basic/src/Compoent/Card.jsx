import React, { useState } from 'react'

const Card = ({data}) => {
  return (
    <div>
        {data && (
            <>
            <div>
                {data.name}<br></br>
                {data.age}<br></br>
                {data.reg}<br></br>
                {data.email}<br></br>
                {data.city}<br></br>
                {data.post}<br></br>
            </div>
            </>
        )}
    </div>
    
    
  )
}

export default Card