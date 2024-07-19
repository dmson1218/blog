/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://dmson1218.com',
    generateRobotsTxt: true,
    exclude: ['/server-sitemap.xml'],
    robotsTxtOptions: {
        additionalSitemaps: ['https://dmson1218.com/server-sitemap.xml'],
    },
};
