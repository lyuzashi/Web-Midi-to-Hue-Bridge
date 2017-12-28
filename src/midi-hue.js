import Hue, { HueApi, lightState } from 'node-hue-api';

const light = 9;

let setBrightness = (level) => {}

Hue.nupnpSearch().then(bridges => {
  bridges.forEach(bridge => {
    const host = bridge.ipaddress;
    console.log(`Found Hue Hub at ${host}`);
    (new HueApi(host)).registerUser(host)
      .then(username => {
        console.log(`Username: ${username}`);
        const hue = new HueApi(host, username);
        hue.lights().then(`All lights found`, console.log);
        hue.setLightState(light, lightState.create().turnOn().transitionInstant().white(154, 0).brightness(100))
        setBrightness = (level) => {
          hue.setLightState(light, lightState.create().turnOn().transitionInstant().white(154, 0).brightness(level))
        }
      })
      .catch(({ message, type }) => {
        if (type === 101) return console.log(`Press link button`, message, `and reload page.`);
        return console.log(message);
      });
  })
});

navigator.requestMIDIAccess()
  .then(midi => {
    for (let input of midi.inputs.values()) {
      input.onmidimessage = event => {
        console.log(`MIDI input event`, event.data[1], event.data[2]);
        const value = event.data[2];
        const percent = value / 1.27;
        setBrightness(percent);
      }
    }
  })
  .catch(console.warn);
