const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const sequelize = require('./src/config/sequelize');
const Compound = require('./src/models/compoundModel');

const results = [];

fs.createReadStream(path.join(__dirname, 'compound.csv'))
  .pipe(csv())
  .on('data', (data) => {
    results.push({
      id: parseInt(data.id),
      name: data.CompoundName,
      description: data.CompounrDescription,
      image: data.strImageSource,
    });
  })
  .on('end', async () => {
    try {
      await sequelize.sync({ force: true });
      await Compound.bulkCreate(results);
      console.log('CSV import successful!');
      process.exit(0);
    } catch (err) {
      console.error('Import failed:', err);
      process.exit(1);
    }
  });
