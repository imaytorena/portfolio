/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config) => {
		config.resolve.alias.canvas = false;

		return config;
	},
	reloadOnPrerender: process.env.NODE_ENV === "development"
};

export default nextConfig;
