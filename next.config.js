/** @type {import('next').NextConfig} */

const svgLoader = {
	test: /\.svg$/,
	use: ['@svgr/webpack'],
}

const nextConfig = {
	images: {
		domains: ['courses-top.ru']
	},
	webpack: (config) => {
		config.module.rules.push(svgLoader);
		
		return config;
	}
}

module.exports = nextConfig
