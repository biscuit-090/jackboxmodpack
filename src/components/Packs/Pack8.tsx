import { useState, useEffect } from "react";
import ImageLink from "../ImageLink";
import NotAvailable from "../NotAvailable";
import PageHeader from "../PageHeader";
import LargeTitle, { MediumTitle, SmallTitle } from "../Titles";
import Description from "../Description";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCode, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import './Packs.css';

interface PackProps {

}

interface PackSubProps {

}

const Pack8: React.FC<PackProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 8' styles={{width: '100%'}} />
        <div style={{alignItems: 'center', flexDirection: 'column', justifyContent: 'center', width: '100%'}}>
          <MediumTitle text='Choose a game to modify.' />
          <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
            <ImageLink to='drawfulanimate' src='./pack8/drawfulanimate.png' />
            <ImageLink to='jobjob' src='./pack8/jobjob.png' />
            <ImageLink to='pollmine' src='./pack8/pollmine.png' />
          </div>
          <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
            <ImageLink to='thewheel' src='./pack8/thewheel.png' />
            <ImageLink to='weaponsdrawn' src='./pack8/weaponsdrawn.png' />
          </div>
        </div>
      </div>
    );
}
  
  const Pack8DrawfulAnimate: React.FC<PackSubProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 8 > Drawful Animate' styles={{width: '100%'}} />
        <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
      </div>
    );
  }
  
  const Pack8JobJob: React.FC<PackSubProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 8 > Job Job' styles={{width: '100%'}} />
        <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
      </div>
    );
  }
  
  const Pack8PollMine: React.FC<PackSubProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 8 > Poll Mine' styles={{width: '100%'}} />
        <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
      </div>
    );
  }
  
  const Pack8TheWheel: React.FC<PackSubProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 8 > The Wheel' styles={{width: '100%'}} />
        <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
      </div>
    );
  }
  
  const Pack8WeaponsDrawn: React.FC<PackSubProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text="Jackbox Party Pack 8 > Weapons Drawn" styles={{width: '100%'}} />
        <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
      </div>
    );
  }

export {Pack8DrawfulAnimate, Pack8JobJob, Pack8PollMine, Pack8TheWheel, Pack8WeaponsDrawn}
export default Pack8;
