import { useNavigate } from 'react-router-dom';

export default function BookAppointment() {
  const navigate = useNavigate();
  
  const selectDate = (date) => {
    alert("Randevu seçildi: " + date);
    const tcNo = localStorage.getItem('userTc') || 'Bilinmiyor';
    
    // Eski randevuları al
    const existingStr = localStorage.getItem('appointmentsList');
    const appointments = existingStr ? JSON.parse(existingStr) : [];
    
    // Yeni randevuyu listeye ekle
    appointments.push({ tcNo, date });
    
    // Listeyi kaydet
    localStorage.setItem('appointmentsList', JSON.stringify(appointments));
    
    navigate('/hasta-randevularim');
  };

  return (
    <div className="page-container top-aligned">
      <div className="btn-primary" style={{ height: '80px', marginBottom: '30px', cursor: 'default', fontSize: '20px', width: '280px' }}>
        Lütfen tarih seçiniz
      </div>
      <button className="btn-primary" style={{ height: '60px', width: '200px', marginBottom: '20px', fontSize: '22px' }} onClick={() => selectDate('3 Nisan')}>3 Nisan</button>
      <button className="btn-primary" style={{ height: '60px', width: '200px', marginBottom: '20px', fontSize: '22px' }} onClick={() => selectDate('4 Nisan')}>4 Nisan</button>
      <button className="btn-primary" style={{ height: '60px', width: '200px', fontSize: '22px' }} onClick={() => selectDate('5 Nisan')}>5 Nisan</button>
    </div>
  );
}
