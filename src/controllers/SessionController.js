import connection from '../database/connection';

class SessionController {
  async create(req, res) {
    const { id } = req.body;

    const ong = await connection('ongs').where('id', id).select('name').first();

    if (!ong) {
      return res.status(400).json({ error: 'No Ong found with this id.' });
    }

    return res.json(ong);
  }
}

export default new SessionController();
