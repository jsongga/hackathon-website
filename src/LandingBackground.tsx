import {Application, Graphics} from "pixi.js";
import {useEffect, useState} from "react";
import styled from "styled-components";

export default function LandingBackground() {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvas) return;
  // if (!canvasContainer || !canvas || props.mazeString == undefined) return;

  // const app = new Application({backgroundColor: 0x878786, resizeTo: canvasContainer, antialias: true, backgroundAlpha: 0.3});
    const app = new Application({antialias: true, backgroundAlpha: 0.3, view: canvas, background: "transparent", autoDensity: true, resizeTo: window});

    let arc = new Graphics()

    const content = document.getElementById("center-image")
    if (content) content.onload = () => {
      arc.lineStyle(15, 0xffffff)
        // .arcTo(content.offsetLeft + content.offsetWidth, content.offsetTop, content.offsetLeft + content.offsetWidth, content.offsetTop + content.offsetHeight, 100)
        .arc(content.offsetLeft + content.offsetWidth/2, content.offsetTop + content.offsetHeight/2, content.offsetWidth, -Math.PI/3, Math.PI/3)
    }

    window.onresize = () => {
      console.log("resize")
      if (!content) return
      // app.stage.addChild(arc).lineStyle(15, 0xffffff)
      arc.clear()
        .lineStyle(15, 0xffffff)
        // .arcTo(content.offsetLeft + content.offsetWidth, content.offsetTop, content.offsetLeft + content.offsetWidth, content.offsetTop + content.offsetHeight, 100)
        .arc(content.offsetLeft + content.offsetWidth / 2, content.offsetTop + content.offsetHeight / 2, content.offsetWidth, -Math.PI / 3, Math.PI / 3)
    }

    window.onmousemove = (e) => {

    }

    app.stage.addChild(arc)


    return () => {
    // x.destroy();
    app.destroy(false)

  }

  }, [canvas])

  return <BackgroundCanvas ref={node => setCanvas(node)}/>
}

const BackgroundCanvas = styled.canvas`
  position: absolute;
  width: 100vw;
  height: 100vh;
`