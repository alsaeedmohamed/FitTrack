"use client";
import { useState } from "react";
import { AuthLayout } from "@/components/AuthLayout";
import { FormInput } from "@/components/FormInput";
import { SubmitButton } from "@/components/SubmitButton";
import { SocialButton } from "@/components/SocialButton";
import { useToast } from "@/components/ui/use-toast";
import Link from 'next/link';

const SignUp = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!name || !email || !password || !confirmPassword) {
      toast({
        title: "Input Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    if (password !== confirmPassword) {
      toast({
        title: "Password Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulating account creation request
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account created successfully",
        description: "Welcome to FitTrack! Your fitness journey has just begun.",
      });
      // Could add user redirection to home page here
    }, 1500);
  };

  return (
    <AuthLayout
      title="Join Us Now"
      subtitle="Start your fitness journey with FitTrack"
      alternateLink={{
        text: "Already have an account?",
        linkText: "Sign in",
        href: "/sginIn"
      }}
      image="/image/3.png"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        
        <FormInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <FormInput
          label="Password"
          type="password"
          placeholder="Enter a strong password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <FormInput
          label="Confirm Password"
          type="password"
          placeholder="Enter password again"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        
        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-700 rounded bg-[#141B2D]"
            required
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
            I agree to the <Link href="#" className="text-green-400 hover:underline">Terms & Conditions</Link> and <Link href="#" className="text-green-400 hover:underline">Privacy Policy</Link>
          </label>
        </div>
        
        <SubmitButton isLoading={isLoading}>
          Create Account
        </SubmitButton>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-[#0A0F1A] text-gray-400">
              Or sign up with
            </span>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 gap-3">
          <SocialButton
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            }
            provider="Google"
            onClick={() => toast({
              title: "Redirecting",
              description: "Redirecting you to Google for authentication",
            })}
          />
          
          <SocialButton
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            }
            provider="Facebook"
            onClick={() => toast({
              title: "Redirecting",
              description: "Redirecting you to Facebook for authentication",
            })}
          />
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
