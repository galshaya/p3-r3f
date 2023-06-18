import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Model } from './Model'
import {  Environment, Sky } from '@react-three/drei'
import { EffectComposer, ToneMapping } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'



const root = ReactDOM.createRoot(document.querySelector('#root'))



root.render(
      <Canvas dpr={1}>
          <Environment files={"./puresky.hdr"} background={true} blur={0.6}  />
          {/* <Sky sunPosition={[100,10,10]}/> */}
          <Model  />
      </Canvas>
)