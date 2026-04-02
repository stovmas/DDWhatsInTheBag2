import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { scenarios, calculatePersonality, communityData, personalityTypes, CATEGORIES } from './gameData';
import './App.css';

// ─── Screens ───
const SCREEN = {
  LANDING: 'landing',
  GAME: 'game',
  REVEAL: 'reveal',
  RESULTS: 'results',
};

// ─── DoorDash-style bag icon ───
function BagIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect x="6" y="14" width="28" height="22" rx="4" fill="#FF3008" />
      <path d="M14 14V10a6 6 0 0 1 12 0v4" stroke="#FF3008" strokeWidth="3" fill="none" />
      <rect x="16" y="20" width="8" height="2" rx="1" fill="white" />
      <rect x="19" y="17" width="2" height="8" rx="1" fill="white" />
    </svg>
  );
}

// ─── Progress bar (DoorDash delivery style) ───
function ProgressBar({ current, total }) {
  const pct = ((current + 1) / total) * 100;
  return (
    <div className="progress-container">
      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>
      <div className="progress-dots">
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} className={`progress-dot ${i <= current ? 'active' : ''}`}>
            {i < current ? '✓' : i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Item Card ───
function ItemCard({ item, selected, onToggle, disabled }) {
  const isSelected = selected;
  return (
    <motion.button
      className={`item-card ${isSelected ? 'selected' : ''} ${disabled && !isSelected ? 'disabled' : ''}`}
      onClick={() => onToggle(item)}
      whileHover={!disabled || isSelected ? { scale: 1.03 } : {}}
      whileTap={!disabled || isSelected ? { scale: 0.97 } : {}}
      layout
    >
      <span className="item-emoji">{item.emoji}</span>
      <span className="item-name">{item.name}</span>
      <span className={`item-badge ${item.category}`}>{item.category}</span>
      {isSelected && (
        <motion.div
          className="check-mark"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        >
          ✓
        </motion.div>
      )}
    </motion.button>
  );
}

// ─── Landing Screen ───
function LandingScreen({ onStart }) {
  return (
    <motion.div
      className="screen landing"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -30 }}
    >
      <div className="landing-content">
        <motion.div
          className="landing-bag"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <BagIcon size={80} />
        </motion.div>
        <h1 className="landing-title">
          What's In <span className="accent">The Bag</span>?
        </h1>
        <p className="landing-subtitle">
          5 scenarios. 3 picks each. We'll reveal your DoorDash ordering personality.
        </p>
        <motion.button
          className="btn-primary"
          onClick={onStart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Build My Bag →
        </motion.button>
        <p className="landing-hint">Takes about 2 minutes</p>
      </div>
      <div className="landing-floating-emojis">
        {['🍕', '🍺', '🧀', '🍦', '🌮', '🍣', '🎂', '🍔', '🥂'].map((e, i) => (
          <motion.span
            key={i}
            className="floating-emoji"
            style={{
              left: `${10 + (i * 10)}%`,
              top: `${20 + ((i * 17) % 60)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, i % 2 === 0 ? 10 : -10, 0],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 3 + (i * 0.3),
              repeat: Infinity,
              delay: i * 0.4,
            }}
          >
            {e}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Game Screen ───
function GameScreen({ onComplete }) {
  const [round, setRound] = useState(0);
  const [selections, setSelections] = useState([]); // per-round selections
  const [allSelections, setAllSelections] = useState([]); // all items across rounds

  const scenario = scenarios[round];
  const maxPicks = 3;

  const toggleItem = useCallback((item) => {
    setSelections(prev => {
      if (prev.find(s => s.id === item.id)) {
        return prev.filter(s => s.id !== item.id);
      }
      if (prev.length >= maxPicks) return prev;
      return [...prev, item];
    });
  }, []);

  const handleNext = () => {
    const newAll = [...allSelections, ...selections];
    if (round < scenarios.length - 1) {
      setAllSelections(newAll);
      setSelections([]);
      setRound(r => r + 1);
    } else {
      onComplete(newAll);
    }
  };

  return (
    <motion.div
      className="screen game"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ProgressBar current={round} total={scenarios.length} />

      <AnimatePresence mode="wait">
        <motion.div
          key={scenario.id}
          className="scenario-container"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.35 }}
        >
          <div className="scenario-header">
            <span className="scenario-emoji">{scenario.emoji}</span>
            <h2 className="scenario-title">{scenario.situation}</h2>
            <p className="scenario-subtitle">{scenario.subtitle}</p>
            <p className="pick-counter">
              <BagIcon size={20} />
              <span>{selections.length} / {maxPicks} in the bag</span>
            </p>
          </div>

          <div className="items-grid">
            {scenario.items.map(item => (
              <ItemCard
                key={item.id}
                item={item}
                selected={!!selections.find(s => s.id === item.id)}
                onToggle={toggleItem}
                disabled={selections.length >= maxPicks}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <motion.button
        className={`btn-primary btn-next ${selections.length === maxPicks ? 'ready' : ''}`}
        onClick={handleNext}
        disabled={selections.length < maxPicks}
        whileHover={selections.length === maxPicks ? { scale: 1.03 } : {}}
        whileTap={selections.length === maxPicks ? { scale: 0.97 } : {}}
      >
        {round < scenarios.length - 1 ? 'Next Scenario →' : 'Reveal My Type! 🎉'}
      </motion.button>
    </motion.div>
  );
}

// ─── Bag Reveal Animation ───
function RevealScreen({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 2800);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <motion.div
      className="screen reveal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="reveal-bag"
        animate={{
          scale: [1, 1.2, 1, 1.15, 1],
          rotate: [0, -5, 5, -3, 0],
        }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <BagIcon size={120} />
      </motion.div>
      <motion.h2
        className="reveal-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Peeking inside your bag...
      </motion.h2>
      <div className="reveal-dots">
        {[0, 1, 2].map(i => (
          <motion.span
            key={i}
            className="dot"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ─── Score Bar ───
function ScoreBar({ label, emoji, value, max, color }) {
  const pct = max > 0 ? (value / max) * 100 : 0;
  return (
    <div className="score-row">
      <span className="score-label">{emoji} {label}</span>
      <div className="score-track">
        <motion.div
          className="score-fill"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>
      <span className="score-value">{value}</span>
    </div>
  );
}

// ─── Results Screen ───
function ResultsScreen({ allSelections, onRestart }) {
  const result = calculatePersonality(allSelections);
  const { primary, secondary, scores } = result;
  const maxScore = Math.max(...Object.values(scores), 1);

  useEffect(() => {
    // Fire confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF3008', '#FF6B35', '#FFB347', '#FF006E', '#9B5DE5'],
    });
    const t = setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FF3008', '#FF6B35'],
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FF3008', '#FF6B35'],
      });
    }, 600);
    return () => clearTimeout(t);
  }, []);

  const scoreEntries = [
    { key: CATEGORIES.COMFORT, label: 'Comfort', emoji: '🛋️', color: '#FF6B35' },
    { key: CATEGORIES.ADVENTUROUS, label: 'Adventurous', emoji: '🌶️', color: '#E63946' },
    { key: CATEGORIES.PRACTICAL, label: 'Practical', emoji: '🧠', color: '#457B9D' },
    { key: CATEGORIES.BOUGIE, label: 'Bougie', emoji: '✨', color: '#9B5DE5' },
    { key: CATEGORIES.SOCIAL, label: 'Social', emoji: '🎊', color: '#FF006E' },
    { key: CATEGORIES.HEALTH, label: 'Health', emoji: '🥑', color: '#06D6A0' },
  ];

  // Count what % of community matched
  const matchCount = allSelections.reduce((count, sel) => {
    const cd = communityData.find(c => {
      const scenario = scenarios.find(s => s.items.some(i => i.id === sel.id));
      return scenario && c.scenarioId === scenario.id;
    });
    if (cd && cd.topPicks.includes(sel.name)) return count + 1;
    return count;
  }, 0);
  const matchPct = Math.round((matchCount / allSelections.length) * 100);

  return (
    <motion.div
      className="screen results"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="results-card">
        <motion.div
          className="result-type-header"
          style={{ background: `linear-gradient(135deg, ${primary.color}22, ${primary.color}44)` }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
        >
          <span className="result-emoji">{primary.emoji}</span>
          <h1 className="result-title">{primary.title}</h1>
          <span className="result-badge" style={{ background: primary.color }}>
            {primary.badge}
          </span>
        </motion.div>

        <motion.p
          className="result-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {primary.description}
        </motion.p>

        <motion.div
          className="result-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="stat">
            <span className="stat-label">Spirit Animal</span>
            <span className="stat-value">{primary.stats.spirit}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Peak Order Time</span>
            <span className="stat-value">{primary.stats.avgOrderTime}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Go-To Pick</span>
            <span className="stat-value">{primary.stats.topItem}</span>
          </div>
        </motion.div>

        <motion.div
          className="result-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="secondary-label">With a hint of...</p>
          <span className="secondary-type">
            {secondary.emoji} {secondary.title}
          </span>
        </motion.div>

        <motion.div
          className="score-breakdown"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h3>Your Ordering DNA</h3>
          {scoreEntries.map(({ key, label, emoji, color }) => (
            <ScoreBar
              key={key}
              label={label}
              emoji={emoji}
              value={scores[key]}
              max={maxScore}
              color={color}
            />
          ))}
        </motion.div>

        <motion.div
          className="community-compare"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <h3>🛍️ How Others Built Their Bag</h3>
          <div className="community-match">
            <div className="match-ring" style={{ background: `conic-gradient(#FF3008 ${matchPct}%, #eee ${matchPct}%)` }}>
              <span>{matchPct}%</span>
            </div>
            <p>of your picks matched the community favorites</p>
          </div>
          <div className="community-scenarios">
            {communityData.map(cd => {
              const sc = scenarios.find(s => s.id === cd.scenarioId);
              return (
                <div key={cd.scenarioId} className="community-row">
                  <span className="community-emoji">{sc.emoji}</span>
                  <div className="community-picks">
                    <span className="community-scene">{sc.situation.substring(0, 40)}...</span>
                    <span className="community-top">Most popular: {cd.topPicks[0]} ({cd.percent}% picked it)</span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="your-bag"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <h3>Your Complete Bag</h3>
          <div className="bag-items">
            {allSelections.map((item, i) => (
              <motion.div
                key={item.id}
                className="bag-item"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.05 }}
              >
                <span className="bag-item-emoji">{item.emoji}</span>
                <span className="bag-item-name">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="results-actions">
          <motion.button
            className="btn-primary"
            onClick={onRestart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Play Again 🔄
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main App ───
function App() {
  const [screen, setScreen] = useState(SCREEN.LANDING);
  const [allSelections, setAllSelections] = useState([]);

  const handleStart = () => setScreen(SCREEN.GAME);

  const handleComplete = (selections) => {
    setAllSelections(selections);
    setScreen(SCREEN.REVEAL);
  };

  const handleRevealDone = useCallback(() => {
    setScreen(SCREEN.RESULTS);
  }, []);

  const handleRestart = () => {
    setAllSelections([]);
    setScreen(SCREEN.LANDING);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-left">
          <BagIcon size={28} />
          <span className="header-brand">DoorDash</span>
        </div>
        <span className="header-game-title">What's In The Bag?</span>
      </header>

      <main className="app-main">
        <AnimatePresence mode="wait">
          {screen === SCREEN.LANDING && (
            <LandingScreen key="landing" onStart={handleStart} />
          )}
          {screen === SCREEN.GAME && (
            <GameScreen key="game" onComplete={handleComplete} />
          )}
          {screen === SCREEN.REVEAL && (
            <RevealScreen key="reveal" onDone={handleRevealDone} />
          )}
          {screen === SCREEN.RESULTS && (
            <ResultsScreen
              key="results"
              allSelections={allSelections}
              onRestart={handleRestart}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
