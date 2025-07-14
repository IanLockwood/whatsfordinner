import React from 'react';
import Link from 'next/link';

const NAV_ITEMS = [
    { name: 'What\'s For Dinner?', path: '/' },
    { name: 'How\'s The Weather?', path: '/dashboard' },
    { name: 'Let\'s Play Tic-Tac-Toe!', path: '/tic-tac-toe' },
];

export default function NavBar() {
    return (
        <nav className="bg-transparent border-b border-gray-300 mb-[-58]">
            <ul className="flex gap-6 list-none m-0 p-0 justify-center">
            {NAV_ITEMS.map(({ name, path }) => (
                <li
                    key={path}
                    className="navbar-item p-4 transition-colors duration-200 hover:bg-gray-200 group"
                >
                    <Link
                        href={path}
                        className="no-underline text-gray-800 font-bold italic px-3 py-1 rounded group-hover:text-blue-600 transition-colors duration-200"
                    >
                        {name}
                    </Link>
                </li>
            ))}
            </ul>
        </nav>
    );
}
