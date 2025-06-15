import api from "../../../../app/API";

// 분석결과 조회 api
export const getAdminAnalyticAPI = async () => {
  try {
    const response = await api.get('/admin/analytic');
    console.log('분석결과 조회 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('분석결과 조회 실패:', error);
    throw error;
  }
};
