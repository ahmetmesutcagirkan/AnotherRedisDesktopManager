const tr = {
    message: {
      new_connection: 'Yeni Bağlantı',
      refresh_connection: 'Yenile',
      edit_connection: 'Bağlantıyı Düzenle',
      del_connection: 'Bağlantıyı Sil',
      close_connection: 'Bağlantıyı Kapatmayı',
      add_new_line: 'Yeni Satır Ekle',
      redis_version: 'Redis Sürümü',
      process_id: 'Süreç Kimliği',
      used_memory: 'Kullanılan Bellek',
      used_memory_peak: 'Kullanılan Maksimum Bellek',
      used_memory_lua: 'Lua Tarafından Kullanılan Bellek',
      connected_clients: 'Bağlı İstemciler',
      total_connections_received: 'Toplam Bağlantı',
      total_commands_processed: 'Toplam Komut',
      key_statistics: 'Anahtar İstatistikleri',
      all_redis_info: 'Tüm Redis Bilgisi',
      server: 'Sunucu',
      memory: 'Bellek',
      stats: 'İstatistik',
      settings: 'Ayarlar',
      confirm_to_delete_row_data: 'Satır Verilerini Silmek İstiyor Musunuz?',
      delete_success: 'Silme Başarılı',
      delete_failed: 'Silme Başarısız',
      modify_success: 'Güncelleme Başarılı',
      modify_failed: 'Güncelleme Başarısız',
      add_success: 'Ekleme Başarılı',
      add_failed: 'Ekleme Başarısız',
      value_exists: 'Değer Mevcut',
      refresh_success: 'Yenileme Başarılı',
      click_enter_to_rename: 'Yeniden Adlandırmak için Tıklayın veya Enter Tuşuna Basın',
      click_enter_to_ttl: 'TTLyi Değiştirmek için Tıklayın veya Enter Tuşuna Basın',
      confirm_to_delete_key: '{key} Anahtarı Silinsin mi?',
      edit_line: 'Satırı Düzenle',
      auto_refresh: 'Otomatik Yenile',
      auto_refresh_tip: 'Otomatik Yenileme, Her {interval} Saniyede Itomatik Yenile',
      key_not_exists: 'Anahtar Mevcut Değil',
      collapse_all: 'Hepsini Daralt',
      expand_all: 'Hepsini Genişlet',
      json_format_failed: 'Json Ayrıştırma Başarısız Oldu',
      php_unserialize_format_failed: 'PHP Serileştirmesi Başarısız Oldu',
      clean_up: 'Pırıl Pırıl Yap',
      redis_console: 'Redis Konsolu',
      confirm_to_delete_connection: 'Bağlantıyı Silmeyi Onayla ?',
      connection_exists: 'Bağlantı Yapılandırması Zaten Var',
      close_to_edit_connection: 'Düzenlemeden Önce Bağlantıyı Kapatmalısınız',
      close_to_connection: 'Bağlantıyı Kapatmayı Onayla ?',
      ttl_delete: 'TTL Ayarı <= 0 Olanlar Anahtar Doğrudan Silecek',
      max_page_reached: 'Maks. Sayfaya Ulaşıldı',
      add_new_key: 'Yeni Anahtar',
      enter_new_key: 'Önce Yeni Anahtarın Adını Girin',
      key_type: 'Anahtar Tipi',
      save: 'Kaydet',
      enter_to_search: 'Aramak Yapmak İçin',
      export_success: 'Dışa Aktarma Başarılı',
      select_import_file: 'Dosyayı Seçin',
      import_success: 'İçe Aktarma Başarılı',
      put_file_here: 'Dosyayı Buraya Sürükle veya Seç',
      config_connections: 'Bağlantılar',
      import: 'İçe Aktar',
      export: 'Dışa Aktar',
      open: 'Aç',
      close: 'Kapat',
      open_new_tab: 'Yeni Sekmede Aç',
      exact_search: 'Detaylı Arama',
      enter_to_exec: 'Komutları Yürütmek için Enter, Geçmişi Değiştirmek için Yukarı ve Aşağı Tuşlarına Basın',
      pre_version: 'Sürüm',
      manual_update: 'Manuel İndirme',
      retry_too_many_times: 'Yeniden Bağlanmak İçin Çok Fazla Deneme Yapıldı. Lütfen Sunucu Durumunu Kontrol Edin',
      key_to_search: 'Anahtar Kelime Araması',
      begin_update: 'Güncelle',
      check_update: 'Güncellemeleri Denetlee',
      update_checking: 'Güncellemeleri Kontrol Etmek, Birkaç Dakika Bekleyin ...',
      update_available: 'Yeni Sürüm Bulundu',
      update_not_available: 'Uygulamanız Güncel',
      update_error: 'Güncelleştirme Başarısız',
      update_downloading: 'İndiriliyor...',
      update_download_progress: 'İndirme Durumu',
      update_downloaded: 'Güncelleme İndirme Tamamlandı, Lütfen Uygulamanızı Yeniden Başlatın',
      mac_not_support_auto_update: 'Mac Otomatik Güncellemeyi Desteklemez, Lütfen Manuel Olarak İndirin ve Yükleyin,\
      veya Yükleme Komutunu Çalıştırın "brew cask reinstall another-redis-desktop-manager"',
      font_family: 'Yazı Tipi Ailesi',
      font_faq_title: 'Yazı Tipi Ayar Talimatları',
      font_faq: '1. Birden fazla yazı tipi ayarlanabilir<br>\
      2. Yazı tipi seçimi düzenli. Önce İngilizce yazı tipini sonra da kendi dilinizde yazı tipini seçmeniz önerilir<br>\
      3. Bazı istisnai durumlarda sistem yazı tipi listesi yüklenemediğinde, yüklü yazı tipi adını el ile girebilirsiniz.',
      private_key_faq: '<pre>-----BEGIN RSA PRIVATE KEY-----</pre> ile başlayan RSA formatlı özel anahtar desteklenir\
      <pre>-----BEGIN OPENSSH PRIVATE KEY-----</pre> ile başlayalım, <pre>ssh-keygen -p -m pem -f ~/.ssh/id_rsa</pre> ile formatı dönüştürmeniz gerekiyor. Bu işlem önceki özel anahtar girişini etkilemez',
      dark_mode: 'Siyah Tema',
      load_more_keys: 'devamını yükle',
      key_name: 'Anahtar Adı',
      project_home: 'Proje Ana Sayfası',
      cluster_faq: 'Doldurmak için, kümedeki herhangi bir düğümü seçin, diğer düğümler otomatik olarak tanımlanacaktır.',
      redis_status: 'Redis Bilgisi',
      confirm_flush_db: 'Db {db} içindeki tüm anahtarları silmek istiyor musunuz?',
      flushdb: 'DByi Temizle',
      info_disabled: 'Bilgi komutu yürütme istisnası (devre dışı bırakılmış olabilir), yeniden bilgi gösterilemiyor',
      page_zoom: 'Sayfa Yakınlaştırma',
      scan_disabled: 'Tarama komutu yürütme istisnası (devre dışı bırakılmış olabilir), anahtar listesi görüntülenemiyor',
    },
  };

  export default tr;
