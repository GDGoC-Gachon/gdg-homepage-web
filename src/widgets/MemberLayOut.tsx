import { Outlet } from 'react-router-dom';
import MemberHeader from '../shared/components/MemberHeader';

function MemberLayOut() {
  return (
    <div className="flex min-h-screen font-googleSansDisplay">
      <MemberHeader />
      <Outlet />
    </div>
  );
}

export default MemberLayOut;
