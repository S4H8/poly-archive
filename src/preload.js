const { ipcRenderer } = require('electron');
const ipc = ipcRenderer;

document.getElementById("closeBtn").addEventListener('click', () => {
    ipc.send('closeApp');
});
