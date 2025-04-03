function ErrorText ({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#FF2929] text-sm ml-2">{children}</p>
  );
}

export default ErrorText;
