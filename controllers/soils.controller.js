import pool from '../configs/db.config.js';

export const getAllSoils = async (req, res) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.execute('SELECT BIN_TO_UUID(id, true) id, soil_name, description, image_url FROM soils');
    const soilData = {};
    rows.forEach(soil => {
      soilData[soil.id] = {
        soil_name: soil.soil_name,
        description: soil.description,
        image_url: soil.image_url,
      };
    });
    res.json({ status: 'success', data: soilData });
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
};

export const getSoilById = async (req, res) => {
  const connection = await pool.getConnection();
  try {
    console.log(req.params.id);
    const [rows] = await connection.execute('SELECT BIN_TO_UUID(id, true) id, soil_name, description, image_url FROM Soils WHERE id = UUID_TO_BIN(?, true)', [req.params.id]);
    if (rows.length > 0) {
      const soil = rows[0];
      res.json({
        status: 'success',
        data: {
          id: soil.id,
          soil_name: soil.soil_name,
          description: soil.description,
          image_url: soil.image_url,
        },
      });
    } else {
      res.status(404).json({ status: 'failed', message: 'Soil not found' });
    }
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
};
