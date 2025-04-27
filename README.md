# Micro Frontend Projesi

Bu proje, micro frontend mimarisi kullanılarak geliştirilmiş bir React uygulamasıdır.

## Proje Yapısı

Proje üç ana bölümden oluşmaktadır:

### Shell Uygulaması (`/shell`)
- Ana konteyner uygulama
- Routing ve genel sayfa düzeni yönetimi
- Micro frontend'lerin yüklenmesi ve koordinasyonu

### Remote-1 Uygulaması (`/remote-1`)
- Birinci micro frontend modülü
- Bağımsız olarak geliştirilebilir ve dağıtılabilir
- Shell uygulaması tarafından yüklenir

### Remote-2 Uygulaması (`/remote-2`)
- İkinci micro frontend modülü
- Bağımsız olarak geliştirilebilir ve dağıtılabilir
- Shell uygulaması tarafından yüklenir

## Başlangıç

Her bir uygulama klasöründe aşağıdaki komutları çalıştırarak projeyi başlatabilirsiniz:

1. Bağımlılıkları yükleyin:
```bash
cd shell && npm install
cd remote-1 && npm install
cd remote-2 && npm install
```

2. Geliştirme sunucularını başlatın:
```bash
# Shell uygulaması için
cd shell && npm start

# Remote-1 uygulaması için
cd remote-1 && npm start

# Remote-2 uygulaması için
cd remote-2 && npm start
```

## Kullanılan Teknolojiler

- React
- Create React App
- Module Federation
- React Router

## Geliştirme

Her bir micro frontend modülü bağımsız olarak geliştirilebilir. Modüller arası iletişim Module Federation aracılığıyla sağlanmaktadır.

## Build ve Deployment

Her bir uygulama için production build almak için:

```bash
npm run build
```

Build işlemi sonrasında her bir uygulamanın `build` klasöründe production-ready dosyalar oluşturulacaktır. 