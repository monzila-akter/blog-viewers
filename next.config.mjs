/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        KINDE_ISSUER_URL: "https://monzila.kinde.com",
        KINDE_SITE_URL: "https://blog-viewers.vercel.app",
        KINDE_POST_LOGOUT_REDIRECT_URL: "https://blog-viewers.vercel.app",
        KINDE_POST_LOGIN_REDIRECT_URL: "https://blog-viewers.vercel.app",
        KINDE_CLIENT_ID: "6a691ae49dce44389425d8de73d8a160",
        KINDE_CLIENT_SECRET: "6a691ae49dce44389425d8de73d8a160",
    }
};

export default nextConfig;
