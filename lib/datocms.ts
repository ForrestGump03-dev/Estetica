const API_TOKEN = import.meta.env.VITE_DATOCMS_API_TOKEN;

interface DatoCMSResponse {
  data: {
    allNewsItems: Array<{
      id: string;
      title: string;
      category: string;
      description: string;
      fullDescription?: string;
      date: string;
      image: {
        url: string;
      };
      videoUrl?: string;
    }>;
  };
}

export async function fetchDatoCMSNews() {
  if (!API_TOKEN || API_TOKEN.includes('inserisci')) {
    return null;
  }

  const query = `
    {
      allNewsItems(orderBy: date_DESC) {
        id
        title
        category
        description
        fullDescription
        date
        image {
          url
        }
        videoUrl
      }
    }
  `;

  try {
    const response = await fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    });

    const json = await response.json() as DatoCMSResponse;
    
    if (json.data && json.data.allNewsItems) {
      return json.data.allNewsItems;
    }
    return [];
  } catch (error) {
    console.error("Errore DatoCMS:", error);
    return [];
  }
}
