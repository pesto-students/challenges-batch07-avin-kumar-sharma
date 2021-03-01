import { debounce } from './debounce';

let debouncedFn = debounce(() => console.log('hello'), 5000);
