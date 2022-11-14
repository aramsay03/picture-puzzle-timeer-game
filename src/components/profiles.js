import React from 'react'

export default function profiles({ Leaderboard }) {
  return (
        <ol id="profile">
            {Item(Leaderboard)}
        </ol>
  )
}

function Item(data){
    return (

        <>
            {
                data.map((value, index) => (
                    <li className="flex" key={index}>
                        <div className="item">
                            {/* <img src={value.img} alt="" /> */}
            
                            <div className="info">
                                <h3 className='name text-dark'>{value.name}</h3>    
                                <span>{value.location}</span>
                            </div>                
                        </div>
                        <div className="item">
                            <div className="leaderboard-time">
                            <span>{("0" + Math.floor((value.gameTime / 60000) % 60)).slice(-2)}:</span>
                            <span>{("0" + Math.floor((value.gameTime / 1000) % 60)).slice(-2)}:</span>
                            <span>{("0" + ((value.gameTime / 10) % 100)).slice(-2)}</span>
                        </div>
                            {/* <span>{value.gameTime}</span> */}
                        </div>
                    </li>
                    )
                )
            }
        </>

        
    )
}