const { env } = require("../config");
const { name, version } = require("../package");

const controller = {
  async ping(req, res, next) {
    try {
      const [results] = await res.pool.query(`
            SELECT * FROM users WHERE enabled = 1;
        `);
      res.json({
        env,
        name,
        version,
      });
    } catch (e) {
      //   에러 핸들링
    }
  },
  async login(req, res, next) {
    try {
      const email = req.body.email;
      const password = req.body.password;

      const [results] = await res.pool.query(
        `
            SELECT COUNT(*) AS 'count' FROM users WHERE enabled = 1 AND email = ? AND password = PASSWORD(?);
        `,
        [email, password]
      );

      if (results[0].count < 1)
        throw res.status(401).json({
          message: "이메일 또는 비밀번호가 일치하지않습니다.",
        });

      res.json({
        status: "success",
      });
    } catch (e) {
      //   에러 핸들링
    }
  },
};

module.exports = controller;
