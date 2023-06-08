import React, {useState, useEffect, useRef} from 'react'

const SearchSelect = ({label, options, onSearch}) => {
  const [filteredOptions, setFilteredOptions] = useState(options)
  const [search, setSearch] = useState('')
  const [display, setDisplay] = useState(false)
  const wrapperRef = useRef(null)

  useEffect(() => {
    setFilteredOptions(options)
  }
  , [options])
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }
  , [])

  const handleClickOutside = (event) => {
    const {current: wrap} = wrapperRef
    if(wrap && !wrap.contains(event.target)) {
      setDisplay(false)
    }
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
    const newOptions = options.filter(option => option.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setFilteredOptions(newOptions)
  }

  const handleSelect = (option) => {
    setSearch(option.name)
    setDisplay(false)
    onSearch(option)
  }

  return (
    <div ref={wrapperRef} className='search-select'>
      <input type='text' className='search-select-input' onFocus={()=> setDisplay(true)} onChange={handleSearch} value={search} placeholder={label} />
      {display && (
        <div className='search-select-dropdown'>
          {filteredOptions.map((option, index) => (
            <div key={index} onClick={() => handleSelect(option)} className='search-select-item'>
              <span>{option.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchSelect