/**
 * @type {import('next').NextConfig}
 */
const nextConfig   = {
    images: {
        loader: 'akamai',
        path: '',
    },
    assetPrefix: './',
};

export default   nextConfig;

// https://www.bravolt.com/post/deploying-next-js-to-github-pages