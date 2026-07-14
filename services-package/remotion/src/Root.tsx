import React from 'react';
import {Composition} from 'remotion';
import {ServiceVideo, ServiceProps} from './ServiceVideo';

export type ServiceDef = ServiceProps & {id: string};

export const SERVICES: ServiceDef[] = [
  {
    id: 'realtime-dashboards',
    title: 'لوحات متابعة الأداء اللحظية',
    subtitle: 'كل أرقام شركتك في شاشة واحدة تتحدث تلقائياً',
    features: ['تحديث تلقائي على مدار اليوم', 'مقارنات ذكية بين الفروع', 'تعمل على الجوال والكمبيوتر'],
    scene: 'dashboard',
  },
  {
    id: 'systems-integration',
    title: 'تكامل الأنظمة وخطوط البيانات',
    subtitle: 'أنظمتك المختلفة تتحدث مع بعضها كنظام واحد',
    features: ['ربط ERP ونقاط البيع', 'قاعدة بيانات موحدة', 'بدون أي إدخال يدوي'],
    scene: 'pipeline',
  },
  {
    id: 'visitor-analytics',
    title: 'تحليلات الزوار ومعدل التحويل',
    subtitle: 'اعرف كم زائر دخل فرعك وكم منهم اشترى فعلاً',
    features: ['ربط مباشر بعدادات الزوار', 'تحليل ساعات الذروة', 'قياس تحويل كل فرع'],
    scene: 'visitors',
  },
  {
    id: 'branch-operations-app',
    title: 'تطبيقات تشغيلية للفروع',
    subtitle: 'كتالوج داخلي وطلبات بضاعة بين الفروع والمستودع',
    features: ['طلبات بضاعة رقمية', 'تتبع حالة الطلب لحظياً', 'صلاحيات لكل دور وظيفي'],
    scene: 'branchapp',
  },
  {
    id: 'inventory-intelligence',
    title: 'ذكاء المخزون والتنبيهات',
    subtitle: 'لا نفاد مفاجئ للأصناف السريعة ولا رواكد منسية',
    features: ['توقع النفاد قبل حدوثه', 'رصد الرواكد تلقائياً', 'توصيات نقل بين الفروع'],
    scene: 'inventory',
  },
  {
    id: 'product-analytics',
    title: 'تحليل المنتجات وسلة المشتريات',
    subtitle: 'اعرف ماذا يُباع مع ماذا وأين الفرص الضائعة',
    features: ['ترتيب الأصناف بذكاء', 'منتجات تُشترى معاً', 'كشف الاتجاهات مبكراً'],
    scene: 'basket',
  },
  {
    id: 'targets-performance',
    title: 'إدارة الأهداف وأداء الفرق',
    subtitle: 'أهداف واضحة لكل فرع وموظف ومتابعة لحظية',
    features: ['توزيع الأهداف تلقائياً', 'لوحة شرف تحفيزية', 'تقارير أداء فردية'],
    scene: 'targets',
  },
  {
    id: 'automated-reports',
    title: 'التقارير التلقائية المجدولة',
    subtitle: 'تقاريرك الدورية تُبنى وتُرسل وحدها كل صباح',
    features: ['توليد PDF وExcel تلقائياً', 'إرسال بريد وواتساب', 'جدولة يومية وأسبوعية'],
    scene: 'reports',
  },
  {
    id: 'ai-business-assistant',
    title: 'مساعد أعمال بالذكاء الاصطناعي',
    subtitle: 'اسأل بياناتك بلغتك الطبيعية واحصل على الجواب فوراً',
    features: ['إجابات فورية من بياناتك', 'صلاحيات قراءة آمنة', 'يفهم العربية بطلاقة'],
    scene: 'aichat',
  },
  {
    id: 'ecommerce-sync',
    title: 'ربط المتاجر والمنصات الإلكترونية',
    subtitle: 'طلباتك ومخزونك متزامنة بين متجرك وأنظمتك دائماً',
    features: ['مزامنة الطلبات تلقائياً', 'تحديث المخزون لحظياً', 'فواتير بدون تدخل يدوي'],
    scene: 'ecommerce',
  },
  {
    id: 'mission-control',
    title: 'لوحة تحكم إدارية موحدة',
    subtitle: 'صحة أنظمتك كلها في شاشة واحدة مع تنبيهات فورية',
    features: ['مراقبة على مدار الساعة', 'تنبيه فوري عند أي خلل', 'تعافٍ تلقائي للأنظمة'],
    scene: 'missioncontrol',
  },
  {
    id: 'finance-vat-reports',
    title: 'اللوحة المالية وتقارير الضريبة',
    subtitle: 'أرقامك المالية والضريبية جاهزة ومطابقة دائماً',
    features: ['تقارير ضريبة القيمة المضافة', 'مطابقة مع نقاط البيع', 'تصدير بضغطة واحدة'],
    scene: 'finance',
  },
];

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {SERVICES.map((s) => (
        <Composition
          key={s.id}
          id={s.id}
          component={ServiceVideo}
          durationInFrames={375}
          fps={30}
          width={1280}
          height={720}
          defaultProps={{title: s.title, subtitle: s.subtitle, features: s.features, scene: s.scene}}
        />
      ))}
    </>
  );
};
