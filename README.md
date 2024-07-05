# GITS
a simple logic to solve problem

# Logic-2

## Analisis Kompleksitas

### Kompleksitas Waktu: O(n)

- Fungsi melakukan satu kali iterasi melalui string input.
- Setiap operasi di dalam loop (push, pop, perbandingan) memiliki kompleksitas waktu O(1).
- Total kompleksitas waktu adalah O(n), di mana n adalah panjang string input.

### Kompleksitas Ruang: O(n)

- Dalam kasus terburuk, di mana semua karakter adalah kurung buka, stack akan menyimpan semua karakter.
- Oleh karena itu, kompleksitas ruang maksimum adalah O(n).
- Dalam kasus rata-rata dan terbaik, kompleksitas ruang akan lebih rendah, tetapi tetap dianggap O(n) untuk analisis kasus terburuk.

Fungsi ini mencapai kompleksitas terendah yang mungkin untuk masalah ini, karena perlu diperiksa setiap karakter setidaknya satu kali untuk menentukan keseimbangan kurung.

#### Penjelasan lebih lanjut

- Pendekatan Stack:

 - Saya menggunakan stack karena sifat LIFO (Last In, First Out) sangat cocok untuk masalah dalam fungsi ini.
 - Setiap kali menemui kurung buka, saya memasukkannya ke array stack.
 - Ketika menemui kurung tutup, saya memeriksa apakah cocok dengan kurung buka terakhir di stack.

- Objek brackets:

 - Objek ini berfungsi sebagai hash map untuk mempercepat pencocokan kurung buka dan tutup.
 - Kuncinya(key) adalah kurung buka, nilai(value) adalah kurung tutup yang sesuai.
 - Disini memungkinkan untuk dilakukan pengecekan dengan kompleksitas O(1).

- Iterasi String:

 - Saya menggunakan loop for...of untuk mengiterasi string. Ini lebih mudah dibaca daripada loop tradisional.
 - Saya mengabaikan spasi dengan if (char === ' ') continue;. Ini memungkinkan fungsi untuk menangani input dengan atau tanpa spasi.


- Pengecekan Keseimbangan/Kecocokan:

 - Jika karakter adalah kurung buka (brackets[char] ada), maka akan di push ke stack.
 - Jika karakter adalah kurung tutup, maka akan memeriksa dua hal:
   a. Apakah stack kosong? Jika ya, berarti ada kurung tutup tanpa kurung buka yang sesuai.
   b. Apakah kurung tutup cocok dengan kurung buka terakhir di stack? Jika tidak, berarti urutan kurung tidak benar.


- Hasil Akhir:

 - Setelah iterasi selesai, diperiksa kembali apakah stack kosong.
 - Jika kosong, semua kurung seimbang, maka Output "YA".
 - Jika tidak kosong, berarti ada kurung buka yang tidak memiliki pasangan, maka output "TIDAK".


- Analisis Kompleksitas Lebih Lanjut:

 - Kompleksitas Waktu O(n):

  - Setiap operasi dalam loop (push, pop, pengecekan) adalah O(1).
  - Dilakukan operasi ini untuk setiap karakter dalam string, jadi total adalah n * O(1) = O(n).
  - Bahkan dalam kasus terburuk (semua kurung valid), tetap hanya mengiterasi string sekali.


 - Kompleksitas Ruang O(n):

  - Kasus terburuk: semua karakter adalah kurung buka, misalnya "(((((".
  - Dalam kasus ini, stack akan menyimpan semua karakter, menghasilkan penggunaan ruang O(n).
  - Kasus terbaik: string kosong atau semua kurung langsung seimbang, misalnya "()()()".
  - Dalam kasus terbaik, penggunaan ruang akan mendekati O(1), karena stack tidak akan pernah menyimpan lebih dari satu elemen.


 - Efisiensi:

  - Solusi ini efisien. Mengapa? karena hanya perlu melalui iterasi string sekali.
  - Penggunaan objek brackets memungkinkan pencocokan kurung dengan kompleksitas O(1), yang lebih cepat daripada menggunakan if-else atau switch statement.


 - Trade-off:

  - Meskipun operasi dengan cara ini menggunakan memori ekstra untuk stack, ini memungkinkan untuk mencapai kompleksitas waktu linear O(n).
  - Alternatifnya mungkin memerlukan multiple passes melalui string atau nested loops, yang akan menghasilkan kompleksitas waktu yang lebih buruk.
