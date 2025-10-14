'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Accueil', href: '/', badge: null },
    { label: 'Services', href: '/services', badge: null },
    { label: 'Équipe', href: '/equipe', badge: null },
    { label: 'Offre COGOHR', href: '/offre-cogohr', badge: 'Exclusif' },
    { label: 'Contact', href: '/contact', badge: null },
  ];

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-[1px] border-border/50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-argam.png"
              alt="Argam Conseils"
              width={200}
              height={60}
              priority
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Bauhaus Style */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative group"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs uppercase tracking-[0.15em] font-medium transition-colors ${
                        isActive
                          ? 'text-foreground'
                          : 'text-muted-foreground group-hover:text-foreground'
                      }`}
                    >
                      {item.label}
                    </span>
                    {item.badge && (
                      <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 bg-[#b4925e] text-white rounded-full font-semibold">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  {/* Bauhaus hover line */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#b4925e] transform origin-left transition-transform duration-300 ${
                      isActive
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button - 44x44px touch target */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-foreground hover:bg-muted/50 rounded transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pt-4 border-t-[1px] border-border/50">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleMobileMenuClose}
                    className={`flex items-center justify-between px-4 py-4 min-h-[44px] rounded transition-colors ${
                      isActive
                        ? 'bg-muted text-foreground'
                        : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                    }`}
                  >
                    <span className="text-sm uppercase tracking-wider font-medium">
                      {item.label}
                    </span>
                    {item.badge && (
                      <span className="text-[9px] uppercase tracking-wider px-2 py-1 bg-[#b4925e] text-white rounded-full font-semibold">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
