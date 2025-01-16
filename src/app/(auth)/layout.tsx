export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      這是登入註冊的 layout
      {children}
    </div>
  );
}
