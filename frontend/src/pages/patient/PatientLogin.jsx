import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PatientLogin() {
  const navigate = useNavigate();
  const [tcNo, setTcNo] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Backend'e bilgileri gönderip elasticsearch'e kaydet
    try {
      await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tcNo, password, role: 'hasta' })
      });
    } catch (err) {
      console.error("Backend'e bağlanılamadı, Elasticsearch kapalı olabilir.");
    }

    // Her durumda giriş yapıp sayfaya yönlendir
    localStorage.setItem('userTc', tcNo);
    localStorage.setItem('userPass', password);
    navigate('/hasta-dashboard');
  };

  return (
    <div className="page-container">
      <form onSubmit={handleLogin} className="form-container">
        <input 
          type="text" 
          className="input-field" 
          placeholder="Tc. Kimlik No" 
          value={tcNo}
          onChange={(e) => setTcNo(e.target.value)}
          required 
        />
        <input 
          type="password" 
          className="input-field" 
          placeholder="E devlet Şifresi" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
        <button type="submit" className="btn-primary btn-small" style={{marginTop: '20px'}}>Giriş</button>
      </form>
    </div>
  );
}
