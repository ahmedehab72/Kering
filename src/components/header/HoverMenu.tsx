import Link from 'next/link'

type MenuItem = {
    name: string;
    href: string;
};

type MenuSection = {
    title: string;
    image: string;
    href: string
    items: MenuItem[];
};

type MenuData = {
    [key: string]: MenuSection[];
};

type HoverMenuProps = {
    hoveredMenu: string | null;
    setHoveredMenu: (menu: string | null) => void;
    menuData: MenuData;
    getLocalizedHref: (href: string) => string;
};

const HoverMenu: React.FC<HoverMenuProps> = ({ hoveredMenu, setHoveredMenu, menuData, getLocalizedHref }) => {
    return (
        <div
            className="absolute top-full left-0 w-screen bg-[#f1e4dbc4] z-40 py-8"
            onMouseEnter={() => setHoveredMenu(hoveredMenu)}
            onMouseLeave={() => setHoveredMenu(null)}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-white">
                    <h3 className="text-xl font-bold mb-4">{hoveredMenu}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {hoveredMenu && menuData[hoveredMenu]?.map((section) => (
                            <div key={section.title}>
                                <Link href={getLocalizedHref(section.href)}>
                                    <div
                                        style={{
                                            backgroundImage: `url('${section.image}')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            height: '80px',
                                            borderRadius: '0.5rem',
                                            marginBottom: '1rem',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <h4 className="text-lg font-semibold text-white">{section.title}</h4>
                                    </div>
                                </Link>
                                <ul>
                                    {section.items.map((item) => (
                                        <li key={item.name}>
                                            <Link href={getLocalizedHref(item.href)} className="text-xs text-black" >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HoverMenu