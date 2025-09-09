"use client"

import { Search, X } from "lucide-react"
import { useState } from "react"

const SideAction = () => {
    const [searchOpen, setSearchOpen] = useState(false)
    const [shareOpen, setShareOpen] = useState(false)
    const [favoritesOpen, setFavoritesOpen] = useState(false)

    return (
        <>
            <div className="lg:fixed hidden right-3 top-1/2 -translate-y-1/2 lg:flex flex-col justify-center items-center gap-4 p-2">
                <button
                    onClick={() => setSearchOpen(!searchOpen)}
                    className="p-2 rounded-full transition-colors"
                >
                    {searchOpen ? (
                        <X className="h-6 w-6 hover:text-gray-100 text-white" />
                    ) : (
                        <Search className="h-6 w-6 hover:text-gray-100 text-white" />
                    )}
                </button>
                <button
                    onClick={() => setShareOpen(!shareOpen)}
                    className="p-2  rounded-full transition-colors"
                >
                    <svg className="h-5 w-5 hover:text-gray-100 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                </button>
                <button
                    onClick={() => setFavoritesOpen(!favoritesOpen)}
                    className="p-2  rounded-full transition-colors"
                >
                    <svg className="h-5 w-5 hover:text-gray-100 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            {/* Search overlay */}
            {searchOpen && (
                <div className="absolute left-16 right-16 h-2/3 inset-0 bg-gray-200/60 z-40 transform transition-transform duration-300">
                    <div className="max-w-4xl mx-auto px-4 py-8">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold">Search</h2>
                            <button onClick={() => setSearchOpen(false)} className="p-2  rounded-full">
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        <div className="relative mb-8">
                            <input
                                type="search"
                                placeholder="Search..."
                                className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                autoFocus
                            />
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <Search className="h-6 w-6 text-gray-400" />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold mb-4">Filter by date</h3>
                                <div className="space-y-2">
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="sort" value="date_desc" className="text-gray-600" />
                                        <span>From most recent to oldest</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="sort" value="date_asc" className="text-gray-600" />
                                        <span>From oldest to most recent</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-4">Filter by section</h3>
                                <div className="space-y-2">
                                    {["Sustainability", "Finance", "Press", "Talent", "Group", "Houses"].map((section) => (
                                        <label key={section} className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                name="categories"
                                                value={section.toLowerCase()}
                                                className="text-gray-600"
                                            />
                                            <span>{section}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Share menu */}
            {shareOpen && (
                <div className="fixed right-12 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg z-50 flex flex-col items-center gap-2">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.012-3.05-1.862-3.05-1.863 0-2.148 1.452-2.148 2.956v5.698h-3v-11h2.881v1.524h.041c.4-.696 1.382-1.428 2.845-1.428 3.043 0 3.607 2.001 3.607 4.603v6.301z"/>
                        </svg>
                    </a>
                    <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.036 2c-5.6 0-10.151 4.55-10.151 10.15 0 2.244.73 4.338 1.967 6.035l-1.941 5.815 6.014-1.984c1.635 1.07 3.542 1.634 5.111 1.634 5.6 0 10.151-4.55 10.151-10.15 0-5.601-4.551-10.15-10.151-10.15zm4.381 13.818c-.174-.372-.666-.641-1.092-.944-.426-.304-2.388-1.753-2.759-1.952-.371-.2-.641-.301-.912.2-.271.501-.996 1.64-.996 1.64s-3.123-1.359-5.454-3.123c-1.922-1.438-.628-2.26.519-2.911.951-.535 1.921-.945 2.589-1.067.668-.122 1.296-.012 1.767.247.471.258 1.288.88 1.475 1.033.186.154.314.336.373.553.058.217.029.438-.012.652-.041.214-.258 1.353-1.288 1.763-.684.271-1.148.372-1.296.411-.148.039-.301.058-.441-.058-.139-.117-.573-.456-.702-.497-.128-.04-.258-.047-.387.117-.129.164-.514.559-.628.673-.114.114-.232.2-.271.335-.039.135.068.273.312.456.245.183.527.349.856.498.33.149.67.171.986.117.316-.054.987-.22 1.129-.433.141-.213.514-.933.558-1.252.044-.319.018-.58.012-.797-.006-.217-.058-.373-.331-.503-.272-.129-.597-.186-.912-.186-.315 0-.615.058-.848.23-.233.172-.873.592-1.067.739-.194.147-.4.258-.574.349-.174.091-.35.136-.528.136-.178 0-.354-.045-.514-.136-.16-.091-.319-.23-.472-.415-.152-.185-.245-.407-.271-.653-.026-.246.012-.497.117-.697.105-.2.271-.426.494-.645.223-.219.475-.44.748-.664.273-.224.528-.407.759-.548.231-.141.465-.258.696-.349.232-.091.465-.135.692-.135.227 0 .447.044.645.135.198.091.392.217.577.373.185.156.349.331.494.528.145.197.258.407.34.628.082.221.105.452.071.683-.034.231-.139.452-.311.645-.172.193-.393.349-.658.465-.265.116-.558.171-.873.171-.315 0-.628-.055-.936-.164-.308-.109-.616-.271-.922-.488-.306-.217-.589-.497-.842-.836-.253-.339-.465-.72-.63-1.139-.165-.419-.248-.872-.248-1.359 0-.487.083-.952.248-1.396.165-.444.395-.835.692-1.172.297-.337.65-.603.1058-.803.408-.2.865-.299 1.367-.299.502 0 .983.099 1.443.299.46.2.863.466 1.211.803.348.337.637.726.863 1.165.226.439.34.914.34 1.422 0 .508-.114.983-.34 1.422-.226.439-.515.828-.863 1.165-.348.337-.751.603-1.211.803-.46.2-.941.299-1.443.299-.267 0-.528-.029-.782-.087-.254-.058-.497-.145-.722-.261-.225-.116-.44-.27-.645-.465-.205-.195-.377-.428-.515-.697-.138-.269-.206-.557-.206-.863 0-.306.068-.594.206-.863.138-.269.31-.502.515-.697.205-.195.42-.349.645-.465.225-.116.468-.203.722-.261.254-.058.515-.087.782-.087.267 0 .528.029.782.087.254.058.497.145.722.261.225.116.44.27.645.465.205.195.377.428.515.697.138.269.206.557.206.863 0 .306-.068.594-.206.863-.138.269-.31.502-.515.697-.205.195-.42.349-.645.465-.225.116-.468.203-.722.261-.254.058-.515.087-.782.087-.267 0-.528-.029-.782-.087-.254-.058-.497-.145-.722-.261-.225-.116-.44-.27-.645-.465-.205-.195-.377-.428-.515-.697-.138-.269-.206-.557-.206-.863 0-.306.068-.594.206-.863.138-.269.31-.502.515-.697.205-.195.42-.349.645-.465.225-.116.468-.203.722-.261.254-.058.515-.087.782-.087.267 0 .528.029.782.087.254.058.497.145.722.261z" />
                    </svg>
                </a>
                    <button
                        onClick={() => setShareOpen(false)}
                        className="mt-2 p-1 text-sm text-gray-600 hover:text-gray-800"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>
            )}

            {/* Favorites menu */}
            {favoritesOpen && (
                <div className="fixed w-1/2 h-full right-12 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg z-50 flex items-center">
                    <div className="flex items-start justify-between">
                        <span className="text-gray-600 text-sm">Favorites Page</span>
                    <button
                        onClick={() => setFavoritesOpen(false)}
                        className="ml-2 p-1 text-sm text-gray-600 hover:text-gray-800"
                    >
                        <X className="h-5 w-5" />
                    </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default SideAction