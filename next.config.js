/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    sassOptions: {
        transpilePackages: ['three'],
        includePaths: [path.join(__dirname, 'styles')],
    }
}

module.exports = nextConfig
