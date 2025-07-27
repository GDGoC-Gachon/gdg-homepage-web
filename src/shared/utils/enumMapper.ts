// 역할 타입
export enum RoleEnum {
  NON_MEMBER = 'ROLE_NON_MEMBER',
  MEMBER = 'ROLE_MEMBER',
  TEAM_MEMBER = 'ROLE_TEAM_MEMBER',
  TEAM_LEADER = 'ROLE_TEAM_LEADER',
}
// 역할 타입 매퍼
export const roleMapper = (role: RoleEnum | undefined): string => {
  switch (role) {
    case RoleEnum.NON_MEMBER:
      return 'Member';
    case RoleEnum.MEMBER:
      return 'Member';
    case RoleEnum.TEAM_MEMBER:
      return 'Team Member'; 
    case RoleEnum.TEAM_LEADER:
      return 'Leader';
    default:
      return '알 수 없음';
  }
};

// 학년 타입
export enum GradeEnum {
  GRADE_1 = 1,
  GRADE_2 = 2,
  GRADE_3 = 3,
  GRADE_4 = 4,
  GRADE_5 = 5,
  GRADE_6 = 6,
  GRADE_7 = 7,
}
// 학년 타입 매퍼
export const gradeMapper = (grade: GradeEnum | undefined): string => {
  switch (grade) {
    case GradeEnum.GRADE_1:
      return '1학년';
    case GradeEnum.GRADE_2:
      return '2학년';
    case GradeEnum.GRADE_3:
      return '3학년';
    case GradeEnum.GRADE_4:
      return '4학년';
    case GradeEnum.GRADE_5:
      return '5학년';
    case GradeEnum.GRADE_6:
      return '졸업생';
    case GradeEnum.GRADE_7:
      return '운영진';
    default:
      return '알 수 없음';
  }
};

// 기술 분야 타입
export enum CareerEnum {
  FRONTEND = "FRONT_END",
  BACKEND = "BACK_END",
  MOBILE = "MOBILE",
  AI_ML = "AI_ML",
  DEVOPS_CLOUD = "DEVOPS_CLOUD",
};
// 기술 분야 타입 매퍼
export const careerMapper = (career: CareerEnum | undefined): string => {
  switch (career) {
    case CareerEnum.FRONTEND:
      return 'Front-end';
    case CareerEnum.BACKEND:
      return 'Back-end';
    case CareerEnum.MOBILE:
      return 'Mobile';
    case CareerEnum.AI_ML:
      return 'AI/ML';
    case CareerEnum.DEVOPS_CLOUD:
      return 'DevOps/Cloud';
    default:
      return '알 수 없음';
  }
};

// 기술 스택 타입
export enum StackEnum {
  REACT = "REACT",
  VUE_JS = "VUE_JS",
  ANGULAR = "ANGULAR",
  NEXT_JS = "NEXT_JS",
  SVELTE = "SVELTE",
  NODE_JS = "NODE_JS",
  EXPRESS_JS = "EXPRESS_JS",
  NEST_JS = "NEST_JS",
  SPRING_BOOT = "SPRING_BOOT",
  DJANGO = "DJANGO",
  FLASK = "FLASK",
  FAST_API = "FAST_API",
  RUBY_ON_RAILS = "RUBY_ON_RAILS",
  SWIFT = "SWIFT",
  KOTLIN = "KOTLIN",
  FLUTTER = "FLUTTER",
  REACT_NATIVE = "REACT_NATIVE",
  TENSORFLOW = "TENSORFLOW",
  PYTORCH = "PYTORCH",
  KUBERNETES = "KUBERNETES",
  DOCKER = "DOCKER",
  AWS = "AWS",
  AZURE = "AZURE",
  GOOGLE_CLOUD = "GOOGLE_CLOUD",
  FIREBASE = "FIREBASE",
  GRAPHQL = "GRAPHQL",
  MONGODB = "MONGODB",
  MYSQL = "MYSQL",
  POSTGRESQL = "POSTGRESQL",
  REDIS = "REDIS",
  ELASTICSEARCH = "ELASTICSEARCH",
};
// 기술 스택 타입 매퍼
export const stackMapper = (stack: StackEnum | undefined): string => {
  switch (stack) {
    case StackEnum.REACT:
      return 'React';
    case StackEnum.VUE_JS:
      return 'Vue.js';
    case StackEnum.ANGULAR:
      return 'Angular';
    case StackEnum.NEXT_JS:
      return 'Next.js';
    case StackEnum.SVELTE:
      return 'Svelte';
    case StackEnum.NODE_JS:
      return 'Node.js';
    case StackEnum.EXPRESS_JS:
      return 'Express.js';
    case StackEnum.NEST_JS:
      return 'NestJS';
    case StackEnum.SPRING_BOOT:
      return 'Spring Boot';
    case StackEnum.DJANGO:
      return 'Django';
    case StackEnum.FLASK:
      return 'Flask';
    case StackEnum.FAST_API:
      return 'FastAPI';
    case StackEnum.RUBY_ON_RAILS:
      return 'Ruby on Rails';
    case StackEnum.SWIFT:
      return 'Swift';
    case StackEnum.KOTLIN:
      return 'Kotlin';
    case StackEnum.FLUTTER:
      return 'Flutter';
    case StackEnum.REACT_NATIVE:
      return 'React Native';
    case StackEnum.TENSORFLOW:
      return 'TensorFlow';
    case StackEnum.PYTORCH:
      return 'PyTorch';
    case StackEnum.KUBERNETES:
      return 'Kubernetes';
    case StackEnum.DOCKER:
      return 'Docker';
    case StackEnum.AWS:
      return 'AWS';
    case StackEnum.AZURE:
      return 'Azure';
    case StackEnum.GOOGLE_CLOUD:
      return 'Google Cloud';
    case StackEnum.FIREBASE:
      return 'Firebase';
    case StackEnum.GRAPHQL:
      return 'GraphQL';
    case StackEnum.MONGODB:
      return 'MongoDB';
    case StackEnum.MYSQL:
      return 'MySQL';
    case StackEnum.POSTGRESQL:
      return 'PostgreSQL';
    case StackEnum.REDIS:
      return 'Redis';
    case StackEnum.ELASTICSEARCH:
      return 'Elasticsearch';
    default:
      return '기타';
  }
};
