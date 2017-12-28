# Web MIDI to Philips Hue bridge

Simple experiment to learn about Web MIDI and the Philips Hue API.

**Required hardware:**

* Philips Hue
* Generic MIDI controller

A [browser that supports Web MIDI](https://caniuse.com/#search=web%20midi) must be used.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)
to make use of ES6 features and a quick web server.

Push the button on the Hue hub before loading this page.

To get started

```bash
$ yarn
$ yarn start
```

Then
* A user will be registered on the hub, check the console for info.
* If a hardware MIDI device is connected, notes or knob changes will be sent to the light with the 
ID set as `light` (9). 

Permissions to connect to MIDI devices may need to be granted.

All lights found on the hub will be logged to the browser console. Change the `light` constant in 
`src/midi-hue.js` to something suitable.

