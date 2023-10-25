import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import '../Styles/ClubroomLocator.css'
const ClubroomLocator = () => {
  const { unityContext, unityProvider } = useUnityContext({
    loaderUrl: "Build/Build_Unity_WebGL.loader.js",
    dataUrl: "Build/Build_Unity_WebGL.data",
    frameworkUrl: "Build/Build_Unity_WebGL.framework.js",
    codeUrl: "Build/Build_Unity_WebGL.wasm",
  });
  // useEffect(() => {
  //   // Unity WebGL 게임이 언마운트될 때 실행할 종료 코드
  //   return () => {
  //     if (unityContext && unityContext.Quit) {
  //       unityContext.Quit().then(() => {
  //         console.log("Unity WebGL game has been successfully quit.");
  //       });
  //     }
  //     else{
  //       console.log("error!!!!!!!!!!!!!!!");
  //     }
  //   };
  // }, [unityContext]);

  return (
    <div className="Unity_Back">
      <h1>게임방법: 화살표 조작</h1>
      <Unity
        unityContext={unityContext}
        style={{
          width: "60%",
          height: "60%",
          alignContent: "center",
          alignItems: "center",
        }}
        unityProvider={unityProvider}
      />
    </div>
  );
};

export default ClubroomLocator;

