import { Link } from 'react-router-dom';

export default function Home() {
  const sifirla = () => {
    localStorage.clear();
    alert('Tüm randevu ve kullanıcı bilgileri sistemden tamamen temizlendi!');
    window.location.reload();
  };

  return (
    <div className="page-container">
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '40px' }}>
        <Link to="/hasta-giris" className="btn-primary">Hasta girişi</Link>
        <Link to="/doktor-giris" className="btn-primary">Doktor girişi</Link>
      </div>
      
      <button 
        onClick={sifirla} 
        style={{ marginTop: 'auto', background: 'none', border: 'none', textDecoration: 'underline', cursor: 'pointer', fontFamily: 'var(--font-main)', fontSize: '16px', color: '#000000', opacity: 0.7 }}
      >
        Tüm Verileri (Sistemi) Sıfırla
      </button>
    </div>
  );
}
