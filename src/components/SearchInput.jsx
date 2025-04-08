// import React, { useState } from 'react';
// import { useQuery } from '@tanstack/react-query';



// import { useInfiniteQuery } from '@tanstack/react-query';
// import SuggestionsDropdown from './SuggestionsDropdown';
// import ProductDetails from './ProductDetails';
// import { useDebounce } from '@/hooks/useDebounce';
// import { fetchProducts } from '@/services/api';
// const SearchInput = () => {
//   const [query, setQuery] = useState('');
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const debouncedQuery = useDebounce(query, 300);

// //   useInfiniteQuery({
// //     queryKey: ["products"],
// //     queryFn: ({ pageParam = 1 }) => fetchProducts(pageParam),
// //     getNextPageParam: (lastPage, allPages) => lastPage.nextPage, // if applicable
// //   });
// const { data, isLoading, isError, error } = useQuery({
//     queryKey: ['products', { searchQuery: debouncedQuery }],
//     queryFn: () => fetchProducts(debouncedQuery),
//     enabled: !!debouncedQuery,
//     keepPreviousData: true,
//     staleTime: 3000,
//   });
//   const handleSelect = (product) => {
//     setSelectedProduct(product);
//     setQuery(product.title);
//   };
// console.log(data,'datadatadatadatadatadatadatadatadatadatadatadatadatadatadata')
//   return (
//     <div className="relative">
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         className="w-full p-2 border rounded"
//       />
//       {isLoading && <div className="spinner">Loading...</div>}
//       {isError && <div className="error">Error: {error.message}</div>}
//       {debouncedQuery && data?.length > 0 && (
//         <SuggestionsDropdown
//         suggestions={data}
//         onSelect={handleSelect}
//         query={query}
//         setQuery={setQuery}
//       />
//       )}
//       {debouncedQuery && data?.length === 0 && <div>No results found</div>}
//       {selectedProduct && <ProductDetails product={selectedProduct} />}
//     </div>
//   );
// };

// export default SearchInput;
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useDebounce } from '@/hooks/useDebounce';
import { fetchProducts } from '@/services/api';
import SuggestionsDropdown from './SuggestionsDropdown';
import ProductDetails from './ProductDetails';

const SearchInput = () => {
  const [query, setQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const debouncedQuery = useDebounce(query, 300);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['products', { searchQuery: debouncedQuery }],
    queryFn: () => fetchProducts(debouncedQuery),
    enabled: !!debouncedQuery,
    keepPreviousData: true,
    staleTime: 3000,
  });

  const handleSelect = (product) => {
    setSelectedProduct(product);
    setQuery(product.title);
    setShowSuggestions(false); // Hide dropdown on selection
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShowSuggestions(true);
        }}
        className="w-full p-2 border rounded"
      />

      {isLoading && <div className="spinner">Loading...</div>}
      {isError && <div className="error">Error: {error.message}</div>}

      {debouncedQuery && data?.length > 0 && showSuggestions && (
        <SuggestionsDropdown
          suggestions={data}
          onSelect={handleSelect}
          query={query}
          setQuery={setQuery}
        />
      )}

      {debouncedQuery && data?.length === 0 && <div>No results found</div>}
      {selectedProduct && <ProductDetails product={selectedProduct} />}
    </div>
  );
};

export default SearchInput;
