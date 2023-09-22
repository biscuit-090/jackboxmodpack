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

const Pack9: React.FC<PackProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 9' styles={{width: '100%'}} />
        <div style={{alignItems: 'center', flexDirection: 'column', justifyContent: 'center', width: '100%'}}>
          <MediumTitle text='Choose a game to modify.' />
          <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
            <ImageLink to='fibbage4' src='./pack9/fibbage4.png' />
            <ImageLink to='junktopia' src='./pack9/junktopia.png' />
            <ImageLink to='nonsensory' src='./pack9/nonsensory.png' />
          </div>
          <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
            <ImageLink to='quixort' src='./pack9/quixort.png' />
            <ImageLink to='roomerang' src='./pack9/roomerang.png' />
          </div>
        </div>
      </div>
    );
}
  
  const Pack9Fibbage4: React.FC<PackSubProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 9 > Fibbage4' styles={{width: '100%'}} />
        <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
      </div>
    );
  }
  
  const Pack9Junktopia: React.FC<PackSubProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 9 > Junktopia' styles={{width: '100%'}} />
        <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
      </div>
    );
  }
  
  const Pack9Nonsensory: React.FC<PackSubProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 9 > Nonsensory' styles={{width: '100%'}} />
        <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
      </div>
    );
  }
  
  const Pack9Quixort: React.FC<PackSubProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 9 > Quixort' styles={{width: '100%'}} />
        <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
      </div>
    );
  }
  
  const Pack9Roomerang: React.FC<PackSubProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text="Jackbox Party Pack 9 > Roomerang" styles={{width: '100%'}} />
        <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
      </div>
    );
  }

export {Pack9Fibbage4, Pack9Junktopia, Pack9Nonsensory, Pack9Quixort, Pack9Roomerang}
export default Pack9;
