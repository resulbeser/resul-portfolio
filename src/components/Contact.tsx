import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { trackContactForm, trackExternalLink } from "@/lib/analytics";

export function Contact() {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackContactForm("form");
    // Form submission logic will be added here
    console.log("Form submitted - Analytics tracked");
  };

  const handleEmailClick = () => {
    trackContactForm("email");
  };

  const handlePhoneClick = () => {
    trackContactForm("phone");
  };

  const handleSocialClick = (platform: string, url: string) => {
    trackExternalLink(url, platform);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="text-primary">İletişim</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:-ml-20">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Benimle İletişime Geçin
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Yeni projeler, iş birlikleri veya herhangi bir sorunuz için
                  benimle iletişime geçmekten çekinmeyin. Size en kısa sürede
                  dönüş yapacağım.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-muted-foreground">
                      resulbeser1@gmail.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Telefon</div>
                    <div className="text-muted-foreground">
                      +90 540 614 14 61
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Konum</div>
                    <div className="text-muted-foreground">
                      İstanbul, Türkiye
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/resulbeser"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    handleSocialClick("GitHub", "https://github.com/resulbeser")
                  }
                  className="bg-primary/10 p-3 rounded-xl text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
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
                  className="bg-primary/10 p-3 rounded-xl text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:resulbeser1@gmail.com"
                  onClick={handleEmailClick}
                  className="bg-primary/10 p-3 rounded-xl text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-start-2 lg:translate-x-28">
              <div className="bg-gradient-card rounded-2xl p-8 shadow-soft">
                <h3 className="text-xl font-bold mb-6 text-foreground">
                  Mesaj Gönder
                </h3>

                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Ad Soyad
                      </label>
                      <Input
                        placeholder="Adınız ve soyadınız"
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="email@example.com"
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Konu
                    </label>
                    <Input
                      placeholder="Mesaj konusu"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mesaj
                    </label>
                    <Textarea
                      placeholder="Mesajınızı buraya yazın..."
                      rows={5}
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary hover:shadow-hover transition-all duration-300 py-3 text-lg"
                  >
                    Mesaj Gönder
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
