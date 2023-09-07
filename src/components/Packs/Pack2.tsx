import { useState, useEffect } from "react";
import ImageLink from "../ImageLink";
import NotAvailable from "../NotAvailable";
import PageHeader from "../PageHeader";
import { MediumTitle, SmallTitle } from "../Titles";

interface PackProps {

}

interface PackSubProps {

}

const Pack2: React.FC<PackProps> = ({  }) => {
    return (
    <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
      <PageHeader text='Jackbox Party Pack 2' styles={{width: '100%'}} />
      <div style={{alignItems: 'center', flexDirection: 'column', justifyContent: 'center', width: '100%'}}>
        <MediumTitle text='Choose a game to modify.' />
        <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
          <ImageLink to='bidiots' src='./pack2/bidiots.png' />
          <ImageLink to='earwax' src='./pack2/earwax.png' />
          <ImageLink to='bombcorp' src='./pack2/bombcorp.png' />
        </div>
        <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
          <ImageLink to='fibbage2' src='./pack2/fibbage2.png' />
          <ImageLink to='quiplashxl' src='./pack2/quiplashXL.png' />
        </div>
      </div>
    </div>
    );
}

const Pack2Bidiots: React.FC<PackSubProps> = ({  }) => {
  return (
    <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
      <PageHeader text="Jackbox Party Pack 2 > Bidiots" styles={{width: '100%'}} />
      <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
    </div>
  );
}

const Pack2Bombcorp: React.FC<PackSubProps> = ({  }) => {
  return (
    <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
      <PageHeader text="Jackbox Party Pack 2 > Bombcorp" styles={{width: '100%'}} />
      <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
    </div>
  );
}
interface ApiResponse {
  output: string;
}
const Pack2Earwax: React.FC<PackSubProps> = ({  }) => {
  const [output, setOutput] = useState<string | null>(null);

  const fetchOutput = async () => {
    try {
      const response = await fetch('http://localhost:5000/run-python-code');
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: ApiResponse = await response.json();
      setOutput(data.output);
    } catch (error) {
      console.error("There was an error fetching the data", error);
      setOutput("Error fetching data");
    }
  }
  return (
    <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
      <PageHeader text="Jackbox Party Pack 2 > Earwax" styles={{width: '100%'}} />
      <button onClick={fetchOutput}>Run Python Code</button>
      {output && <SmallTitle text={output}/>}
    </div>
  );
}

const Pack2Fibbage2: React.FC<PackSubProps> = ({  }) => {
  return (
    <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
      <PageHeader text="Jackbox Party Pack 2 > Fibbage 2" styles={{width: '100%'}} />
      <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
    </div>
  );
}

const Pack2QuiplashXL: React.FC<PackSubProps> = ({  }) => {
  return (
    <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
      <PageHeader text="Jackbox Party Pack 2 > Quiplash XL" styles={{width: '100%'}} />
      <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
    </div>
  );
}

export {Pack2Bidiots, Pack2Bombcorp, Pack2Earwax, Pack2QuiplashXL, Pack2Fibbage2}
export default Pack2;