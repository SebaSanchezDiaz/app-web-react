// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

const UFTable = () => {
  const [ufData, setUfData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://mindicador.cl/api/uf");
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        console.log(data);

        const formattedData = data.serie.map((item) => ({
          date: new Date(item.fecha).toLocaleDateString("es-ES"),
          value: item.valor.toLocaleString("es-ES", {
            style: "currency",
            currency: "CLP",
          }),
          unit: data.unidad_medida,
        }));
        setUfData(formattedData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Cargando datos...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Valores y Fechas UF 2024</h2>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Valor UF</th>
            <th>Unidad de Medida</th>
          </tr>
        </thead>
        <tbody>
          {ufData.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.value}</td>
              <td>{item.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UFTable;
