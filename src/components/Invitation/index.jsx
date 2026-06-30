import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { SwitchTransition, CSSTransition } from "react-transition-group";

import invitees from '../../data/invitees';
import Message from '../Message'
import Front from './Front';
import SideText from '../SideText';
import Hero from '../Hero';
import MenuLinks from '../MenuLinks';
import Quran from '../Quran';
import Bio from '../Bio';
import Schedule from '../Schedule';
import Gift from '../Gift';

import topLeftFlower from '../../assets/images/topleft_flower.png'
import bottomRightFlower from '../../assets/images/bottomright_flower.png'
import topRightFlower from '../../assets/images/topright_flower.png'
import bottomLeftFlower from '../../assets/images/bottomleft_flower.png'
import Protocol from '../Protocol';
import Thanks from '../Thanks';
import Credit from '../Credit';
import NotFound from '../NotFound';
import Gallery from '../Gallery';

const Invitation = () => {
  const { inviteeId } = useParams();
  const code = inviteeId.split('-')[0];
  const inviteeData = invitees[code];

  const [open, setOpen] = useState(false);

  if (!inviteeData) {
    return <NotFound/>
  }

  const invitee = {
    code,
    name: inviteeData.name,
    greet: inviteeData.greet,
    from: inviteeData.invitee_from,
  };

  return (
      <SwitchTransition>
     <CSSTransition
       key={open ? "1" : "0"}
       addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
       classNames='fade'
     >
       {
        (!open) ?
          <Front invitee={invitee} setOpen={setOpen}/>
        : (
          <div>
            <Hero from={invitee.from}/>
            <div className="relative flex flex-col bg-white lg:flex-row">
                <SideText from={invitee.from}/>
                <div className='flex-1 lg:px-10'>
                  <Quran/>
                  <div className='relative z-0 py-20 overflow-hidden border-4 lg:overflow-visible drop-shadow-xl bg-coklat-light border-coklat-dark'>
                    <Bio greet={invitee.greet} from={invitee.from}/>
                    <Schedule/>
                    <Gallery/>
                    <Gift  from={invitee.from}/>
                    <Protocol/>
                    <Message invitee={invitee}/>
                    <Thanks greet={invitee.greet} from={invitee.from}/>
                    <img src={topRightFlower} alt="Top Right Flower" className='absolute top-0 right-0 h-28 lg:h-48' />
                    <img src={bottomLeftFlower} alt="Bottom Left Flower" className='absolute bottom-0 left-0 h-28 lg:h-48' />
                  </div>
                  <Credit/>
                </div>
              <MenuLinks/>
              <img src={topLeftFlower} alt="Top Left Flower" className='absolute top-0 left-0 h-28 lg:h-48' />
              <img src={bottomRightFlower} alt="Bottom Right Flower" className='absolute bottom-0 right-0 hidden h-28 lg:h-48 lg:block' />
            </div>
          </div>
        )
       }
       
     </CSSTransition>
   </SwitchTransition>
    )
}

export default Invitation