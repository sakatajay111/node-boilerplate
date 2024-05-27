import { HomeModel } from '../models/HomeModel';
import { pool } from '../config/database';

export class HomeService {
  public async create(index: HomeModel): Promise<HomeModel> {
    const queryString = 'INSERT INTO indexes (message) VALUES ($1) RETURNING *';
    const values = [index.message];
    try {
      const { rows } = await pool.query(queryString, values);
      return rows[0];
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public async findAll(): Promise<HomeModel[]> {
    const queryString = 'SELECT * FROM public.users';
    try {
      const { rows } = await pool.query(queryString);
      console.log(rows)
      return rows;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public async findById(id: number): Promise<HomeModel | null> {
    const queryString = 'SELECT * FROM indexes WHERE id = $1';
    const values = [id];

    try {
      const { rows } = await pool.query(queryString, values);
      return rows[0] || null;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public async update(id: number, index: HomeModel): Promise<HomeModel | null> {
    const queryString = 'UPDATE indexes SET message = $1 WHERE id = $2 RETURNING *';
    const values = [index.message, id];

    try {
      const { rows } = await pool.query(queryString, values);
      return rows[0] || null;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public async delete(id: number): Promise<void> {
    const queryString = 'DELETE FROM indexes WHERE id = $1';
    const values = [id];

    try {
      await pool.query(queryString, values);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
