import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://hamad-portfolio.vercel.app";
    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/experience`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/freelance`,
            lastModified: new Date().toISOString(),
        },
    ];
}
