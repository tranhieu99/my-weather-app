import React from 'react'

const Information = props =>{
    const {city,country,humidity,temp,description,error} = props
    return (
    <div className="information">
{       error && <span style={{color: "red"}}>{error} !!!</span>}
        {city && <p><span>Thành phố:</span> {city}</p>}
        {country && <p><span>Quốc gia:</span> {country}</p>}
        {humidity && <p><span>Độ ẩm:</span> {humidity}</p>}
        {temp && <p><span>Nhiệt độ:</span> {temp}*C</p>}
        {description && <p><span>Condition:</span>  {description}</p>}
    </div>
    )
}
export default Information