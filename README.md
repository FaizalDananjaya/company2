# Alpha Edge - Complete Website

Website lengkap Alpha Edge dengan desain modern, responsif, dan animasi halus menggunakan teknologi web standar.

## Fitur Website

### 🎨 Desain Modern

- Layout responsif untuk desktop, tablet, dan mobile
- Animasi halus dan transisi yang elegan
- Color scheme profesional dengan aksen biru
- Typography yang mudah dibaca

### 📱 Responsivitas

- Bootstrap 3.3.7 framework
- Grid system yang fleksibel
- Mobile-first approach
- Cross-browser compatibility

### ⚡ Animasi & Interaksi

- CSS transitions dan keyframes
- JavaScript untuk interaktivitas
- Smooth scrolling
- Hover effects
- Loading animations

## Struktur File

```
/
├── index.html              # Homepage
├── about.html              # About page
├── contact.html            # Contact page
├── donors.html             # Donors program
├── dataguru-final.html     # Teacher database
├── service.html            # Services page
├── category.html           # Case studies
├── page.html               # Insights page
├── style.css               # Main stylesheet
├── css/
│   ├── bootstrap.min.css   # Bootstrap CSS
│   └── font-awesome.min.css # Font Awesome icons
├── js/
│   ├── bootstrap.min.js    # Bootstrap JS
│   ├── index.js            # Main JavaScript
│   ├── contact.js          # Contact form handler
│   ├── donors.js           # Donors page handler
│   └── dataguru.js         # Teacher database handler
├── img/                    # Images folder
└── fonts/                  # Font files
```

## Cara Menjalankan

### 1. Menggunakan XAMPP (Recommended)

1. Pastikan XAMPP sudah terinstall
2. Jalankan Apache server
3. Letakkan folder project di `xampp/htdocs/`
4. Akses: `http://localhost/nama-folder-project/`

### 2. Menggunakan Live Server (VS Code)

1. Install extension "Live Server" di VS Code
2. Klik kanan pada `index.html`
3. Pilih "Open with Live Server"

### 3. Menggunakan Python HTTP Server

```bash
cd /path/to/project
python -m http.server 8000
```

Akses: `http://localhost:8000`

## Halaman Website

### 🏠 Homepage (`index.html`)

- Hero section dengan animasi
- Services overview
- Latest insights
- Call-to-action sections

### 👥 About (`about.html`)

- Company overview
- Team information
- Mission & vision
- Company values

### 📞 Contact (`contact.html`)

- Contact form dengan validasi
- Company information
- Google Maps integration
- FAQ section

### 🤝 Donors Program (`donors.html`)

- Program overview
- Donation tiers (Bronze, Silver, Gold)
- Success stories
- Registration form

### 👨‍🏫 Teacher Database (`dataguru-final.html`)

- Teacher search & filter
- Teacher profiles
- Rating system
- Contact functionality

### 🔧 Services (`service.html`)

- Detailed service offerings
- Technology solutions
- Service benefits

### 📊 Case Studies (`category.html`)

- Project showcases
- Client testimonials
- Success metrics

### 📝 Insights (`page.html`)

- Technology articles
- Industry insights
- Latest trends

## Teknologi yang Digunakan

- **HTML5**: Semantic markup
- **CSS3**: Modern styling dengan Flexbox
- **JavaScript**: Interaktivitas dan animasi
- **Bootstrap 3.3.7**: Responsive framework
- **Font Awesome**: Icon library
- **Google Fonts**: Typography (Open Sans)

## Fitur JavaScript

### Contact Form

- Form validation
- Email format checking
- Success/error messages
- Phone number formatting

### Teacher Database

- Advanced search & filtering
- Dynamic content loading
- Profile modals
- Rating system

### Donors Program

- Tier selection
- Custom amount input
- Form validation
- Success notifications

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized images
- Minified CSS/JS
- Efficient animations
- Fast loading times

## Customization

### Mengubah Warna Tema

Edit file `style.css` dan ubah variabel CSS:

```css
:root {
  --primary-color: #007acc;
  --secondary-color: #005999;
  --accent-color: #ff6b35;
}
```

### Menambah Konten Baru

1. Copy struktur HTML dari halaman yang ada
2. Update konten sesuai kebutuhan
3. Tambahkan JavaScript functionality jika diperlukan

## Support

Untuk pertanyaan atau support:

- Email: alphaedge13@gmail.com
- Phone: +62821-6374-1958
- Website: [Alpha Edge](#)

## Lisensi

© 2025 Alpha Edge. All rights reserved.
