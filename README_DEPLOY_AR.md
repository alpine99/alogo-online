# رفع موقع AloGo على GitHub Pages

1. فك الضغط عن الملف.
2. ارفع الملفات الموجودة داخل المجلد مباشرة إلى مستودع GitHub، وليس ملف ZIP نفسه.
3. تأكد أن index.html موجود مباشرة في جذر المستودع.
4. من Settings > Pages اختر Deploy from a branch ثم main و /root.
5. الدومين مضبوط في ملف CNAME على: www.alogo.online

للتجربة المحلية:

```bash
python3 -m http.server 5500
```

ثم افتح:

```text
http://localhost:5500
```
