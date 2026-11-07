# FacTech Web Sitesi

Statik site, Vercel üzerinde yayınlanır (derleme adımı yok). Arama motorları ve yapay zekâ botları
içeriği JavaScript çalıştırmadan okuyabilsin diye tüm metin düz HTML'dedir.

| Yol | İçerik |
|---|---|
| `/` (`index.html`) | Türkçe ana sayfa (varsayılan, `x-default`) |
| `/en/` (`en/index.html`) | İngilizce ana sayfa |
| `assets/css/site.css` | Temel stiller, animasyonlar, hover durumları, Hakkımızda / SSS bölümleri |
| `assets/js/site.js` | Kayarak belirme, dönen kelime, hero eğim efekti, dil tercihi |
| `assets/img/` | Logo işareti ve kurucu fotoğrafı |
| `robots.txt`, `sitemap.xml` | Arama motorları |
| `llms.txt` | Yapay zekâ asistanları için şirket özeti |
| `og-image.png` | Sosyal medya paylaşım görseli (1200×630) |
| `vercel.json` | Yönlendirmeler, güvenlik başlıkları, önbellek |

Koyu tasarım, tasarım aracından dışa aktarılan JavaScript bundle'ından (commit `6fdfbbb`) statik HTML'e
dönüştürüldü; sayfa düzeni büyük ölçüde satır içi (`style="..."`) stillerde durur.

İçerik değiştiğinde güncellenmesi gereken yerler: iki HTML sayfası, her sayfadaki JSON-LD bloğu
(`<script type="application/ld+json">`), `llms.txt` ve `sitemap.xml` içindeki `lastmod`.
