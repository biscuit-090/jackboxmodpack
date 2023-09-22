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

const Pack1: React.FC<PackProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 1' styles={{width: '100%'}} />
        
        <div style={{alignItems: 'center', flexDirection: 'column', justifyContent: 'center', width: '100%'}}>
          <MediumTitle text='Choose a game to modify.' />
          <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
            <ImageLink to='drawful' src='./pack1/drawful.png' />
            <ImageLink to='fibbagexl' src='./pack1/fibbageXL.png' />
            <ImageLink to='lieswatter' src='./pack1/lieswatter.png' />
          </div>
          <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
            <ImageLink to='wordspud' src='./pack1/wordspud.png' />
            <ImageLink to='ydkj' src='./pack1/youdontknowjack.png' />
          </div>
        </div>
      </div>
    );
  }
  
  const Pack1Drawful: React.FC<PackSubProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 1 > Drawful' styles={{width: '100%'}} />
        <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
      </div>
    );
  }
  
  const Pack1FibbageXL: React.FC<PackSubProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 1 > FibbageXL' styles={{width: '100%'}} />
        <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
      </div>
    );
  }
  
  const Pack1Lieswatter: React.FC<PackSubProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 1 > Lie Swatter' styles={{width: '100%'}} />
        <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
      </div>
    );
  }
  
  const Pack1Wordspud: React.FC<PackSubProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 1 > Word Spud' styles={{width: '100%'}} />
        <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
      </div>
    );
  }
  
  const Pack1YDKJ: React.FC<PackSubProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text="Jackbox Party Pack 1 > You Don't Know Jack" styles={{width: '100%'}} />
        <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
      </div>
    );
  }

export {Pack1Drawful, Pack1FibbageXL, Pack1Lieswatter, Pack1Wordspud, Pack1YDKJ}
export default Pack1;