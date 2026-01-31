import Link from "next/link";
import Logo from "@/shared/Logo/Logo";

const quickLinks = [
  { name: "Topics", href: "/#topics" },
  { name: "Benefits", href: "/#benefits" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact", href: "/#contact" },
];

const forTeachers = [
  { name: "Become a Teacher", href: "/become-a-teacher" },
  { name: "Privacy Policy (GDPR)", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
  { name: "Cookie Policy", href: "/cookie-policy" },
  { name: "FAQs", href: "/faqs" },
];

const supportLinks = [
  { name: "eva@gmail.com", href: "mailto:+876657456" },
  { name: "+876657456", href: "tel:+876657456" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <section className="container mx-auto px-4 pt-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16 mb-12 text-center md:text-left">
          {/* Logo + Description */}
          <div className="flex flex-col justify-start items-start">
              <Logo />

            <p className="text-sm text-ring leading-relaxed w-full md:w-3/4">
              The premier destination for luxury travel raffles. We connect
              dreamers with extraordinary experiences through fair, transparent,
              and secure prize draws.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(({ name, href }, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    className="text-sm text-ring hover:text-accent transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* for teacher */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-medium mb-4">For Teachers</h3>
            <ul className="flex flex-col gap-3">
              {forTeachers.map(({ name, href }, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    className="text-sm text-ring hover:text-accent transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="flex flex-col gap-3">
              {supportLinks.map(({ name, href }, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    className="text-sm text-ring hover:text-accent transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom Info */}
      <div className="bg-background2 border-t">
        <div className="container mx-auto flex flex-col justify-center items-center gap-3 sm:gap-6 py-4 px-4 text-center sm:text-left text-foreground">
          {/* Left: Copyright */}
          <p className="text-xs sm:text-sm">
            © {new Date().getFullYear()} 2026 HealthCare+. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
