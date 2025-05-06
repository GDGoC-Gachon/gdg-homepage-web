import api from '../../../app/API';

// 이메일 인증 api
interface PostEmailVerificationSend {
  email: string;
}
export const postEmailSend = async (data: PostEmailVerificationSend) => {
  try {
    const response = await api.post('/api/v1/member', data);
    console.log('이메일 인증 코드 전송 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('이메일 인증 api 요청 실패:', error);
    throw error;
  }
};

// 이메일 검증 api
interface PostEmailVerificationRequest {
  email: string;
  code: string;
}
export const postEmailVerification = async (data: PostEmailVerificationRequest) => {
  try {
    const response = await api.post('/api/v1/member/email/verify', data);
    console.log('이메일 검증 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('이메일 검증 api 요청 실패:', error);
    throw error;
  }
};
