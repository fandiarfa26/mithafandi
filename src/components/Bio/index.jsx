import React from 'react'
import flower from '../../assets/images/flower3.png'
import mithaPhoto from '../../assets/images/mitha.jpg'
import fandiPhoto from '../../assets/images/fandi.jpg'
import BioItem from './Item'

const Bio = ({greet, from}) => {
  const data = [
    {
      name: 'M. Fandi Arfabuma, S.T.',
      childof: 'Putra pertama dari',
      parent: 'Bapak Suhardi & Ibu Latifah',
      instagram: 'fandiarfa',
    },
    {
      name: 'Desy Rosmita Maharani, S.Pd.',
      childof: 'Putri ketiga dari',
      parent: 'Bapak Maharani Kahar & Ibu St. Rumiyati',
      instagram: 'dsyrsmitam',
    },
  ];
  return (
    <div id="bio" className='px-5 pb-10 lg:px-20'>
      <div className="flex flex-col items-center gap-5">
        <div data-aos="fade-up" className='text-xl text-center'>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
        <div data-aos="fade-up" className='text-sm text-center lg:text-xl font-bree'>Assalamu'alaikum warahmatullahi wabarakatuh</div>
        <p data-aos="fade-up" className='text-xs text-center lg:text-base lg:w-3/4'>Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Kami mengundang {greet} untuk menghadiri acara pernikahan kami.</p>
        <div className="flex flex-col items-start w-full gap-5 py-5 lg:flex-row">
          <BioItem 
            pic={from === 'Fandi' ? fandiPhoto : mithaPhoto}
            name={from === 'Fandi' ? data[0].name : data[1].name}
            childof={from === 'Fandi' ? data[0].childof : data[1].childof}
            parent={from === 'Fandi' ? data[0].parent : data[1].parent}
            instagram={from === 'Fandi' ? data[0].instagram : data[1].instagram}/>
          <img src={flower} alt="Flower" className='self-center h-28 lg:h-32' />
          <BioItem 
            pic={from === 'Mitha' ? fandiPhoto : mithaPhoto}
            name={from === 'Mitha' ? data[0].name : data[1].name}
            childof={from === 'Mitha' ? data[0].childof : data[1].childof}
            parent={from === 'Mitha' ? data[0].parent : data[1].parent}
            instagram={from === 'Mitha' ? data[0].instagram : data[1].instagram}/>
        </div>
      </div>
    </div>
  )
}

export default Bio