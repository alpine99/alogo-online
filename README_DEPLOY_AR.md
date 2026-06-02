# رفع موقع AloGo على GitHub Pages

1. فك ضغط الملف.
2. ارفع الملفات الموجودة داخل المجلد مباشرة إلى مستودع GitHub، وليس ملف ZIP نفسه.
3. تأكد أن `index.html` موجود في جذر المستودع.
4. من GitHub: Settings → Pages → Deploy from a branch → main → /root.
5. ملف `CNAME` موجود للدومين: `www.alogo.online`.

## Namecheap DNS
- CNAME Record: Host `www` → Value `alpine99.github.io`
- A Records للـ `@` إلى GitHub Pages:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

بعد الحفظ انتظر انتشار DNS ثم فعّل Enforce HTTPS من GitHub Pages.
