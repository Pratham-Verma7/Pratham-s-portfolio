module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  pageExtensions: ['page.js', 'api.js'],
  webpack(config, { isServer }) {
    // Run custom scripts
    if (isServer) {
      require('./scripts/generate-sitemap');
      require('./scripts/draco');
    }
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
        net: false,
        tls: false,
        child_process: false,
        crypto: false,
        stream: false,
        http: false,
        https: false,
        zlib: false,
        util: false,
        assert: false,
        buffer: false,
        url: false,
        constants: false,
        module: false,
        readline: false,
        vm: false,
        dns: false,
        dgram: false,
        querystring: false,
        punycode: false,
        string_decoder: false,
        timers: false,
        tty: false,
        v8: false,
        worker_threads: false,
        webcrypto: false,
        perf_hooks: false,
        http2: false,
      };
    }

    // Import `svg` files as React components
    config.module.rules.push({
      test: /\.svg$/,
      resourceQuery: { not: [/url/] },
      use: [{ loader: '@svgr/webpack', options: { svgo: false } }],
    });

    // Import videos, models, hdrs, and fonts
    config.module.rules.push({
      test: /\.(mp4|hdr|glb|woff|woff2)$/i,
      type: 'asset/resource',
    });

    // Force url import with `?url`
    config.module.rules.push({
      resourceQuery: /url/,
      type: 'asset/resource',
    });

    // Import `.glsl` shaders
    config.module.rules.push({
      test: /\.glsl$/,
      type: 'asset/source',
    });

    return config;
  },
};
