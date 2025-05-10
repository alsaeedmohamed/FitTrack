interface SocialButtonProps {
  icon: React.ReactNode;
  provider: string;
  onClick: () => void;
}

export const SocialButton = ({ icon, provider, onClick }: SocialButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
    >
      {icon}
      <span>Continue with {provider}</span>
    </button>
  );
};