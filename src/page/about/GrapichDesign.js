import React, {useState} from 'react'

const GrapichDesign = () => {
    const [num, setNum] = useState(1);
    return (
        <div className='grafis'>
            <div className='dua'>
                <div>
                    <img onClick={()=> num === 5 ? setNum(1):setNum(num+1)} src={require(`../../source/img/2D/${num}.png`)} alt='' className='img'/>
                </div>
            </div>
        </div>
    )
}

export default GrapichDesign