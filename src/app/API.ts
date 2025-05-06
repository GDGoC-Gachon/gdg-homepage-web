import axios, { InternalAxiosRequestConfig } from 'axios';

// 로컬 스토리지에서 access token 가져오기
export const getAccessToken = () => localStorage.getItem('accessToken');

// 테스트용 토큰
const testToken = import.meta.env.VITE_TEST_TOKEN;

// axios 인스턴스 생성
const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터 설정
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // accessToken이 없을 경우 testToken 사용
    const token = getAccessToken() || testToken;

    // headers가 AxiosHeaders 타입인 경우 set 메서드를 통해 Authorization 헤더 추가
    if (token && config.headers?.set) {
      config.headers.set('Authorization', `Bearer ${token}`);
    }

    return config;
  },
  // 요청 에러 발생 시 그대로 에러 반환
  (error) => Promise.reject(error)
);

export default api;
