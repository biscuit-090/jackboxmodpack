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

const Pack6: React.FC<PackProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 6' styles={{width: '100%'}} />
        <div style={{alignItems: 'center', flexDirection: 'column', justifyContent: 'center', width: '100%'}}>
          <MediumTitle text='Choose a game to modify.' />
          <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
            <ImageLink to='dictionarium' src='./pack6/dictionarium.png' />
            <ImageLink to='jokeboat' src='./pack6/jokeboat.png' />
            <ImageLink to='pushthebutton' src='./pack6/pushthebutton.png' />
          </div>
          <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
            <ImageLink to='rolemodels' src='./pack6/rolemodels.png' />
            <ImageLink to='triviamurderparty2' src='./pack6/triviamurderparty2.png' />
          </div>
        </div>
      </div>
    );
}
  
  const Pack6Dictionarium: React.FC<PackSubProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 6 > Dictionarium' styles={{width: '100%'}} />
        <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
      </div>
    );
  }
  
  const Pack6JokeBoat: React.FC<PackSubProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 6 > Joke Boat' styles={{width: '100%'}} />
        <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
      </div>
    );
  }
  
  const Pack6PushTheButton: React.FC<PackSubProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 6 > Push The Button' styles={{width: '100%'}} />
        <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
      </div>
    );
  }
  
  const Pack6RoleModels: React.FC<PackSubProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 6 > Role Models' styles={{width: '100%'}} />
        <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
      </div>
    );
  }
  
  const Pack6TriviaMurderParty2: React.FC<PackSubProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text="Jackbox Party Pack 6 > Trivia Murder Party 2" styles={{width: '100%'}} />
        <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
      </div>
    );
  }

export {Pack6Dictionarium, Pack6JokeBoat, Pack6PushTheButton, Pack6RoleModels, Pack6TriviaMurderParty2}
export default Pack6;
