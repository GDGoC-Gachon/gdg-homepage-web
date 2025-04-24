import { useNavigate } from "react-router-dom";

interface MemberListCardProps {
  name: string;
  email: string;
  grade: string;
  number: number;
  phoneNumber: string;
  role: string;
  isMember: boolean;
}

function MemberListCard({ name, email, grade, number, phoneNumber, role, isMember }: MemberListCardProps) {
  const navigate = useNavigate();

  // 관리페이지 이동 핸들러
  const handleNavigate = (isMember: boolean) => {
    if (isMember) {
      navigate('/member/management/member');
    } else {
      navigate('/member/management/applicant');
    }
  };

  return (
    <div className="p-8 w-full flex justify-between text-[#64748B]">
      <div className="flex gap-10">
        <div className="w-[5rem] truncate">{name}</div>
        <div className="w-[12rem] truncate">{email}</div>
        <div className="w-[5rem] truncate">{grade}</div>
        <div className="w-[5rem] truncate">{number}</div>
        <div className="w-[7rem] truncate">{phoneNumber}</div>
        <div>{role}</div>
      </div>
      <div
        onClick={() => handleNavigate(isMember)}
        className="flex items-center gap-2 truncate cursor-pointer"
      >
        관리
        <span className="text-xl font-black">&#62;</span>
      </div>
    </div>
  );
}

export default MemberListCard;
