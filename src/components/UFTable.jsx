// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

const UFTable = () => {
  const [ufData, setUfData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(dayjs());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formatedDate = selectedDate.format("DD-MM-YYYY");
        console.log("Fecha seleccionada:", formatedDate);
        const response = await fetch(
          `https://mindicador.cl/api/uf/${formatedDate}`
        );

        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }

        const data = await response.json();

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
  }, [selectedDate]);

  if (loading) {
    return <div>Cargando datos...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleDateSelect = (event) => {
    setSelectedDate(dayjs(event.target.value));
  };

  return (
    <div>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <span style={{ marginRight: "10px" }}>Selecciona una fecha:</span>
        <input
          type="date"
          value={selectedDate.format("DD-MM-YYYY")}
          onChange={handleDateSelect}
        />
      </div>
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
