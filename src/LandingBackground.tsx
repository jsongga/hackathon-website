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

  // gets viewport width
  const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  // gets viewport height
  const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  // if viewport width less than viewport height, then mobile
  const isMobile = width < height;

  useEffect(() => {
    if (!canvas || isMobile) return;
      const app = new Application({backgroundAlpha: 0, view: canvas, antialias: true, resolution: window.devicePixelRatio, resizeTo: window});

      let arc = new Graphics()

      let cursorCircle = new Graphics()
        .beginFill(0xFFFFFF)
        .drawPolygon([0, -10, 0, 10, 20, 0])

      const lineStyle: ILineStyleOptions = {
        color: 0xFFFFFF,
        width: 3,
        cap: LINE_CAP.ROUND,
        alignment: 1
      }

      const reposition = () => {
        let content = document.getElementById("center-image")!
        let container = document.getElementById("button-container")!.getBoundingClientRect()

        const radiusOffset = 15
        const xOffset = 20
        const yOffset = window.innerHeight/4

        const radius = container.height/2
        const midX = container.left - radius + radiusOffset - xOffset
        const midY = container.top + container.height/2

        arc.clear()
          .lineStyle(lineStyle)
          .arc(midX, midY, radius, -Math.PI/4, Math.PI/4)

        const [posX, posY] = calculateCircleCoords(midX, midY, radius, 0)
        cursorCircle.position.set(posX, posY)
      }

      const mouseMove = (e: MouseEvent) => {
        let container = document.getElementById("button-container")!.getBoundingClientRect()

        const radiusOffset = 15
        const xOffset = 20
        const yOffset = window.innerHeight/4

        const radius = container.height/2
        const midX = container.left - radius + radiusOffset - xOffset
        const midY = container.top + container.height/2

        const result = Math.asin((e.clientY-(container.top + container.height / 2))/container.width)

        if (!result) return
        const deg = Math.min(Math.max(result, -Math.PI/4), Math.PI/4);
        const [posX, posY] = calculateCircleCoords(midX, midY, radius, deg)
        cursorCircle.position.set(posX, posY)
        cursorCircle.rotation = deg;
      }

      let content = document.getElementById("center-image")!
      if (content) content.onload = reposition

      window.addEventListener('resize', reposition)

      window.addEventListener('mousemove', mouseMove)

      app.stage.addChild(arc, cursorCircle)
      

    return () => {
      
    // x.destroy();
      app.destroy(true, false)
      window.removeEventListener('resize', reposition)
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