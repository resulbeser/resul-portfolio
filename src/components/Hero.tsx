import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-6 py-12 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center justify-items-center">
          {/* Sol taraf - Metin içeriği */}
          <div className="animate-fade-in text-center lg:text-left max-w-lg lg:max-w-none lg:justify-self-end lg:pr-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-foreground">Resul</span>{" "}
              <span className="text-primary">Beşer</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Frontend Developer & UI/UX Designer
            </p>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl lg:max-w-none">
              Modern web teknolojileri ile kullanıcı deneyimi odaklı, estetik ve
              işlevsel arayüzler tasarlıyorum.
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
              >
                CV İndir
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Sağ taraf - Profil fotoğrafı */}
          <div className="flex justify-center lg:justify-start animate-slide-in lg:justify-self-start lg:pl-8">
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

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-teal rounded-full animate-pulse opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-mint rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
              <div className="absolute top-1/4 -left-8 w-4 h-4 bg-fresh-blue rounded-full animate-pulse opacity-50 animation-delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
