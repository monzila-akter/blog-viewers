/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        KINDE_ISSUER_URL: "https://monzila.kinde.com",
        KINDE_SITE_URL: "http://localhost:3000",
        KINDE_POST_LOGOUT_REDIRECT_URL: "http://localhost:3000",
        KINDE_POST_LOGIN_REDIRECT_URL: "http://localhost:3000",
        KINDE_CLIENT_ID: "6a691ae49dce44389425d8de73d8a160",
        KINDE_CLIENT_SECRET: "6a691ae49dce44389425d8de73d8a160",
    }
};

export default nextConfig;
