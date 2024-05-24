'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce';

export default function SearchUser() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((value) => {
    console.log(`Searching... ${value}`);
    const params = new URLSearchParams(searchParams)
    if(value){
      params.set('term', value)
    } else {
      params.delete('term')
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)
  
  return (
    <div className="relative">
      <input className="mb-8 border w-full h-10 py-2 px-4 text-slate-600 text-lg border-slate-400 rounded-3xl" type="text" onChange={
        (e) => handleSearch(e.target.value)
      } />
      <img style={{transform: 'translateY(-50%)'}} className="absolute right-4 top-5" src="/search.svg" alt="search icon" />
    </div>
  )
}
