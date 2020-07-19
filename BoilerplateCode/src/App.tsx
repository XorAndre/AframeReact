import React from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
//Componentes
import { Reset } from 'styled-reset'
import {
  Theme
} from './Components/Theme/Styles'
const App = () => {
  return (
    <React.Fragment>
      <Reset />
      <Theme>
        <Scene>
          <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>
          <Entity particle-system={{preset: 'snow'}}/>
          <Entity light={{type: 'point'}}/>
          <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
          <Entity text={{value: 'Texto Qualquer!'}}/>
        </Scene>
    </Theme>
  </React.Fragment>
  );
}

export default App;
