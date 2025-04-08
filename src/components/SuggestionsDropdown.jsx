import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';

const SuggestionsDropdown = ({ suggestions, onSelect, query, setQuery }) => {
  return (
    <Popover open={!!query && suggestions.length > 0}>
    <PopoverTrigger asChild>
      <div className="w-full">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="w-full border px-2 py-1 rounded"
        />
      </div>
    </PopoverTrigger>
  
    <PopoverContent className="w-full p-0">
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {suggestions.map((product) => (
            <CommandItem
              key={product.id}
              value={product.title}
              onSelect={() => onSelect(product)}
            >
              {product.title}
            </CommandItem>
          ))}
        </CommandGroup>
      </Command>
    </PopoverContent>
  </Popover>
  
  );
};

export default SuggestionsDropdown;
