const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // 필요 없는 공백이나 주석 삭제하여 용량을 줄임
  experimental: {
    appDir: true, // app 경로 사용
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
