import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import ImageLink from './components/ImageLink';
import LargeTitle from './components/Titles';
import Description from './components/Description';
import Pack1, { Pack1Drawful, Pack1FibbageXL, Pack1Lieswatter, Pack1Wordspud, Pack1YDKJ } from './components/Packs/Pack1';
import Pack2, { Pack2Bidiots, Pack2Bombcorp, Pack2Earwax, Pack2Fibbage2, Pack2QuiplashXL } from './components/Packs/Pack2';
import Pack3, { Pack3FakinIt, Pack3Guesspionage, Pack3Quiplash2, Pack3TeeKO, Pack3TriviaMurderParty } from './components/Packs/Pack3';
import Pack4, { Pack4Bracketeering, Pack4CivicDoodle, Pack4Fibbage3, Pack4Monster, Pack4Survive } from './components/Packs/Pack4';
import Pack5, { Pack5MadVerseCity, Pack5PatentlyStupid, Pack5SplitTheRoom, Pack5YDKJFS, Pack5ZeepleDome } from './components/Packs/Pack5';
import Pack6, { Pack6Dictionarium, Pack6JokeBoat, Pack6PushTheButton, Pack6RoleModels, Pack6TriviaMurderParty2} from './components/Packs/Pack6';
import Pack7, { Pack7BlatherRound, Pack7ChampdUp, Pack7Devils, Pack7Quiplash3, Pack7TalkingPoints } from './components/Packs/Pack7';
import Pack8, { Pack8DrawfulAnimate, Pack8JobJob, Pack8PollMine, Pack8TheWheel, Pack8WeaponsDrawn } from './components/Packs/Pack8';
import Pack9, { Pack9Fibbage4, Pack9Junktopia, Pack9Nonsensory, Pack9Quixort, Pack9Roomerang } from './components/Packs/Pack9';
import { useTransition, animated } from 'react-spring';
import { CSSProperties } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Pack10 from './components/Packs/Pack10';

interface MainContentProps {
  styles?: CSSProperties;
}

const MainContent: React.FC<MainContentProps> = ({ styles }) => {
  let location = useLocation();
  const imageNames = [
    '../bganimation/jackboxlogo.png',
    '../bganimation/quip1.png',
    '../bganimation/quip2.png',
    '../bganimation/quip3.png',
    '../bganimation/quip4.png',
    '../bganimation/quip5.png',
    '../bganimation/quip6.png',
    '../bganimation/tko1.png',
    '../bganimation/tko2.png',
    '../bganimation/tko3.png',
    '../bganimation/tko4.png',
    '../bganimation/tko5.png',
    '../bganimation/tko6.png',
    '../bganimation/tko7.png',
    '../bganimation/tko8.png',
    '../bganimation/tko9.png',
    '../bganimation/tko10.png',
    '../bganimation/tko11.png',
    '../bganimation/tko12.png',
    '../bganimation/tko13.png',
    '../bganimation/tko14.png',
    '../bganimation/tko15.png',
    '../bganimation/tko16.png',
    '../bganimation/mbubbles.png',
    '../bganimation/mayonnaise.png',
    '../bganimation/ydkjfs.png',
  ];
  const transitions = useTransition(location, {
    from: { opacity: 0, position: 'absolute', width: '100%', transform: 'translateY(100%)' },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: { opacity: 0, transform: 'translateY(-50%)' },
  });
  
  const randomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageNames.length);
    return `../bganimation/${imageNames[randomIndex]}`;
  }

  if (location.pathname === "/") {
    return (
      <div style={{flexDirection: 'column', alignItems: 'center', zIndex: 2, justifyContent: 'center', width: '100%', ...styles}}>
        {Array(25).fill(null).map((_, idx) => (
          <img 
            key={idx} 
            className="image-bubble" 
            src={randomImage()}
            alt=""
            style={{
              left: `${Math.random() * 100}vw`,
              width: `70px`,
              animationDelay: `${Math.random() * 80}s`,
              animationDuration: `${(Math.random() * (1 - 0.1) + 1) * 50}s`,
              zIndex: -1,
              userSelect: 'none',
            }}
          />
        ))}
        <div style={{flexDirection: 'column', alignItems: 'center', zIndex: 2, marginBottom: '20px'}}>
          <img src={'jackboxlogodevlight.png'} />
          <LargeTitle text='The Jackbox Mod Pack' styles={{margin: 0}}/>
          <Description text='Modify your Jackbox games for the ultimate customized experience!' styles={{fontWeight: 600, margin: '0px 0px 25px 0px'}}/>
        </div>
        <div style={{marginBottom: '10px'}}>
          <ImageLink to='/pack1' src='pack1.png' />
          <ImageLink to='/pack2' src='pack2.png' />
          <ImageLink to='/pack3' src='pack3.png' />
          <ImageLink to='/pack4' src='pack4.png' />
          <ImageLink to='/pack5' src='pack5.png' />
        </div>
        <div style={{marginBottom: '30px'}}>
          <ImageLink to='/pack6' src='pack6.png' />
          <ImageLink to='/pack7' src='pack7.png' />
          <ImageLink to='/pack8' src='pack8.png' />
          <ImageLink to='/pack9' src='pack9.png' />
          <ImageLink to='/pack10' src='pack10.png' />
        </div>
        <footer style={{position: 'fixed', bottom: 0, backgroundColor: '#1C212C', width: '100%', alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
          <FontAwesomeIcon icon={faHeart} color='red' fontSize={'12px'} />
          <p style={{color: 'white', fontFamily: 'Roboto', fontSize: '12px', margin: '0 0 0 8px', padding: '10px 0px'}}>Buy us a coffee</p>
        </footer>
      </div>
    );
  }

  return transitions((style: any, item) => (
    <animated.div style={{...style}}>
      <Routes location={item}>
        <Route path="/pack1" element={<Pack1 />} />
        <Route path="/pack1/drawful" element={<Pack1Drawful />} />
        <Route path="/pack1/fibbagexl" element={<Pack1FibbageXL />} />
        <Route path="/pack1/lieswatter" element={<Pack1Lieswatter />} />
        <Route path="/pack1/wordspud" element={<Pack1Wordspud />} />
        <Route path="/pack1/ydkj" element={<Pack1YDKJ />} />

        <Route path="/pack2" element={<Pack2 />} />
        <Route path="/pack2/bidiots" element={<Pack2Bidiots />} />
        <Route path="/pack2/bombcorp" element={<Pack2Bombcorp />} />
        <Route path="/pack2/earwax" element={<Pack2Earwax />} />
        <Route path="/pack2/fibbage2" element={<Pack2Fibbage2 />} />
        <Route path="/pack2/quiplashxl" element={<Pack2QuiplashXL />} />

        <Route path="/pack3" element={<Pack3 />} />
        <Route path="/pack3/fakinit" element={<Pack3FakinIt />} />
        <Route path="/pack3/guesspionage" element={<Pack3Guesspionage />} />
        <Route path="/pack3/quiplash2" element={<Pack3Quiplash2 />} />
        <Route path="/pack3/teeko" element={<Pack3TeeKO />} />
        <Route path="/pack3/triviamurderparty" element={<Pack3TriviaMurderParty />} />

        <Route path="/pack4" element={<Pack4 />} />
        <Route path="/pack4/bracketeering" element={<Pack4Bracketeering />} />
        <Route path="/pack4/civicdoodle" element={<Pack4CivicDoodle />} />
        <Route path="/pack4/fibbage3" element={<Pack4Fibbage3 />} />
        <Route path="/pack4/monster" element={<Pack4Monster />} />
        <Route path="/pack4/survive" element={<Pack4Survive />} />

        <Route path="/pack5" element={<Pack5 />} />
        <Route path="/pack5/madversecity" element={<Pack5MadVerseCity />} />
        <Route path="/pack5/patentlystupid" element={<Pack5PatentlyStupid />} />
        <Route path="/pack5/splittheroom" element={<Pack5SplitTheRoom />} />
        <Route path="/pack5/ydkjfs" element={<Pack5YDKJFS />} />
        <Route path="/pack5/zeepledome" element={<Pack5ZeepleDome />} />

        <Route path="/pack6" element={<Pack6 />} />
        <Route path="/pack6/dictionarium" element={<Pack6Dictionarium />} />
        <Route path="/pack6/jokeboat" element={<Pack6JokeBoat />} />
        <Route path="/pack6/pushthebutton" element={<Pack6PushTheButton />} />
        <Route path="/pack6/rolemodels" element={<Pack6RoleModels />} />
        <Route path="/pack6/triviamurderparty2" element={<Pack6TriviaMurderParty2 />} />

        <Route path="/pack7" element={<Pack7 />} />
        <Route path="/pack7/blatherround" element={<Pack7BlatherRound />} />
        <Route path="/pack7/champdup" element={<Pack7ChampdUp />} />
        <Route path="/pack7/devils" element={<Pack7Devils />} />
        <Route path="/pack7/quiplash3" element={<Pack7Quiplash3 />} />
        <Route path="/pack7/talkingpoints" element={<Pack7TalkingPoints />} />

        <Route path="/pack8" element={<Pack8 />} />
        <Route path="/pack8/drawfulanimate" element={<Pack8DrawfulAnimate />} />
        <Route path="/pack8/jobjob" element={<Pack8JobJob />} />
        <Route path="/pack8/pollmine" element={<Pack8PollMine />} />
        <Route path="/pack8/thewheel" element={<Pack8TheWheel />} />
        <Route path="/pack8/weaponsdrawn" element={<Pack8WeaponsDrawn />} />

        <Route path="/pack9" element={<Pack9 />} />
        <Route path="/pack9/fibbage4" element={<Pack9Fibbage4 />} />
        <Route path="/pack9/junktopia" element={<Pack9Junktopia />} />
        <Route path="/pack9/nonsensory" element={<Pack9Nonsensory />} />
        <Route path="/pack9/quixort" element={<Pack9Quixort />} />
        <Route path="/pack9/roomerang" element={<Pack9Roomerang />} />

        <Route path="/pack10" element={<Pack10 />} /> {/* pending release, no games known yet */}

      </Routes>
    </animated.div>
  ));
}

const App: React.FC = () => {  
  return (
    <Router>
      <div className="App">
        <MainContent />
      </div>
    </Router>
  );
}

export default App;
