# Node.js ve Express ile REST API Geliştirmeye Giriş

Bu proje, Beytek Teknoloji Topluluğu'nda gerçekleştirilecek olan "Node.js ve Express ile REST API Geliştirmeye Giriş" sunumuna ait örnek bir uygulamadır. Proje, temel RESTful API prensiplerini ve Node.js ile Express framework'ünü kullanarak API geliştirme sürecini kapsamaktadır.

---

## **İçerik**

1. [Proje Hakkında](#proje-hakkında)
2. [Kurulum](#kurulum)
3. [Kullanım](#kullanım)
4. [Rotalar](#rotalar)
5. [Swagger Dokümantasyonu](#swagger-dokümantasyonu)
6. [Projede Kullanılan Teknolojiler](#projede-kullanılan-teknolojiler)
7. [İletişim](#iletişim)

---

## **Proje Hakkında**

Bu proje, bir RESTful API oluşturma sürecini öğretmeyi amaçlar. Örnek projede kullanıcı kimlik doğrulama, kullanıcı yönetimi ve JWT (JSON Web Token) tabanlı oturum yönetimi özellikleri bulunmaktadır.

### **Hedefler:**
- RESTful API nedir ve neden önemlidir?
- Node.js ve Express kullanarak API geliştirme süreci.
- HTTP metodlarının (GET, POST, PUT, DELETE) kullanımı.
- Swagger ile API dokümantasyonu oluşturma.

---

## **Kurulum**

### **Gereksinimler**
- Node.js (v14+)
- npm veya yarn
- Git

### **Adımlar**

1. Bu projeyi klonlayın:
    ```bash
    git clone https://github.com/BeytekTech/BeytekRestAPI.git
    cd BeytekRestAPI
    ```

2. Bağımlılıkları yükleyin:
    ```bash
    npm install
    ```

3. Ortam dosyasını (.env) oluşturun:
    ```bash
    cp .env.example .env
    ```
    `.env` dosyasında JWT_SECRET gibi gerekli değişkenleri düzenleyin.

4. Uygulamayı başlatın:
    ```bash
    npm run dev
    ```

---

## **Kullanım**

Sunucuyu çalıştırdıktan sonra, aşağıdaki temel API rotalarını kullanabilirsiniz. Tüm istekler `http://localhost:3000/api` üzerinden gerçekleştirilir.

---

## **Rotalar**

| HTTP Metodu | Endpoint              | Açıklama                        |
|-------------|-----------------------|----------------------------------|
| `POST`      | `/auth/login`         | Kullanıcı girişi yap            |
| `POST`      | `/auth/logout`        | Kullanıcı çıkışı yap            |
| `GET`       | `/users`              | Tüm kullanıcıları listele       |
| `GET`       | `/users/:id`          | Belirli bir kullanıcıyı getir   |
| `POST`      | `/users`              | Yeni bir kullanıcı oluştur      |
| `PUT`       | `/users/:id`          | Kullanıcı bilgilerini güncelle  |
| `DELETE`    | `/users/:id`          | Kullanıcıyı sil                 |

---

## **Swagger Dokümantasyonu**

Projenin API dokümantasyonu Swagger ile oluşturulmuştur. Dokümantasyonu görmek için:

- Tarayıcınızda şu URL'yi açın: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

Swagger üzerinden API'yi interaktif olarak test edebilirsiniz.

---

## **Projede Kullanılan Teknolojiler**

- **Node.js**: Sunucu tarafında JavaScript çalıştırmak için.
- **Express.js**: API geliştirme için hafif ve esnek bir web framework'ü.
- **JWT (JSON Web Token)**: Kullanıcı kimlik doğrulama ve oturum yönetimi.
- **Swagger**: API dokümantasyonu ve test aracı.
- **dotenv**: Ortam değişkenlerini yönetmek için.
- **Nodemon**: Geliştirme sırasında sunucuyu otomatik yeniden başlatmak için.

---

## **İletişim**

**Şahin Ersever**  
- GitHub: [@sahinersever](https://github.com/erseversahin)
- LinkedIn: [Şahin Ersever](https://www.linkedin.com/in/sahinersever/)
- E-posta: [erseversahin@gmail.com](mailto:erseversahin@gmail.com)

---

Bu proje, Beytek Teknoloji Topluluğu için eğitim amaçlı geliştirilmiştir. Öneri ve katkılarınızı memnuniyetle bekleriz.