import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const ClubroomLocator=()=>{
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/WebGL_Build.loader.js",
    dataUrl: "Build/WebGL_Build.data",
    frameworkUrl: "Build/WebGL_Build.framework.js",
    codeUrl: "Build/WebGL_Build.wasm",
  });
    return (
      <div className='Unity_Back'>
        <h1>게임방법: 화살표 조작</h1>
        <Unity style={{
            
            width:'65%',
            height:'65%',
            
            alignContent:'center'

        }} unityProvider={unityProvider} />
    </div>
    );
  };
  
  export default ClubroomLocator;