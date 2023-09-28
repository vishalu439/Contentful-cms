import { useState, useEffect } from 'react';
import { createClient } from 'contentful';

const client = createClient({
  space: 'sh59iodcn7iu',
  environment: 'master',
  accessToken:"FZl0At7xIrQQ7Va_i_SBAdGEHx9F6SKvWM6Z_QEPjXk",
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'project' });
      console.log(response)
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};
