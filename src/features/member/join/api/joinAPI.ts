import api from "../../../../app/API";

// 가입일정 생성 api
interface PostJoinPeriodAPIRequest {
  title: string;
  startDate: string;
  endDate: string;
  maxMember: number;
}
export const postJoinPeriodAPI = async (data: PostJoinPeriodAPIRequest) => {
  try {
    const response = await api.post('/admin/joinPeriod/create', data);
    console.log('가입일정 생성 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('가입일정 생성 실패:', error);
    throw error;
  }
};
