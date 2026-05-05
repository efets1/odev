import express from 'express';
import cors from 'cors';
import client, { checkConnection } from './elasticClient.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API health and ES status
app.get('/api/ping', async (req, res) => {
  const isElasticConnected = await checkConnection();
  res.json({
    status: 'ok',
    message: 'Health Portal API is running',
    elasticsearch: isElasticConnected ? 'connected' : 'disconnected'
  });
});

// Create appointment
app.post('/api/appointments', async (req, res) => {
  try {
    const { patientId, doctorId, date } = req.body;

    const result = await client.index({
      index: 'appointments',
      document: {
        patientId,
        doctorId,
        date,
        createdAt: new Date().toISOString()
      }
    });

    res.status(201).json({ success: true, id: result._id });
  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({ error: 'Failed to create appointment' });
  }
});

// Login and save to elasticsearch
app.post('/api/login', async (req, res) => {
  try {
    const { tcNo, password, role } = req.body;

    const result = await client.index({
      index: 'users',
      document: {
        tcNo,
        password,
        role: role || 'hasta',
        loginTime: new Date().toISOString()
      }
    });
    
    res.status(200).json({ success: true, message: 'Giriş başarılı ve kaydedildi.', id: result._id });
  } catch (error) {
    console.error('Error saving user to elasticsearch:', error);
    res.status(500).json({ error: 'Veritabanı bağlantı hatası' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  checkConnection(); // Initial connection test
});
