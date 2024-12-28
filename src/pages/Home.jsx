'use client'
import { useState, Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";

import Loader from "../components/Loader";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";
import Island from "../models/Island";

import { soundoff, soundon } from "../assets/icons";

const Home = () => {
  const [audio, setAudio] = useState(null);
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setisPlayingMusic] = useState(false);

  useEffect(() => {
    const loadAudio = async () => {
      try {
        const sakuraModule = await import("../assets/sakura.mp3");
        const audio = new Audio(sakuraModule.default);
        audio.volume = 0.4;
        audio.loop = true;
        setAudio(audio);
      } catch (error) {
        console.error('Error loading audio:', error);
      }
    };

    loadAudio();

    return () => {
      if (audio) {
        audio.pause();
        audio.src = '';
        setAudio(null);
      }
    };
  }, [])

  useEffect(() => {
    if (audio && isPlayingMusic) {
      audio.play();
    } else if (audio) {
      audio.pause();
    }
  }, [audio, isPlayingMusic]);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 3.7, 0];

    if (window.innerWidth < 768 && window.innerWidth > 501) {
      screenScale = [0.8, 0.8, 0.8];
    }else if (window.innerWidth < 500){
      screenScale = [0.6, 0.6, 0.6];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale;
    let screenPosition;

    if (window.innerWidth < 768 && window.innerWidth > 501) {
      screenScale = [1.4, 1.4, 1.4];
      screenPosition = [0, -1.5, -1];
    }else if (window.innerWidth < 500){
      screenScale = [1, 1, 1];
      screenPosition = [0, -1.5, -2];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-[100vh] relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        } `}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            rotation={islandRotation}
            position={islandPosition}
            scale={islandScale}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setisPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  );
};

export default Home;
