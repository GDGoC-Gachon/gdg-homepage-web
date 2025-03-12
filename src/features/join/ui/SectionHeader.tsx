import { Fade } from 'react-awesome-reveal';

function SectionHeader({ title, sub_title }: { title: string; sub_title: string }) {
  return (
    <Fade cascade damping={0.05} direction="up" triggerOnce>
      <div className="w-[100%] mb-[2.5rem] flex flex-col items-center">
        <div className="text-[0.875rem]/[160%] text-[#5C5C5C] font-normal font-googleSansDisplay">{sub_title}</div>
        <div className="text-[1.688rem]/[160%] font-bold font-googleSansDisplay">{title}</div>
      </div>
    </Fade>
  );
}

export default SectionHeader;
