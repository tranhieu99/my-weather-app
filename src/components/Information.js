import React from 'react'

const Information = props =>{
    const {city,country,humidity,temp,description} = props
    return (
    <div className="information">
        {city && <p>Thành phố: {city}</p>}
        {country && <p>Quốc gia: {country}</p>}
        {humidity && <p>Độ ẩm: {humidity}</p>}
        {temp && <p>Nhiệt độ: {temp}</p>}
        {description && <p>Mô tả: {description}</p>}
    </div>
    )
}
export default Information