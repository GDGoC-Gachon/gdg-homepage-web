import { useNavigate } from "react-router-dom";
import { GradeEnum, gradeMapper, RoleEnum, roleMapper } from "../../../../shared/utils/enumMapper";

interface MemberListCardProps {
  memberId: number;
  name: string;
  email: string;
  grade: GradeEnum;
  studentId: string;
  phoneNumber: string;
  role: RoleEnum;
  isMember: boolean;
}

function MemberListCard({ memberId, name, email, grade, studentId, phoneNumber, role, isMember }: MemberListCardProps) {
  const navigate = useNavigate();

  // 관리페이지 이동 핸들러
  const handleNavigate = () => {
    navigate(isMember ? `/member/management/member/${memberId}` : `/member/management/applicant/${memberId}`);
  };

  return (
    <div className="p-8 w-full flex justify-between text-[#64748B]">
      <div className="flex gap-10">
        <div className="w-[5rem] truncate">{name}</div>
        <div className="w-[12rem] truncate">{email}</div>
        <div className="w-[5rem] truncate">{gradeMapper(grade)}</div>
        <div className="w-[5rem] truncate">{studentId}</div>
        <div className="w-[7rem] truncate">{phoneNumber}</div>
        <div>{roleMapper(role)}</div>
      </div>
      <div
        onClick={handleNavigate}
        className="flex items-center gap-2 truncate cursor-pointer"
      >
        관리
        <span className="text-xl font-black">&#62;</span>
      </div>
    </div>
  );
}

export default MemberListCard;
