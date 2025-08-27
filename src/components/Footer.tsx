import { Github, Linkedin, Mail } from "lucide-react";
import { trackExternalLink } from "@/lib/analytics";

export function Footer() {
  const handleSocialClick = (platform: string, url: string) => {
    trackExternalLink(url, `footer_${platform}`);
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 lg:-ml-20">
          <div className="text-center md:text-left lg:translate-x-20">
            <div className="text-xl font-bold text-primary mb-2">
              Resul Beşer
            </div>
            <div className="text-muted-foreground">Software Developer</div>
          </div>

          <div className="flex items-center gap-6 lg:-translate-x-1">
            <a
              href="https://github.com/resulbeser"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                handleSocialClick("GitHub", "https://github.com/resulbeser")
              }
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/resulbeser/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                handleSocialClick(
                  "LinkedIn",
                  "https://www.linkedin.com/in/resulbeser/"
                )
              }
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:resulbeser1@gmail.com"
              onClick={() =>
                handleSocialClick("Email", "mailto:resulbeser1@gmail.com")
              }
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Resul Beşer. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
