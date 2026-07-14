import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {T, Shimmer, KpiCard, VBar, HBar, LineChart, Ring, Pulse, Chip, FlowLine, Node, Check, springIn, fadeIn} from './theme';

// ============================================================
// 1) Realtime BI Dashboard
// ============================================================
export const SceneDashboard: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <div style={{position: 'absolute', inset: 0, direction: 'rtl', display: 'flex', flexDirection: 'column', gap: 18}}>
      <div style={{display: 'flex', gap: 14, justifyContent: 'space-between'}}>
        <KpiCard label="مبيعات اليوم" delay={0} color={T.orange} w={200} />
        <KpiCard label="عدد الزوار" delay={8} color={T.blue} w={200} />
        <KpiCard label="معدل التحويل" delay={16} color={T.green} w={200} />
        <KpiCard label="متوسط الفاتورة" delay={24} color={T.yellow} w={200} />
      </div>
      <div style={{display: 'flex', gap: 20, flex: 1, alignItems: 'stretch'}}>
        <div style={{flex: 1.5, background: T.bg3, border: `1px solid ${T.border}`, borderRadius: 14, padding: 16, opacity: fadeIn(frame, 30, 15)}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10}}>
            <Pulse color={T.orange} size={9} />
            <span style={{color: T.muted, fontSize: 14, fontWeight: 700}}>المبيعات لحظة بلحظة</span>
          </div>
          <LineChart w={470} h={140} delay={38} points={[3, 5, 4, 7, 6, 9, 8, 12, 10, 14, 13, 17]} />
        </div>
        <div style={{flex: 1, background: T.bg3, border: `1px solid ${T.border}`, borderRadius: 14, padding: 16, opacity: fadeIn(frame, 45, 15), display: 'flex', flexDirection: 'column'}}>
          <span style={{color: T.muted, fontSize: 14, fontWeight: 700, marginBottom: 10}}>مقارنة الفروع</span>
          <div style={{display: 'flex', gap: 13, alignItems: 'flex-end', flex: 1, paddingBottom: 4}}>
            <VBar h={120} delay={55} />
            <VBar h={88} delay={62} color="#ff7324" />
            <VBar h={132} delay={69} />
            <VBar h={70} delay={76} color="#ff7324" />
            <VBar h={104} delay={83} />
            <VBar h={56} delay={90} color="#ff7324" />
            <VBar h={92} delay={97} />
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================
// 2) Systems Integration / Data Pipeline
// ============================================================
export const ScenePipeline: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <div style={{position: 'absolute', inset: 0}}>
      <Node x={648} y={12} w={196} h={92} label="نظام الكاشير (POS)" delay={0} color={T.blue} sub="فروع المعارض" />
      <Node x={648} y={128} w={196} h={92} label="نظام ERP" delay={10} color={T.yellow} sub="المشتريات والمخزون" />
      <Node x={648} y={244} w={196} h={92} label="عدادات الزوار" delay={20} color={T.green} sub="أجهزة استشعار" />

      <FlowLine x1={646} y1={58} x2={548} y2={160} delay={35} color={T.blue} />
      <FlowLine x1={646} y1={174} x2={548} y2={180} delay={42} color={T.yellow} />
      <FlowLine x1={646} y1={290} x2={548} y2={200} delay={49} color={T.green} />

      <Node x={372} y={122} w={174} h={116} label="قاعدة بيانات موحدة" delay={30} color={T.orange}>
        <svg width={34} height={34} viewBox="0 0 24 24" fill="none" stroke={T.orange} strokeWidth={1.8}>
          <ellipse cx="12" cy="5.5" rx="8" ry="3" />
          <path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13" />
          <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
        </svg>
      </Node>

      <FlowLine x1={370} y1={180} x2={266} y2={180} delay={60} />

      <Node x={52} y={100} w={212} h={160} label="لوحة متابعة موحدة" delay={55} color={T.orange}>
        <div style={{display: 'flex', gap: 8, alignItems: 'flex-end', height: 52}}>
          <VBar h={30} delay={75} w={16} />
          <VBar h={48} delay={82} w={16} />
          <VBar h={38} delay={89} w={16} />
          <VBar h={52} delay={96} w={16} />
        </div>
      </Node>

      <div style={{position: 'absolute', right: 20, bottom: 4, display: 'flex', gap: 12}}>
        <Chip text="مزامنة تلقائية على مدار الساعة" delay={115} />
        <Chip text="بدون إدخال يدوي" delay={135} color={T.green} />
      </div>
    </div>
  );
};

// ============================================================
// 3) Visitor Analytics & Conversion
// ============================================================
export const SceneVisitors: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <div style={{position: 'absolute', inset: 0, direction: 'rtl', display: 'flex', gap: 22}}>
      <div style={{flex: 1.4, background: T.bg3, border: `1px solid ${T.border}`, borderRadius: 14, padding: 18, opacity: fadeIn(frame, 0, 15)}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8}}>
          <Pulse color={T.blue} size={9} />
          <span style={{color: T.muted, fontSize: 14.5, fontWeight: 700}}>حركة الزوار خلال ساعات اليوم</span>
        </div>
        <LineChart w={430} h={150} delay={12} color={T.blue} points={[2, 3, 5, 8, 7, 10, 14, 12, 16, 19, 15, 11, 8]} />
        <div style={{display: 'flex', gap: 10, marginTop: 14}}>
          <Chip text="ساعات الذروة" delay={90} color={T.blue} />
          <Chip text="ربط تلقائي بالعدادات" delay={108} color={T.green} />
        </div>
      </div>
      <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 16, justifyContent: 'center'}}>
        <div style={{background: T.bg3, border: `1px solid ${T.border}`, borderRadius: 14, padding: 18, opacity: fadeIn(frame, 30, 15)}}>
          <span style={{color: T.muted, fontSize: 14, fontWeight: 700, display: 'block', marginBottom: 12}}>قمع التحويل</span>
          <div style={{display: 'flex', flexDirection: 'column', gap: 11}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <span style={{color: T.text, fontSize: 13.5, width: 68}}>الزوار</span>
              <HBar pct={1} delay={45} color={T.blue} w={210} h={14} />
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <span style={{color: T.text, fontSize: 13.5, width: 68}}>المهتمون</span>
              <HBar pct={0.62} delay={60} color={T.yellow} w={210} h={14} />
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <span style={{color: T.text, fontSize: 13.5, width: 68}}>المشترون</span>
              <HBar pct={0.34} delay={75} color={T.green} w={210} h={14} />
            </div>
          </div>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 16, background: T.bg3, border: `1px solid ${T.border}`, borderRadius: 14, padding: 16, opacity: fadeIn(frame, 85, 15)}}>
          <Ring size={78} pct={0.42} delay={95} color={T.green} stroke={9} />
          <div>
            <span style={{color: T.text, fontSize: 15.5, fontWeight: 800, display: 'block'}}>معدل التحويل</span>
            <span style={{color: T.muted, fontSize: 13}}>زوار تحولوا إلى مبيعات فعلية</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================
// 4) Branch Operations App (catalog / orders)
// ============================================================
export const SceneBranchApp: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const steps = ['طلب جديد', 'قيد التجهيز', 'تم الشحن', 'تم الاستلام'];
  const stepDelay = (i: number) => 55 + i * 42;
  return (
    <div style={{position: 'absolute', inset: 0, direction: 'rtl', display: 'flex', gap: 30, alignItems: 'center'}}>
      {/* Phone mockup */}
      <div
        style={{
          width: 205,
          height: 350,
          borderRadius: 26,
          background: T.bg3,
          border: `2px solid ${T.border}`,
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
          padding: 14,
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          transform: `translateY(${(1 - springIn(frame, fps, 0)) * 60}px)`,
          opacity: springIn(frame, fps, 0),
          position: 'relative',
          flexShrink: 0,
        }}
      >
        <Shimmer w={110} h={13} delay={10} />
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9, flex: 1}}>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} style={{background: T.bg2, borderRadius: 11, border: `1px solid ${T.border}`, padding: 8, display: 'flex', flexDirection: 'column', gap: 6, opacity: fadeIn(frame, 16 + i * 7, 10)}}>
              <div style={{flex: 1, borderRadius: 8, background: `linear-gradient(135deg, #1b1b26, #23232f)`}} />
              <Shimmer w={52} h={8} delay={20 + i * 7} />
              <HBar pct={0.5 + (i % 3) * 0.2} delay={26 + i * 7} w={62} h={5} />
            </div>
          ))}
        </div>
        {/* Cart button */}
        <div
          style={{
            position: 'absolute',
            bottom: 18,
            left: 16,
            width: 46,
            height: 46,
            borderRadius: '50%',
            background: T.orange,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 0 ${14 + Math.sin(frame / 6) * 6}px ${T.orangeGlow}`,
            transform: `scale(${springIn(frame, fps, 45)})`,
          }}
        >
          <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2}>
            <circle cx="9" cy="20" r="1.6" />
            <circle cx="18" cy="20" r="1.6" />
            <path d="M2 3h3l2.6 12.5a1.5 1.5 0 0 0 1.5 1.2h8.6a1.5 1.5 0 0 0 1.5-1.2L21 7H6" />
          </svg>
        </div>
      </div>

      {/* Order lifecycle */}
      <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 4}}>
        <span style={{color: T.text, fontSize: 17, fontWeight: 800, marginBottom: 14, opacity: fadeIn(frame, 40, 12)}}>دورة حياة الطلبية — من الفرع إلى المستودع</span>
        {steps.map((s, i) => (
          <div key={s} style={{display: 'flex', alignItems: 'center', gap: 14, minHeight: 62}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Check delay={stepDelay(i)} size={26} color={i === steps.length - 1 ? T.green : T.orange} />
              {i < steps.length - 1 && (
                <div style={{width: 3, height: 36, background: '#1c1c28', borderRadius: 2, overflow: 'hidden', marginTop: 4}}>
                  <div style={{width: '100%', height: `${interpolate(frame, [stepDelay(i) + 10, stepDelay(i) + 38], [0, 100], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}%`, background: T.orange}} />
                </div>
              )}
            </div>
            <div style={{opacity: fadeIn(frame, stepDelay(i), 12), display: 'flex', flexDirection: 'column', gap: 5, transform: 'translateY(-18px)'}}>
              <span style={{color: T.text, fontSize: 16, fontWeight: 700}}>{s}</span>
              <Shimmer w={150} h={9} delay={stepDelay(i) + 6} />
            </div>
          </div>
        ))}
        <div style={{marginTop: 2}}>
          <Chip text="إشعار لحظي لكل تغيير حالة" delay={225} color={T.green} />
        </div>
      </div>
    </div>
  );
};

// ============================================================
// 5) Inventory Intelligence
// ============================================================
export const SceneInventory: React.FC = () => {
  const frame = useCurrentFrame();
  // Bar #2 drains, alert fires, transfer refills it
  const drain = interpolate(frame, [30, 95], [128, 34], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const refill = interpolate(frame, [175, 225], [0, 74], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const alertOn = frame > 100 && frame < 185;
  const heights = [112, 0, 96, 140, 78];
  return (
    <div style={{position: 'absolute', inset: 0, direction: 'rtl'}}>
      <div style={{position: 'absolute', right: 10, top: 8, display: 'flex', alignItems: 'center', gap: 8, opacity: fadeIn(frame, 0, 12)}}>
        <Pulse color={T.orange} size={9} />
        <span style={{color: T.muted, fontSize: 15, fontWeight: 700}}>مستويات المخزون عبر الفروع</span>
      </div>

      <div style={{position: 'absolute', right: 30, bottom: 66, display: 'flex', gap: 42, alignItems: 'flex-end', height: 210}}>
        {heights.map((h, i) => (
          <div key={i} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8}}>
            {i === 1 ? (
              <div style={{position: 'relative'}}>
                <div
                  style={{
                    width: 46,
                    height: drain + refill,
                    borderRadius: 8,
                    background: alertOn
                      ? `linear-gradient(180deg, ${T.red}, ${T.red}66)`
                      : `linear-gradient(180deg, ${frame >= 175 ? T.green : T.orange}, ${frame >= 175 ? T.green : T.orange}55)`,
                    boxShadow: alertOn ? `0 0 ${16 + Math.sin(frame / 4) * 8}px ${T.red}88` : 'none',
                  }}
                />
              </div>
            ) : (
              <VBar h={h} delay={8 + i * 8} w={46} color={i === 3 ? '#ff7324' : T.orange} />
            )}
            <Shimmer w={54} h={9} delay={14 + i * 8} />
          </div>
        ))}
      </div>

      {/* Alert badge */}
      {alertOn && (
        <div style={{position: 'absolute', right: 96, top: 60, background: `${T.red}22`, border: `1px solid ${T.red}`, borderRadius: 10, padding: '8px 14px', color: T.red, fontSize: 14.5, fontWeight: 800, opacity: fadeIn(frame, 102, 8)}}>
          تنبيه: صنف سريع على وشك النفاد
        </div>
      )}

      {/* Transfer arrow from the well-stocked bar to the drained one */}
      {frame > 150 && <FlowLine x1={559} y1={120} x2={735} y2={120} delay={150} color={T.green} />}

      {/* Recommendation card */}
      <div style={{position: 'absolute', left: 14, top: 40, width: 250, background: T.bg3, border: `1px solid ${T.border}`, borderRadius: 14, padding: 16, opacity: fadeIn(frame, 120, 15), display: 'flex', flexDirection: 'column', gap: 10}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={T.green} strokeWidth={2}>
            <path d="M9 18l-6-6 6-6M3 12h18" />
          </svg>
          <span style={{color: T.text, fontSize: 15, fontWeight: 800}}>توصية نقل ذكية</span>
        </div>
        <Shimmer w={200} h={10} delay={132} />
        <Shimmer w={160} h={10} delay={140} />
        <div style={{display: 'flex', alignItems: 'center', gap: 8, marginTop: 4}}>
          <Check delay={172} size={20} />
          <span style={{color: T.green, fontSize: 13.5, fontWeight: 700, opacity: fadeIn(frame, 176, 10)}}>تم اعتماد التحويل بين الفروع</span>
        </div>
      </div>

      <div style={{position: 'absolute', left: 14, bottom: 6}}>
        <Chip text="رصد الرواكد قبل أن تتراكم" delay={205} color={T.yellow} />
      </div>
    </div>
  );
};

// ============================================================
// 6) Product & Basket Analytics
// ============================================================
export const SceneBasket: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const cx = 620;
  const cy = 185;
  const sats = [
    {x: 500, y: 70},
    {x: 760, y: 90},
    {x: 490, y: 300},
    {x: 750, y: 290},
  ];
  return (
    <div style={{position: 'absolute', inset: 0}}>
      {/* Network links */}
      <svg style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
        {sats.map((s, i) => {
          const len = Math.hypot(s.x - cx, s.y - cy);
          const drawn = interpolate(frame, [30 + i * 12, 60 + i * 12], [len, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
          return <line key={i} x1={cx} y1={cy} x2={s.x} y2={s.y} stroke={T.orange} strokeWidth={2} strokeDasharray={len} strokeDashoffset={drawn} opacity={0.55} />;
        })}
      </svg>
      {/* Center product */}
      <div style={{position: 'absolute', left: cx - 52, top: cy - 52, width: 104, height: 104, borderRadius: '50%', background: T.bg3, border: `2px solid ${T.orange}`, boxShadow: `0 0 30px ${T.orangeGlow}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6, transform: `scale(${springIn(frame, fps, 8)})`}}>
        <svg width={30} height={30} viewBox="0 0 24 24" fill="none" stroke={T.orange} strokeWidth={1.8}>
          <path d="M21 8l-9-5-9 5v8l9 5 9-5V8z" />
          <path d="M3 8l9 5 9-5M12 13v8" />
        </svg>
        <span style={{color: T.text, fontSize: 11.5, fontWeight: 700}}>منتج محوري</span>
      </div>
      {/* Satellites */}
      {sats.map((s, i) => (
        <div key={i} style={{position: 'absolute', left: s.x - 36, top: s.y - 36, width: 72, height: 72, borderRadius: '50%', background: T.bg3, border: `1.5px solid ${T.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: `scale(${springIn(frame, fps, 45 + i * 12)})`}}>
          <Shimmer w={38} h={9} delay={50 + i * 12} />
        </div>
      ))}
      <div style={{position: 'absolute', left: cx - 80, top: cy + 78, opacity: fadeIn(frame, 95, 12)}}>
        <Chip text="منتجات تُشترى معاً" delay={95} />
      </div>

      {/* Ranking list */}
      <div style={{position: 'absolute', right: 14, top: 20, width: 280, background: T.bg3, border: `1px solid ${T.border}`, borderRadius: 14, padding: 16, direction: 'rtl', opacity: fadeIn(frame, 60, 15)}}>
        <span style={{color: T.muted, fontSize: 14, fontWeight: 700, display: 'block', marginBottom: 12}}>الأكثر مبيعاً حسب الفئة</span>
        {[0.95, 0.74, 0.55, 0.38].map((p, i) => (
          <div key={i} style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 11}}>
            <div style={{width: 22, height: 22, borderRadius: 7, background: i === 0 ? T.orange : '#1c1c28', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
              <div style={{width: 7, height: 7, borderRadius: '50%', background: i === 0 ? '#fff' : T.muted}} />
            </div>
            <Shimmer w={64} h={10} delay={72 + i * 10} />
            <HBar pct={p} delay={78 + i * 10} w={120} h={9} color={i === 0 ? T.orange : '#3a3a4a'} />
          </div>
        ))}
        <Chip text="اتجاه صاعد" delay={150} color={T.green} />
      </div>
    </div>
  );
};
