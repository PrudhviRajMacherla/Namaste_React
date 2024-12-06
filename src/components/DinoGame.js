import React, { useEffect, useRef } from "react";

const DinoGame = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let player = { x: 50, y: 200, width: 50, height: 50, velocityY: 0 };
    let isJumping = false;
    let obstacles = [];
    let score = 0;

    const gravity = 1;
    const jumpPower = -15;

    const jump = () => {
      if (!isJumping) {
        player.velocityY = jumpPower;
        isJumping = true;
      }
    };

    const createObstacle = () => {
      obstacles.push({ x: canvas.width, y: 200, width: 30, height: 50 });
    };

    const gameLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      player.velocityY += gravity;
      player.y += player.velocityY;
      if (player.y >= 200) {
        player.y = 200;
        isJumping = false;
      }
      ctx.fillStyle = "black";
      ctx.fillRect(player.x, player.y, player.width, player.height);

      obstacles.forEach((obstacle, index) => {
        obstacle.x -= 5;
        ctx.fillStyle = "red";
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);

        if (
          player.x < obstacle.x + obstacle.width &&
          player.x + player.width > obstacle.x &&
          player.y < obstacle.y + obstacle.height &&
          player.height + player.y > obstacle.y
        ) {
          alert(`Game Over! Your Score: ${score}`);
          document.removeEventListener("keydown", handleKeyDown);
          clearInterval(gameInterval);
          clearInterval(obstacleInterval);
        }

        if (obstacle.x + obstacle.width < 0) {
          obstacles.splice(index, 1);
          score += 1;
        }
      });

      ctx.fillStyle = "black";
      ctx.font = "20px Arial";
      ctx.fillText(`Score: ${score}`, 10, 20);
    };

    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        jump();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    const gameInterval = setInterval(gameLoop, 20);
    const obstacleInterval = setInterval(createObstacle, 2000);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      clearInterval(gameInterval);
      clearInterval(obstacleInterval);
    };
  }, []);

  return <canvas ref={canvasRef} width="800" height="300" style={{ border: "1px solid black" }} />;
};

export default DinoGame;
