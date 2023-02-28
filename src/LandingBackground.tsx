import {Application, Graphics, ILineStyleOptions, LINE_CAP} from "pixi.js";
import {useEffect, useState} from "react";
import styled from "styled-components";

export default function LandingBackground() {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);

  const calculateCircleCoords = (x: number, y: number, radius: number, angle: number) => {
    return [
      radius * Math.cos(angle) + x,
      radius * Math.sin(angle) + y
    ]
  }

  useEffect(() => {
    if (!canvas) return;

    const app = new Application({backgroundAlpha: 0, view: canvas, resolution: window.devicePixelRatio, resizeTo: window});

    let arc = new Graphics()

    // let cursorCircle = new Graphics()
    //   .beginFill(0xFFFFFF)
    //   .drawCircle(0, 0, 10)

    let cursorCircle = new Graphics()
      .beginFill(0xFFFFFF)
      .drawPolygon([0, -10, 0, 10, 20, 0])

    const lineStyle: ILineStyleOptions = {
      color: 0xFFFFFF,
      width: 3,
      cap: LINE_CAP.ROUND,
      alignment: 1
    }

    const radiusOffset = 75

    const content = document.getElementById("center-image")
    if (content) content.onload = () => {
      arc.lineStyle(lineStyle)
        // .arcTo(content.offsetLeft + content.offsetWidth, content.offsetTop, content.offsetLeft + content.offsetWidth, content.offsetTop + content.offsetHeight, 100)
        .arc(content.offsetLeft + content.offsetWidth/2, content.offsetTop + content.offsetHeight/2, content.offsetWidth/2 + radiusOffset, -Math.PI/4, Math.PI/4)

      const [posX, posY] = calculateCircleCoords(content.offsetLeft + content.offsetWidth/2, content.offsetTop + content.offsetHeight/2, content.offsetWidth/2 + radiusOffset, 0)
      cursorCircle.position.set(posX, posY)
      console.log(posX, posY)
    }

    function resize() {
      console.log("resize")
      if (!content) return
      // app.stage.addChild(arc).lineStyle(15, 0xffffff)
      arc.clear()
        .lineStyle(lineStyle)
        // .arcTo(content.offsetLeft + content.offsetWidth, content.offsetTop, content.offsetLeft + content.offsetWidth, content.offsetTop + content.offsetHeight, 100)
        .arc(content.offsetLeft + content.offsetWidth / 2, content.offsetTop + content.offsetHeight / 2, content.offsetWidth/2 + radiusOffset, -Math.PI/4, Math.PI/4)
    }
    function mouseMove(e: { clientY: number; }) {
      if (!content) return

      const result = Math.asin((e.clientY-(content.offsetTop + content.offsetHeight / 2))/content.offsetWidth)

      if (!result) return
      const deg = Math.min(Math.max(result, -Math.PI/4), Math.PI/4);
      const [posX, posY] = calculateCircleCoords(content.offsetLeft + content.offsetWidth/2, content.offsetTop + content.offsetHeight/2, content.offsetWidth/2 + radiusOffset, deg)
      cursorCircle.position.set(posX, posY)
      cursorCircle.rotation = deg;
    }

    window.addEventListener('resize', resize)

    window.addEventListener('mousemove', mouseMove)

    app.stage.addChild(arc, cursorCircle)


    return () => {
    // x.destroy();
      app.destroy(true, false)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', mouseMove)

    }

  }, [canvas])

  return <BackgroundCanvas ref={node => setCanvas(node)}/>
}

const BackgroundCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`