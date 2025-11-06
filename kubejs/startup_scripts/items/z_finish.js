const time = Date.now() - global.__loadStartTime
console.info('[KubeJS] Startup scripts loaded in ' + time + 'ms')

Platform.getInfo('kubejs').name = 'Mechanized Depths'
Platform.getInfo('custommachinery').name = 'Mechanized Depths'
Platform.getInfo('rt').name = 'Mechanized Depths'

