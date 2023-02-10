import { useEffect, useState } from "react";
import { AnimationStyle } from "./style";

export const AnimationFooter = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const start = performance.now();

    const animationId = (time: number) => {
      const t = (time - start) / 1000;

      const angleX = Math.cos((60 * Math.PI) / 180);
      const angleY = Math.sin((60 * Math.PI) / 180);

      const v0x = 25 * angleX;
      const v0y = 25 * angleY;
      const g = 9.8;

      const sfx = x + v0x * t;
      const sfy = 0 + v0y * t - (g / 2) * t ** 2;

      console.log("funcionando");

      setX(sfx);
      setY(sfy);

      if (t > 2 && sfy <= 0) {
        const a: number = Number(animationId);
        cancelAnimationFrame(a);
        if (active < 3) {
          setActive((n) => n + 1);
        } else {
          return;
        }
      } else {
        requestAnimationFrame(animationId);
      }
    };

    requestAnimationFrame(animationId);
  }, [active]);

  return (
    <AnimationStyle x={x} y={y}>
      <div className="container_blue">
        <p>1</p>
        <div className="portal_blue"></div>
      </div>
      <div className="container_orange">
        <p>0</p>
        <div className="portal_orange"></div>
      </div>
    </AnimationStyle>
  );
};
