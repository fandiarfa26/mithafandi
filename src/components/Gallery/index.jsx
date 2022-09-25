import React from 'react'
import gallery1 from '../../assets/images/gallery1.jpg'
import gallery2 from '../../assets/images/gallery2.jpg'
import gallery3 from '../../assets/images/gallery3.jpg'
import gallery4 from '../../assets/images/gallery4.jpg'
import gallery5 from '../../assets/images/gallery5.jpg'
import gallery6 from '../../assets/images/gallery6.jpg'
import gallery7 from '../../assets/images/gallery7.jpg'
import gallery8 from '../../assets/images/gallery8.jpg'
import gallery9 from '../../assets/images/gallery9.jpg'
import gallery10 from '../../assets/images/gallery10.jpg'
import SmallPhoto from './SmallPhoto'
import BigPhoto from './BigPhoto'

const Gallery = () => {
  return (
    <div id="gift" className='flex items-center justify-center px-5 py-24 lg:px-20'>
      <div className="flex flex-col flex-wrap items-center justify-center bg-white shadow-xl lg:flex-row lg:scale-110">
        <div className="flex flex-wrap w-72">
          <SmallPhoto image={gallery1}/>
          <SmallPhoto image={gallery2}/>
          <SmallPhoto image={gallery3}/>
          <SmallPhoto image={gallery4}/>
        </div>
        <BigPhoto image={gallery5}/>
        
        <div className="flex flex-wrap w-72">
          <SmallPhoto image={gallery7}/>
          <SmallPhoto image={gallery8}/>
          <SmallPhoto image={gallery9}/>
          <SmallPhoto image={gallery10}/>
        </div>
        <BigPhoto image={gallery6}/>
        
      </div>
    </div>
  )
}

export default Gallery