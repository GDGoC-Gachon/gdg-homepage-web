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
    console.log('가입일정 생성 api 연동 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('가입일정 생성 api 연동 실패:', error);
    throw error;
  }
};

// 가입일정 조회 api
export const getJoinPeriodAPI = async () => {
  try {
    const response = await api.get('/admin/joinPeriod/all');
    console.log('가입일정 조회 api 연동 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('가입일정 조회 api 연동 실패:', error);
    throw error;
  }
};
