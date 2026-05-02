import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJwZTQxMTFAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwMDMyMSwiaWF0IjoxNzc3Njk5NDIxLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiOWI5ZDEwZjEtYzc4Yi00YmJmLWEwZTctMGMyZjQ2MzVlOTAxIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicG9vamEgZWxsYW50aSIsInN1YiI6IjkyMzVlY2JkLTEyNmMtNDlmZS1iODIyLTVmMTU1OGJiNDkwZSJ9LCJlbWFpbCI6InBlNDExMUBzcm1pc3QuZWR1LmluIiwibmFtZSI6InBvb2phIGVsbGFudGkiLCJyb2xsTm8iOiJyYTIzMTEwMDMwMTAxNDciLCJhY2Nlc3NDb2RlIjoiUWticHhIIiwiY2xpZW50SUQiOiI5MjM1ZWNiZC0xMjZjLTQ5ZmUtYjgyMi01ZjE1NThiYjQ5MGUiLCJjbGllbnRTZWNyZXQiOiJzUlVyd3JVZW5YVnB0Tk5KIn0.agdr5B5FtCKn42_7JKJxEF-LPO99lwQmFCOHLYsDAMU";

export async function Log(stack, level, pkg, message) {
  try {
    await axios.post(
      "/api/evaluation-service/logs",
      {
        stack,
        level,
        package: pkg,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );
  } catch (error) {
    // silent fail
  }
}