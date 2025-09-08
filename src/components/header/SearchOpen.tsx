import { Search, X } from 'lucide-react'

type SearchOpenProps = {
    setSearchOpen: (open: boolean) => void;
};

const SearchOpen = ({ setSearchOpen }: SearchOpenProps) => {
  return (
      <div className="absolute left-16 right-16 h-2/3 inset-0 bg-gray-200/60 z-40 transform transition-transform duration-300">
                    <div className="max-w-4xl mx-auto px-4 py-8">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold">Search</h2>
                            <button onClick={() => setSearchOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
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
  )
}

export default SearchOpen