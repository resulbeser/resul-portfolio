# Google Analytics ve Search Console Kurulum Talimatları

## 🔧 Google Analytics Kurulumu

### 1. Google Analytics Hesabı Oluşturun

1. [Google Analytics](https://analytics.google.com/) adresine gidin
2. "Ölçmeye başlayın" butonuna tıklayın
3. Hesap adı girin (örn: "Resul Beşer Portfolio")
4. Web site seçeneğini seçin
5. Web sitesi adı: "Resul Beşer Portfolio"
6. URL: https://resulbeser.dev/
7. Endüstri kategorisi: "Teknoloji" seçin
8. Ölçüm ID'nizi kopyalayın (GA_MEASUREMENT_ID)

### 2. Analytics ID'yi Projeye Entegre Edin

`index.html` dosyasında aşağıdaki yerlerde `GA_MEASUREMENT_ID` yazan kısımları gerçek ID'niz ile değiştirin:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GERÇEK_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GERÇEK_GA_ID', {
```

`src/lib/analytics.ts` dosyasında:

```typescript
export const GA_MEASUREMENT_ID = "GERÇEK_GA_ID";
```

## 🔍 Google Search Console Kurulumu

### 1. Search Console Hesabı Oluşturun

1. [Google Search Console](https://search.google.com/search-console) adresine gidin
2. "Özellik ekle" butonuna tıklayın
3. "URL prefix" seçeneğini seçin
4. https://resulbeser.dev/ URL'sini girin

### 2. Sahiplik Doğrulaması

1. "HTML tag" metodunu seçin
2. Verilen meta tag'i kopyalayın
3. `index.html` dosyasında şu satırı bulun:

```html
<meta
  name="google-site-verification"
  content="YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE"
/>
```

4. `YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE` kısmını gerçek kod ile değiştirin

### 3. Sitemap Gönderimi

1. Search Console'da "Sitemaps" bölümüne gidin
2. "Sitemap ekle" butonuna tıklayın
3. `sitemap.xml` yazın ve gönderin

## 📊 Analytics Event'leri

Projede şu event'ler otomatik olarak takip edilir:

### Contact Events

- **contact**: Form gönderimi, email tıklama, telefon tıklama
- **external_link**: Sosyal medya linklerine tıklama

### Project Events

- **project_view**: Proje detaylarını görüntüleme
- **external_link**: GitHub ve demo linklerine tıklama

### Download Events

- **file_download**: CV indirme

### Engagement Events

- **scroll**: Sayfa scroll yüzdesi
- **page_view**: Sayfa görüntüleme

## 🚀 Deployment Sonrası Kontroller

### 1. Analytics Kontrolü

1. Site yayına alındıktan sonra gerçek zamanlı raporları kontrol edin
2. Google Analytics > Gerçek Zamanlı > Genel Bakış
3. Sitenizi ziyaret edin ve veriler geldiğini doğrulayın

### 2. Search Console Kontrolü

1. Sahiplik doğrulamasını tamamlayın
2. "URL İnceleme" aracını kullanın
3. Ana sayfa URL'ini test edin
4. "İndeksleme İste" butonuna tıklayın

### 3. Sitemap Kontrolü

1. https://resulbeser.dev/sitemap.xml adresinin çalıştığını kontrol edin
2. Search Console'da sitemap durumunu kontrol edin

## 🔧 Önemli Notlar

- **Veri Gizliliği**: GDPR uyumluluğu için cookie banner eklemeyi düşünün
- **Performance**: Analytics script'leri site performansını etkileyebilir
- **Testing**: Geliştirme ortamında analytics disable edilebilir

## 📝 Güncellemeler

Analytics tracking kodları şu dosyalarda bulunur:

- `src/lib/analytics.ts`: Ana analytics fonksiyonları
- `src/components/Hero.tsx`: CV indirme ve sosyal medya tracking
- `src/components/Contact.tsx`: Contact form ve sosyal medya tracking
- `src/components/Projects.tsx`: Proje linkleri tracking
- `src/components/Footer.tsx`: Footer sosyal medya tracking

Yeni event'ler eklemek için `analytics.ts` dosyasına yeni fonksiyonlar ekleyin ve ilgili component'lerde çağırın.
