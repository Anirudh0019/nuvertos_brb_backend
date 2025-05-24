const Compound = require('../models/compoundModel');

exports.getAllCompounds = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const offset = (page - 1) * limit;

  try {
    const { count, rows } = await Compound.findAndCountAll({
      limit,
      offset,
      order: [['id', 'ASC']],
    });

    res.json({
      compounds: rows,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch compounds' });
  }
};

exports.getCompoundById = async (req, res) => {
  try {
    const compound = await Compound.findByPk(req.params.id);
    if (!compound) return res.status(404).json({ message: 'Compound not found' });
    res.json(compound);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch compound' });
  }
};
exports.updateCompound = async (req, res) => {
  const { id } = req.params;
  const { name, image, description } = req.body;

  try {
    const compound = await Compound.findByPk(id);
    if (!compound) return res.status(404).json({ message: 'Compound not found' });

    await compound.update({ name, image, description });
    res.json({ message: 'Compound updated successfully', compound });
  } catch (error) {
    console.error('Error updating compound:', error);
    res.status(500).json({ message: 'Server error' });
  }
};