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

const Pack4: React.FC<PackProps> = ({  }) => {
    return (
        <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
            <PageHeader text='Jackbox Party Pack 4' styles={{width: '100%'}} />
            <div style={{alignItems: 'center', flexDirection: 'column', justifyContent: 'center', width: '100%'}}>
            <MediumTitle text='Choose a game to modify.' />
            <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
                <ImageLink to='bracketeering' src='./pack4/bracketeering.png' />
                <ImageLink to='civicdoodle' src='./pack4/civicdoodle.png' />
                <ImageLink to='fibbage3' src='./pack4/fibbage3.png' />
            </div>
            <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
                <ImageLink to='monster' src='./pack4/monster.png' />
                <ImageLink to='survive' src='./pack4/survivetheinternet.png' />
            </div>
            </div>
        </div>
    );
}
  
  const Pack4Bracketeering: React.FC<PackSubProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 4 > Bracketeering' styles={{width: '100%'}} />
        <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
      </div>
    );
  }
  
  const Pack4CivicDoodle: React.FC<PackSubProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 4 > Civic Doodle' styles={{width: '100%'}} />
        <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
      </div>
    );
  }
  
  const Pack4Fibbage3: React.FC<PackSubProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 4 > Fibbage 3' styles={{width: '100%'}} />
        <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
      </div>
    );
  }
  
  const Pack4Monster: React.FC<PackSubProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 4 > Monster Seeking Monster' styles={{width: '100%'}} />
        <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
      </div>
    );
  }
  
  const Pack4Survive: React.FC<PackSubProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text="Jackbox Party Pack 4 > Survive The Internet" styles={{width: '100%'}} />
        <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
      </div>
    );
  }

export {Pack4Bracketeering, Pack4CivicDoodle, Pack4Fibbage3, Pack4Monster, Pack4Survive}
export default Pack4;
