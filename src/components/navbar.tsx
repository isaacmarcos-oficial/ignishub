"use client"
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Serviços", href: "/#servicos" },
  { label: "ItsZap", href: "/#itszap" },
  { label: "Projetos", href: "/#projetos" },
  { label: "FAQ", href: "/#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80"
    >
      <div className="flex max-w-7xl flex-row mx-auto items-center justify-between py-4 px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/ignishub1.png"
            alt="IGNIS HUB"
            width={125}
            height={125}
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/553898377158"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Fale Conosco
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl"
        >
          <div className="flex flex-col gap-4 p-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/553898377158"
              target="_blank"
              rel="noopener noreferrer"
            // className="px-5 py-2 rounded-lg text-sm font-medium bg-primary text-primary-foreground text-center"
            >
              <Button>
                Fale Conosco
              </Button>
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
