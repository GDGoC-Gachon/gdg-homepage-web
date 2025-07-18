import api from "../../../app/API";

// 페이지 조회 수 증가 API
export const postViewIncreaseAPI = async () => {
  try {
    const response = await api.post('/pageView/increment');
    console.log('페이지 조회 수 증가 API 연동 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('페이지 조회 수 증가 API 연동 실패:', error);
    throw error;
  }
};
