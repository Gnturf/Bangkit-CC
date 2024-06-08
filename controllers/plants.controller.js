import pool from '../configs/db.config.js';

export const getAllPlants = async (req, res) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.execute('SELECT BIN_TO_UUID(id, true) id, plant_name, BIN_TO_UUID(soil_type, true) soil_type, image_url FROM Plants');
    const plantData = {};
    rows.forEach(plant => {
      plantData[plant.id] = {
        plant_name: plant.plant_name,
        soil_type: plant.soil_type,
        image_url: plant.image_url,
      };
    });
    res.json({ status: 'success', data: plantData });
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
};

export const getPlantById = async (req, res) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.execute('SELECT * FROM plants WHERE id = ?', [req.params.id]);
    if (rows.length > 0) {
      const plant = rows[0];
      res.json({
        status: 'success',
        data: {
          id: plant.id,
          plant_name: plant.plant_name,
          image_url: plant.image_url,
        },
      });
    } else {
      res.status(404).json({ status: 'failed', message: 'Plant not found' });
    }
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
};
