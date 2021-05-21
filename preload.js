const { ipcRenderer, contextBridge} = require('electron')
const os = require('os');

contextBridge.exposeInMainWorld('services', {
    memoryApi: {
        getFreeMemory(){
            const KiB = os.freemem()/1024;
            const MiB = KiB/1024;
            return Math.ceil(MiB);
        },

        getTotalMemory(){
            const KiB = os.totalmem()/1024;
            const MiB = KiB/1024;
            return Math.ceil(MiB);
        }
    }
});