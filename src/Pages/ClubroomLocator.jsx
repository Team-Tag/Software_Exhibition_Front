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
  // const sendMessage("Cube", "changeRotate")

  // useEffect(() => {
  //   // 이 부분은 컴포넌트가 마운트될 때 실행될 로직
  //   // 예를 들어 데이터 로드 또는 이벤트 리스너 추가 등의 작업을 수행할 수 있습니다

  //   return () => {
  //     // 컴포넌트가 언마운트될 때 실행되는 함수
  //     // 이 부분에 특정 함수를 호출하거나 정리 작업을 수행할 수 있습니다
  //         sendMessage("MenuCanvas", "Menu.Exit");
  //         console.log("sendMessage실행")
  //   };
  // }, [sendMessage]);
  // const handleClickE=()=>{
  //   unityContext.send("MenuCanvas", "Menu.Exit");
  //   console.log("send")

  // }
  return (
    <>
    {/* <button onClick={()=>handleClickE}>dddd</button> */}
    <div className="Unity_Back">
      <p>제빌</p>
      <Unity
        unityContext={unityContext}
        style={{
          width: "1440px",
          height: "570px",
          alignContent: "center",
          alignItems: "center",
        }}
        unityProvider={unityProvider}
      />
    </div></>
    
    
    
  );
};

export default ClubroomLocator;

