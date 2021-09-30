//DOORS


// Roble de Eslavonia

var viewer = OpenSeadragon({
    id: "RobleDeEslavonia",
    prefixUrl: "/openseadragon/images/",
    tileSources: {
    type: 'image',
    url:  '/assets/portfolio/doors/door1.webp'
    },
    degrees: 0,
    showNavigationControl: window.innerWidth > 768,
    showRotationControl: true,
    gestureSettingsTouch: {
    pinchRotate: true
},
visibilityRatio: 1.0,
constrainDuringPan: true,
     })

// Triángulo Circular

var viewer = OpenSeadragon({
    id: "TrianguloCircular",
    prefixUrl: "/openseadragon/images/",
    tileSources: {
    type: 'image',
    url:  '/assets/portfolio/doors/door2.webp'
    },
    degrees: 0,
    showNavigationControl: window.innerWidth > 768,
    showRotationControl: true,
    gestureSettingsTouch: {
    pinchRotate: true
},
visibilityRatio: 1.0,
constrainDuringPan: true,
     })


// Puerta #2

var viewer = OpenSeadragon({
    id: "Puerta2",
    prefixUrl: "/openseadragon/images/",
    tileSources: {
    type: 'image',
    url:  '/assets/portfolio/doors/door3.webp'
    },
    degrees: 90,
    showNavigationControl: window.innerWidth > 768,
    showRotationControl: true,
    gestureSettingsTouch: {
    pinchRotate: true
},
visibilityRatio: 1.0,
constrainDuringPan: true,
     })

// Puerta #1

var viewer = OpenSeadragon({
    id: "Puerta1",
    prefixUrl: "/openseadragon/images/",
    tileSources: {
    type: 'image',
    url:  '/assets/portfolio/doors/door4.webp'
    },
    degrees: 0,
    showNavigationControl: window.innerWidth > 768,
    showRotationControl: true,
    gestureSettingsTouch: {
    pinchRotate: true
},
visibilityRatio: 1.0,
constrainDuringPan: true,
     })