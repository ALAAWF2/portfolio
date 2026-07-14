import React from 'react';
import {AbsoluteFill, Sequence, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {loadFont} from '@remotion/google-fonts/IBMPlexSansArabic';
import {T, Chip} from './theme';
import {SceneDashboard, ScenePipeline, SceneVisitors, SceneBranchApp, SceneInventory, SceneBasket} from './scenes-a';
import {SceneTargets, SceneReports, SceneAiChat, SceneEcommerce, SceneMissionControl, SceneFinance} from './scenes-b';

const {fontFamily} = loadFont();

const SCENES: Record<string, React.FC> = {
  dashboard: SceneDashboard,
  pipeline: ScenePipeline,
  visitors: SceneVisitors,
  branchapp: SceneBranchApp,
  inventory: SceneInventory,
  basket: SceneBasket,
  targets: SceneTargets,
  reports: SceneReports,
  aichat: SceneAiChat,
  ecommerce: SceneEcommerce,
  missioncontrol: SceneMissionControl,
  finance: SceneFinance,
};

// Simple stroke icons keyed by scene
const ICONS: Record<string, React.ReactNode> = {
  dashboard: <><path d="M4 14a8 8 0 1 1 16 0" /><path d="M12 14l4-4" /><path d="M4 19h16" /></>,
  pipeline: <><circle cx="5" cy="6" r="2.2" /><circle cx="5" cy="18" r="2.2" /><circle cx="19" cy="12" r="2.2" /><path d="M7 6h6a3 3 0 0 1 3 3v0M7 18h6a3 3 0 0 0 3-3v0" /></>,
  visitors: <><circle cx="9" cy="8" r="3.2" /><path d="M3.5 20v-1.5A5.5 5.5 0 0 1 9 13h0a5.5 5.5 0 0 1 5.5 5.5V20" /><circle cx="17.5" cy="9" r="2.4" /><path d="M15.5 20v-1a4.5 4.5 0 0 1 6-4.2" /></>,
  branchapp: <><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M11 18.5h2" /></>,
  inventory: <><path d="M21 8l-9-5-9 5v8l9 5 9-5V8z" /><path d="M3 8l9 5 9-5M12 13v8" /></>,
  basket: <><path d="M5.5 9h13L17 20h-10z" /><path d="M9 9V7a3 3 0 0 1 6 0v2" /></>,
  targets: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.3" /></>,
  reports: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M8 13h8M8 17h5" /></>,
  aichat: <><rect x="4" y="7" width="16" height="12" rx="3" /><path d="M12 7V3.5M9 3.5h6" /><circle cx="9" cy="13" r="1.1" /><circle cx="15" cy="13" r="1.1" /></>,
  ecommerce: <><path d="M3 9l1.5-5h15L21 9" /><path d="M4 9h16v11H4z" /><path d="M9 20v-6h6v6" /></>,
  missioncontrol: <><path d="M12 3l8 3v6c0 4-3.4 7.4-8 9-4.6-1.6-8-5-8-9V6z" /><path d="M9 12l2 2 4-4" /></>,
  finance: <><path d="M6 3h12v18l-3-2-3 2-3-2-3 2z" /><path d="M9 8h6M9 12h6" /></>,
};

export type ServiceProps = {
  title: string;
  subtitle: string;
  features: string[];
  scene: string;
};

const DotGrid: React.FC = () => (
  <AbsoluteFill
    style={{
      backgroundImage: `radial-gradient(rgba(255,92,0,0.05) 1.2px, transparent 1.2px)`,
      backgroundSize: '34px 34px',
    }}
  />
);

const Glow: React.FC = () => {
  const frame = useCurrentFrame();
  const breathe = 0.85 + Math.sin(frame / 40) * 0.15;
  return (
    <AbsoluteFill>
      <div style={{position: 'absolute', top: -260, right: -180, width: 720, height: 720, borderRadius: '50%', background: `radial-gradient(circle, rgba(255,92,0,${0.13 * breathe}), transparent 65%)`}} />
      <div style={{position: 'absolute', bottom: -320, left: -220, width: 700, height: 700, borderRadius: '50%', background: `radial-gradient(circle, rgba(255,92,0,${0.07 * breathe}), transparent 65%)`}} />
    </AbsoluteFill>
  );
};

const IconBadge: React.FC<{scene: string; size?: number; delay?: number}> = ({scene, size = 64, delay = 0}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const s = spring({frame: frame - delay, fps, config: {damping: 11, stiffness: 130, mass: 0.7}});
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.28,
        background: `linear-gradient(135deg, ${T.orange}, #ff7b2e)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: `0 12px 40px ${T.orangeGlow}`,
        transform: `scale(${s}) rotate(${(1 - s) * -14}deg)`,
        flexShrink: 0,
      }}
    >
      <svg width={size * 0.52} height={size * 0.52} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
        {ICONS[scene]}
      </svg>
    </div>
  );
};

// ===== Intro overlay (0 → 78) =====
const Intro: React.FC<{title: string; subtitle: string; scene: string}> = ({title, subtitle, scene}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const titleS = spring({frame: frame - 6, fps, config: {damping: 13, stiffness: 110, mass: 0.7}});
  const out = interpolate(frame, [58, 76], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const outY = interpolate(frame, [58, 76], [0, -46], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', opacity: out, transform: `translateY(${outY}px)`, gap: 26}}>
      <IconBadge scene={scene} size={92} delay={0} />
      <div style={{textAlign: 'center', direction: 'rtl', transform: `translateY(${(1 - titleS) * 34}px)`, opacity: titleS}}>
        <h1 style={{margin: 0, fontSize: 52, fontWeight: 800, color: T.text, letterSpacing: '-0.5px'}}>{title}</h1>
        <p style={{margin: '14px 0 0', fontSize: 22, color: T.muted, fontWeight: 500}}>{subtitle}</p>
      </div>
      <div style={{width: interpolate(frame, [14, 48], [0, 190], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}), height: 4, borderRadius: 4, background: `linear-gradient(90deg, ${T.orange}, #ff8c2a)`, boxShadow: `0 0 14px ${T.orangeGlow}`}} />
    </AbsoluteFill>
  );
};

// ===== Main composition =====
export const ServiceVideo: React.FC<ServiceProps> = ({title, subtitle, features, scene}) => {
  const frame = useCurrentFrame();
  const Scene = SCENES[scene];
  const headerOp = interpolate(frame, [70, 86], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const endFade = interpolate(frame, [362, 375], [1, 0.92], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill style={{background: T.bg, fontFamily: `'${fontFamily}', sans-serif`}}>
      <DotGrid />
      <Glow />

      <AbsoluteFill style={{opacity: endFade}}>
        {/* Header (after intro) */}
        <div style={{position: 'absolute', top: 26, right: 44, display: 'flex', alignItems: 'center', gap: 16, direction: 'rtl', opacity: headerOp}}>
          <IconBadge scene={scene} size={50} delay={70} />
          <div>
            <div style={{fontSize: 25, fontWeight: 800, color: T.text}}>{title}</div>
            <div style={{fontSize: 14.5, color: T.muted, marginTop: 2}}>{subtitle}</div>
          </div>
        </div>

        {/* Scene window */}
        <Sequence from={72} layout="none">
          <div style={{position: 'absolute', top: 104, left: '50%', transform: 'translateX(-50%)'}}>
            <SceneWindow>{Scene ? <Scene /> : null}</SceneWindow>
          </div>
        </Sequence>

        {/* Feature pills */}
        <Sequence from={72} layout="none">
          <div style={{position: 'absolute', bottom: 24, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 16, direction: 'rtl'}}>
            {features.map((f, i) => (
              <Chip key={f} text={f} delay={178 + i * 22} color={i === 1 ? '#ff7324' : T.orange} />
            ))}
          </div>
        </Sequence>
      </AbsoluteFill>

      {/* Intro on top */}
      {frame < 80 && <Intro title={title} subtitle={subtitle} scene={scene} />}
    </AbsoluteFill>
  );
};

// Window wrapper sized for scenes (content area ≈ 876 × 386)
const SceneWindow: React.FC<{children: React.ReactNode}> = ({children}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const s = spring({frame, fps, config: {damping: 14, stiffness: 90, mass: 0.8}});
  const zoom = interpolate(frame, [0, 290], [1, 1.02], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <div
      style={{
        width: 920,
        height: 472,
        borderRadius: 18,
        background: T.bg2,
        border: `1px solid ${T.border}`,
        boxShadow: `0 30px 90px rgba(0,0,0,0.65), 0 0 70px rgba(255,92,0,0.07)`,
        transform: `translateY(${(1 - s) * 70}px) scale(${(0.94 + s * 0.06) * zoom})`,
        opacity: s,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{height: 40, background: T.bg3, borderBottom: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', padding: '0 16px', gap: 8, flexShrink: 0}}>
        <div style={{width: 11, height: 11, borderRadius: '50%', background: '#ff5f57'}} />
        <div style={{width: 11, height: 11, borderRadius: '50%', background: '#febc2e'}} />
        <div style={{width: 11, height: 11, borderRadius: '50%', background: '#28c840'}} />
        <div style={{marginRight: 'auto', marginLeft: 12, width: 250, height: 16, borderRadius: 8, background: '#1a1a25'}} />
      </div>
      <div style={{flex: 1, position: 'relative', padding: 22}}>{children}</div>
    </div>
  );
};
