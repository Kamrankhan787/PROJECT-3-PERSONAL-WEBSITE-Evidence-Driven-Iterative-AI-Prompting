import React, { useState, useEffect, useRef } from 'react';
import { gameShowcaseData } from '../data/portfolio-data';

export default function GameShowcase() {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(12);
  const [isPlaying, setIsPlaying] = useState(false);

  // Simple interactive mini canvas simulation for the snake game
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const gridSize = 14;
    const tileCount = 20;
    canvas.width = gridSize * tileCount;
    canvas.height = gridSize * tileCount;

    let snake = [
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 },
    ];
    let food = { x: 15, y: 10 };
    let dx = 1;
    let dy = 0;
    let currentScore = 0;

    let intervalId = null;

    const draw = () => {
      // Background
      ctx.fillStyle = '#0a1120';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Grid lines (subtle)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      for (let i = 0; i <= tileCount; i++) {
        ctx.beginPath();
        ctx.moveTo(i * gridSize, 0);
        ctx.lineTo(i * gridSize, canvas.height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i * gridSize);
        ctx.lineTo(canvas.width, i * gridSize);
        ctx.stroke();
      }

      // Draw Food
      ctx.fillStyle = '#ef4444';
      ctx.shadowColor = '#ef4444';
      ctx.shadowBlur = 8;
      ctx.fillRect(food.x * gridSize + 2, food.y * gridSize + 2, gridSize - 4, gridSize - 4);
      ctx.shadowBlur = 0;

      // Draw Snake
      snake.forEach((part, index) => {
        ctx.fillStyle = index === 0 ? '#10b981' : '#34d399';
        ctx.shadowColor = index === 0 ? '#10b981' : 'transparent';
        ctx.shadowBlur = index === 0 ? 6 : 0;
        ctx.fillRect(part.x * gridSize + 1, part.y * gridSize + 1, gridSize - 2, gridSize - 2);
      });
      ctx.shadowBlur = 0;
    };

    const update = () => {
      if (!isPlaying) {
        // Simple auto-roam demonstration
        const head = { ...snake[0] };
        if (head.x < food.x) { dx = 1; dy = 0; }
        else if (head.x > food.x) { dx = -1; dy = 0; }
        else if (head.y < food.y) { dx = 0; dy = 1; }
        else if (head.y > food.y) { dx = 0; dy = -1; }
      }

      const head = { x: snake[0].x + dx, y: snake[0].y + dy };

      // Wrap boundaries
      if (head.x < 0) head.x = tileCount - 1;
      if (head.x >= tileCount) head.x = 0;
      if (head.y < 0) head.y = tileCount - 1;
      if (head.y >= tileCount) head.y = 0;

      snake.unshift(head);

      // Check food
      if (head.x === food.x && head.y === food.y) {
        currentScore += 1;
        setScore(currentScore);
        food = {
          x: Math.floor(Math.random() * tileCount),
          y: Math.floor(Math.random() * tileCount),
        };
      } else {
        snake.pop();
      }

      draw();
    };

    draw();
    intervalId = setInterval(update, 120);

    return () => clearInterval(intervalId);
  }, [isPlaying]);

  return (
    <section id="game" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Interactive Engineering Evidence</div>
          <h2 className="section-title">Web Game <span>Showcase</span></h2>
          <p className="section-subtitle">
            Demonstrating capability in designing real-time interactive games on the modern web using canvas loops and collision math.
          </p>
        </div>

        <div className="game-showcase-card">
          <div className="game-info">
            <h3>{gameShowcaseData.title}</h3>
            <div className="game-sub">{gameShowcaseData.subtitle}</div>

            <ul className="game-features-list">
              {gameShowcaseData.features.map((feat, idx) => (
                <li key={idx} className="game-feature-item">
                  <span className="game-feature-check">✓</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="game-attribution-box">
              <strong>Transparent Attribution Note:</strong> {gameShowcaseData.attributionNotice}
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href={gameShowcaseData.referenceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Live Game ↗
              </a>
              <button
                className="btn btn-secondary"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? 'Pause Demo' : 'Simulate Game Loop ▶'}
              </button>
            </div>
          </div>

          {/* Interactive Canvas Simulation Board */}
          <div className="game-canvas-container">
            <div className="game-canvas-header">
              <span style={{ fontSize: '0.82rem', color: '#10b981', fontWeight: 'bold' }}>
                CANVAS GAME LOOP SIMULATION
              </span>
              <span style={{ fontSize: '0.82rem', color: '#f8fafc' }}>
                Score: <strong style={{ color: '#38bdf8' }}>{score}</strong> | High: {highScore}
              </span>
            </div>

            <canvas
              ref={canvasRef}
              style={{
                borderRadius: '8px',
                border: '1px solid #1e293b',
                background: '#0a1120',
                display: 'block',
              }}
            />

            <div style={{ marginTop: '12px', fontSize: '0.75rem', color: '#64748b', textAlign: 'center' }}>
              Real-time canvas render demonstrating 2D array state &amp; coordinate updates
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
