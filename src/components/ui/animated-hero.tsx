import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, MapPinned, ShieldCheck, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";

type HeroProps = { onExplore?: () => void; onPrepare?: () => void };

function Hero({ onExplore, onPrepare }: HeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ["รู้ทันน้ำ", "วางแผนก่อน", "เดินทางปลอดภัย", "ช่วยเหลือกัน", "รับมืออย่างมั่นใจ"], []);
  useEffect(() => {
    const id = window.setTimeout(() => setTitleNumber((n) => (n + 1) % titles.length), 2600);
    return () => window.clearTimeout(id);
  }, [titleNumber, titles]);
  return (
    <section className="fw-hero" aria-label="เริ่มต้นใช้งาน FloodWatch BKK">
      <img className="fw-hero-photo" src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1800&q=85" alt="ภาพถ่ายจริงของการเดินทางบนถนน ใช้ประกอบการสื่อสารเรื่องการเตรียมพร้อม" />
      <div className="fw-hero-overlay" />
      <div className="fw-hero-content">
        <div className="fw-hero-eyebrow"><Waves size={15}/> FLOODWATCH BKK <span>·</span> BANGKOK & METROPOLITAN</div>
        <div className="fw-hero-copy">
          <h2>เมืองพร้อมรับมือ<br/><span>น้ำท่วม เริ่มจาก</span></h2>
          <div className="fw-word-window" aria-live="polite"><AnimatePresence mode="wait"><motion.span key={titleNumber} initial={{ opacity:0, y:46, filter:"blur(7px)" }} animate={{opacity:1,y:0,filter:"blur(0px)"}} exit={{opacity:0,y:-46,filter:"blur(7px)"}} transition={{duration:.55,type:"spring",stiffness:85,damping:17}}>{titles[titleNumber]}</motion.span></AnimatePresence></div>
          <p>สำรวจพื้นที่เสี่ยง วางแผนการเดินทาง ติดตามช่องทางข่าวสาร และเตรียมพร้อมรับสถานการณ์น้ำท่วมในกรุงเทพฯ และปริมณฑล</p>
        </div>
        <div className="fw-hero-actions"><Button size="lg" onClick={onExplore}>สำรวจแผนที่ <MapPinned size={17}/></Button><Button variant="outline" size="lg" onClick={onPrepare}>เตรียมแผนรับมือ <MoveRight size={17}/></Button></div>
        <div className="fw-hero-caption"><ShieldCheck size={13}/> แพลตฟอร์มสาธิต · ข้อมูลความเสี่ยงเป็นค่าจำลอง <a href="https://unsplash.com/license" target="_blank" rel="noreferrer">ภาพประกอบ: Unsplash</a></div>
      </div>
    </section>
  );
}
export { Hero };
