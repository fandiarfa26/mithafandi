import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { doc, getDoc } from 'firebase/firestore';

import db from '../../firebase';
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
import LoadingPage from '../LoadingPage';
import NotFound from '../NotFound';
import Gallery from '../Gallery';

const Invitation = () => {
  const { inviteeId } = useParams();

  const [loading, setLoading] = useState(true);
  const [invitee, setInvitee] = useState(null);
  const [open, setOpen] = useState(false);

  const getInvitee = useCallback(async () => {
    console.log('get invitee')
    setLoading(true);
    try {
      const inviteeSnapshot = await getDoc(doc(db, "invitees", inviteeId.split('-')[0]));

      if (!inviteeSnapshot.exists()) {
        setInvitee({});
      } else {
        setInvitee({
          code: inviteeSnapshot.id,
          name: inviteeSnapshot.data().name,
          greet: inviteeSnapshot.data().greet,
        });
      }
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  }, [inviteeId]);

  useEffect(() => {
    getInvitee();
  }, [getInvitee]);

  if (loading) {
    return <LoadingPage/>
  } else {
    if (invitee.name === undefined) {
      return <NotFound/>
    }

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
            <Hero/>
            <div className="relative flex flex-col bg-white lg:flex-row">
                <SideText/>
                <div className='flex-1 lg:px-10'>
                  <Quran/>
                  <div className='relative z-0 py-20 overflow-hidden border-4 lg:overflow-visible drop-shadow-xl bg-coklat-light border-coklat-dark'>
                    <Bio greet={invitee.greet}/>
                    <Schedule/>
                    <Gallery/>
                    <Gift/>
                    <Protocol/>
                    <Message invitee={invitee}/>
                    <Thanks greet={invitee.greet}/>
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

  
}

export default Invitation