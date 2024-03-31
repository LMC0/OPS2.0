"use client";
import React, { useEffect, useRef, useState } from "react";

const Index = () => {
  const [canvasIndex, setCanvasIndex] = useState<number | null>(null);
  const [polygonPoints, setPolygonPoints] = useState<{ x: number; y: number; }[][]>([[], []]);
  const canvasRefs = [useRef<HTMLCanvasElement>(document.createElement('canvas')), useRef<HTMLCanvasElement>(document.createElement('canvas'))];
  const imageSrc = "/outside.jpg"; // 画像の相対パスを設定

  useEffect(() => {
    const loadImage = async () => {
      const image = new Image();
      image.src = imageSrc;
      await image.decode();
      canvasRefs.forEach((canvasRef) => {
        const ctx = canvasRef.current?.getContext("2d");
        if (ctx) {
          canvasRef.current!.width = Math.min(image.width, 300);
          canvasRef.current!.height = Math.min(image.height, 300);
          ctx.drawImage(image, 0, 0, canvasRef.current!.width, canvasRef.current!.height);
        }
      });
    };
    loadImage();
  }, [imageSrc, canvasRefs]);

  const drawPolygon = (ctx: CanvasRenderingContext2D, points: { x: number; y: number; }[]) => {
    ctx.strokeStyle = "#000000"; // 線の色を黒に設定
    ctx.beginPath();
    if (points.length > 0) {
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.closePath();
    }
    ctx.stroke();
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>, index: number) => {
    if (!canvasRefs[index].current) return;
    const rect = canvasRefs[index].current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newPolygonPoints = [...polygonPoints];
    newPolygonPoints[index].push({ x, y });
    setPolygonPoints(newPolygonPoints);
    redrawCanvas(index);
  };

  const redrawCanvas = (index: number) => {
    if (!canvasRefs[index].current) return;
    const ctx = canvasRefs[index].current.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    const image = new Image();
    image.src = imageSrc;
    image.onload = () => {
      ctx.drawImage(image, 0, 0, ctx.canvas.width, ctx.canvas.height);
      drawPolygon(ctx, polygonPoints[index]);
    };
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <button onClick={() => setCanvasIndex(0)}>Start Polygon 1</button>
        <canvas
          id="canvas1"
          ref={canvasRefs[0]}
          width={300}
          height={300}
          style={{ margin: 10, border: "1px solid black" }}
          onMouseDown={e => handleMouseDown(e, 0)}
        />
        <button onClick={() => setCanvasIndex(null)}>End</button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <button onClick={() => setCanvasIndex(1)}>Start Polygon 2</button>
        <canvas
          id="canvas2"
          ref={canvasRefs[1]}
          width={300}
          height={300}
          style={{ margin: 10, border: "1px solid black" }}
          onMouseDown={e => handleMouseDown(e, 1)}
        />
        <button onClick={() => setCanvasIndex(null)}>End</button>
      </div>
    </div>
  );
};

export default Index;
