import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import '../Styles/ClubroomLocator.css';
const ClubroomLocator = () => {
  const {unityContext, unityProvider,loadingProgression,isLoaded} = useUnityContext({
    loaderUrl: "Build/1030_Build_Unity_WebGL.loader.js",
    dataUrl: "Build/1030_Build_Unity_WebGL.data",
    frameworkUrl: "Build/1030_Build_Unity_WebGL.framework.js",
    codeUrl: "Build/1030_Build_Unity_WebGL.wasm",
  });
  return (
    <>
    <div className="Unity_Back">
      {!isLoaded && (
        <p className="loadingFont">게임을 로딩중입니다... {Math.round(loadingProgression * 100)}%
          <p className="loadingFont">동아리방을 찾아보세요!!</p>
        </p>
      )}
      {isLoaded &&(
        <div className="gameFont">
          ⭐게임 종료 후 다른 페이지로 넘어가세요⭐
        </div>
      )}
      <Unity unityProvider={unityProvider} 
      unityContext={unityContext}

        style={{ visibility: isLoaded ? "visible" : "hidden" ,
        width: "80%",
        height: "75vh",
        alignContent: "center",
        alignItems: "center",}}
      />
    </div>
    </>
  );
};

export default ClubroomLocator;
