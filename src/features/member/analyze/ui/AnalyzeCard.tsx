import { ReactComponent as UpIcon } from '../../../../shared/assets/icons/member/analyze/numberUpIcon.svg';
import { ReactComponent as DownIcon } from '../../../../shared/assets/icons/member/analyze/numberDownIcon.svg';

interface AnalyzeCardProps {
  value: number | string;
  title: string;
  changeNum?: number;
}

function AnalyzeCard({ value, title, changeNum }: AnalyzeCardProps) {
  const changeColor =
    changeNum === undefined
      ? 'text-[#000]'
      : changeNum > 0
      ? 'text-[#EA4335]'
      : changeNum < 0
      ? 'text-[#0B63F8]'
      : 'text-[#D3D3D3]';

  return (
    <div className="rounded-lg w-[18rem] h-[9rem] flex-center flex-col shadow-xl">
      <p className="text-4xl font-bold">{value}</p>
      <div className="mt-2 flex-center">
        <p className="mr-2">{title}</p>
        {changeNum !== undefined && (
          <>
            {changeNum > 0 && <UpIcon className="mr-1 w-4" />}
            {changeNum < 0 && <DownIcon className="mr-1 w-4" />}
            <p className={changeColor}>{Math.abs(changeNum)}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default AnalyzeCard;
