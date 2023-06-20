import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Model } from './Sitev5'
import {  Environment } from '@react-three/drei'
import { EffectComposer,BrightnessContrast, Bloom, Noise, Vignette,DepthOfField, } from '@react-three/postprocessing'




const root = ReactDOM.createRoot(document.querySelector('#root'))



root.render(
    <>
    <Canvas dpr={1} >
        <EffectComposer>
            <Bloom  intensity={0.4}  luminanceThreshold={0.0} luminanceSmoothing={1} height={300} />
            <Noise opacity={0.05} />
            <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={3} height={300}/>
            <Vignette eskil={false} offset={0.1} darkness={0.5} />
            <BrightnessContrast
    brightness={-0.01} // brightness. min: -1, max: 1
    contrast={0.1} // contrast: min -1, max: 1
  />    
        </EffectComposer>
          <Environment files={"./puresky.hdr"} background={true} blur={0.6}  />
          <Model  />
      </Canvas>
    </>
)