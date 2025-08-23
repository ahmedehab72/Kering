import Link from "next/link"

type NavItem = {
    title: string;
    href: string;
};

type MobileMenuOpenProps = {
    leftNavItems: NavItem[];
    rightNavItems: NavItem[];
    getLocalizedHref: (href: string) => string;
};

const MobileMenuOpen = ({ leftNavItems, rightNavItems, getLocalizedHref }: MobileMenuOpenProps) => {
    return (
        <div className="lg:hidden border-t border-gray-100 py-4 bg-white">
            <div className="flex flex-col space-y-4">
                {/* Mobile share price */}
                {/* <div className="lg:hidden flex items-center space-x-2 text-sm pb-2 border-b border-gray-100">
                    <span className="text-gray-700">Share price</span>
                    <span className="font-bold text-black">216,50 €</span>
                </div> */}

                {/* Mobile navigation */}
                <div className="space-y-2">
                    {[...leftNavItems, ...rightNavItems].map((item) => (
                        <Link
                            key={item.title}
                            href={getLocalizedHref(item.href)}
                            className="block py-2 text-base font-medium text-gray-900 hover:text-gray-600 transition-colors"
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>

                {/* Mobile Join Us button */}
                <Link
                    href={getLocalizedHref('/joinUs')}
                    className="md:hidden inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-900 border border-gray-300 rounded hover:bg-gray-50 transition-colors duration-200"
                >
                    JOIN US
                </Link>
            </div>
        </div>
    )
}

export default MobileMenuOpen