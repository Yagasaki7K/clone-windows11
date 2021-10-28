// menuIcons
import searchIcon from '../images-src/windows-icon/search.svg';
import cromeIcon from '../images-src/windows-icon/cromeIcon.png';
import mailIcon from '../images-src/windows-icon/mailIcon.png';
import explorerIcon from '../images-src/windows-icon/explorerIcon.png';
import msedgeIcon from '../images-src/windows-icon/msedgeIcon.png';
import msstoreIcon from '../images-src/windows-icon/storeIcon.png';
import skypeicon from '../images-src/windows-icon/skypeicon.png';
import msoffice from '../images-src/windows-icon/msoffice.png';

// Pinned Items
import clendar from '../images-src/windows-icon/calender.png';
import outlook from '../images-src/windows-icon/Outlook.png';
import phone from '../images-src/windows-icon/phoneIcon.png';
import todoIcon from '../images-src/windows-icon/todoIcon.png';
import cortanaIcon from '../images-src/windows-icon/cortanaIcon.png';
import spotify from '../images-src/windows-icon/spotify.png';
import pinterest from '../images-src/windows-icon/pinterest.png';
import picsart from '../images-src/windows-icon/picsart.png';
import tiktok from '../images-src/windows-icon/tiktok.png';
import netflix from '../images-src/windows-icon/netflix.png';
import opera from '../images-src/windows-icon/opera.png';
import photoshop from '../images-src/windows-icon/photoshop.webp';
import vscodeIcon from '../images-src/windows-icon/vscodeIcon.png';
import nodejsIcon from '../images-src/windows-icon/nodejsIcon.png';
import ubuntu from '../images-src/windows-icon/ubuntu.png';
import weather from '../images-src/windows-icon/weather.png';
import itunes from '../images-src/windows-icon/itunes.png';
import camera from '../images-src/windows-icon/camera.png';

// Recomended Icons
import msOnedrive from '../images-src/windows-icon/msOnedrive.png';
import msword from '../images-src/windows-icon/msword.png';
import settingIcon from '../images-src/windows-icon/settingIcon.png';
import powerpoint from '../images-src/windows-icon/powerpoint.png';
import gethelp from '../images-src/windows-icon/gethelp.png';

// statusIcon
import wifiIcon from '../images-src/windows-icon/wifi.svg';
import volumeIcon from '../images-src/windows-icon/volume.svg';
import drpdwnIcon from '../images-src/windows-icon/expand-arrow.svg';

export const IconMenuAPI = [
    { mIcon: searchIcon },
    { mIcon: explorerIcon },
    { mIcon: mailIcon},
    { mIcon: msedgeIcon },
    { mIcon: msstoreIcon },
    { mIcon: skypeicon },
    { mIcon: msoffice },
    { mIcon: cromeIcon }
];

export const StatusIconAPI = [
    { stIcon: drpdwnIcon },{ stIcon: wifiIcon },{ stIcon: volumeIcon } 
];

export const PinAPIOne = [
    { pIcon: clendar, text: "Calender" },{ pIcon: outlook, text: "Outlook" },{ pIcon: phone, text: "Your Phone" },
    { pIcon: todoIcon, text: "Todo" },{ pIcon: cortanaIcon, text: "Cortana" }, { pIcon: camera, text: "Camera" }
];

export const PinAPITwo = [
    { pIcon: spotify, text: "Spotify" },{ pIcon: pinterest, text: "Pinterest" },{ pIcon: picsart, text: "PicsArt" },
    { pIcon: netflix, text: "Netflix" },{ pIcon: tiktok, text: "TikTok" },{ pIcon: itunes, text: "ITunes" }
];

export const PinAPIThree = [
    { pIcon: opera, text: "Opera" },{ pIcon: photoshop, text: "Photoshop" },{ pIcon: vscodeIcon, text: "VSCode" },
    { pIcon: nodejsIcon, text: "Node JS" },{ pIcon: ubuntu, text: "Ubuntu" },{ pIcon: weather, text: "Weather" }
];

export const RecAPIOne = [
    { rIcon:  msOnedrive, text:"Onedrive - UptoDate YourSelf Always"},{ rIcon:  msword, text: "MS Word - Final project"}
];

export const RecAPITwo = [
    { rIcon:  settingIcon, text: "Settings"},{ rIcon:  powerpoint, text: "PowerPoint - JS Stack YouTube Work"}
];

export const RecAPIThree = [
    { rIcon: gethelp, text: "Get Hepl or Send Feedback - Regarding Issues" }
];