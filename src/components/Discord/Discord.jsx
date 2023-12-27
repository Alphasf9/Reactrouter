import React from 'react';
import { Link, NavLink } from 'react-router-dom'


export default function Discord() {
    return (
        <div className="bg-gray-800 min-h-screen flex items-center justify-center">
            <div className="text-white text-center">
                <h1 className="text-4xl font-bold mb-6">Welcome to Discord</h1>
                <p className="text-lg mb-8">Connect and chat with your friends and communities.</p>
                <Link to="https://discord.com/" className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-blue-600 transition duration-300">Join Discord</Link>
            </div>
        </div>)
}