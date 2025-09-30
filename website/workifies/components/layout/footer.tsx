import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { href: "/features", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: "/dashboard", label: "Dashboard" },
    ],
    Company: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
    Legal: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  };

  const socialLinks = [
    { href: "https://github.com/workifies", icon: Github, label: "GitHub" },
    { href: "https://twitter.com/workifies", icon: Twitter, label: "Twitter" },
    { href: "https://linkedin.com/company/workifies", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:contact@workifies.com", icon: Mail, label: "Email" },
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-xl font-bold gradient-text">Workifies</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Streamline your workforce management with powerful tools for employee tracking, company management, and seamless communication.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Workifies. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Built with ❤️ for better workforce management
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}