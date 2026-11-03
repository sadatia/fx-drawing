import React, { useState, useRef, useEffect, useCallback } from 'react';

// --- INLINE SVG ICON COMPONENTS ---
const HandIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 11V6a2 2 0 0 0-4 0v5" />
    <path d="M14 10V4a2 2 0 0 0-4 0v6" />
    <path d="M10 10.5V3a2 2 0 0 0-4 0v9" />
    <path d="M6 13V10a2 2 0 0 0-4 0v8a9 9 0 0 0 18 0v-5a2 2 0 0 0-4 0v-2" />
  </svg>
);

const ArrowUpRightIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const ArrowDownRightIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="7" x2="17" y2="17" />
    <polyline points="17 7 17 17 7 17" />
  </svg>
);

const MagnetIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 15-4-4 6.75-6.77a7.78 7.78 0 0 1 11 11L13 22l-4-4 6.39-6.36a3.5 3.5 0 0 0-4.95-4.95L6 15Z" />
  </svg>
);

const SunIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

const MoonIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const DownloadIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const Undo2Icon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 14 4 9l5-5" />
    <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
  </svg>
);

const Redo2Icon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 14 5-5-5-5" />
    <path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13" />
  </svg>
);

const CopyIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);

const LockIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const Trash2Icon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
);

const SweepIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3l18 18" />
    <path d="M18.5 8.5L21 6" />
    <path d="M8 6h10" />
    <path d="M16 6v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6" />
    <path d="M10 11v5" />
    <path d="M14 11v5" />
  </svg>
);

const MousePointerIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
    <path d="m13 13 6 6" />
  </svg>
);

const TypeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 7 4 4 20 4 20 7" />
    <line x1="9" y1="20" x2="15" y2="20" />
    <line x1="12" y1="4" x2="12" y2="20" />
  </svg>
);

const PencilIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
  </svg>
);

const PenToolIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 19 7-7 3 3-7 7-3-3z" />
    <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="m2 2 7.586 7.586" />
    <circle cx="11" cy="11" r="2" />
  </svg>
);

const TargetIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const RulerIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.4 2.4 0 0 1 0-3.4l2.6-2.6a2.4 2.4 0 0 1 3.4 0l12.6 12.6z" />
    <path d="m14.5 12.5 2-2" />
    <path d="m11.5 9.5 2-2" />
    <path d="m8.5 6.5 2-2" />
    <path d="m17.5 15.5 2-2" />
  </svg>
);

const MinusIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const SquareIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" />
  </svg>
);

const TrendingUpIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

const HorizontalLineIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="2" y1="12" x2="22" y2="12" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

const HorizontalRayIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="5" cy="12" r="2" fill="currentColor" />
    <line x1="5" y1="12" x2="22" y2="12" />
    <polyline points="18 8 22 12 18 16" />
  </svg>
);

const ParallelChannelIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="2" y1="6" x2="22" y2="6" />
    <line x1="2" y1="12" x2="22" y2="12" strokeDasharray="3 3" />
    <line x1="2" y1="18" x2="22" y2="18" />
  </svg>
);

const PathIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 17 9 11 13 15 21 7" />
    <polyline points="16 7 21 7 21 12" />
    <circle cx="3" cy="17" r="2" fill="currentColor" />
    <circle cx="9" cy="11" r="2" fill="currentColor" />
    <circle cx="13" cy="15" r="2" fill="currentColor" />
  </svg>
);

const EraserIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21" />
    <path d="M22 21H7" />
    <path d="m5 11 9 9" />
  </svg>
);

const RepeatIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m17 2 4 4-4 4" />
    <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
    <path d="m7 22-4-4 4-4" />
    <path d="M21 13v1a4 4 0 0 1-4 4H3" />
  </svg>
);

const TagIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2H2v10l11.29 11.29a1 1 0 0 0 1.41 0l7.58-7.58a1 1 0 0 0 0-1.41L12 2z" />
    <circle cx="7" cy="7" r="2" fill="currentColor" />
  </svg>
);

// --- GLOBAL FINANCIAL CONSTANTS ---
const SMC_QUICK_TAGS = [
  { label: 'BOS', desc: 'Break of Structure', color: '#3b82f6', bgStyle: 'badge' },
  { label: 'CHoCH', desc: 'Change of Character', color: '#f59e0b', bgStyle: 'badge' },
  { label: 'FVG', desc: 'Fair Value Gap', color: '#10b981', bgStyle: 'callout' },
  { label: 'OB', desc: 'Order Block', color: '#8b5cf6', bgStyle: 'callout' },
  { label: 'MB', desc: 'Mitigation Block', color: '#ec4899', bgStyle: 'callout' },
  { label: 'SSL', desc: 'Sell-Side Liquidity', color: '#ef4444', bgStyle: 'badge' },
  { label: 'BSL', desc: 'Buy-Side Liquidity', color: '#10b981', bgStyle: 'badge' },
  { label: 'EQH/EQL', desc: 'Equal Highs / Lows', color: '#06b6d4', bgStyle: 'badge' },
  { label: 'PO3', desc: 'Power of 3 (AMD)', color: '#a855f7', bgStyle: 'callout' }
];

const FIB_RATIOS = [
  { ratio: 0, label: '0.0%', color: '#94a3b8' },
  { ratio: 0.236, label: '23.6%', color: '#f59e0b' },
  { ratio: 0.382, label: '38.2%', color: '#10b981' },
  { ratio: 0.5, label: '50.0%', color: '#3b82f6' },
  { ratio: 0.618, label: '61.8%', color: '#8b5cf6' },
  { ratio: 0.786, label: '78.6%', color: '#ec4899' },
  { ratio: 1.0, label: '100.0%', color: '#94a3b8' }
];

// --- CANDLE CONVERSION FROM FREEHAND DRAWING ---
const convertPointsToCandles = (points) => {
  if (!points || points.length < 2) return [];

  const timeStepX = 16;
  let currentX = points[0].x;
  let sampleGroups = [];
  let currentGroup = [points[0]];

  for (let i = 1; i < points.length; i++) {
    const pt = points[i];
    currentGroup.push(pt);

    if (pt.x >= currentX + timeStepX) {
      sampleGroups.push({ x: currentX + timeStepX / 2, points: currentGroup });
      currentX = pt.x;
      currentGroup = [pt];
    }
  }

  if (currentGroup.length > 0) {
    sampleGroups.push({ x: currentX + timeStepX / 2, points: currentGroup });
  }

  if (sampleGroups.length === 0) return [];

  const candles = [];
  let prevCloseY = sampleGroups[0].points[0].y;

  for (let i = 0; i < sampleGroups.length; i++) {
    const group = sampleGroups[i];
    const groupPts = group.points;

    let totalDist = 0;
    for (let j = 1; j < groupPts.length; j++) {
      totalDist += Math.hypot(groupPts[j].x - groupPts[j - 1].x, groupPts[j].y - groupPts[j - 1].y);
    }
    const velocity = totalDist / Math.max(1, groupPts.length);

    const gapOffset = velocity > 12 ? (Math.sin(group.x) * 4) : 0;
    const openY = prevCloseY + gapOffset;
    const closeY = groupPts[groupPts.length - 1].y;

    const allY = groupPts.map(p => p.y);
    const minY = Math.min(...allY);
    const maxY = Math.max(...allY);

    const hashSeed1 = Math.abs(Math.sin(group.x * 12.9898));
    const hashSeed2 = Math.abs(Math.cos(group.x * 43.1234));
    
    const wickTopExtra = (hashSeed1 * 5) + (velocity > 10 ? 4 : 2);
    const wickBottomExtra = (hashSeed2 * 5) + (velocity > 10 ? 4 : 2);

    const highY = Math.min(minY, openY, closeY) - wickTopExtra;
    const lowY = Math.max(maxY, openY, closeY) + wickBottomExtra;

    candles.push({
      x: group.x,
      openY,
      closeY,
      highY,
      lowY,
      isBullish: closeY <= openY
    });

    prevCloseY = closeY;
  }

  return candles;
};

export default function App() {
  const [elements, setElements] = useState([]);
  const [history, setHistory] = useState([[]]);
  const [historyStep, setHistoryStep] = useState(0);
  
  const [themeMode, setThemeMode] = useState('dark');
  const [snapToGrid, setSnapToGrid] = useState(false);

  const [tool, setTool] = useState('select');
  const [positionMode, setPositionMode] = useState('long');
  const [strokeColor, setStrokeColor] = useState('#3b82f6');
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [selectedElementId, setSelectedElementId] = useState(null);
  const [hoveredCandleInfo, setHoveredCandleInfo] = useState(null);
  const [editingTextId, setEditingTextId] = useState(null);
  const [accountSize, setAccountSize] = useState(10000);
  const [riskPercent, setRiskPercent] = useState(1);

  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  const [isSpacePressed, setIsSpacePressed] = useState(false);

  const [isDrawing, setIsDrawing] = useState(false);
  const [currentElement, setCurrentElement] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [activeHandle, setActiveHandle] = useState(null);
  const [activeNodeIndex, setActiveNodeIndex] = useState(null);

  const containerRef = useRef(null);
  const textInputRef = useRef(null);

  // Spacebar hotkey state detection for fluid panning
  useEffect(() => {
    const handleKeyDown = (e) => {
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (e.code === 'Space' && activeTag !== 'input' && activeTag !== 'textarea') {
        setIsSpacePressed(true);
      }
    };
    const handleKeyUp = (e) => {
      if (e.code === 'Space') {
        setIsSpacePressed(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const saveToHistory = useCallback((newElements) => {
    const updatedHistory = history.slice(0, historyStep + 1);
    updatedHistory.push(newElements);
    setHistory(updatedHistory);
    setHistoryStep(updatedHistory.length - 1);
    setElements(newElements);
  }, [history, historyStep]);

  const undo = () => {
    if (historyStep > 0) {
      setHistoryStep(historyStep - 1);
      setElements(history[historyStep - 1]);
    }
  };

  const redo = () => {
    if (historyStep < history.length - 1) {
      setHistoryStep(historyStep + 1);
      setElements(history[historyStep + 1]);
    }
  };

  const getCanvasPoint = (e) => {
    if (!containerRef.current) return { x: 0, y: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
    
    let rawX = (clientX - rect.left - pan.x) / zoom;
    let rawY = (clientY - rect.top - pan.y) / zoom;

    if (snapToGrid) {
      const gridSize = 20;
      rawX = Math.round(rawX / gridSize) * gridSize;
      rawY = Math.round(rawY / gridSize) * gridSize;
    }

    return { x: rawX, y: rawY };
  };

  const isPointInElement = (p, el) => {
    if (el.type === 'text') {
      const lines = (el.text || '').split('\n');
      const lineHeight = (el.fontSize || 16) * 1.25;
      const boxWidth = Math.max(120, ...lines.map(l => l.length * (el.fontSize || 16) * 0.65));
      const boxHeight = lines.length * lineHeight + 12;
      return p.x >= el.x - 8 && p.x <= el.x + boxWidth + 16 && p.y >= el.y - 20 && p.y <= el.y + boxHeight;
    }
    if (el.type === 'path') {
      return el.points.some(pt => Math.hypot(pt.x - p.x, pt.y - p.y) < 15);
    }
    if (el.type === 'rectangle') {
      const minX = Math.min(el.x, el.x + (el.w || 0));
      const maxX = Math.max(el.x, el.x + (el.w || 0));
      const minY = Math.min(el.y, el.y + (el.h || 0));
      const maxY = Math.max(el.y, el.y + (el.h || 0));
      return p.x >= minX && p.x <= maxX && p.y >= minY && p.y <= maxY;
    }
    if (el.type === 'horizontalLine') {
      return Math.abs(p.y - el.y) < 10;
    }
    if (el.type === 'horizontalRay') {
      return p.x >= el.x1 - 10 && Math.abs(p.y - el.y1) < 10;
    }
    if (el.type === 'parallelChannel') {
      const minY = Math.min(el.y1, el.y2) - (el.channelHeight || 50) - 10;
      const maxY = Math.max(el.y1, el.y2) + (el.channelHeight || 50) + 10;
      return p.x >= Math.min(el.x1, el.x2) - 10 && p.x <= Math.max(el.x1, el.x2) + 10 && p.y >= minY && p.y <= maxY;
    }
    if (el.type === 'line' || el.type === 'fibonacci' || el.type === 'ruler') {
      const minX = Math.min(el.x1, el.x2) - 10;
      const maxX = Math.max(el.x1, el.x2) + 10;
      const minY = Math.min(el.y1, el.y2) - 10;
      const maxY = Math.max(el.y1, el.y2) + 10;
      return p.x >= minX && p.x <= maxX && p.y >= minY && p.y <= maxY;
    }
    if (el.type === 'riskReward') {
      const minX = el.entryX;
      const maxX = el.entryX + (el.w || 180);
      const minY = Math.min(el.entryY, el.targetY, el.stopY);
      const maxY = Math.max(el.entryY, el.targetY, el.stopY);
      return p.x >= minX && p.x <= maxX && p.y >= minY && p.y <= maxY;
    }
    if (el.type === 'freehand' || el.type === 'candlestickPen') {
      return el.points.some(pt => Math.hypot(pt.x - p.x, pt.y - p.y) < 15);
    }
    return false;
  };

  const createTextTag = (tag) => {
    const id = Date.now().toString();
    const newShape = {
      id,
      type: 'text',
      x: (-pan.x + 350) / zoom,
      y: (-pan.y + 250) / zoom,
      text: tag.label,
      color: tag.color,
      fontSize: 16,
      bgStyle: tag.bgStyle || 'badge',
      align: 'left',
      locked: false,
      hidden: false
    };
    saveToHistory([...elements, newShape]);
    setSelectedElementId(id);
    setTool('select');
  };

  const handlePointerDown = (e) => {
    // Canvas Panning triggers via Middle-Click (1), Shift-Key, Hand Tool, or Spacebar holding
    if (e.button === 1 || e.shiftKey || tool === 'hand' || isSpacePressed) {
      setIsPanning(true);
      setPanStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
      return;
    }

    const point = getCanvasPoint(e);

    if (tool === 'path' && currentElement && currentElement.type === 'path') {
      const updatedPoints = [...currentElement.points, point];
      const updated = { ...currentElement, points: updatedPoints };
      setCurrentElement(updated);
      setElements(prev => prev.map(el => el.id === currentElement.id ? updated : el));
      return;
    }

    if (tool === 'select') {
      if (selectedElementId) {
        const el = elements.find(item => item.id === selectedElementId);
        if (el && !el.locked) {
          if (el.type === 'path') {
            const handleRadius = 14 / zoom;
            const nodeIdx = el.points.findIndex(pt => Math.hypot(point.x - pt.x, point.y - pt.y) < handleRadius);
            if (nodeIdx !== -1) {
              setActiveNodeIndex(nodeIdx);
              setIsDrawing(true);
              return;
            }
          } else if (el.type === 'fibonacci' || el.type === 'line' || el.type === 'ruler' || el.type === 'horizontalRay' || el.type === 'parallelChannel') {
            const handleRadius = 14 / zoom;
            if (Math.hypot(point.x - el.x1, point.y - el.y1) < handleRadius) {
              setActiveHandle('start');
              setIsDrawing(true);
              return;
            }
            if (Math.hypot(point.x - el.x2, point.y - el.y2) < handleRadius) {
              setActiveHandle('end');
              setIsDrawing(true);
              return;
            }
            if (el.type === 'parallelChannel') {
              const midX = (el.x1 + el.x2) / 2;
              const midY = (el.y1 + el.y2) / 2 - (el.channelHeight || 50) / 2;
              if (Math.hypot(point.x - midX, point.y - midY) < handleRadius) {
                setActiveHandle('height');
                setIsDrawing(true);
                return;
              }
            }
          } else if (el.type === 'riskReward') {
            const handleRadius = 16 / zoom;
            const handleX = el.entryX + el.w / 2;
            
            if (Math.hypot(point.x - handleX, point.y - el.targetY) < handleRadius) {
              setActiveHandle('target');
              setIsDrawing(true);
              return;
            }
            if (Math.hypot(point.x - handleX, point.y - el.stopY) < handleRadius) {
              setActiveHandle('stop');
              setIsDrawing(true);
              return;
            }
            if (Math.hypot(point.x - handleX, point.y - el.entryY) < handleRadius) {
              setActiveHandle('entry');
              setIsDrawing(true);
              return;
            }
          }
        }
      }

      const clickedEl = [...elements].reverse().find(el => isPointInElement(point, el) && !el.hidden);
      if (clickedEl) {
        setSelectedElementId(clickedEl.id);
        if (!clickedEl.locked) {
          setIsDrawing(true);
          setDragOffset({
            x: point.x - (clickedEl.x || clickedEl.x1 || clickedEl.entryX || 0),
            y: point.y - (clickedEl.y || clickedEl.y1 || clickedEl.entryY || 0)
          });
        }
      } else {
        setSelectedElementId(null);
        setEditingTextId(null);
      }
      return;
    }

    if (tool === 'eraser') {
      const clickedEl = [...elements].reverse().find(el => isPointInElement(point, el));
      if (clickedEl && !clickedEl.locked) {
        saveToHistory(elements.filter(el => el.id !== clickedEl.id));
      }
      return;
    }

    setIsDrawing(true);
    const id = Date.now().toString();

    let newShape = null;
    if (tool === 'text') {
      newShape = {
        id,
        type: 'text',
        x: point.x,
        y: point.y,
        text: 'Click to edit note...',
        color: strokeColor,
        fontSize: 16,
        bgStyle: 'none',
        align: 'left',
        locked: false,
        hidden: false
      };
      setEditingTextId(id);
      setSelectedElementId(id);
      setTool('select');
    } else if (tool === 'freehand') {
      newShape = { id, type: 'freehand', points: [point], color: strokeColor, width: strokeWidth, locked: false, hidden: false };
    } else if (tool === 'candlestickPen') {
      newShape = { id, type: 'candlestickPen', points: [point], color: strokeColor, width: strokeWidth, locked: false, hidden: false };
    } else if (tool === 'rectangle') {
      newShape = { id, type: 'rectangle', x: point.x, y: point.y, w: 1, h: 1, color: strokeColor, width: strokeWidth, locked: false, hidden: false };
    } else if (tool === 'line') {
      newShape = { id, type: 'line', x1: point.x, y1: point.y, x2: point.x, y2: point.y, color: strokeColor, width: strokeWidth, locked: false, hidden: false };
    } else if (tool === 'horizontalLine') {
      newShape = { id, type: 'horizontalLine', y: point.y, color: strokeColor, width: strokeWidth, locked: false, hidden: false };
      setSelectedElementId(id);
      setIsDrawing(false);
    } else if (tool === 'horizontalRay') {
      newShape = { id, type: 'horizontalRay', x1: point.x, y1: point.y, x2: point.x + 200, y2: point.y, color: strokeColor, width: strokeWidth, locked: false, hidden: false };
    } else if (tool === 'parallelChannel') {
      newShape = { id, type: 'parallelChannel', x1: point.x, y1: point.y, x2: point.x + 180, y2: point.y, channelHeight: 50, color: strokeColor, width: strokeWidth, locked: false, hidden: false };
    } else if (tool === 'path') {
      newShape = { id, type: 'path', points: [point, point], color: strokeColor, width: strokeWidth, locked: false, hidden: false };
      setSelectedElementId(id);
    } else if (tool === 'fibonacci') {
      newShape = { id, type: 'fibonacci', x1: point.x, y1: point.y, x2: point.x, y2: point.y, color: strokeColor, width: strokeWidth, locked: false, hidden: false };
    } else if (tool === 'ruler') {
      newShape = { id, type: 'ruler', x1: point.x, y1: point.y, x2: point.x, y2: point.y, color: '#38bdf8', locked: false, hidden: false };
    } else if (tool === 'riskReward') {
      const defaultWidth = 180;
      const defaultHeight = 80;
      const isLong = positionMode === 'long';

      newShape = { 
        id, 
        type: 'riskReward', 
        positionType: positionMode,
        entryX: point.x, 
        entryY: point.y, 
        w: defaultWidth,
        targetY: isLong ? point.y - defaultHeight : point.y + defaultHeight, 
        stopY: isLong ? point.y + (defaultHeight * 0.5) : point.y - (defaultHeight * 0.5),
        accountRiskDollars: (accountSize * (riskPercent / 100)),
        locked: false,
        hidden: false
      };
      setSelectedElementId(id);
    }

    if (newShape) {
      setCurrentElement(newShape);
      setElements(prev => [...prev, newShape]);

      if (tool === 'riskReward') {
        setTool('select');
      }
    }
  };

  const handlePointerMove = (e) => {
    if (isPanning) {
      setPan({ x: e.clientX - panStart.x, y: e.clientY - panStart.y });
      return;
    }

    const point = getCanvasPoint(e);

    if (tool === 'path' && currentElement && currentElement.type === 'path') {
      const updatedPoints = [...currentElement.points];
      updatedPoints[updatedPoints.length - 1] = point;
      const updated = { ...currentElement, points: updatedPoints };
      setCurrentElement(updated);
      setElements(prev => prev.map(el => el.id === currentElement.id ? updated : el));
      return;
    }

    if (!isDrawing) return;

    if (tool === 'select' && selectedElementId) {
      setElements(prev => prev.map(el => {
        if (el.id !== selectedElementId || el.locked) return el;

        if (el.type === 'path' && activeNodeIndex !== null) {
          const newPts = [...el.points];
          newPts[activeNodeIndex] = point;
          return { ...el, points: newPts };
        }

        if (activeHandle === 'height' && el.type === 'parallelChannel') {
          const midY = (el.y1 + el.y2) / 2;
          const newHeight = Math.max(10, Math.abs(midY - point.y) * 2);
          return { ...el, channelHeight: newHeight };
        }

        if (activeHandle === 'start' && (el.type === 'fibonacci' || el.type === 'line' || el.type === 'ruler' || el.type === 'horizontalRay' || el.type === 'parallelChannel')) {
          return { ...el, x1: point.x, y1: point.y, y2: el.type === 'horizontalRay' ? point.y : el.y2 };
        }
        if (activeHandle === 'end' && (el.type === 'fibonacci' || el.type === 'line' || el.type === 'ruler' || el.type === 'horizontalRay' || el.type === 'parallelChannel')) {
          return { ...el, x2: point.x, y2: el.type === 'horizontalRay' ? el.y1 : point.y };
        }
        if (el.type === 'horizontalLine') {
          return { ...el, y: point.y };
        }

        if (el.type === 'riskReward') {
          if (activeHandle === 'target') return { ...el, targetY: point.y };
          if (activeHandle === 'stop') return { ...el, stopY: point.y };
          if (activeHandle === 'entry') {
            const dy = point.y - el.entryY;
            return { ...el, entryY: point.y, targetY: el.targetY + dy, stopY: el.stopY + dy };
          }
        }

        if (el.type === 'text') {
          return { ...el, x: point.x - dragOffset.x, y: point.y - dragOffset.y };
        }
        if (el.type === 'freehand' || el.type === 'candlestickPen') {
          const dx = point.x - dragOffset.x - el.points[0].x;
          const dy = point.y - dragOffset.y - el.points[0].y;
          return { ...el, points: el.points.map(p => ({ x: p.x + dx, y: p.y + dy })) };
        }
        if (el.type === 'rectangle') {
          return { ...el, x: point.x - dragOffset.x, y: point.y - dragOffset.y };
        }
        if (el.type === 'horizontalLine') {
          return { ...el, y: point.y - dragOffset.y };
        }
        if (el.type === 'path') {
          const dx = point.x - dragOffset.x - el.points[0].x;
          const dy = point.y - dragOffset.y - el.points[0].y;
          return { ...el, points: el.points.map(p => ({ x: p.x + dx, y: p.y + dy })) };
        }
        if (el.type === 'line' || el.type === 'fibonacci' || el.type === 'ruler' || el.type === 'horizontalRay' || el.type === 'parallelChannel') {
          const dx = point.x - dragOffset.x - el.x1;
          const dy = point.y - dragOffset.y - el.y1;
          return { ...el, x1: el.x1 + dx, y1: el.y1 + dy, x2: el.x2 + dx, y2: el.y2 + dy };
        }
        if (el.type === 'riskReward') {
          const dx = point.x - dragOffset.x - el.entryX;
          const dy = point.y - dragOffset.y - el.entryY;
          return { ...el, entryX: el.entryX + dx, entryY: el.entryY + dy, targetY: el.targetY + dy, stopY: el.stopY + dy };
        }
        return el;
      }));
      return;
    }

    if (currentElement) {
      if (currentElement.type === 'freehand') {
        const updatedPoints = [...currentElement.points, point];
        const updated = { ...currentElement, points: updatedPoints };
        setCurrentElement(updated);
        setElements(prev => prev.map(el => el.id === currentElement.id ? updated : el));
      } else if (currentElement.type === 'candlestickPen') {
        const lastPoint = currentElement.points[currentElement.points.length - 1];
        if (point.x >= lastPoint.x) {
          const updatedPoints = [...currentElement.points, point];
          const updated = { ...currentElement, points: updatedPoints };
          setCurrentElement(updated);
          setElements(prev => prev.map(el => el.id === currentElement.id ? updated : el));
        }
      } else if (currentElement.type === 'rectangle') {
        const updated = { ...currentElement, w: point.x - currentElement.x, h: point.y - currentElement.y };
        setCurrentElement(updated);
        setElements(prev => prev.map(el => el.id === currentElement.id ? updated : el));
      } else if (currentElement.type === 'line' || currentElement.type === 'fibonacci' || currentElement.type === 'ruler') {
        const updated = { ...currentElement, x2: point.x, y2: point.y };
        setCurrentElement(updated);
        setElements(prev => prev.map(el => el.id === currentElement.id ? updated : el));
      } else if (currentElement.type === 'horizontalRay') {
        const updated = { ...currentElement, x2: Math.max(currentElement.x1 + 20, point.x), y2: currentElement.y1 };
        setCurrentElement(updated);
        setElements(prev => prev.map(el => el.id === currentElement.id ? updated : el));
      } else if (currentElement.type === 'parallelChannel') {
        const updated = { ...currentElement, x2: point.x, y2: point.y };
        setCurrentElement(updated);
        setElements(prev => prev.map(el => el.id === currentElement.id ? updated : el));
      } else if (currentElement.type === 'riskReward') {
        const width = Math.max(100, Math.abs(point.x - currentElement.entryX));
        const updated = { ...currentElement, w: width, targetY: point.y };
        setCurrentElement(updated);
        setElements(prev => prev.map(el => el.id === currentElement.id ? updated : el));
      }
    }
  };

  const handlePointerUp = () => {
    if (isPanning) {
      setIsPanning(false);
      return;
    }

    if (tool === 'path' && currentElement) {
      return;
    }

    if (isDrawing || activeHandle || activeNodeIndex !== null) {
      setIsDrawing(false);
      setActiveHandle(null);
      setActiveNodeIndex(null);
      setCurrentElement(null);
      saveToHistory(elements);
    }
  };

  const finishPath = () => {
    if (currentElement && currentElement.type === 'path') {
      const validPoints = currentElement.points.slice(0, -1);
      if (validPoints.length >= 2) {
        const finalPath = { ...currentElement, points: validPoints };
        setElements(prev => prev.map(el => el.id === currentElement.id ? finalPath : el));
        saveToHistory(elements.map(el => el.id === currentElement.id ? finalPath : el));
      } else {
        setElements(prev => prev.filter(el => el.id !== currentElement.id));
      }
      setCurrentElement(null);
      setIsDrawing(false);
      setTool('select');
    }
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const zoomFactor = 1.1;
    let newZoom = e.deltaY < 0 ? zoom * zoomFactor : zoom / zoomFactor;
    newZoom = Math.min(Math.max(newZoom, 0.2), 5);
    setZoom(newZoom);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      finishPath();
    }

    const activeElementTag = document.activeElement?.tagName.toLowerCase();
    if (activeElementTag === 'input' || activeElementTag === 'textarea' || document.activeElement?.isContentEditable) {
      return;
    }

    switch (e.key.toLowerCase()) {
      case 'v': setTool('select'); break;
      case 'h': setTool('hand'); break;
      case 't': setTool('text'); break;
      case 'p': setTool('freehand'); break;
      case 'c': setTool('candlestickPen'); break;
      case 'r': setTool('riskReward'); break;
      case 'm': setTool('ruler'); break;
      case 'l': setTool('line'); break;
      case 'w': setTool('path'); break;
      case 'y': setTool('horizontalRay'); break;
      case 'a': setTool('parallelChannel'); break;
      case 'e': setTool('rectangle'); break;
      case 'f': setTool('fibonacci'); break;
      case 'x': setTool('eraser'); break;
      case 'escape': setTool('select'); break;
      default: break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentElement]);

  const togglePositionType = (id) => {
    setElements(prev => prev.map(el => {
      if (el.id !== id || el.type !== 'riskReward') return el;
      const newType = el.positionType === 'long' ? 'short' : 'long';
      const targetDiff = el.entryY - el.targetY;
      const stopDiff = el.stopY - el.entryY;

      return {
        ...el,
        positionType: newType,
        targetY: el.entryY + targetDiff,
        stopY: el.entryY - stopDiff
      };
    }));
  };

  const duplicateSelected = () => {
    if (!selectedElementId) return;
    const el = elements.find(item => item.id === selectedElementId);
    if (!el) return;

    const newId = Date.now().toString();
    const offset = 25;
    let duplicated = JSON.parse(JSON.stringify(el));
    duplicated.id = newId;

    if (duplicated.x !== undefined) duplicated.x += offset;
    if (duplicated.y !== undefined) duplicated.y += offset;
    if (duplicated.x1 !== undefined) { duplicated.x1 += offset; duplicated.x2 += offset; }
    if (duplicated.y1 !== undefined) { duplicated.y1 += offset; duplicated.y2 += offset; }
    if (duplicated.entryX !== undefined) duplicated.entryX += offset;

    saveToHistory([...elements, duplicated]);
    setSelectedElementId(newId);
  };

  const toggleLockSelected = () => {
    if (!selectedElementId) return;
    setElements(prev => prev.map(el => el.id === selectedElementId ? { ...el, locked: !el.locked } : el));
  };

  const exportCanvasSnapshot = () => {
    const svgEl = containerRef.current?.querySelector('svg');
    if (!svgEl) return;
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgEl);
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const URL = window.URL || window.webkitURL || window;
    const blobURL = URL.createObjectURL(svgBlob);

    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const context = canvas.getContext('2d');
      context.fillStyle = themeMode === 'light' ? '#f8fafc' : '#0d0e12';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0);

      const a = document.createElement('a');
      a.download = `SADATIA_Analysis_${Date.now()}.png`;
      a.href = canvas.toDataURL('image/png');
      a.click();
    };
    image.src = blobURL;
  };

  const deleteSelected = () => {
    if (selectedElementId) {
      const remaining = elements.filter(el => el.id !== selectedElementId);
      setSelectedElementId(null);
      saveToHistory(remaining);
    }
  };

  const clearAllCanvas = () => {
    if (elements.length === 0) return;
    setSelectedElementId(null);
    saveToHistory([]);
  };

  const selectedElement = elements.find(el => el.id === selectedElementId);

  return (
    <div className={`flex h-screen w-screen overflow-hidden font-sans select-none ${
      themeMode === 'light' ? 'bg-slate-100 text-slate-800' : 'bg-[#0d0e12] text-gray-100'
    }`}>
      
      {/* --- TOP TOOLBAR & CONTROL NAV --- */}
      <header className={`absolute top-4 left-4 right-4 h-14 backdrop-blur-md border rounded-2xl flex items-center justify-between px-6 z-20 shadow-xl ${
        themeMode === 'light' ? 'bg-white/90 border-slate-300' : 'bg-[#111622]/90 border-slate-800/80'
      }`}>
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 bg-gradient-to-tr from-cyan-600 via-blue-600 to-indigo-600 rounded-xl flex items-center justify-center font-black text-lg text-white shadow-lg shadow-cyan-500/30 tracking-wider">
            S
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-extrabold text-base tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                SADATIA
              </h1>
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-[9px] font-mono text-emerald-400 font-bold">
                FX LEARNING | BATCH 27 SBT
              </span>
            </div>
            <p className="text-[10px] opacity-60 font-medium tracking-wide">Financial Technical Analysis Canvas</p>
          </div>
        </div>

        {/* Quick SMC Tag Ribbon */}
        <div className="hidden xl:flex items-center space-x-1.5 bg-gray-950/60 p-1.5 rounded-xl border border-gray-800/60">
          <span className="text-[10px] opacity-50 px-1 font-mono uppercase tracking-wider flex items-center gap-1">
            <TagIcon className="w-3 h-3 text-cyan-400" /> SMC Tags:
          </span>
          {SMC_QUICK_TAGS.map(t => (
            <button
              key={t.label}
              onClick={() => createTextTag(t)}
              className="px-2 py-0.5 text-[10px] font-bold rounded-lg transition hover:scale-105 active:scale-95 border border-white/10"
              style={{ backgroundColor: `${t.color}25`, color: t.color, borderColor: `${t.color}40` }}
              title={`${t.label} - ${t.desc}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Action & Theme Controls */}
        <div className="flex items-center space-x-2">
          {tool === 'riskReward' && (
            <div className="flex items-center bg-gray-950/80 p-1 rounded-full border border-gray-700/60 mr-2 shadow-inner transition-all">
              <button
                onClick={() => setPositionMode('long')}
                className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  positionMode === 'long' 
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/30 font-bold' 
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <ArrowUpRightIcon className="w-3.5 h-3.5" /> Long R:R
              </button>
              <button
                onClick={() => setPositionMode('short')}
                className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  positionMode === 'short' 
                    ? 'bg-red-600 text-white shadow-md shadow-red-500/30 font-bold' 
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <ArrowDownRightIcon className="w-3.5 h-3.5" /> Short R:R
              </button>
            </div>
          )}

          <button 
            onClick={() => setSnapToGrid(prev => !prev)}
            className={`p-2 rounded-lg transition ${snapToGrid ? 'bg-cyan-600/20 text-cyan-400 border border-cyan-500/40' : 'hover:bg-slate-800/40 opacity-70'}`}
            title="Toggle Grid Snap"
          >
            <MagnetIcon className="w-4 h-4" />
          </button>

          <button 
            onClick={() => setThemeMode(prev => prev === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg hover:bg-slate-800/40 transition"
            title="Toggle Canvas Theme"
          >
            {themeMode === 'dark' ? <SunIcon className="w-4 h-4 text-amber-400" /> : <MoonIcon className="w-4 h-4 text-slate-700" />}
          </button>
          
          <button 
            onClick={exportCanvasSnapshot}
            className="px-3.5 py-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-lg shadow-cyan-500/20 transition"
            title="Export Image Snapshot"
          >
            <DownloadIcon className="w-3.5 h-3.5" /> Export Chart
          </button>
          <div className="h-4 w-[1px] bg-gray-700/40 mx-1" />
          <button 
            onClick={undo} 
            disabled={historyStep <= 0}
            className="p-2 rounded-lg hover:bg-gray-800/20 disabled:opacity-30 transition"
            title="Undo"
          >
            <Undo2Icon className="w-4 h-4" />
          </button>
          <button 
            onClick={redo} 
            disabled={historyStep >= history.length - 1}
            className="p-2 rounded-lg hover:bg-gray-800/20 disabled:opacity-30 transition"
            title="Redo"
          >
            <Redo2Icon className="w-4 h-4" />
          </button>
          
          <div className="h-4 w-[1px] bg-gray-700/40 mx-1" />
          
          <button 
            onClick={duplicateSelected}
            disabled={!selectedElementId}
            className="p-2 rounded-lg hover:bg-gray-800/20 disabled:opacity-30 transition"
            title="Duplicate Shape"
          >
            <CopyIcon className="w-4 h-4" />
          </button>

          <button 
            onClick={toggleLockSelected}
            disabled={!selectedElementId}
            className={`p-2 rounded-lg hover:bg-gray-800/20 disabled:opacity-30 transition ${selectedElement?.locked ? 'text-amber-400' : ''}`}
            title="Lock Position"
          >
            <LockIcon className="w-4 h-4" />
          </button>

          <button 
            onClick={deleteSelected}
            disabled={!selectedElementId}
            className="p-2 rounded-lg hover:bg-red-500/20 text-red-400 disabled:opacity-30 transition"
            title="Delete Selected"
          >
            <Trash2Icon className="w-4 h-4" />
          </button>

          <button 
            onClick={clearAllCanvas}
            disabled={elements.length === 0}
            className="p-2 rounded-lg hover:bg-red-600/30 text-red-400 border border-red-500/30 disabled:opacity-20 transition flex items-center gap-1 text-xs font-semibold"
            title="Clear Entire Canvas (Delete All)"
          >
            <SweepIcon className="w-4 h-4" /> Clear All
          </button>
        </div>
      </header>

      {/* --- LEFT DRAWING TOOLBAR --- */}
      <aside className={`absolute top-24 left-4 border rounded-2xl p-2.5 z-20 shadow-2xl flex flex-col space-y-2 backdrop-blur-md ${
        themeMode === 'light' ? 'bg-white/90 border-slate-300' : 'bg-[#111622]/90 border-slate-800/80'
      }`}>
        <ToolButton active={tool === 'select'} onClick={() => setTool('select')} Icon={MousePointerIcon} label="Select & Move (V)" />
        <ToolButton active={tool === 'hand'} onClick={() => setTool('hand')} Icon={HandIcon} iconColor="text-amber-400" label="Pan Whiteboard (H / Space+Drag)" />
        <ToolButton active={tool === 'text'} onClick={() => setTool('text')} Icon={TypeIcon} iconColor="text-blue-400" label="Text & SMC Annotations (T)" />
        <ToolButton active={tool === 'freehand'} onClick={() => setTool('freehand')} Icon={PencilIcon} iconColor="text-blue-400" label="Freehand Line Sketch (P)" />
        <ToolButton active={tool === 'candlestickPen'} onClick={() => setTool('candlestickPen')} Icon={PenToolIcon} iconColor="text-emerald-400" label="Freehand Candlestick Pen (C)" />
        <ToolButton active={tool === 'riskReward'} onClick={() => setTool('riskReward')} Icon={TargetIcon} iconColor="text-amber-400" label="Risk / Reward Setup Tool (R)" highlight={true} />
        <ToolButton active={tool === 'ruler'} onClick={() => setTool('ruler')} Icon={RulerIcon} iconColor="text-sky-400" label="Price Distance Ruler (M)" />
        
        <div className="h-[1px] bg-gray-700/40 my-1" />

        <ToolButton active={tool === 'line'} onClick={() => setTool('line')} Icon={MinusIcon} label="Trend Line (L)" />
        <ToolButton active={tool === 'path'} onClick={() => setTool('path')} Icon={PathIcon} iconColor="text-indigo-400" label="Multi-Point Trend Path Tool (W)" />
        <ToolButton active={tool === 'horizontalLine'} onClick={() => setTool('horizontalLine')} Icon={HorizontalLineIcon} iconColor="text-amber-400" label="Horizontal Line (H)" />
        <ToolButton active={tool === 'horizontalRay'} onClick={() => setTool('horizontalRay')} Icon={HorizontalRayIcon} iconColor="text-orange-400" label="Horizontal Ray (Y)" />
        <ToolButton active={tool === 'parallelChannel'} onClick={() => setTool('parallelChannel')} Icon={ParallelChannelIcon} iconColor="text-purple-400" label="Parallel Channel (A)" />
        <ToolButton active={tool === 'rectangle'} onClick={() => setTool('rectangle')} Icon={SquareIcon} label="Rectangle Zone (E)" />
        <ToolButton active={tool === 'fibonacci'} onClick={() => setTool('fibonacci')} Icon={TrendingUpIcon} iconColor="text-cyan-400" label="Fibonacci Retracement Grid (F)" />
        <ToolButton active={tool === 'eraser'} onClick={() => setTool('eraser')} Icon={EraserIcon} iconColor="text-red-400" label="Eraser (X)" />
      </aside>

      {/* --- RIGHT SIDEBAR CONFIGURATORS --- */}
      {selectedElement && selectedElement.type === 'text' && (
        <aside className={`absolute top-24 right-4 w-72 backdrop-blur-md border rounded-2xl p-4 z-20 shadow-2xl space-y-4 text-xs ${
          themeMode === 'light' ? 'bg-white/95 border-slate-300' : 'bg-[#16181e]/95 border-gray-800'
        }`}>
          <div className="flex items-center justify-between border-b border-gray-700/50 pb-3">
            <h3 className="font-semibold text-sm flex items-center gap-2">
              <TypeIcon className="w-4 h-4 text-blue-400" /> Text & Note Inspector
            </h3>
          </div>

          <div className="space-y-3">
            <div>
              <label className="opacity-60 block mb-1">Quick SMC Technical Tags</label>
              <div className="grid grid-cols-3 gap-1">
                {SMC_QUICK_TAGS.map(t => (
                  <button
                    key={t.label}
                    onClick={() => {
                      setElements(prev => prev.map(item => item.id === selectedElement.id ? { 
                        ...item, 
                        text: t.label, 
                        color: t.color, 
                        bgStyle: t.bgStyle 
                      } : item));
                    }}
                    className="py-1 rounded text-[10px] font-bold transition hover:opacity-80 border border-white/10"
                    style={{ backgroundColor: `${t.color}25`, color: t.color, borderColor: `${t.color}40` }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="opacity-60 block mb-1">Font Size</label>
                <input
                  type="number"
                  min="10"
                  max="48"
                  value={selectedElement.fontSize || 16}
                  onChange={(e) => {
                    const val = parseInt(e.target.value) || 16;
                    setElements(prev => prev.map(item => item.id === selectedElement.id ? { ...item, fontSize: val } : item));
                  }}
                  className="w-full bg-gray-900/60 border border-gray-700 rounded px-2 py-1 font-mono"
                />
              </div>
              <div>
                <label className="opacity-60 block mb-1">Text Color</label>
                <input
                  type="color"
                  value={selectedElement.color || '#3b82f6'}
                  onChange={(e) => {
                    const val = e.target.value;
                    setElements(prev => prev.map(item => item.id === selectedElement.id ? { ...item, color: val } : item));
                  }}
                  className="w-full h-7 bg-gray-900/60 border border-gray-700 rounded cursor-pointer"
                />
              </div>
            </div>

            <div>
              <label className="opacity-60 block mb-1">Display Callout Style</label>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: 'none', label: 'Plain Text' },
                  { id: 'badge', label: 'Badge' },
                  { id: 'callout', label: 'Callout Box' }
                ].map(st => (
                  <button
                    key={st.id}
                    onClick={() => {
                      setElements(prev => prev.map(item => item.id === selectedElement.id ? { ...item, bgStyle: st.id } : item));
                    }}
                    className={`py-1.5 rounded-lg text-[10px] font-semibold border transition ${
                      (selectedElement.bgStyle || 'none') === st.id
                        ? 'bg-blue-600/20 border-blue-500 text-blue-400'
                        : 'bg-gray-800/30 border-gray-700/50 opacity-50'
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="opacity-60 block mb-1">Text Alignment</label>
              <div className="grid grid-cols-3 gap-1">
                {['left', 'center', 'right'].map(align => (
                  <button
                    key={align}
                    onClick={() => {
                      setElements(prev => prev.map(item => item.id === selectedElement.id ? { ...item, align } : item));
                    }}
                    className={`py-1 rounded text-[10px] capitalize font-medium border transition ${
                      (selectedElement.align || 'left') === align
                        ? 'bg-blue-600/20 border-blue-500 text-blue-400'
                        : 'bg-gray-800/30 border-gray-700/50 opacity-50'
                    }`}
                  >
                    {align}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>
      )}

      {selectedElement && selectedElement.type === 'riskReward' && (
        <aside className={`absolute top-24 right-4 w-72 backdrop-blur-md border rounded-2xl p-4 z-20 shadow-2xl space-y-4 text-xs ${
          themeMode === 'light' ? 'bg-white/95 border-slate-300' : 'bg-[#16181e]/95 border-gray-800'
        }`}>
          <div className="flex items-center justify-between border-b border-gray-700/50 pb-3">
            <h3 className="font-semibold text-sm flex items-center gap-2">
              <TargetIcon className="w-4 h-4 text-amber-400" /> Position Risk Setup
            </h3>
            <button
              onClick={() => togglePositionType(selectedElement.id)}
              className="px-2.5 py-1 bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-lg hover:bg-blue-600/30 transition flex items-center gap-1 font-semibold text-[11px]"
            >
              <RepeatIcon className="w-3 h-3" /> Switch to {selectedElement.positionType === 'long' ? 'Short' : 'Long'}
            </button>
          </div>

          <div className="space-y-3">
            <div>
              <label className="opacity-60 block mb-1">Portfolio Risk Model ($)</label>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-[9px] opacity-60">Account ($)</span>
                  <input
                    type="number"
                    value={accountSize}
                    onChange={(e) => setAccountSize(parseFloat(e.target.value) || 0)}
                    className="w-full bg-gray-900/60 border border-gray-700 rounded px-2 py-1 font-mono"
                  />
                </div>
                <div>
                  <span className="text-[9px] opacity-60">Risk (%)</span>
                  <input
                    type="number"
                    value={riskPercent}
                    onChange={(e) => setRiskPercent(parseFloat(e.target.value) || 0)}
                    className="w-full bg-gray-900/60 border border-gray-700 rounded px-2 py-1 font-mono"
                  />
                </div>
              </div>
            </div>

            {(() => {
              const isLong = selectedElement.positionType === 'long';
              const targetDist = Math.abs(selectedElement.entryY - selectedElement.targetY);
              const stopDist = Math.abs(selectedElement.entryY - selectedElement.stopY);
              const rr = (targetDist / (stopDist || 1)).toFixed(2);
              const rewardPct = ((targetDist / (selectedElement.entryY || 1)) * 100).toFixed(2);
              const riskPct = ((stopDist / (selectedElement.entryY || 1)) * 100).toFixed(2);
              const dollarRisk = (accountSize * (riskPercent / 100)).toFixed(2);
              const dollarReward = (dollarRisk * parseFloat(rr)).toFixed(2);

              return (
                <div className="p-3 bg-gray-900/60 rounded-xl border border-gray-800 space-y-2 font-mono">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400 font-sans">Risk / Reward Ratio</span>
                    <strong className="text-amber-400">1 : {rr}</strong>
                  </div>
                  <div className="h-[1px] bg-gray-800" />
                  <div className="flex justify-between text-emerald-400">
                    <span>Target Profit:</span>
                    <strong>+{rewardPct}% (+${dollarReward})</strong>
                  </div>
                  <div className="flex justify-between text-red-400">
                    <span>Stop Risk:</span>
                    <strong>-{riskPct}% (-${dollarRisk})</strong>
                  </div>
                </div>
              );
            })()}
          </div>
        </aside>
      )}

      {/* --- SVG INFINITE CANVAS --- */}
      <main 
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onWheel={handleWheel}
        className={`w-full h-full relative overflow-hidden ${
          isPanning ? 'cursor-grabbing' : (tool === 'hand' || isSpacePressed) ? 'cursor-grab' : 'cursor-crosshair'
        }`}
      >
        <svg className="w-full h-full absolute inset-0">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke={themeMode === 'light' ? '#cbd5e1' : '#1e293b'} strokeWidth="0.5" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          <g transform={`translate(${pan.x}, ${pan.y}) scale(${zoom})`}>
            {elements.filter(el => !el.hidden).map(el => {
              const isSelected = el.id === selectedElementId;

              if (el.type === 'path') {
                if (!el.points || el.points.length < 2) return null;
                const pathData = el.points.reduce((acc, pt, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${pt.x} ${pt.y}`, '');
                const lastPt = el.points[el.points.length - 1];
                const prevPt = el.points[el.points.length - 2] || lastPt;
                const angle = Math.atan2(lastPt.y - prevPt.y, lastPt.x - prevPt.x);

                return (
                  <g key={el.id} onDoubleClick={finishPath}>
                    <path
                      d={pathData}
                      stroke={isSelected ? '#3b82f6' : (el.color || '#818cf8')}
                      strokeWidth={isSelected ? el.width + 1 : el.width}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />

                    {el.points.map((pt, i) => (
                      <circle
                        key={i}
                        cx={pt.x}
                        cy={pt.y}
                        r={isSelected ? "5" : "3"}
                        fill={isSelected ? "#3b82f6" : (el.color || "#818cf8")}
                        stroke="#ffffff"
                        strokeWidth="1.5"
                        className="cursor-pointer"
                      />
                    ))}

                    <g transform={`translate(${lastPt.x}, ${lastPt.y}) rotate(${(angle * 180) / Math.PI})`}>
                      <polygon points="-8,-4 2,0 -8,4" fill={isSelected ? '#3b82f6' : (el.color || '#818cf8')} />
                    </g>
                  </g>
                );
              }

              if (el.type === 'text') {
                const isEditing = editingTextId === el.id;
                const lines = (el.text || '').split('\n');
                const lineHeight = (el.fontSize || 16) * 1.25;
                const boxWidth = Math.max(120, ...lines.map(l => l.length * (el.fontSize || 16) * 0.65));
                const boxHeight = lines.length * lineHeight + 12;

                const textAlign = el.align || 'left';
                const textXOffset = textAlign === 'center' ? boxWidth / 2 : textAlign === 'right' ? boxWidth : 0;
                const textAnchorVal = textAlign === 'center' ? 'middle' : textAlign === 'right' ? 'end' : 'start';

                return (
                  <g key={el.id} transform={`translate(${el.x}, ${el.y})`}>
                    {el.bgStyle === 'badge' && (
                      <rect
                        x="-6"
                        y="-16"
                        width={boxWidth + 12}
                        height={boxHeight}
                        rx="6"
                        fill="#1e293b"
                        stroke={isSelected ? '#3b82f6' : '#475569'}
                        strokeWidth="1"
                        opacity="0.9"
                      />
                    )}
                    {el.bgStyle === 'callout' && (
                      <rect
                        x="-6"
                        y="-16"
                        width={boxWidth + 12}
                        height={boxHeight}
                        rx="4"
                        fill="#0f172a"
                        stroke={el.color || '#3b82f6'}
                        strokeWidth="1.5"
                        opacity="0.95"
                      />
                    )}

                    {isEditing ? (
                      <foreignObject x="-6" y="-18" width={boxWidth + 30} height={Math.max(60, boxHeight + 20)}>
                        <textarea
                          ref={textInputRef}
                          value={el.text}
                          onChange={(e) => {
                            const val = e.target.value;
                            setElements(prev => prev.map(item => item.id === el.id ? { ...item, text: val } : item));
                          }}
                          onBlur={() => setEditingTextId(null)}
                          style={{ 
                            fontSize: `${el.fontSize || 16}px`, 
                            color: el.color || '#3b82f6',
                            textAlign: textAlign 
                          }}
                          className="w-full h-full bg-slate-900/90 border border-blue-500 text-white p-1 rounded font-sans focus:outline-none resize-none leading-tight"
                          autoFocus
                        />
                      </foreignObject>
                    ) : (
                      <g onDoubleClick={() => setEditingTextId(el.id)} className="cursor-pointer">
                        {lines.map((line, idx) => (
                          <text
                            key={idx}
                            x={textXOffset}
                            y={idx * lineHeight}
                            fill={isSelected ? '#3b82f6' : el.color}
                            fontSize={el.fontSize || 16}
                            fontWeight="600"
                            fontFamily="sans-serif"
                            textAnchor={textAnchorVal}
                          >
                            {line}
                          </text>
                        ))}
                      </g>
                    )}

                    {isSelected && !isEditing && (
                      <rect
                        x="-8"
                        y="-20"
                        width={boxWidth + 16}
                        height={boxHeight + 8}
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="1"
                        strokeDasharray="3 3"
                        rx="4"
                      />
                    )}
                  </g>
                );
              }

              if (el.type === 'freehand') {
                if (!el.points || el.points.length < 2) return null;
                const pathData = el.points.reduce((acc, pt, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${pt.x} ${pt.y}`, '');
                return (
                  <path
                    key={el.id}
                    d={pathData}
                    stroke={isSelected ? '#3b82f6' : el.color}
                    strokeWidth={isSelected ? el.width + 1 : el.width}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                );
              }

              if (el.type === 'candlestickPen') {
                if (!el.points || el.points.length < 2) return null;
                const freehandCandles = convertPointsToCandles(el.points);

                return (
                  <g key={el.id}>
                    <path
                      d={el.points.reduce((acc, pt, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${pt.x} ${pt.y}`, '')}
                      stroke={isSelected ? '#3b82f6' : '#334155'}
                      strokeWidth="1"
                      strokeDasharray="3 3"
                      fill="none"
                      opacity="0.25"
                    />

                    {freehandCandles.map((c, i) => {
                      const candleColor = c.isBullish ? '#10b981' : '#ef4444';
                      const bodyY = Math.min(c.openY, c.closeY);
                      const bodyH = Math.max(3, Math.abs(c.closeY - c.openY));

                      return (
                        <g 
                          key={i}
                          className="pointer-events-auto cursor-pointer"
                          onPointerOver={() => setHoveredCandleInfo({
                            idx: i + 1,
                            open: Math.round(500 - c.openY),
                            high: Math.round(500 - c.highY),
                            low: Math.round(500 - c.lowY),
                            close: Math.round(500 - c.closeY)
                          })}
                          onPointerOut={() => setHoveredCandleInfo(null)}
                        >
                          <line x1={c.x} y1={c.highY} x2={c.x} y2={c.lowY} stroke={candleColor} strokeWidth="1.5" />
                          <rect 
                            x={c.x - 5} 
                            y={bodyY} 
                            width={10} 
                            height={bodyH} 
                            fill={candleColor} 
                            stroke={candleColor} 
                            strokeWidth="1"
                            rx="1" 
                          />
                        </g>
                      );
                    })}
                  </g>
                );
              }

              if (el.type === 'riskReward') {
                const isLong = (el.positionType || 'long') === 'long';
                const width = el.w || 180;
                const x = el.entryX;

                const targetY = el.targetY;
                const stopY = el.stopY;
                const entryY = el.entryY;

                const targetBoxY = isLong ? targetY : entryY;
                const targetBoxH = Math.abs(entryY - targetY);

                const stopBoxY = isLong ? entryY : stopY;
                const stopBoxH = Math.abs(stopY - entryY);

                const rrRatio = (targetBoxH / (stopBoxH || 1)).toFixed(2);
                const targetPct = ((targetBoxH / (entryY || 1)) * 100).toFixed(2);
                const stopPct = ((stopBoxH / (entryY || 1)) * 100).toFixed(2);

                const handleX = x + width / 2;

                return (
                  <g key={el.id}>
                    <rect
                      x={x}
                      y={targetBoxY}
                      width={width}
                      height={targetBoxH}
                      fill="#10b98125"
                      stroke="#10b981"
                      strokeWidth={isSelected ? "2" : "1"}
                      rx="3"
                    />
                    
                    <rect
                      x={x}
                      y={stopBoxY}
                      width={width}
                      height={stopBoxH}
                      fill="#ef444425"
                      stroke="#ef4444"
                      strokeWidth={isSelected ? "2" : "1"}
                      rx="3"
                    />

                    <line x1={x} y1={entryY} x2={x + width} y2={entryY} stroke="#3b82f6" strokeWidth="2.5" />
                    <line x1={x} y1={targetY} x2={x + width} y2={targetY} stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" />
                    <line x1={x} y1={stopY} x2={x + width} y2={stopY} stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 4" />

                    {isSelected && !el.locked && (
                      <g>
                        <circle cx={handleX} cy={targetY} r="6" fill="#10b981" stroke="#ffffff" strokeWidth="2" className="cursor-ns-resize" />
                        <circle cx={handleX} cy={stopY} r="6" fill="#ef4444" stroke="#ffffff" strokeWidth="2" className="cursor-ns-resize" />
                        <circle cx={handleX} cy={entryY} r="6" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" className="cursor-move" />
                      </g>
                    )}

                    <g transform={`translate(${x + 8}, ${entryY + (isLong ? -26 : 8)})`}>
                      <rect x="-4" y="-12" width="168" height="24" rx="6" fill="#0f172a" stroke={isLong ? "#10b981" : "#ef4444"} strokeWidth="1" />
                      <text fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="sans-serif" x="4" y="4">
                        {isLong ? '🟢 LONG' : '🔴 SHORT'} | R:R = 1:{rrRatio}
                      </text>
                    </g>

                    <g 
                      transform={`translate(${x + width - 24}, ${entryY - 10})`}
                      className="cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePositionType(el.id);
                      }}
                    >
                      <rect width="20" height="20" rx="4" fill="#1e293b" stroke="#3b82f6" strokeWidth="1" />
                      <text fill="#3b82f6" fontSize="12" fontWeight="bold" x="4" y="14">⇄</text>
                    </g>

                    <text x={x + width + 8} y={targetY + 4} fill="#10b981" fontSize="10" fontWeight="bold" fontFamily="monospace">
                      TP: +{targetPct}%
                    </text>
                    <text x={x + width + 8} y={stopY + 4} fill="#ef4444" fontSize="10" fontWeight="bold" fontFamily="monospace">
                      SL: -{stopPct}%
                    </text>
                  </g>
                );
              }

              if (el.type === 'ruler') {
                const dy = el.y2 - el.y1;
                const percent = ((dy / (el.y1 || 1)) * -100).toFixed(2);
                return (
                  <g key={el.id}>
                    <line x1={el.x1} y1={el.y1} x2={el.x2} y2={el.y2} stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4" />
                    <circle cx={el.x1} cy={el.y1} r="4" fill="#38bdf8" />
                    <circle cx={el.x2} cy={el.y2} r="4" fill="#38bdf8" />
                    <text x={(el.x1 + el.x2) / 2 + 8} y={(el.y1 + el.y2) / 2} fill="#38bdf8" fontSize="11" fontWeight="bold" fontFamily="monospace">
                      {percent}%
                    </text>
                  </g>
                );
              }

              if (el.type === 'rectangle') {
                return (
                  <rect
                    key={el.id}
                    x={Math.min(el.x, el.x + (el.w || 0))}
                    y={Math.min(el.y, el.y + (el.h || 0))}
                    width={Math.abs(el.w || 0)}
                    height={Math.abs(el.h || 0)}
                    fill={`${el.color}15`}
                    stroke={isSelected ? '#3b82f6' : el.color}
                    strokeWidth={isSelected ? el.width + 1 : el.width}
                    rx="4"
                  />
                );
              }

              if (el.type === 'line') {
                return (
                  <line
                    key={el.id}
                    x1={el.x1}
                    y1={el.y1}
                    x2={el.x2}
                    y2={el.y2}
                    stroke={isSelected ? '#3b82f6' : el.color}
                    strokeWidth={el.width}
                    strokeLinecap="round"
                  />
                );
              }

              if (el.type === 'horizontalLine') {
                return (
                  <g key={el.id}>
                    <line
                      x1="-10000"
                      y1={el.y}
                      x2="10000"
                      y2={el.y}
                      stroke={isSelected ? '#3b82f6' : (el.color || '#f59e0b')}
                      strokeWidth={isSelected ? el.width + 1 : el.width}
                      strokeDasharray="6 4"
                    />
                    {isSelected && (
                      <circle cx={(-pan.x + 300) / zoom} cy={el.y} r="5" fill="#3b82f6" stroke="#ffffff" strokeWidth="1.5" />
                    )}
                  </g>
                );
              }

              if (el.type === 'horizontalRay') {
                return (
                  <g key={el.id}>
                    <line
                      x1={el.x1}
                      y1={el.y1}
                      x2="10000"
                      y2={el.y1}
                      stroke={isSelected ? '#3b82f6' : (el.color || '#fb923c')}
                      strokeWidth={isSelected ? el.width + 1 : el.width}
                    />
                    <circle cx={el.x1} cy={el.y1} r="4" fill={isSelected ? '#3b82f6' : (el.color || '#fb923c')} />
                  </g>
                );
              }

              if (el.type === 'parallelChannel') {
                const chHeight = el.channelHeight || 50;
                const midX = (el.x1 + el.x2) / 2;
                const midY = (el.y1 + el.y2) / 2;
                const pathBackground = `M ${el.x1} ${el.y1 - chHeight/2} L ${el.x2} ${el.y2 - chHeight/2} L ${el.x2} ${el.y2 + chHeight/2} L ${el.x1} ${el.y1 + chHeight/2} Z`;

                return (
                  <g key={el.id}>
                    <path d={pathBackground} fill="#a855f715" stroke="none" />
                    <line x1={el.x1} y1={el.y1 - chHeight/2} x2={el.x2} y2={el.y2 - chHeight/2} stroke={isSelected ? '#3b82f6' : (el.color || '#c084fc')} strokeWidth={el.width} />
                    <line x1={el.x1} y1={el.y1} x2={el.x2} y2={el.y2} stroke={isSelected ? '#3b82f6' : (el.color || '#c084fc')} strokeWidth="1" strokeDasharray="4 4" />
                    <line x1={el.x1} y1={el.y1 + chHeight/2} x2={el.x2} y2={el.y2 + chHeight/2} stroke={isSelected ? '#3b82f6' : (el.color || '#c084fc')} strokeWidth={el.width} />
                    
                    {isSelected && (
                      <g>
                        <circle cx={el.x1} cy={el.y1} r="5" fill="#3b82f6" stroke="#ffffff" strokeWidth="1.5" className="cursor-move" />
                        <circle cx={el.x2} cy={el.y2} r="5" fill="#3b82f6" stroke="#ffffff" strokeWidth="1.5" className="cursor-move" />
                        <circle cx={midX} cy={midY - chHeight/2} r="6" fill="#06b6d4" stroke="#ffffff" strokeWidth="2" className="cursor-ns-resize" />
                      </g>
                    )}
                  </g>
                );
              }

              if (el.type === 'fibonacci') {
                const dy = el.y2 - el.y1;
                const width = Math.max(120, Math.abs(el.x2 - el.x1));
                const startX = Math.min(el.x1, el.x2);

                return (
                  <g key={el.id}>
                    {FIB_RATIOS.map(fib => {
                      const levelY = el.y1 + dy * fib.ratio;
                      return (
                        <g key={fib.ratio}>
                          <line x1={startX} y1={levelY} x2={startX + width} y2={levelY} stroke={fib.color} strokeWidth="1.5" strokeDasharray="4 4" />
                          <text x={startX + width + 6} y={levelY + 4} fill={fib.color} fontSize="10" fontFamily="monospace" fontWeight="bold">
                            {fib.label}
                          </text>
                        </g>
                      );
                    })}
                    <line x1={el.x1} y1={el.y1} x2={el.x2} y2={el.y2} stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
                  </g>
                );
              }

              return null;
            })}
          </g>
        </svg>

        {hoveredCandleInfo && (
          <div className="absolute top-20 left-1/2 -translate-x-1/2 z-30 bg-gray-900/90 border border-gray-700 rounded-xl px-4 py-1.5 flex items-center gap-4 text-xs font-mono text-gray-200 shadow-2xl">
            <span className="text-gray-400 font-sans font-medium">Bar #{hoveredCandleInfo.idx}</span>
            <span>O: <strong className="text-blue-400">{hoveredCandleInfo.open}</strong></span>
            <span>H: <strong className="text-emerald-400">{hoveredCandleInfo.high}</strong></span>
            <span>L: <strong className="text-red-400">{hoveredCandleInfo.low}</strong></span>
            <span>C: <strong className="text-amber-400">{hoveredCandleInfo.close}</strong></span>
          </div>
        )}
      </main>
    </div>
  );
}

function ToolButton({ active, onClick, Icon, iconColor, label, highlight }) {
  return (
    <button
      onClick={onClick}
      className={`relative group p-2.5 rounded-xl flex items-center justify-center transition ${
        active 
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
          : highlight
          ? 'bg-gray-800/80 text-gray-200 hover:bg-gray-800'
          : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/60'
      }`}
      title={label}
    >
      <Icon className={`w-5 h-5 ${active ? 'text-white' : (iconColor || '')}`} />
      <span className="absolute left-14 bg-gray-900 text-gray-200 text-xs px-2.5 py-1 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition shadow-xl whitespace-nowrap z-30 border border-gray-800">
        {label}
      </span>
    </button>
  );
}