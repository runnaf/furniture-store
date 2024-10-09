export const getRouteMain = () => '/';
export const getRouteShop = () => '/shop';
export const getRouteCategories = (param = '') => param ? `/categories/${param}` : '/categories';
export const getRouteAbout = () => '/about';
export const getRouteContact = () => '/contact';
export const getRouteBlog = () => '/blog';

