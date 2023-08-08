import { useState, useEffect } from 'react';
import { getInfoArtWork } from '../connection/fetchData';

const URL_BASE = "https://api.artic.edu/api/v1/artworks/";
const SEARCH_PARAMS = "search?q="


const useFetchByKeyWord = (keyword) => {
  const [collection, setCollection] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (keyword == null) return false;
        const response = await fetch(URL_BASE + SEARCH_PARAMS + keyword);
        const data = await response.json();

        const cuadros = data.data;
        const newCollection = [];

        for (const cuadro of cuadros) {
          const { data: { image_id } } = await getInfoArtWork(cuadro.id);
          const obj = {
            id: cuadro.id,
            title: cuadro.title,
            image: `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`,
          };
          newCollection.push(obj);
        }

        setCollection(newCollection);
        setLoading(false);
        setError(null);
      } catch (error) {
        setCollection([]);
        setLoading(false);
        setError('Error al obtener los datos.');
      }
    };

    fetchData();
  }, [keyword]);

  return { collection, loading, error };
};

export default useFetchByKeyWord;
