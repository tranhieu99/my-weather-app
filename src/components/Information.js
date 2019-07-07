import React from 'react'

const Information = props =>{
    const {city,country,humidity,temp,description,error} = props
    return (
    <div className="information">
{       error && <p style={{color: "red"}}>{error} !!!</p>}
        {city && <p>Thành phố: {city}</p>}
        {country && <p>Quốc gia: {country}</p>}
        {humidity && <p>Độ ẩm: {humidity}</p>}
        {temp && <p>Nhiệt độ: {temp}*C</p>}
        {description && <p>Mô tả: {description}</p>}
    </div>
    )
}
export default Information