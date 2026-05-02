const axios = require("axios");

async function Log(stack, level, pkg, message, token) {
  try {
    const res = await axios.post(
      "http://20.207.122.201/evaluation-service/logs",
      {
        stack,
        level,
        package: pkg,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${token.trim()}`,
          "Content-Type": "application/json"
        }
      }
    );

    return res.data;
  } catch (error) {
    return {
      error: true,
      message:
        error.response?.data?.message || error.message
    };
  }
}

module.exports = Log;