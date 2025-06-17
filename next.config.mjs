/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
      REGEX: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$', // raw regex pattern
      EMAIL_REGEX: '^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$',
     PASSWORD_REGEX: '^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$'
  }
};

export default nextConfig;
