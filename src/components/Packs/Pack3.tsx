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

const Pack3: React.FC<PackProps> = ({  }) => {
    return (
        <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
            <PageHeader text='Jackbox Party Pack 3' styles={{width: '100%'}} />
            
            <div style={{alignItems: 'center', flexDirection: 'column', justifyContent: 'center', width: '100%'}}>
            <MediumTitle text='Choose a game to modify.' />
            <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
                <ImageLink to='fakinit' src='./Pack3/fakinit.png' />
                <ImageLink to='guesspionage' src='./Pack3/guesspionage.png' />
                <ImageLink to='quiplash2' src='./Pack3/quiplash2.png' />
            </div>
            <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
                <ImageLink to='teeko' src='./Pack3/teeko.png' />
                <ImageLink to='triviamurderparty' src='./Pack3/triviamurderparty.png' />
            </div>
            </div>
        </div>
    );
  }
  
  const Pack3FakinIt: React.FC<PackSubProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 3 > Fakin It' styles={{width: '100%'}} />
        <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
      </div>
    );
  }
  
  const Pack3Guesspionage: React.FC<PackSubProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 3 > Guesspionage' styles={{width: '100%'}} />
        <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
      </div>
    );
  }
  
  const Pack3Quiplash2: React.FC<PackSubProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 3 > Quiplash 2' styles={{width: '100%'}} />
        <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
      </div>
    );
  }
  
  const Pack3TeeKO: React.FC<PackSubProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 3 > Tee K.O.' styles={{width: '100%'}} />
        <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
      </div>
    );
  }
  
  const Pack3TriviaMurderParty: React.FC<PackSubProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text="Jackbox Party Pack 3 > Trivia Murder Party" styles={{width: '100%'}} />
        <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
      </div>
    );
  }

export {Pack3FakinIt, Pack3Guesspionage, Pack3Quiplash2, Pack3TeeKO, Pack3TriviaMurderParty}
export default Pack3;
