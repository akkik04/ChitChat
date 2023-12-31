import React from 'react';
import TwitterSVG from '../../assets/twitter.svg';
import LinkedInPNG from '../../assets/linkedin.png';
import GitHubPNG from '../../assets/github.png';

export const Footer = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white py-2 px-4 flex justify-between items-center border-t border-gray-100">
            <div className="flex items-center gap-2 mx-auto">
                <p className="text-sm font-medium text-center">AlgoRepeat (2023) by Akshith Kandivanam</p>
            </div>
            <div className="flex items-center gap-3 absolute right-4 bottom-2">
                <a href="https://twitter.com/akki04x" target="_blank" rel="noopener noreferrer">
                    <img src={TwitterSVG} alt="Twitter" className="h-5 w-5 cursor-pointer" />
                </a>
                <a href="https://www.linkedin.com/in/akshith-kandivanam/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedInPNG} alt="LinkedIn" className="h-5 w-5 cursor-pointer" />
                </a>
                <a href="https://github.com/akkik04" target="_blank" rel="noopener noreferrer">
                    <img src={GitHubPNG} alt="GitHub" className="h-5 w-5 cursor-pointer" />
                </a>
            </div>
        </div>
    );
};