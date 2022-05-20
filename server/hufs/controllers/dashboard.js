const { env } = require("../config");
const { name, version } = require("../package");
const { error } = require('../utils/index.js');

const controller = {
  async dashboard(req, res, next) {
    try {
      const [results] = await res.pool.query(`
          SELECT *
          FROM business_data
          limit 100
        `
      );
      next({ results });
    } catch (e) {
      next(e);
    }
  },
  async detail(req, res, next) {
    try {
      const store_no = req.body.store_no;

      const [results] = await res.pool.query(`
          SELECT *
          FROM business_data
          WHERE store_no=?
        `,
        [store_no]
      );
      next({ results });
    } catch (e) {
      next(e);
    }
  },
  async queryList(req, res, next) {
    try {
      const cat_1 = req.body.cat_1;
      const cat_2 = req.body.cat_2;
      const cat_3 = req.body.cat_3;
      const addr_1 = req.body.addr_1;
      const addr_2 = req.body.addr_2;
      const addr_3 = req.body.addr_3;

      const [results] = await res.pool.query(`
          SELECT * FROM Business_data
          WHERE cat_1 = ?
          AND cat_2 = ?
          AND cat_3 = ?
          AND addr_1 = ?
          AND addr_2 = ?
          AND addr_3 = ?;
        `,
        [cat_1, cat_2, cat_3, addr_1, addr_2, addr_3]
      );
      next({ results });
    } catch (e) {
      next(e);
    }
  },
  async collectStore(req, res, next) {
    try {
      const user_no = req.session.user_no;
      const store_no = req.body.store_no;
      console.log(user_no);

      const conn = await res.pool.getConnection();
      try {
        await conn.beginTransaction();
        await conn.query(`
            INSERT INTO user_myshop (user_no, store_no)
            VALUES (?,?)
          `,
          [user_no, store_no]
        );
        await conn.commit();
        next({ message: `성공적으로 수집되었습니다.`});
      } catch (e) {
        await conn.rollback();// 롤백
        next(e);
      } finally {
        conn.release();
      }
    } catch (e) {
      next(e);
    }
  },
};

module.exports = controller;
