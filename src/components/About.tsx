export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="text-primary">Hakkımda</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12 items-center max-w-6xl mx-auto lg:-ml-20">
            <div className="md:col-span-2">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-justify">
                Yeni mezun bir bilgisayar mühendisiyim. Eğitimim ve projelerim
                boyunca hem frontend hem de backend teknolojileri üzerine
                çalıştım. Ayrıca test otomasyonu deneyimlerim sayesinde yazılım
                geliştirme sürecinin farklı aşamalarına hâkimim. Kullanıcı
                deneyimi odaklı, performanslı ve sürdürülebilir yazılım
                çözümleri geliştirmeyi hedefliyorum. Öğrenmeye açık, takım
                çalışmasına uyumlu ve modern yazılım geliştirme prensiplerine
                önem veren bir geliştiriciyim.
              </p>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-justify">
                React, TypeScript ve modern CSS framework'leri ile çalışmayı
                seviyorum. Her projede temiz kod yazma prensiplerine bağlı
                kalarak, sürdürülebilir ve ölçeklenebilir çözümler üretmeye
                odaklanıyorum.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Frontend Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Backend Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Test Automation & QA</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">
                    UI/UX & Responsive Design
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">
                    Clean Code & Best Practices
                  </span>
                </div>
              </div>
            </div>

            <div className="relative lg:ml-36 lg:scale-125 lg:w-80">
              <div className="bg-gradient-card rounded-2xl p-12 shadow-soft">
                <div className="bg-gradient-primary rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary-foreground mb-2">
                    1+
                  </div>
                  <div className="text-primary-foreground/80">Yıl Deneyim</div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      5+
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Tamamlanan Proje
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      100%
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Öğrenme Tutkusu
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
