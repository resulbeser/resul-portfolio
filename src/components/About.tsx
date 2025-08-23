export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-8 text-center">
              <span className="text-primary">Hakkımda</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  3+ yıllık deneyimim ile modern web teknolojilerinde
                  uzmanlaşmış bir frontend developer'ım. Kullanıcı deneyimi
                  odaklı, performanslı ve erişilebilir web uygulamaları
                  geliştiriyorum.
                </p>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  React, TypeScript ve modern CSS framework'leri ile çalışmayı
                  seviyorum. Her projede temiz kod yazma prensiplerine bağlı
                  kalarak, sürdürülebilir ve ölçeklenebilir çözümler üretmeye
                  odaklanıyorum.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">
                      Frontend Development
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">UI/UX Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">
                      Responsive Web Design
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">
                      Performance Optimization
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-card rounded-2xl p-8 shadow-soft">
                  <div className="bg-gradient-primary rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-primary-foreground mb-2">
                      3+
                    </div>
                    <div className="text-primary-foreground/80">
                      Yıl Deneyim
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">
                        50+
                      </div>
                      <div className="text-muted-foreground text-sm">Proje</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">
                        100%
                      </div>
                      <div className="text-muted-foreground text-sm">
                        Memnuniyet
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
