## How to Use
First, make sure you have [Node](https://nodejs.org/en/download) and [Python 3](https://www.python.org/downloads/) or higher installed.
1. Download and extract the .zip of this project.
2. Open a terminal (cmd, powershell, git bash, etc.) and `cd` two folders deep into the extracted zip folder (you should be in `jackboxmodpack-main\jackboxmodpack-main`)
3. Run the following commands in order:
- `npm install`
  - this installs packages, dependencies, and other cool shit
- `npm run build`
  - this builds a condensed version of the app
- `npx electron-packager . jackboxmodpack --platform=win32 --arch=x64`
  - this bigass command builds an `.exe` that you can double click to run. I know, I really thought of everything huh.
  - **Note**: this command may take a couple minutes to finish as it's building a giant Windows compatible program for your convenience and we all know how lovely Windows is. If you think it's stuck it's not. Let it cook.
4. Next, `cd` into the newly built folder `jackboxmodpack-win32-x64`
5. Establish 2 servers in 2 separate terminals:
  - Open two command prompts or powershells and `cd` into `jackboxmodpack-main\jackboxmodpack-main` on both of your terminals.
  - Run `serve -s build` on the first one.
  - Run `python app.py` on the second one.
    - Running both of these servers is meant to be automatically taken care of when you simply double click the .exe but imma automate this shit later I need sleep and nourishment and like other human shit rn.
6. Double click that `.exe` biotch!!
