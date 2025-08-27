import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { trackDownload, trackExternalLink } from "@/lib/analytics";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCVDownload = () => {
    trackDownload('Resul_Beser_CV_EN.pdf');
  };

  const handleSocialClick = (platform: string, url: string) => {
    trackExternalLink(url, platform);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-20 lg:pt-0">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-6 py-12 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Sol taraf - Metin içeriği - Mobilde 2. sırada (altta) */}
          <div className="animate-fade-in text-center lg:text-left order-2 lg:order-1 lg:pr-8 lg:-ml-20">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-foreground">Resul</span>{" "}
              <span className="text-primary">Beşer</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Software Developer
            </p>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl lg:max-w-none">
              Modern web teknolojileri ile kullanıcı deneyimi odaklı, estetik ve
              işlevsel yazılım çözümleri geliştiriyorum.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4 mb-8">
              <Button
                onClick={scrollToContact}
                className="bg-gradient-primary hover:shadow-hover transition-all duration-300 px-8 py-3 text-lg"
              >
                İletişime Geç
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-3 text-lg"
                asChild
              >
                <a
                  href="/Resul Beşer_CV[EN].pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  onClick={handleCVDownload}
                >
                  CV İndir
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6">
              <a
                href="https://github.com/resulbeser"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialClick('GitHub', 'https://github.com/resulbeser')}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/resulbeser/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialClick('LinkedIn', 'https://www.linkedin.com/in/resulbeser/')}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:resulbeser1@gmail.com"
                onClick={() => handleSocialClick('Email', 'mailto:resulbeser1@gmail.com')}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Sağ taraf - Profil fotoğrafı - Mobilde 1. sırada (üstte) */}
          <div className="flex justify-center lg:justify-end animate-slide-in order-1 lg:order-2 lg:pl-20">
            <div className="relative group">
              {/* Arka plan dekoratif daire */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full scale-110 opacity-20 group-hover:scale-125 transition-transform duration-500"></div>

              {/* Ana fotoğraf konteyneri */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300 shadow-soft group-hover:shadow-hover">
                <img
                  src="/biyometrik.png"
                  alt="Resul Beşer - Frontend Developer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>

              {/* Rotating decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-125 animate-spin-slow"></div>
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-teal/30 scale-150 animate-spin-reverse"></div>

              {/* Floating geometric elements */}
              <div className="absolute -top-8 -right-8 w-6 h-6 bg-gradient-primary rounded-lg animate-float rotate-45 opacity-70"></div>
              <div className="absolute -bottom-10 -left-10 w-8 h-8 border-2 border-mint rounded-full animate-float-delayed opacity-60"></div>
              <div className="absolute top-1/3 -left-12 w-4 h-4 bg-fresh-blue/70 transform rotate-45 animate-pulse-slow"></div>
              <div className="absolute bottom-1/3 -right-12 w-5 h-5 border-2 border-primary/40 rounded-full animate-bounce-slow"></div>

              {/* Glow effects */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full scale-110 opacity-5 animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
