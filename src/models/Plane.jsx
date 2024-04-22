import React, {useEffect, useRef} from 'react';
import planeScene from '../assets/3d/plane.glb';
import {useAnimations, useGLTF} from "@react-three/drei";

const Plane = ({isRotating, ...props}) => {
    const ref = useRef();

    return (
        <mesh {...props} ref={ref}>
            <primitive object={scene}/>
        </mesh>
    );
};

export default Plane;
