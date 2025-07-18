import api from '../../../app/API';

// 이메일 인증 api
interface PostEmailVerificationSendAPIRequest {
  email: string;
}
export const postEmailSendAPI = async (data: PostEmailVerificationSendAPIRequest) => {
  try {
    const response = await api.post('/api/v1/member/email', data);
    console.log('이메일 인증 코드 전송 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('이메일 인증 api 요청 실패:', error);
    throw error;
  }
};

// 이메일 검증 api
interface PostEmailVerificationAPIRequest {
  email: string;
  code: string;
}
export const postEmailVerificationAPI = async (data: PostEmailVerificationAPIRequest) => {
  try {
    const response = await api.post('/api/v1/member/email/verify', data);
    console.log('이메일 검증 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('이메일 검증 api 요청 실패:', error);
    throw error;
  }
};

// 회원가입 api
export interface PostSignupAPIRequest {
  member: {
    email: string;
    password: string;
    name: string;
    phoneNumber: string;
  };
  apply: {
    role: 'MEMBER' | 'TEAM_MEMBER';
    grade: string;
    studentId: string;
    major: string;
    techField: string[];
    techStack: string[];
    other?: string;
  };
}
export const postSignupAPI = async (data: PostSignupAPIRequest ) => {
  try {
    const response = await api.post('/api/v1/member/register', data);
    console.log('회원가입 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('회원가입 api 요청 실패:', error);
    throw error;
  }
};

// 로그인 api
export interface PostLoginAPIRequest {
  email: string;
  password: string;
}
export const postLoginAPI = async (data: PostLoginAPIRequest) => {
  try {
    const response = await api.post('/api/v1/member/login', data);
    // JWT 토큰
    const jwtToken = response.data.data.jwtToken;

    localStorage.setItem('accessToken', jwtToken);
    api.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
    console.log('로그인 성공: ', jwtToken);

    return response.data;
  } catch (error) {
    console.error('로그인 실패', error);
    throw error;
  }
};

// 로그아웃 api
export const postLogoutAPI = async () => {
  try {
    const response = await api.post('/api/v1/member/logout');
    console.log('로그아웃 API 연동 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('로그아웃 API 연동 실패:', error);
    throw error;
  }
};

// 마이페이지 조회 api
export const getMyPageAPI = async () => {
  try {
    const response = await api.get('/api/v1/member/myPage');
    console.log('마이페이지 조회 API 연동 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('마이페이지 조회 API 연동 실패:', error);
    throw error;
  }
};
