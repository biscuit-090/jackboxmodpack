## Development Notes
<details>
<summary><b>Research Notes</b></summary>
  <h3>File type: <code>.jet</code></h3>
  <ul>
    <li>
      All Jackbox games seem to have files formatted as JSON data with the extension <code>.jet</code>. This file extension is exclusive to Jackbox games and isn't seen in use anywhere else in any current or past software according to Wikipedia and ChatGPT.
    </li>
    <li>
      Every <code>.jet</code> file controls critical information in-game regarding what's displayed, what audio files get played, and what attributes each player in the game may have such as <code>{alive: false}</code> for when you've died in Trivia Murder Party.
    </li>
    <li>
      Mods that do not edit <code>.jet</code> files are more invasive and complex to create but can result in far more freedom compared to what you can achieve otherwise.
    </li>
  </ul>
  <h3>General Information</h3>
    <ul>
      <li>Jackbox games are all built and packaged using Autodesk's gaming oriented platform called <code>Autodesk Scaleform</code> which means their games come with very limited mod support, as most of the game's assets and files are inaccessible (with some exceptions).
      </li>
      <li>
        Jackbox games also seem to use a middleware called <code>CRIWARE</code> which is very likely what they use to host their servers and make API calls so players can play via the internet using a four-letter code.
      </li>
  </ul>
</details>

<details>
  <summary><b>Jackbox Party Pack 1</b></summary>
  <br>
  <details>
  <summary>Drawful</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>FibbageXL</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Lie Swatter</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Word Spud</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>You don't know Jack</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
</details>
<details>
<summary><b>Jackbox Party Pack 2</b></summary>
  <br>
  <details>
  <summary>Bidiots</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Earwax</summary>
  <h2>Mod - Custom Audio Files</h2>
  <b>Step 1:</b>
  <p>Get the earwax directory from the user's game.</p>
  <blockquote><b>Note:</b> Jackbox games can be downloaded from Steam or downloaded separately so do not use a static path. Make sure to provide a window that allows the user to choose the folder where their game is located.</blockquote>
  <b>Step 2:</b>
  <p>Get the input audio files (.ogg) from the user's system.</p>
  <b>Step 3:</b>
  <ul>
  <li>
    Generate copies of the user-provided .ogg files with their file names changed to unique ID numbers between <code>20000</code> and <code>50000</code>. Place these new files under <code>../Earwax/content/EarwaxAudio/Audio</code>. Numbers outside of the given range are reserved by other audio files within the game and should be avoided to prevent crashes.
  </li>
  <li>
    The <code>.jet</code> file <u>must be prettified</u> in JSON format before appending any information to it or the entire file will be deleted during any attempts to edit it since it's minified on one line by default. There are plenty of functions in Python, JavaScript, etc. that can automate the prettification for you to make this step easier.
  </li>
  <li>
    Append the appropriate data for each new .ogg file to the <code>EarwaxAudio.jet</code> file inside the Spectrum folder. This is located one folder deep into the game's directory: <code>../Earwax/content/EarwaxAudio/Spectrum</code>
  </li>
  <li>
    Start the game and see if your new sounds worked. You can temporarily remove the game's sounds and only play your own by editing the <code>EarwaxAudio.jet</code> file and deleting any entries that aren't yours. Please note that you must leave at least 5 sounds per player in the <code>EarwaxAudio.jet</code> file or the game will crash.
  </li>
  </ul>
  <h2>Mod - Custom Voice Prompts</h2>
  <code>This is still being researched.</code>
  <br>
  <br>
  </details>
    
  * * *
  
  <details>
  <summary>Bomb Corp.</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Fibbage 2</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>QuiplashXL</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
</details>
<details>
<summary><b>Jackbox Party Pack 3</b></summary>
  <br>
  <details>
  <summary>Fakin' It</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Guesspionage</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Quiplash 2</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Tee K.O.</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Trivia Murder Party</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
</details>
<details>
<summary><b>Jackbox Party Pack 4</b></summary>
  <br>
  <details>
  <summary>Bracketeering</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Civic Doodle</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Fibbage 3</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Monster Seeking Monster</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Survive the Internet</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
</details>
<details>
<summary><b>Jackbox Party Pack 5</b></summary>
  <br>
  <details>
  <summary>Mad Verse City</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Patently Stupid</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Split the Room</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>You Don't Know Jack</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Zeeple Dome</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
</details>
<details>
<summary><b>Jackbox Party Pack 6</b></summary>
  <br>
  <details>
  <summary>Dictionarium</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Joke Boat</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Push the Button</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Role Models</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Trivia Murder Party 2</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
</details>
<details>
<summary><b>Jackbox Party Pack 7</b></summary>
  <br>
  <details>
  <summary>Blather Round</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Champ'd Up</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Devils and the Details</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Quiplash 3</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Talking Points</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
</details>
<details>
<summary><b>Jackbox Party Pack 8</b></summary>
  <br>
  <details>
  <summary>Drawful Animate</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Job Job</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Poll Mine</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>The Wheel of Enormous Proportions</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Weapons Drawn</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
</details>
<details>
<summary><b>Jackbox Party Pack 9</b></summary>
  <br>
  <details>
  <summary>Fibbage 4</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Junktopia</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Nonsensory</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Quixort</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Roomerang</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
</details>
<details>
<summary><b>Jackbox Party Pack 10</b></summary>
  <br>
  <details>
  <summary>Bidiots</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Bidiots</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Bidiots</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Bidiots</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
  <details>
  <summary>Bidiots</summary>
  Notes on how to mod this game go here
  </details>
    
  * * *
  
</details>
