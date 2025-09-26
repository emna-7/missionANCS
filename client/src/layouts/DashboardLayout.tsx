import { useState, ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { FileSpreadsheet, Menu, X, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleExcelDownload = async () => {
    try {
      const response = await fetch('/api/export/excel', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Automated-Excel.xlsm`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        console.error('Erreur lors du téléchargement Excel');
      }
    } catch (error) {
      console.error('Erreur lors du téléchargement Excel:', error);
    }
  };

  const navigation = [
    { name: "Dashboard", href: "/" },
    { name: "Missions", href: "/missions" },
    { name: "Rapports", href: "/reports" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-ey-gray-100 font-sans antialiased text-ey-gray-900">
      <header className="bg-white border-b border-ey-gray-300 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-ey-yellow font-bold text-xl">Audit Mission</span>
              </div>
              <nav className="hidden md:ml-6 md:flex md:space-x-4">
                {navigation.map((item) => {
                  const isActive = item.href === location ||
                    (item.href !== "/" && location.startsWith(item.href));

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "text-ey-yellow border-b-2 border-ey-yellow"
                          : "text-ey-gray-600 hover:text-ey-yellow"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/assistant-ia">
                <Button variant="outline" size="icon" className="border-ey-gray-300 text-ey-gray-600 hover:bg-ey-yellow hover:text-ey-gray-900 hover:border-ey-yellow">
                  <Bot className="h-4 w-4" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-2 border-green-300 text-green-600 hover:bg-green-500 hover:text-white hover:border-green-500"
                onClick={handleExcelDownload}
              >
                <FileSpreadsheet className="h-4 w-4" />
                <span>Excel</span>
              </Button>
              <div className="flex items-center">
                <Avatar className="h-8 w-8 ring-2 ring-ey-yellow ring-offset-2">
                  <AvatarImage src="/emna-profile.jpg" alt="User profile photo" />
                  <AvatarFallback className="bg-ey-yellow text-ey-gray-900 font-semibold">EB</AvatarFallback>
                </Avatar>
                <span className="ml-2 text-sm font-medium text-ey-gray-700">Emna Belkhiria</span>
              </div>
            </div>
            <div className="flex md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-ey-gray-600 hover:text-ey-gray-900 hover:bg-ey-gray-100"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-ey-gray-300">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const isActive = item.href === location ||
                  (item.href !== "/" && location.startsWith(item.href));

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? "text-ey-yellow bg-ey-yellow bg-opacity-10"
                        : "text-ey-gray-600 hover:bg-ey-gray-100 hover:text-ey-gray-900"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* Assistant IA button for mobile */}
              <Link
                href="/assistant-ia"
                className="block px-3 py-2 rounded-md text-base font-medium transition-colors bg-ey-yellow bg-opacity-10 text-ey-yellow border border-ey-yellow"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex items-center space-x-2">
                  <Bot className="h-5 w-5" />
                  <span>Assistant IA</span>
                </div>
              </Link>
            </div>
            <div className="pt-4 pb-3 border-t border-ey-gray-300">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <Avatar className="h-10 w-10 ring-2 ring-ey-yellow ring-offset-2">
                    <AvatarImage src="/emna-profile.jpg" alt="User profile" />
                    <AvatarFallback className="bg-ey-yellow text-ey-gray-900 font-semibold">EB</AvatarFallback>
                  </Avatar>
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-ey-gray-800">Emna Belkhiria</div>
                  <div className="text-sm font-medium text-ey-gray-500">emna@exemple.fr</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>

      <footer className="bg-ey-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-lg font-semibold text-ey-yellow">Audit Mission Platform</span>
              <p className="text-ey-gray-400 text-sm mt-1">© {new Date().getFullYear()} Tous droits réservés</p>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="text-ey-gray-400 hover:text-ey-yellow transition-colors">Aide</Link>
              <Link href="#" className="text-ey-gray-400 hover:text-ey-yellow transition-colors">Mentions légales</Link>
              <Link href="#" className="text-ey-gray-400 hover:text-ey-yellow transition-colors">Confidentialité</Link>
              <Link href="#" className="text-ey-gray-400 hover:text-ey-yellow transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


