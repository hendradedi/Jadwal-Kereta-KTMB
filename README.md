# 🚆 Dashboard Jadwal KTM Komuter

Dashboard interaktif jadual kereta api KTM Komuter untuk Peninsula Malaysia.

🔗 **Live Demo:** `https://<username>.github.io/<repo-name>/`

---

## ✨ Ciri-ciri

| Ciri | Keterangan |
|------|-----------|
| 🔍 Cari jadual | Pilih stesen asal → destinasi, cari kereta terus |
| ⏱ Countdown | Kira detik ke kereta berikutnya secara langsung |
| 📋 Jadual penuh | Lihat semua masa henti untuk setiap laluan |
| 🗓 Hari bekerja / hujung minggu | Toggle jadual weekday vs weekend |
| 🗺 Peta laluan | Visualisasi laluan dari stesen ke stesen |
| 📱 Responsif | Berfungsi di desktop, tablet & handphone |

## 🛤 Laluan Yang Disokong

1. **Line 1** – Batu Caves ↔ Pulau Sebang/Tampin (24 stesen)
2. **Line 2** – Tanjung Malim ↔ Pelabuhan Klang (30 stesen)
3. **Utara A** – Ipoh ↔ Butterworth (12 stesen)
4. **Utara B** – Butterworth ↔ Padang Besar (9 stesen)

---

## 🚀 Deploy ke GitHub Pages

### Langkah 1 – Buat repositori GitHub

```bash
# Inisialisasi Git dalam folder projek
git init
git add .
git commit -m "feat: tambah dashboard jadual KTM Komuter"
```

### Langkah 2 – Hantar ke GitHub

```bash
# Buat repo baru di github.com, kemudian:
git remote add origin https://github.com/<username>/<repo-name>.git
git branch -M main
git push -u origin main
```

### Langkah 3 – Aktifkan GitHub Pages

1. Buka repositori di **GitHub.com**
2. Klik **Settings** → **Pages**
3. Di bawah *Branch*, pilih **main** dan folder **/ (root)**
4. Klik **Save**
5. Tunggu 1-2 minit → URL akan dipaparkan: `https://<username>.github.io/<repo-name>/`

---

## 📂 Struktur Fail

```
├── index.html          ← Dashboard utama (HTML + CSS + JS)
├── schedule-data.js    ← Data jadual semua laluan
└── README.md           ← Panduan ini
```

---

## 🔧 Kemaskini Data Jadual

Semua data jadual ada dalam `schedule-data.js`. Setiap laluan mempunyai struktur:

```js
{
  id:        "line1",
  name:      "Batu Caves – Pulau Sebang/Tampin",
  color:     "#009A44",
  terminalA: "Batu Caves",
  terminalB: "Pulau Sebang/Tampin",
  stations: [
    { name: "Batu Caves",   offset: 0  },
    { name: "Sentul Timur", offset: 5  },
    // offset = minit dari terminal pertama
  ],
  weekday: {
    southbound: ["05:30", "05:55", ...], // masa berangkat dari terminalA
    northbound: ["04:45", "05:20", ...], // masa berangkat dari terminalB
  },
  weekend: {
    southbound: [...],
    northbound: [...],
  }
}
```

Untuk kemaskini dengan jadual PDF rasmi KTMB:
1. Buka `schedule-data.js`
2. Cari laluan yang ingin dikemaskini
3. Ubah array `southbound` / `northbound` mengikut jadual PDF
4. Simpan → deploy semula

> ⚠️ Data semasa adalah **anggaran** berdasarkan pola jadual umum KTM.  
> Sila semak jadual rasmi di [ktmb.com.my/TrainTime.html](https://www.ktmb.com.my/TrainTime.html).

---

## 📄 Lesen

Projek ini adalah sumber terbuka untuk kegunaan peribadi dan pendidikan.  
Data jadual adalah hak cipta © KTM Berhad (KTMB).
