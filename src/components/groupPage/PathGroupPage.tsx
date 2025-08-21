"use client"

import { useLocalizedHref } from "@/lib/useLocalizedHref";
import Link from "next/link";

const GroupPage = () => {
    const { getLocalizedHref } = useLocalizedHref()

    return (
        <div className="mt-6 w-full text-white flex items-center ">
            <Link href={getLocalizedHref('/')} className="bg-[#f1e4db] hover:bg-[#f1e9e3] w-auto px-5 flex items-center  py-1 text-sm text-black">
                kering
            </Link>
            <Link href={getLocalizedHref('/group')} className="bg-[#f0dacb] hover:bg-[#ebdcd1] flex-2 px-5 flex items-center py-1 text-sm text-black"> group</Link>
        </div>

    );
};

export default GroupPage;
