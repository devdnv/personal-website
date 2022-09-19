import { useRef } from 'react';
import ProfilePicture from '../../lib/profile.jpg';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Home() {
    const socialsDataRef = useRef([
        { icon: <FaGithub />, url: "https://github.com/yashsehgal" },
        { icon: <FaTwitter />, url: "https://twitter.com/yashsehgaldev" },
        { icon: <FaLinkedin />, url: "https://linkedin.com/in/sehgalyash" },
        { icon: <FaInstagram />, url: "https://instagram.com/sehgalyash_" }
    ]);

    return (
        <section className="home-view-container">
            <div className="hero-content-wrapper mt-20 flex flex-row items-center justify-center gap-24">
                <div className="profile-picture-wrapper w-fit h-fit">
                    <img src={ProfilePicture} 
                        className="w-[360px] h-auto rounded-lg shadow-md"
                        alt="profile"
                    />
                </div>
                <div className="personal-details-content-wrapper">
                    <h1 className="name text-6xl text-gray-900 font-bold leading-snug">{"Yash Sehgal"}</h1>
                    <p className="role-keywords-wrapper text-sm h-auto font-normal leading-snug text-gray-500">
                        {"Design Systems, Frontend & UI Engineering, Product Design"}
                    </p>
                    <div className="socials-wrapper mt-5 flex flex-col items-start justify-start gap-1 w-fit h-auto">
                        <span className='font-semibold text-gray-800 text-sm'>{"Socials"}</span>
                        <ul className="socials-list flex flex-row items-center justify-start gap-2">
                            {socialsDataRef.current?.map((social, socialIndex) => (
                                <li className="social-item text-gray-400 hover:text-gray-600 text-base" 
                                    key={socialIndex}
                                >
                                    <a href={social?.url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {social?.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}