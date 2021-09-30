var viewer = OpenSeadragon({
    id: "Mural1",
    prefixUrl: "/openseadragon/images/",
    tileSources: {
    type: 'image',
    url:  '/assets/portfolio/mural/mural1.webp', 
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

