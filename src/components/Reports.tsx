import { useState, useEffect } from 'preact/hooks';
import { MyData } from './models/MyData';

export function Report() {
  const [data, setData] = useState<MyData | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://reqres.in/api/users/2');
      const jsonData = await response.json();
      console.log(jsonData)
      setData(jsonData);
    }

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <ul>
            <li>{data.data.id}</li>
            <li>{data.data.email}</li>
            <li>{data.data.first_name}</li>
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
