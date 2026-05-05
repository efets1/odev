import { Link } from 'react-router-dom';

export default function PatientDashboard() {
  return (
    <div className="page-container top-aligned">
      <Link to="/hasta-randevu-al" className="btn-primary" style={{ marginBottom: '40px', marginTop: '40px' }}>Randevu al</Link>
      <Link to="/hasta-randevularim" className="btn-primary">Randevularım</Link>
    </div>
  );
}
