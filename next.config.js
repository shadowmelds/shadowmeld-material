/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    experimental: {
        newNextLinkBehavior: true,
        legacyBrowsers: false,
        typedRoutes: true,
        serverActions: true,
    }
}

module.exports = nextConfig
