import React,{useState} from 'react'

const Modelling = () => {
    const [num, setNum] = useState(1);
  return (
    <div>
        <div className='modelling'>
            <div className='dua'>
                <div>
                    <img onClick={()=> num === 5 ? setNum(1):setNum(num+1)} src={require(`../../source/img/3D/${num}.png`)} alt='' className='img'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modelling