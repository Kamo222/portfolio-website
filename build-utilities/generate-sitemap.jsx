const fs = require("fs");
const path = require("path");


const generateSitemap = () => {
    //pages data
    const pages = [
        { url: "https://kamo.codes/", changefreq: "daily", priority: "1.0"},
        { url: "https://kamo.codes/services", changefreq: "weekly"},
        { url: "https://kamo.codes/resume", changefreq: "weekly"},
        { url: "https://kamo.codes/work", changefreq: "weekly"},
        { url: "https://kamo.codes/contact", changefreq: "weekly"}
        
    ]

    //add logic to generate sitemap
    const sitemap = generateSitemapXML(pages);
    //write the sitemap xml to the disk
    fs.writeFileSync(path.resolve("./public/sitemap.xml"), sitemap)
}

const generateSitemapXML = (pages) => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    pages.forEach((page) => {
        xml += `<url>
      <loc>${page.url}/</loc>
      <changefreq>${page.changefreq || "daily"}</changefreq>
      <priority>${page.priority || "0.5"}</priority>
   </url>`;
    })

    xml += `</urlset>`;
    return xml;
}

generateSitemap();