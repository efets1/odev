import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DoctorLogin() {
  const navigate = useNavigate();
  const [tcNo, setTcNo] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tcNo, password, role: 'doktor' })
      });
    } catch (err) {
      console.error("Backend hatası");
    }

    localStorage.setItem('docTc', tcNo);
    localStorage.setItem('docPass', password);
    navigate('/doktor-dashboard');
  };

  return (
    <div className="page-container">
      <div className="btn-primary" style={{ height: '60px', width: '280px', cursor: 'default', fontSize: '24px', marginBottom: '40px' }}>
        Doktor Giriş
      </div>
      <form onSubmit={handleLogin} className="form-container">
        <input 
          type="text" 
          className="input-field" 
          placeholder="Tc. Kimlik NO" 
          value={tcNo}
          onChange={(e) => setTcNo(e.target.value)}
          required 
        />
        <input 
          type="password" 
          className="input-field" 
          placeholder="E Devlet Şifresi" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
        <button type="submit" className="btn-primary btn-small" style={{marginTop: '20px'}}>Giriş</button>
      </form>
    </div>
  );
}
