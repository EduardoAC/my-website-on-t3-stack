import { type ReactNode } from "react";
import { Footer } from "./footer";
import { cn } from '~/lib/utils';
import { Header } from './header';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}
export default function Layout({ children, className }: LayoutProps) {
  return (
    <div className={cn("min-h-screen bg-gray-50", className)}>
      <Header />
      <main className="bg-customGray text-white">{children}</main>
      <Footer />
    </div>
  );
}
