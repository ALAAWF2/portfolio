import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

// ===== Site-matching design tokens (alaa website) =====
export const T = {
  bg: '#07070b',
  bg2: '#0d0d15',
  bg3: '#141420',
  card: '#101018',
  border: 'rgba(255,255,255,0.09)',
  orange: '#ff5c00',
  orangeSoft: 'rgba(255,92,0,0.14)',
  orangeGlow: 'rgba(255,92,0,0.35)',
  text: '#f5f6fa',
  muted: '#8b8fa3',
  green: '#22c55e',
  red: '#ef4444',
  blue: '#3b82f6',
  yellow: '#f59e0b',
};

export const springIn = (frame: number, fps: number, delay = 0) =>
  spring({frame: frame - delay, fps, config: {damping: 14, stiffness: 120, mass: 0.6}});

export const fadeIn = (frame: number, delay = 0, dur = 15) =>
  interpolate(frame, [delay, delay + dur], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

// ===== Shimmer placeholder (anonymized value/name block) =====
export const Shimmer: React.FC<{w: number; h: number; r?: number; delay?: number; light?: boolean}> = ({w, h, r = 6, delay = 0, light}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const s = springIn(frame, fps, delay);
  const sweep = ((frame * 2.2) % 200) / 200;
  return (
    <div
      style={{
        width: w,
        height: h,
        borderRadius: r,
        transform: `scaleX(${s})`,
        transformOrigin: 'right',
        background: `linear-gradient(105deg, ${light ? '#23232f' : '#1a1a25'} 40%, #2c2c3a ${sweep * 100}%, ${light ? '#23232f' : '#1a1a25'} 60%)`,
        opacity: fadeIn(frame, delay, 10),
      }}
    />
  );
};

// ===== KPI Card =====
export const KpiCard: React.FC<{label: string; delay?: number; color?: string; w?: number; children?: React.ReactNode}> = ({label, delay = 0, color = T.orange, w = 190, children}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const s = springIn(frame, fps, delay);
  return (
    <div
      style={{
        width: w,
        background: T.bg3,
        border: `1px solid ${T.border}`,
        borderTop: `3px solid ${color}`,
        borderRadius: 14,
        padding: '14px 16px',
        transform: `translateY(${(1 - s) * 40}px) scale(${0.9 + s * 0.1})`,
        opacity: s,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      <span style={{fontSize: 15, color: T.muted, fontWeight: 600}}>{label}</span>
      {children ?? <Shimmer w={w - 60} h={22} delay={delay + 8} />}
    </div>
  );
};

// ===== Animated growing vertical bar =====
export const VBar: React.FC<{h: number; delay?: number; color?: string; w?: number}> = ({h, delay = 0, color = T.orange, w = 26}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const s = springIn(frame, fps, delay);
  return (
    <div
      style={{
        width: w,
        height: h * s,
        borderRadius: 6,
        background: `linear-gradient(180deg, ${color}, ${color}55)`,
        boxShadow: `0 0 14px ${color}33`,
      }}
    />
  );
};

// ===== Horizontal progress bar =====
export const HBar: React.FC<{pct: number; delay?: number; color?: string; w?: number; h?: number}> = ({pct, delay = 0, color = T.orange, w = 220, h = 10}) => {
  const frame = useCurrentFrame();
  const prog = interpolate(frame, [delay, delay + 40], [0, pct], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <div style={{width: w, height: h, borderRadius: h, background: '#1c1c28', overflow: 'hidden', direction: 'rtl'}}>
      <div style={{width: `${prog * 100}%`, height: '100%', borderRadius: h, background: `linear-gradient(90deg, ${color}, ${color}aa)`, boxShadow: `0 0 12px ${color}66`}} />
    </div>
  );
};

// ===== Animated line chart (draws itself) =====
export const LineChart: React.FC<{w: number; h: number; points: number[]; delay?: number; color?: string; fill?: boolean}> = ({w, h, points, delay = 0, color = T.orange, fill = true}) => {
  const frame = useCurrentFrame();
  const n = points.length;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const coords = points.map((p, i) => {
    const x = (i / (n - 1)) * w;
    const y = h - ((p - min) / range) * (h * 0.82) - h * 0.09;
    return [x, y] as const;
  });
  const path = coords.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  const areaPath = `${path} L${w},${h} L0,${h} Z`;
  const totalLen = w * 1.6;
  const drawn = interpolate(frame, [delay, delay + 55], [totalLen, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const fillOp = interpolate(frame, [delay + 30, delay + 60], [0, 0.18], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <svg width={w} height={h} style={{overflow: 'visible'}}>
      {fill && <path d={areaPath} fill={color} opacity={fillOp} />}
      <path d={path} fill="none" stroke={color} strokeWidth={3.5} strokeLinecap="round" strokeDasharray={totalLen} strokeDashoffset={drawn} style={{filter: `drop-shadow(0 0 6px ${color}88)`}} />
    </svg>
  );
};

// ===== Ring gauge (no numbers) =====
export const Ring: React.FC<{size: number; pct: number; delay?: number; color?: string; stroke?: number}> = ({size, pct, delay = 0, color = T.orange, stroke = 10}) => {
  const frame = useCurrentFrame();
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const prog = interpolate(frame, [delay, delay + 50], [0, pct], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <svg width={size} height={size}>
      <circle cx={size / 2} cy={size / 2} r={r} stroke="#1c1c28" strokeWidth={stroke} fill="none" />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        stroke={color}
        strokeWidth={stroke}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - prog)}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{filter: `drop-shadow(0 0 8px ${color}66)`}}
      />
    </svg>
  );
};

// ===== Pulsing status dot =====
export const Pulse: React.FC<{color?: string; size?: number}> = ({color = T.green, size = 10}) => {
  const frame = useCurrentFrame();
  const p = (Math.sin(frame / 7) + 1) / 2;
  return (
    <div style={{position: 'relative', width: size, height: size}}>
      <div style={{position: 'absolute', inset: -p * 6, borderRadius: '50%', background: color, opacity: 0.25 * (1 - p)}} />
      <div style={{width: size, height: size, borderRadius: '50%', background: color, boxShadow: `0 0 10px ${color}`}} />
    </div>
  );
};

// ===== Browser window frame =====
export const Window: React.FC<{w: number; h: number; title?: string; children: React.ReactNode; delay?: number}> = ({w, h, title, children, delay = 0}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const s = springIn(frame, fps, delay);
  const zoom = interpolate(frame, [60, 360], [1, 1.025], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <div
      style={{
        width: w,
        height: h,
        borderRadius: 18,
        background: T.bg2,
        border: `1px solid ${T.border}`,
        boxShadow: `0 30px 80px rgba(0,0,0,0.6), 0 0 60px ${T.orangeGlow.replace('0.35', '0.08')}`,
        transform: `translateY(${(1 - s) * 60}px) scale(${(0.94 + s * 0.06) * zoom})`,
        opacity: s,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{height: 42, background: T.bg3, borderBottom: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', padding: '0 16px', gap: 8, flexShrink: 0}}>
        <div style={{width: 11, height: 11, borderRadius: '50%', background: '#ff5f57'}} />
        <div style={{width: 11, height: 11, borderRadius: '50%', background: '#febc2e'}} />
        <div style={{width: 11, height: 11, borderRadius: '50%', background: '#28c840'}} />
        {title && (
          <span style={{marginRight: 'auto', color: T.muted, fontSize: 14, fontWeight: 600, direction: 'rtl'}}>{title}</span>
        )}
      </div>
      <div style={{flex: 1, position: 'relative', padding: 22}}>{children}</div>
    </div>
  );
};

// ===== Small labeled chip =====
export const Chip: React.FC<{text: string; delay?: number; color?: string; icon?: React.ReactNode}> = ({text, delay = 0, color = T.orange, icon}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const s = springIn(frame, fps, delay);
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '9px 18px',
        borderRadius: 999,
        background: `${color}18`,
        border: `1px solid ${color}55`,
        color: T.text,
        fontSize: 17,
        fontWeight: 700,
        transform: `translateY(${(1 - s) * 24}px) scale(${0.9 + s * 0.1})`,
        opacity: s,
        direction: 'rtl',
        whiteSpace: 'nowrap',
      }}
    >
      <span style={{width: 8, height: 8, borderRadius: '50%', background: color, boxShadow: `0 0 8px ${color}`}} />
      {icon}
      {text}
    </div>
  );
};

// ===== Moving dot along a horizontal line (data flow) =====
export const FlowLine: React.FC<{x1: number; y1: number; x2: number; y2: number; delay?: number; color?: string}> = ({x1, y1, x2, y2, delay = 0, color = T.orange}) => {
  const frame = useCurrentFrame();
  const lineOp = fadeIn(frame, delay, 12);
  const t = ((frame - delay) % 55) / 55;
  const dotVisible = frame > delay;
  const dx = x1 + (x2 - x1) * t;
  const dy = y1 + (y2 - y1) * t;
  return (
    <svg style={{position: 'absolute', inset: 0, overflow: 'visible', pointerEvents: 'none'}}>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={2} strokeDasharray="6 7" opacity={lineOp * 0.45} />
      {dotVisible && <circle cx={dx} cy={dy} r={5} fill={color} style={{filter: `drop-shadow(0 0 6px ${color})`}} />}
    </svg>
  );
};

// ===== Generic node box for flow diagrams =====
export const Node: React.FC<{x: number; y: number; w: number; h: number; label: string; delay?: number; color?: string; sub?: string; children?: React.ReactNode}> = ({x, y, w, h, label, delay = 0, color = T.orange, sub, children}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const s = springIn(frame, fps, delay);
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: w,
        height: h,
        borderRadius: 14,
        background: T.bg3,
        border: `1px solid ${color}66`,
        boxShadow: `0 8px 30px rgba(0,0,0,0.45), inset 0 0 24px ${color}0f`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        transform: `scale(${s})`,
        opacity: s,
        direction: 'rtl',
      }}
    >
      {children}
      <span style={{color: T.text, fontSize: 16, fontWeight: 700}}>{label}</span>
      {sub && <span style={{color: T.muted, fontSize: 12.5}}>{sub}</span>}
    </div>
  );
};

// ===== Check mark that pops in =====
export const Check: React.FC<{delay?: number; size?: number; color?: string}> = ({delay = 0, size = 22, color = T.green}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const s = springIn(frame, fps, delay);
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: `scale(${s})`,
        boxShadow: `0 0 12px ${color}88`,
        flexShrink: 0,
      }}
    >
      <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24" fill="none">
        <path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth={3.4} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};
