/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        loader: 'akamai',
        path: '',
    },
    assetPrefix: './',
};

module.exports = nextConfig

// https://www.bravolt.com/post/deploying-next-js-to-github-pages