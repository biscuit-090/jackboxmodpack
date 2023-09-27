import { useState, useEffect } from "react";
import ImageLink from "../ImageLink";
import NotAvailable from "../NotAvailable";
import PageHeader from "../PageHeader";
import LargeTitle, { MediumTitle, SmallTitle } from "../Titles";
import Description from "../Description";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCode, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import './Packs.css';
import Notification from "../Notification";

interface PackProps {

}

interface PackSubProps {

}

const Pack5: React.FC<PackProps> = ({  }) => {
    return (
        <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
            <PageHeader text='Jackbox Party Pack 5' styles={{width: '100%'}} />
            <div style={{alignItems: 'center', flexDirection: 'column', justifyContent: 'center', width: '100%'}}>
            <MediumTitle text='Choose a game to modify.' />
            <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
                <ImageLink to='madversecity' src='./pack5/madversecity.png' />
                <ImageLink to='patentlystupid' src='./pack5/patentlystupid.png' />
                <ImageLink to='splittheroom' src='./pack5/splittheroom.png' />
            </div>
            <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
                <ImageLink to='ydkjfs' src='./pack5/ydkjfs.png' />
                <ImageLink to='zeepledome' src='./pack5/zeepledome.png' />
            </div>
            </div>
        </div>
    );
}

const Pack5MadVerseCity: React.FC<PackSubProps> = ({  }) => {
	const [output, setOutput] = useState<string | null>(null);
	const [showNotification, setShowNotification] = useState<boolean>(false);
	const handleTxtUploadBuilding = async () => {
		setOutput(null);
		try {
			const response = await fetch('http://localhost:5000/pack5madversecitybuilding', {
				method: 'GET',
			});
			const data: ApiResponse = await response.json();
			setOutput(data.output);
			setShowNotification(true);
		} catch (error) {
			console.error(error);
			setOutput("Error uploading .txt file");
			setShowNotification(true);
		}
	}
	const handleTxtUploadTickerGag = async () => {
		setOutput(null);
		try {
			const response = await fetch('http://localhost:5000/pack5madversecitytickergag', {
				method: 'GET',
			});
			const data: ApiResponse = await response.json();
			setOutput(data.output);
			setShowNotification(true);
		} catch (error) {
			console.error(error);
			setOutput("Error uploading .txt file");
			setShowNotification(true);
		}
	}
	
  	return (
		<div style={{display: 'flex', padding: '15px', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
			<PageHeader text="Jackbox Party Pack 5 > Mad Verse City" styles={{width: '100%'}} />
			<LargeTitle text="Mad Verse City Mods" styles={{margin: '20px 0 0 0'}}/>
			<div style={{display: 'flex', flexDirection: 'column', marginTop: '30px', alignItems: 'center', justifyContent: 'center', background: '#222', borderRadius: '8px', padding: '20px', width: '95%'}}>
				<MediumTitle text="Custom Skyscraper Names" styles={{margin: '0 0 12px 0'}}/>
				<Description text="Upload a .txt file with funny text on each line to randomly name the skyscraper in-game." styles={{margin: '0 0 25px 0'}}/>
				<button id="uploadbtn" onClick={handleTxtUploadBuilding} style={{width: '25%', transition: '0.2s'}}>Upload File</button>
				<span style={{color: '#999', fontFamily: 'Inter', fontWeight: 600, fontSize: '16px', marginTop: '15px'}}>Supported file types: .txt</span>
				{output && 
					<Notification text="Modded Successfully!" />
				}
			</div>

			<div style={{display: 'flex', flexDirection: 'column', marginTop: '30px', alignItems: 'center', justifyContent: 'center', background: '#222', borderRadius: '8px', padding: '20px', width: '95%'}}>
				<MediumTitle text="Custom Marquee Text" styles={{margin: '0 0 12px 0'}}/>
				<Description text="Upload a .txt file with funny text on each line to be randomly displayed on the marquee." styles={{margin: '0 0 25px 0'}}/>
				<button id="uploadbtn" onClick={handleTxtUploadTickerGag} style={{width: '25%', transition: '0.2s'}}>Upload File</button>
				<span style={{color: '#999', fontFamily: 'Inter', fontWeight: 600, fontSize: '16px', marginTop: '15px'}}>Supported file types: .txt</span>
				{output && 
					<Notification text="Modded Successfully!" />
				}
			</div>
		</div>
  	);
}

const Pack5PatentlyStupid: React.FC<PackSubProps> = ({  }) => {
  return (
    <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
      <PageHeader text="Jackbox Party Pack 5 > Patently Stupid" styles={{width: '100%'}} />
      <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
    </div>
  );
}
interface ApiResponse {
  output: string;
}
const Pack5SplitTheRoom: React.FC<PackSubProps> = ({  }) => {
	return (
		<div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
		  <PageHeader text="Jackbox Party Pack 5 > Split The Room" styles={{width: '100%'}} />
		  <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
		</div>
	  );
}

const Pack5YDKJFS: React.FC<PackSubProps> = ({  }) => {
  return (
    <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
      <PageHeader text="Jackbox Party Pack 5 > YDKJFS" styles={{width: '100%'}} />
      <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
    </div>
  );
}

const Pack5ZeepleDome: React.FC<PackSubProps> = ({  }) => {
  return (
    <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
      <PageHeader text="Jackbox Party Pack 5 > Zeeple Dome" styles={{width: '100%'}} />
      <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
    </div>
  );
}

export {Pack5MadVerseCity, Pack5PatentlyStupid, Pack5SplitTheRoom, Pack5YDKJFS, Pack5ZeepleDome}
export default Pack5;