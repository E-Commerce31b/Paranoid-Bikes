import React from 'react'

const Filters = ({pricesAmounts, setPrice, makers, setMaker, genders, setGender}) => {
  return (
    <div>{
        pricesAmounts.length > 0 ? (
            <select id="pricesAmounts" onChange={(e) => setPrice(e.target.value)}>
                <option value="clean" selected>Precio</option>
                {
                pricesAmounts.map((pa, i) => 
                    <option 
                        className="option" 
                        value={pa} 
                        key={i}>{pa}</option>
                        )
                }
            </select>
        ) : (
            <p>Loading...</p>
        )
        }
        {
        makers.length > 0 ? (
            <select id="makers" onChange={(e) => setMaker(e.target.value)}>
                <option value="clean" selected>Marca</option>
                {
                makers.map((m, i) => 
                    <option 
                        className="option" 
                        value={m} 
                        key={i}>{m}</option>
                        )
                }
            </select>
        ) : (
            <p>Loading...</p>
        )
        }
        {
        genders.length > 0 ? (
            <select id="genders" onChange={(e) => setGender(e.target.value)}>
                <option value="clean" selected>Género</option>
                {
                genders.map((g, i) => 
                    <option 
                        className="option" 
                        value={g} 
                        key={i}>{g}</option>
                        )
                }
            </select>
        ) : (
            <p>Loading...</p>
        )
        }</div>
  )
}

export default Filters