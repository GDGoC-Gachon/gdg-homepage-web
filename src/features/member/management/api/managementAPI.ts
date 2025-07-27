import api from "../../../../app/API";

// 신청자 목록 조회 api
interface GetApplicantListAPIRequest {
  page: number;
  size: number;
}
export const getApplicantListAPI = async (data: GetApplicantListAPIRequest) => {
  try {
    const response = await api.get('/admin/v1/member/list/not', {
      params: data,
    });
    console.log('신청자 목록 조회 api 연동 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('신청자 목록 조회 api 연동 실패:', error);
    throw error;
  }
};

// 멤버 목록 조회 api
interface GetMemberListAPIRequest {
  page: number;
  size: number;
}
export const getMemberListAPI = async (data: GetMemberListAPIRequest) => {
  try {
    const response = await api.get('/admin/v1/member/list', {
      params: data,
    });
    console.log('멤버 목록 조회 api 연동 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('멤버 목록 조회 api 연동 실패:', error);
    throw error;
  }
};

// 멤버 상세 조회 api
export const getMemberDetailAPI = async (id: number) => {
  try {
    const response = await api.get(`/admin/v1/member/${id}`);
    console.log('멤버 상세 조회 api 연동 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('멤버 상세 조회 api 연동 실패:', error);
    throw error;
  }
};

// 멤버 승인 api
interface PutMemberApproveAPIRequest {
  adminId?: number;
  userId: number;
}
export const putMemberApproveAPI = async (data: PutMemberApproveAPIRequest) => {
  try {
    const response = await api.put('/admin/v1/member/approve', data);
    console.log('멤버 승인 api 연동 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('멤버 승인 api 연동 실패:', error);
    throw error;
  }
};

// 멤버 거절 api
interface PutMemberRejectAPIRequest {
  adminId?: number;
  userId: number;
}
export const putMemberRejectAPI = async (data: PutMemberRejectAPIRequest) => {
  try {
    const response = await api.put('/admin/v1/member/reject', data);
    console.log('멤버 거절 api 연동 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('멤버 거절 api 연동 실패:', error);
    throw error;
  }
};

// 멤버 권한 수정 api
interface PutMemberRoleAPIRequest {
  adminId: number;
  userId: number;
}
export const putMemberRoleAPI = async (data: PutMemberRoleAPIRequest) => {
  try {
    const response = await api.put('/admin/v1/member', data);
    console.log('멤버 권한 수정 api 연동 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('멤버 권한 수정 api 연동 실패:', error);
    throw error;
  }
};
