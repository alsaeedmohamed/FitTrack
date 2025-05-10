import { ReactNode } from "react";
import Link from "next/link";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  alternateLink: {
    text: string;
    linkText: string;
    href: string;
  };
  image?: string;
}

export function AuthLayout({ children, title, subtitle, alternateLink, image }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black text-white">
      {/* Left Section with Background Image */}
      <div className="w-full md:w-1/2 lg:w-2/5 relative">
        {image && (
          <>
            <img 
              src={image} 
              alt="Fitness motivation" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
          </>
        )}
        
        {/* Branding Section positioned over the image */}
        <div className="relative z-10 h-full flex flex-col justify-center p-6 md:p-12">
          <div>
            <Link href="/" className="flex items-center gap-2 text-white mb-12">
              <div className="h-9 w-9 rounded-full border-2 border-white flex items-center justify-center">
                <span className="sr-only">FitTrack</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M16.2 3.8a2.7 2.7 0 0 0-3.81 0l-.4.38-.4-.4a2.7 2.7 0 0 0-3.82 0C6.73 4.85 6.67 6.64 8 8l4 4 4-4c1.33-1.36 1.27-3.15.2-4.2z" />
                  <path d="M8 8c-1.36 1.33-3.15 1.27-4.2.2a2.7 2.7 0 0 1 0-3.81l.4-.39.4.4c.9.9.24 1.78-.2 2.2" />
                  <path d="M16 8c1.36 1.33 3.15 1.27 4.2.2a2.7 2.7 0 0 0 0-3.81l-.4-.39-.4.4c-.9.9-.24 1.78.2 2.2" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold">FitTrack</h1>
            </Link>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-shadow">{title}</h2>
            <p className="text-gray-200 text-shadow mb-6">{subtitle}</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12 bg-[#0A0F1A]">
        <div className="max-w-md w-full space-y-8">
          {children}
          <p className="text-center text-gray-400 mt-8">
            {alternateLink.text}{" "}
            <Link href={alternateLink.href} className="text-green-400 hover:underline">
              {alternateLink.linkText}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
