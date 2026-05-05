import { Client } from '@elastic/elasticsearch';

// Default connection to a local elasticsearch; override with env vars as needed.
const client = new Client({
  node: process.env.ELASTICSEARCH_URL || 'http://localhost:9200',
});

// Helper to check connection
export const checkConnection = async () => {
  try {
    const info = await client.info();
    console.log(`Connected to Elasticsearch cluster: ${info.cluster_name}`);
    return true;
  } catch (error) {
    console.error('Error connecting to Elasticsearch:', error.message);
    return false;
  }
};

export default client;
