"use client"; // إضافة السطر هذا لتحويل المكون إلى مكون عميل

import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { AuthLayout } from "@/components/AuthLayout";
import { FormInput } from "@/components/FormInput";
import { SubmitButton } from "@/components/SubmitButton";
import { SocialButton } from "@/components/SocialButton";
import { useRouter } from "next/navigation"; // تعديل الاستيراد هنا
import { Import } from "lucide-react";

const SignIn = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      toast({
        title: "Input Error",
        description: "Please enter your email and password",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate login request
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Successfully signed in",
        description: "Welcome back to FitTrack",
      });

      // Redirect to Dashboard
      router.push("/dashboard"); // توجيه المستخدم إلى صفحة الـ Dashboard
    }, 1500);
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue your fitness journey"
      alternateLink={{
        text: "Don't have an account?",
        linkText: "Sign up",
        href: "/sginUp",
      }}
      image="/image/1.jpg"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-700 rounded bg-[#141B2D]"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <Link href="/forgot-password" className="text-green-400 hover:underline">
              Forgot password?
            </Link>
          </div>
        </div>

        <SubmitButton isLoading={isLoading}>Sign In</SubmitButton>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-[#0A0F1A] text-gray-400">Or sign in with</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3">
          <SocialButton
            provider="Google"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            }
            onClick={() =>
              toast({
                title: "Redirecting",
                description: "Redirecting you to Google for authentication",
              })
            }
          />

          <SocialButton
            provider="Facebook"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            }
            onClick={() =>
              toast({
                title: "Redirecting",
                description: "Redirecting you to Facebook for authentication",
              })
            }
          />
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignIn;
