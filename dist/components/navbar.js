import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from '@/components/ui/dropdown-menu';
import { LogOut, UserCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';
export const Navbar = () => {
    return (_jsx("nav", { className: "bg-white fixed top-0 z-10 left-0 right-0 backdrop-blur-sm  border-gray-200 dark:bg-gray-900 dark:border-gray-700", children: _jsxs("div", { className: "max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4", children: [_jsxs("a", { href: "#", className: "flex items-center space-x-3 rtl:space-x-reverse", children: [_jsx("img", { src: "https://flowbite.com/docs/images/logo.svg", className: "h-8", alt: "Flowbite Logosu" }), _jsx("span", { className: "self-center text-2xl font-semibold whitespace-nowrap dark:text-white", children: "CarInspect" })] }), _jsx("div", { className: "hidden w-full md:block md:w-auto", id: "navbar-multi-level", children: _jsxs("ul", { className: "flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700", children: [_jsx("li", { children: _jsx(NavLink, { to: "/", className: "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent", "aria-current": "page", children: "Ana Sayfa" }) }), _jsx("li", { children: _jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { children: "Hizmetler" }), _jsxs(DropdownMenuContent, { children: [_jsx(DropdownMenuLabel, { children: "My Account" }), _jsx(DropdownMenuSeparator, {}), _jsx(DropdownMenuItem, { children: "Profile" }), _jsx(DropdownMenuItem, { children: "Billing" }), _jsx(DropdownMenuItem, { children: "Team" }), _jsx(DropdownMenuItem, { children: "Subscription" })] })] }) }), _jsx("li", { children: _jsx("a", { href: "#", className: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent", children: "Hizmetler" }) }), _jsx("li", { children: _jsx("a", { href: "#", className: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent", children: "Fiyatland\u0131rma" }) }), _jsx("li", { children: _jsx("a", { href: "#", className: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent", children: "\u0130leti\u015Fim" }) }), _jsx("li", { children: _jsx("li", { children: _jsxs(DropdownMenu, { children: [_jsxs(DropdownMenuTrigger, { className: "flex items-center gap-2", children: ["Profil", _jsx(UserCircle, {})] }), _jsxs(DropdownMenuContent, { children: [_jsx(DropdownMenuLabel, { children: "Hesab\u0131m" }), _jsx(DropdownMenuSeparator, {}), _jsx(DropdownMenuItem, { children: "Profil" }), _jsx(DropdownMenuItem, { children: "Team" }), _jsxs(DropdownMenuItem, { children: [_jsx(LogOut, {}), "\u00C7\u0131k\u0131\u015F yap"] })] })] }) }) })] }) })] }) }));
};