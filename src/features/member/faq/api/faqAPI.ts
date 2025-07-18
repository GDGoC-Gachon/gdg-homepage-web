import api from "../../../../app/API";

// FAQ 생성 api
interface PostFaqAPIRequest {
  question: string;
  answer: string;
}
export const postFaqAPI = async (data: PostFaqAPIRequest) => {
  try {
    const response = await api.post('/admin/faq/create', data);
    console.log('FAQ 생성 api 연동 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('FAQ 생성 api 연동 실패:', error);
    throw error;
  }
};

// FAQ 조회 api
export const getFaqAPI = async () => {
  try {
    const response = await api.get('/admin/faq/all');
    console.log('FAQ 조회 api 연동 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('FAQ 조회 api 연동 실패:', error);
    throw error;
  }
};

// FAQ 수정 api
interface PutFaqAPIRequest {
  question: string;
  answer: string;
}
export const putFaqAPI = async (id: number, data: PutFaqAPIRequest) => {
  try {
    const response = await api.put(`/admin/faq/update/${id}`, data);
    console.log('FAQ 수정 api 연동 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('FAQ 수정 api 연동 실패:', error);
    throw error;
  }
};

// FAQ 삭제 api
export const deleteFaqAPI = async (id: number) => {
  try {
    const response = await api.delete(`/admin/faq/delete/${id}`);
    console.log('FAQ 삭제 api 연동 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('FAQ 삭제 api 연동 실패:', error);
    throw error;
  }
};
