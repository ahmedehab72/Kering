export const leftNavItems = [
    { title: "Group", href: "/group/" },
    { title: "Houses", href: "/houses/" },
    { title: "Talent", href: "/talent/" },
]

export const rightNavItems = [
    { title: "Sustainability", href: "/sustainability/" },
    { title: "Finance", href: "/finance/" },
    { title: "Press", href: "/press/" },
]
// بيانات القوائم المنسدلة لكل عنوان
export const menuData: { [key: string]: { title: string; image: string; href:string; items: { name: string; href: string }[] }[] } = {
    Group: [
        {
            title: "Our Brands",
            image: "/images/heroImage5.png",
            href:"/group",
            items: [
                { name: "Gucci", href: "/group/gucci" },
                { name: "Saint Laurent",href: "/group/sanit" },
                { name: "Bottega Veneta",href: "/group/bottega" },
            ],
        },
        {
            title: "Our Vision",
            image: "/images/heroImage7.jpeg",
            href:"/group",
            items: [
                { name: "Mission",href: "/group/mission" },
                { name: "Values",href: "/group/values" },
                { name: "History",href: "/group/history" },
            ],
        },
    ],
    Houses: [
        {
            title: "Luxury Fashion",
            image: "/images/heroImage3.jpeg",
            href:"/houses",
            items: [
                { name: "Gucci Fashion", href: "#" },
                { name: "Balenciaga", href: "#" },
                { name: "Alexander McQueen", href: "#" },
            ],
        },
        {
            title: "Accessories",
            image: "/images/heroImage2.jpeg",
            href:"/houses",
            items: [
                { name: "Bags", href: "#" },
                { name: "Jewelry", href: "#" },
                { name: "Watches", href: "#" },
            ],
        },
    ],
    Talent: [
        {
            title: "Careers",
            image: "/images/heroImage5.png",
            href:"/talent",
            items: [
                { name: "Job Openings", href: "#" },
                { name: "Internships", href: "#" },
                { name: "Career Development", href: "#" },
            ],
        },
        {
            title: "Work Culture",
            image: "/images/heroImage7.jpeg",
            href:"/talent",
            items: [
                { name: "Diversity", href: "#" },
                { name: "Inclusion", href: "#" },
                { name: "Benefits", href: "#" },
            ],
        },
    ],
    Sustainability: [
        {
            title: "Eco Initiatives",
            image: "/images/heroImage3.jpeg",
            href:"/sustainability",
            items: [
                { name: "Sustainable Materials", href: "#" },
                { name: "Carbon Neutral", href: "#" },
                { name: "Recycling Programs", href: "#" },
            ],
        },
    ],
    Finance: [
        {
            title: "Financial Reports",
            image: "/images/heroImage2.jpeg",
            href:"/finance",
            items: [
                { name: "Annual Report", href: "#" },
                { name: "Quarterly Results", href: "#" },
                { name: "Investor Relations", href: "#" },
            ],
        },
    ],
    Press: [
        {
            title: "Media",
            image: "/images/heroImage5.png",
            href:"/press",
            items: [
                { name: "Press Releases", href: "#" },
                { name: "News Articles", href: "#" },
                { name: "Media Contacts", href: "#" },
            ],
        },
    ],
}