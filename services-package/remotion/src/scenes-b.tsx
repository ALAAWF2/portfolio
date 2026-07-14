import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {T, Shimmer, VBar, HBar, LineChart, Ring, Pulse, Chip, FlowLine, Node, Check, springIn, fadeIn} from './theme';

// ============================================================
// 7) Targets & Team Performance
// ============================================================
export const SceneTargets: React.FC = () => {
  const frame = useCurrentFrame();
  const rows = [
    {pct: 1.0, color: T.green},
    {pct: 0.82, color: T.orange},
    {pct: 0.64, color: T.orange},
    {pct: 0.45, color: T.yellow},
  ];
  return (
    <div style={{position: 'absolute', inset: 0, direction: 'rtl', display: 'flex', gap: 24, alignItems: 'center'}}>
      <div style={{flex: 1.4, background: T.bg3, border: `1px solid ${T.border}`, borderRadius: 14, padding: 20, opacity: fadeIn(frame, 0, 14)}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16}}>
          <Pulse color={T.orange} size={9} />
          <span style={{color: T.muted, fontSize: 15, fontWeight: 700}}>لوحة شرف الفريق — تحقيق الأهداف</span>
        </div>
        {rows.map((r, i) => (
          <div key={i} style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 15}}>
            <div style={{width: 30, height: 30, borderRadius: 9, background: i === 0 ? `${T.orange}` : '#1c1c28', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transform: `scale(${springIn(frame, 30, 12 + i * 10)})`}}>
              {i === 0 ? (
                <svg width={16} height={16} viewBox="0 0 24 24" fill="#fff"><path d="M12 2l2.5 6.5H21l-5 4 2 6.5-6-4-6 4 2-6.5-5-4h6.5z" /></svg>
              ) : (
                <div style={{width: 8, height: 8, borderRadius: '50%', background: T.muted}} />
              )}
            </div>
            <div style={{width: 42, height: 42, borderRadius: '50%', background: '#1b1b26', border: `1.5px solid ${T.border}`, flexShrink: 0}} />
            <Shimmer w={92} h={11} delay={16 + i * 10} />
            <HBar pct={r.pct} delay={24 + i * 10} color={r.color} w={190} h={11} />
            {i === 0 && <Check delay={80} size={22} />}
          </div>
        ))}
      </div>
      <div style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18}}>
        <div style={{position: 'relative', opacity: fadeIn(frame, 50, 14)}}>
          <Ring size={168} pct={0.78} delay={60} stroke={15} />
          <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6}}>
            <svg width={30} height={30} viewBox="0 0 24 24" fill="none" stroke={T.orange} strokeWidth={2}>
              <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.4" fill={T.orange} />
            </svg>
            <span style={{color: T.text, fontSize: 15, fontWeight: 800}}>هدف الشهر</span>
          </div>
        </div>
        <Chip text="توزيع الأهداف تلقائياً على الفريق" delay={130} />
        <Chip text="متابعة يومية بلا جداول يدوية" delay={155} color={T.green} />
      </div>
    </div>
  );
};

// ============================================================
// 8) Automated Reports & Scheduled Delivery
// ============================================================
export const SceneReports: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const channels = [
    {label: 'بريد إلكتروني يومي', y: 30},
    {label: 'رسائل واتساب للفريق', y: 145},
    {label: 'أرشفة تلقائية', y: 260},
  ];
  return (
    <div style={{position: 'absolute', inset: 0}}>
      {/* Document being generated */}
      <div style={{position: 'absolute', right: 40, top: 22, width: 265, height: 320, background: T.bg3, border: `1px solid ${T.border}`, borderRadius: 14, padding: 20, direction: 'rtl', transform: `translateY(${(1 - springIn(frame, fps, 0)) * 50}px)`, opacity: springIn(frame, fps, 0), display: 'flex', flexDirection: 'column', gap: 12}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 9}}>
          <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke={T.orange} strokeWidth={1.8}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" />
          </svg>
          <span style={{color: T.text, fontSize: 15.5, fontWeight: 800}}>التقرير اليومي</span>
        </div>
        <Shimmer w={200} h={10} delay={14} />
        <Shimmer w={170} h={10} delay={22} />
        <Shimmer w={215} h={10} delay={30} />
        <div style={{display: 'flex', gap: 8, alignItems: 'flex-end', height: 74, marginTop: 4}}>
          <VBar h={38} delay={40} w={20} />
          <VBar h={62} delay={47} w={20} />
          <VBar h={46} delay={54} w={20} />
          <VBar h={70} delay={61} w={20} />
          <VBar h={30} delay={68} w={20} />
        </div>
        <Shimmer w={190} h={10} delay={74} />
        <div style={{display: 'flex', alignItems: 'center', gap: 8, marginTop: 'auto'}}>
          <Check delay={95} size={22} />
          <span style={{color: T.green, fontSize: 13.5, fontWeight: 700, opacity: fadeIn(frame, 100, 8)}}>جاهز — تولّد بدون أي تدخل</span>
        </div>
      </div>

      {/* Flow to channels */}
      {channels.map((c, i) => (
        <FlowLine key={i} x1={318} y1={180} x2={238} y2={c.y + 45} delay={115 + i * 14} />
      ))}

      {channels.map((c, i) => (
        <Node key={c.label} x={20} y={c.y} w={216} h={92} label={c.label} delay={125 + i * 16} color={i === 1 ? T.green : T.orange}>
          <Check delay={160 + i * 18} size={22} color={i === 1 ? T.green : T.orange} />
        </Node>
      ))}

      <div style={{position: 'absolute', right: 44, bottom: 2}}>
        <Chip text="مجدولة صباح كل يوم تلقائياً" delay={220} color={T.yellow} />
      </div>
    </div>
  );
};

// ============================================================
// 9) AI Business Assistant
// ============================================================
export const SceneAiChat: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const q = 'كيف كان أداء الفروع هذا الأسبوع؟';
  const typed = q.slice(0, Math.max(0, Math.floor((frame - 15) * 0.9)));
  const showTyping = frame > 70 && frame < 110;
  const showAnswer = frame >= 110;
  return (
    <div style={{position: 'absolute', inset: 0, direction: 'rtl', display: 'flex', flexDirection: 'column', padding: '4px 40px', gap: 16}}>
      {/* User bubble */}
      <div style={{alignSelf: 'flex-start', maxWidth: 420, background: `linear-gradient(135deg, ${T.orange}, #ff7324)`, borderRadius: '18px 18px 4px 18px', padding: '14px 20px', color: '#fff', fontSize: 17, fontWeight: 700, opacity: fadeIn(frame, 8, 10), minHeight: 50, boxShadow: `0 8px 30px ${T.orangeGlow}`}}>
        {typed}
        {frame < 70 && <span style={{opacity: Math.sin(frame / 3) > 0 ? 1 : 0}}>|</span>}
      </div>

      {/* Typing indicator */}
      {showTyping && (
        <div style={{alignSelf: 'flex-end', background: T.bg3, border: `1px solid ${T.border}`, borderRadius: '18px 18px 18px 4px', padding: '14px 22px', display: 'flex', gap: 6}}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{width: 8, height: 8, borderRadius: '50%', background: T.muted, transform: `translateY(${Math.sin((frame + i * 5) / 4) * 4}px)`}} />
          ))}
        </div>
      )}

      {/* Bot answer with chart */}
      {showAnswer && (
        <div style={{alignSelf: 'flex-end', width: 480, background: T.bg3, border: `1px solid ${T.border}`, borderRadius: '18px 18px 18px 4px', padding: 18, transform: `scale(${springIn(frame, fps, 110)})`, transformOrigin: 'bottom left', display: 'flex', flexDirection: 'column', gap: 12}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 9}}>
            <div style={{width: 30, height: 30, borderRadius: '50%', background: `${T.orange}22`, border: `1px solid ${T.orange}66`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke={T.orange} strokeWidth={2}>
                <rect x="5" y="8" width="14" height="11" rx="3" /><path d="M12 8V4M8 4h8" /><circle cx="9.5" cy="13" r="1" fill={T.orange} /><circle cx="14.5" cy="13" r="1" fill={T.orange} />
              </svg>
            </div>
            <span style={{color: T.text, fontSize: 15.5, fontWeight: 800}}>إليك ملخص الأداء التنفيذي</span>
          </div>
          <LineChart w={430} h={100} delay={125} points={[4, 6, 5, 8, 7, 11, 9, 13, 15]} />
          <div style={{display: 'flex', gap: 10}}>
            <Chip text="نمو مستمر" delay={175} color={T.green} />
            <Chip text="فرع يحتاج متابعة" delay={192} color={T.yellow} />
          </div>
        </div>
      )}

      {/* Input bar */}
      <div style={{marginTop: 'auto', display: 'flex', gap: 10, alignItems: 'center', background: T.bg3, border: `1px solid ${T.border}`, borderRadius: 999, padding: '10px 20px', opacity: fadeIn(frame, 0, 12)}}>
        <span style={{color: T.muted, fontSize: 14.5}}>اسأل عن أي رقم في عملك…</span>
        <div style={{marginRight: 'auto', width: 38, height: 38, borderRadius: '50%', background: T.orange, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 ${10 + Math.sin(frame / 5) * 5}px ${T.orangeGlow}`}}>
          <svg width={17} height={17} viewBox="0 0 24 24" fill="#fff"><path d="M2 21l21-9L2 3v7l15 2-15 2z" /></svg>
        </div>
      </div>
    </div>
  );
};

// ============================================================
// 10) E-commerce & Marketplace Sync
// ============================================================
export const SceneEcommerce: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <div style={{position: 'absolute', inset: 0}}>
      <Node x={655} y={30} w={190} h={104} label="المتجر الإلكتروني" delay={0} color={T.blue}>
        <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke={T.blue} strokeWidth={1.8}>
          <path d="M3 9l1.5-5h15L21 9" /><path d="M4 9h16v11H4z" /><path d="M9 20v-6h6v6" />
        </svg>
      </Node>
      <Node x={655} y={230} w={190} h={104} label="منصات التسوق" delay={14} color={T.yellow}>
        <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke={T.yellow} strokeWidth={1.8}>
          <circle cx="9" cy="20" r="1.6" /><circle cx="18" cy="20" r="1.6" /><path d="M2 3h3l2.6 12.5a1.5 1.5 0 0 0 1.5 1.2h8.6a1.5 1.5 0 0 0 1.5-1.2L21 7H6" />
        </svg>
      </Node>

      <FlowLine x1={653} y1={82} x2={520} y2={165} delay={35} color={T.blue} />
      <FlowLine x1={653} y1={282} x2={520} y2={205} delay={45} color={T.yellow} />

      <Node x={345} y={130} w={172} h={116} label="محرك المزامنة" delay={28} color={T.orange} sub="طلبات • مخزون • فواتير">
        <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke={T.orange} strokeWidth={1.8} style={{transform: `rotate(${frame * 2.4}deg)`}}>
          <path d="M21 12a9 9 0 1 1-2.6-6.4" /><path d="M21 3v6h-6" />
        </svg>
      </Node>

      <FlowLine x1={343} y1={188} x2={252} y2={188} delay={62} />

      <Node x={40} y={112} w={210} h={152} label="نظام ERP والمخزون" delay={55} color={T.green}>
        <div style={{display: 'flex', flexDirection: 'column', gap: 7, alignItems: 'center'}}>
          <Shimmer w={130} h={9} delay={75} />
          <Shimmer w={100} h={9} delay={83} />
          <div style={{display: 'flex', alignItems: 'center', gap: 7, marginTop: 3}}>
            <Check delay={100} size={20} />
            <span style={{color: T.green, fontSize: 12.5, fontWeight: 700, opacity: fadeIn(frame, 104, 8)}}>مخزون محدّث</span>
          </div>
        </div>
      </Node>

      <div style={{position: 'absolute', left: 40, bottom: 2, display: 'flex', gap: 12}}>
        <Chip text="فواتير تُرفع تلقائياً" delay={140} />
        <Chip text="لا بيع بالخطأ بعد اليوم" delay={162} color={T.green} />
      </div>
    </div>
  );
};

// ============================================================
// 11) Mission Control (Unified Admin)
// ============================================================
export const SceneMissionControl: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const cards = ['الخوادم', 'المزامنة', 'أجهزة الفروع', 'قاعدة البيانات', 'النسخ الاحتياطي', 'التقارير'];
  const alertIdx = 2;
  const alertOn = frame > 95 && frame < 215;
  return (
    <div style={{position: 'absolute', inset: 0, direction: 'rtl'}}>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, padding: '6px 4px'}}>
        {cards.map((c, i) => {
          const isAlert = i === alertIdx && alertOn;
          const col = isAlert ? T.red : T.green;
          return (
            <div key={c} style={{background: T.bg3, border: `1px solid ${isAlert ? T.red : T.border}`, borderRadius: 14, padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 12, transform: `translateY(${(1 - springIn(frame, fps, i * 9)) * 34}px)`, opacity: springIn(frame, fps, i * 9), boxShadow: isAlert ? `0 0 22px ${T.red}44` : 'none'}}>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <span style={{color: T.text, fontSize: 15.5, fontWeight: 800}}>{c}</span>
                <Pulse color={col} size={10} />
              </div>
              <Shimmer w={130} h={9} delay={12 + i * 9} />
              <span style={{fontSize: 13, fontWeight: 700, color: col}}>{isAlert ? 'انقطاع مرصود' : 'يعمل بشكل سليم'}</span>
            </div>
          );
        })}
      </div>

      {/* Toast notification */}
      {alertOn && (
        <div style={{position: 'absolute', bottom: 14, left: 14, background: T.bg2, border: `1px solid ${T.red}88`, borderRadius: 13, padding: '13px 18px', display: 'flex', alignItems: 'center', gap: 11, transform: `translateX(${(springIn(frame, fps, 105) - 1) * -60}px)`, opacity: springIn(frame, fps, 105), boxShadow: '0 14px 40px rgba(0,0,0,0.5)'}}>
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={T.red} strokeWidth={2}>
            <path d="M12 3l10 18H2z" /><path d="M12 10v5" /><circle cx="12" cy="18.2" r="0.6" fill={T.red} />
          </svg>
          <span style={{color: T.text, fontSize: 14.5, fontWeight: 700}}>تنبيه فوري أُرسل للمسؤول — قبل أن يلاحظه أحد</span>
        </div>
      )}

      {/* Recovered chip */}
      {frame >= 220 && (
        <div style={{position: 'absolute', bottom: 14, left: 14, display: 'flex', alignItems: 'center', gap: 10}}>
          <Check delay={222} size={24} />
          <span style={{color: T.green, fontSize: 15, fontWeight: 800, opacity: fadeIn(frame, 226, 10)}}>تعافى النظام تلقائياً</span>
        </div>
      )}
    </div>
  );
};

// ============================================================
// 12) Finance & VAT Reporting
// ============================================================
export const SceneFinance: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  return (
    <div style={{position: 'absolute', inset: 0, direction: 'rtl', display: 'flex', gap: 24, alignItems: 'center'}}>
      <div style={{flex: 1.4, background: T.bg3, border: `1px solid ${T.border}`, borderRadius: 14, padding: 20, opacity: fadeIn(frame, 0, 14)}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8}}>
          <Pulse color={T.orange} size={9} />
          <span style={{color: T.muted, fontSize: 15, fontWeight: 700}}>الإيرادات مقابل الضريبة المستحقة</span>
        </div>
        <div style={{position: 'relative'}}>
          <LineChart w={440} h={150} delay={15} points={[5, 7, 6, 9, 11, 10, 13, 15, 14, 18]} />
          <div style={{position: 'absolute', inset: 0}}>
            <LineChart w={440} h={150} delay={35} color={T.blue} fill={false} points={[2, 3, 2.5, 3.5, 4, 3.8, 4.6, 5.2, 5, 6]} />
          </div>
        </div>
        <div style={{display: 'flex', gap: 16, marginTop: 12}}>
          <span style={{display: 'flex', alignItems: 'center', gap: 7, color: T.muted, fontSize: 13.5}}><span style={{width: 10, height: 10, borderRadius: 3, background: T.orange}} /> صافي المبيعات</span>
          <span style={{display: 'flex', alignItems: 'center', gap: 7, color: T.muted, fontSize: 13.5}}><span style={{width: 10, height: 10, borderRadius: 3, background: T.blue}} /> ضريبة القيمة المضافة</span>
        </div>
      </div>

      <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 16}}>
        <div style={{background: T.bg3, border: `1px solid ${T.border}`, borderRadius: 14, padding: 18, transform: `translateY(${(1 - springIn(frame, fps, 40)) * 40}px)`, opacity: springIn(frame, fps, 40), display: 'flex', flexDirection: 'column', gap: 11}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 9}}>
            <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke={T.orange} strokeWidth={1.8}>
              <path d="M6 3h12v18l-3-2-3 2-3-2-3 2z" /><path d="M9 8h6M9 12h6" />
            </svg>
            <span style={{color: T.text, fontSize: 15.5, fontWeight: 800}}>الإقرار الضريبي للفترة</span>
          </div>
          <Shimmer w={190} h={10} delay={55} />
          <Shimmer w={150} h={10} delay={63} />
          <Shimmer w={210} h={10} delay={71} />
          <div style={{display: 'flex', alignItems: 'center', gap: 9, marginTop: 4}}>
            <Check delay={100} size={22} />
            <span style={{color: T.green, fontSize: 13.5, fontWeight: 700, opacity: fadeIn(frame, 104, 10)}}>مطابق لسجلات نقاط البيع</span>
          </div>
        </div>
        <div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
          <Chip text="تصدير بضغطة واحدة" delay={150} />
          <Chip text="تدقيق تلقائي للفروقات" delay={172} color={T.green} />
        </div>
      </div>
    </div>
  );
};
