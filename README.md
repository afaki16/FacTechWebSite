# FacTech Web Sitesi

Statik site, Vercel üzerinde yayınlanır (derleme adımı yok).

| Yol | İçerik |
|---|---|
| `/` (`index.html`) | Türkçe ana sayfa (varsayılan, `x-default`) |
| `/en/` (`en/index.html`) | İngilizce ana sayfa |
| `assets/css/styles.css`, `assets/js/main.js` | Ortak stil ve script |
| `robots.txt`, `sitemap.xml` | Arama motorları |
| `llms.txt` | Yapay zekâ asistanları için şirket özeti |
| `og-image.png` | Sosyal medya paylaşım görseli (1200×630) |
| `vercel.json` | Yönlendirmeler, güvenlik başlıkları, önbellek |

İçerik değiştiğinde güncellenmesi gereken yerler: iki HTML sayfası, her sayfadaki JSON-LD bloğu (`<script type="application/ld+json">`), `llms.txt` ve `sitemap.xml` içindeki `lastmod`.
