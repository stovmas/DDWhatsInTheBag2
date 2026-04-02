import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { scenarios, calculatePersonality, communityData, CATEGORIES } from './gameData';
import './App.css';

const SCREEN = {
  LANDING: 'landing',
  GAME: 'game',
  REVEAL: 'reveal',
  RESULTS: 'results',
};

// ─── DoorDash bag icon ───
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

// ─── Star rating display ───
function Stars({ rating }) {
  return (
    <span className="stars">
      <span className="star-fill">★</span>
      <span className="star-num">{rating}</span>
    </span>
  );
}

// ─── Progress bar ───
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
          <div key={i} className={`progress-dot ${i < current ? 'done' : ''} ${i === current ? 'active' : ''}`}>
            {i < current ? '✓' : i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Budget Meter ───
function BudgetMeter({ budget, spent }) {
  const remaining = budget - spent;
  const pct = Math.min((spent / budget) * 100, 100);
  const isOver = remaining < 0;
  const isLow = remaining >= 0 && remaining < budget * 0.2;

  return (
    <div className={`budget-meter ${isOver ? 'over' : ''} ${isLow ? 'low' : ''}`}>
      <div className="budget-header">
        <span className="budget-label">Budget</span>
        <span className="budget-remaining">
          ${remaining.toFixed(2)} left
        </span>
      </div>
      <div className="budget-track">
        <motion.div
          className="budget-fill"
          animate={{ width: `${pct}%` }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        />
      </div>
      <div className="budget-amounts">
        <span className="budget-spent">${spent.toFixed(2)} spent</span>
        <span className="budget-total">${budget.toFixed(2)}</span>
      </div>
    </div>
  );
}

// ─── Item Card (DoorDash style) ───
function ItemCard({ item, selected, onToggle, disabled }) {
  const categoryColors = {
    food: '#FF6B35',
    alcohol: '#9B5DE5',
    grocery: '#06D6A0',
    household: '#457B9D',
    dessert: '#FF006E',
  };

  return (
    <motion.button
      className={`item-card ${selected ? 'selected' : ''} ${disabled && !selected ? 'disabled' : ''}`}
      onClick={() => onToggle(item)}
      whileHover={!disabled || selected ? { y: -2 } : {}}
      whileTap={!disabled || selected ? { scale: 0.98 } : {}}
      layout
    >
      {selected && (
        <motion.div
          className="card-check"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0 }}
        >
          ✓
        </motion.div>
      )}

      <div className="card-emoji-area">
        <span className="card-emoji">{item.emoji}</span>
      </div>

      <div className="card-info">
        <span className="card-store">{item.store}</span>
        <span className="card-name">{item.name}</span>
        <div className="card-meta">
          <Stars rating={item.rating} />
          <span className="card-dot">·</span>
          <span className="card-time">{item.time}</span>
        </div>
      </div>

      <div className="card-bottom">
        <span className="card-price">${item.price.toFixed(2)}</span>
        <span className="card-category" style={{ background: `${categoryColors[item.category]}18`, color: categoryColors[item.category] }}>
          {item.category}
        </span>
      </div>

      {disabled && !selected && (
        <div className="card-disabled-overlay" />
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
          5 scenarios. Limited budget. We'll reveal your DoorDash ordering personality.
        </p>

        <div className="landing-how-it-works">
          <div className="how-step">
            <span className="how-num">1</span>
            <span>Read the situation</span>
          </div>
          <div className="how-step">
            <span className="how-num">2</span>
            <span>Fill your bag under budget</span>
          </div>
          <div className="how-step">
            <span className="how-num">3</span>
            <span>Get your ordering personality</span>
          </div>
        </div>

        <motion.button
          className="btn-primary"
          onClick={onStart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Ordering →
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
              opacity: [0.12, 0.25, 0.12],
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
  const [selections, setSelections] = useState([]);
  const [allSelections, setAllSelections] = useState([]);

  const scenario = scenarios[round];
  const spent = useMemo(() => selections.reduce((s, item) => s + item.price, 0), [selections]);
  const remaining = scenario.budget - spent;

  const toggleItem = useCallback((item) => {
    setSelections(prev => {
      if (prev.find(s => s.id === item.id)) {
        return prev.filter(s => s.id !== item.id);
      }
      // Check budget
      const currentSpent = prev.reduce((s, i) => s + i.price, 0);
      if (currentSpent + item.price > scenario.budget) return prev;
      return [...prev, item];
    });
  }, [scenario.budget]);

  const handleNext = () => {
    if (selections.length === 0) return;
    const newAll = [...allSelections, ...selections];
    if (round < scenarios.length - 1) {
      setAllSelections(newAll);
      setSelections([]);
      setRound(r => r + 1);
    } else {
      onComplete(newAll);
    }
  };

  const canAfford = (item) => {
    if (selections.find(s => s.id === item.id)) return true;
    return spent + item.price <= scenario.budget;
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
          </div>

          <BudgetMeter budget={scenario.budget} spent={spent} />

          <div className="bag-summary-bar">
            <BagIcon size={18} />
            <span>{selections.length} item{selections.length !== 1 ? 's' : ''} in bag</span>
            {selections.length > 0 && (
              <span className="bag-summary-total">${spent.toFixed(2)}</span>
            )}
          </div>

          <div className="items-grid">
            {scenario.items.map(item => (
              <ItemCard
                key={item.id}
                item={item}
                selected={!!selections.find(s => s.id === item.id)}
                onToggle={toggleItem}
                disabled={!canAfford(item)}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="bottom-bar">
        {selections.length > 0 && (
          <motion.div
            className="selected-preview"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {selections.map(s => (
              <motion.span
                key={s.id}
                className="selected-pill"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                {s.emoji} ${s.price.toFixed(2)}
              </motion.span>
            ))}
          </motion.div>
        )}

        <motion.button
          className={`btn-primary btn-next ${selections.length > 0 ? 'ready' : ''}`}
          onClick={handleNext}
          disabled={selections.length === 0}
          whileHover={selections.length > 0 ? { scale: 1.03 } : {}}
          whileTap={selections.length > 0 ? { scale: 0.97 } : {}}
        >
          {selections.length === 0
            ? 'Add items to continue'
            : round < scenarios.length - 1
              ? `Checkout & Next (${selections.length} items) →`
              : `Reveal My Type! 🎉`
          }
        </motion.button>
      </div>
    </motion.div>
  );
}

// ─── Reveal Screen ───
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
        Checking your receipts...
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
          animate={{ width: `${Math.max(pct, 4)}%` }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>
      <span className="score-value">{value}</span>
    </div>
  );
}

// ─── Receipt Item ───
function ReceiptItem({ item, index }) {
  return (
    <motion.div
      className="receipt-item"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.0 + index * 0.04 }}
    >
      <span className="receipt-emoji">{item.emoji}</span>
      <div className="receipt-detail">
        <span className="receipt-name">{item.name}</span>
        <span className="receipt-store">{item.store}</span>
      </div>
      <span className="receipt-price">${item.price.toFixed(2)}</span>
    </motion.div>
  );
}

// ─── Results Screen ───
function ResultsScreen({ allSelections, onRestart }) {
  const result = calculatePersonality(allSelections);
  const { primary, secondary, scores, totalSpent } = result;
  const maxScore = Math.max(...Object.values(scores), 1);

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF3008', '#FF6B35', '#FFB347', '#FF006E', '#9B5DE5'],
    });
    const t = setTimeout(() => {
      confetti({ particleCount: 50, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#FF3008', '#FF6B35'] });
      confetti({ particleCount: 50, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#FF3008', '#FF6B35'] });
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
        {/* Hero type card */}
        <motion.div
          className="result-type-header"
          style={{ background: primary.gradient }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
        >
          <span className="result-emoji">{primary.emoji}</span>
          <h1 className="result-title">{primary.title}</h1>
          <span className="result-badge">
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

        {/* Stats */}
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
            <span className="stat-label">Total Spent</span>
            <span className="stat-value">${totalSpent.toFixed(2)}</span>
          </div>
        </motion.div>

        {/* Secondary type */}
        <motion.div
          className="result-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="secondary-label">With a hint of...</p>
          <span className="secondary-type">{secondary.emoji} {secondary.title}</span>
        </motion.div>

        {/* DNA Breakdown */}
        <motion.div
          className="score-breakdown"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h3>Your Ordering DNA</h3>
          {scoreEntries.map(({ key, label, emoji, color }) => (
            <ScoreBar key={key} label={label} emoji={emoji} value={scores[key]} max={maxScore} color={color} />
          ))}
        </motion.div>

        {/* Community */}
        <motion.div
          className="community-compare"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <h3>How Others Built Their Bag</h3>
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
                    <span className="community-scene">{sc.situation.substring(0, 45)}...</span>
                    <span className="community-top">
                      Most ordered: <strong>{cd.topPicks[0]}</strong> · Avg spent: ${cd.avgSpent.toFixed(2)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Full Receipt */}
        <motion.div
          className="your-receipt"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <h3>Your Full Receipt</h3>
          <div className="receipt-list">
            {allSelections.map((item, i) => (
              <ReceiptItem key={item.id} item={item} index={i} />
            ))}
          </div>
          <div className="receipt-total">
            <span>Total ({allSelections.length} items)</span>
            <span>${totalSpent.toFixed(2)}</span>
          </div>
        </motion.div>

        <div className="results-actions">
          <motion.button
            className="btn-primary"
            onClick={onRestart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Play Again
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
          {screen === SCREEN.LANDING && <LandingScreen key="landing" onStart={handleStart} />}
          {screen === SCREEN.GAME && <GameScreen key="game" onComplete={handleComplete} />}
          {screen === SCREEN.REVEAL && <RevealScreen key="reveal" onDone={handleRevealDone} />}
          {screen === SCREEN.RESULTS && <ResultsScreen key="results" allSelections={allSelections} onRestart={handleRestart} />}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
