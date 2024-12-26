const loginRequset = fetch("https://imgametransit.com/api/webapi/Login", {
  headers: {
    accept: "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "ar-real-ip": "115.243.180.139",
    authorization: "Bearer",
    "content-type": "application/json;charset=UTF-8",
    priority: "u=1, i",
    "sec-ch-ua":
      '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    Referer: "https://okwingame.com/",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  },
  body: '{"username":"917378213218","pwd":"hhjsm001","phonetype":-1,"logintype":"mobile","language":0,"random":"ee733d8c218c4782a4bdd8f0737eca9d","signature":"874F71369652BD41E6F9C6D7EAC51F0F","timestamp":1731057799}',
  method: "POST",
});
const loginResponse = `
{
    "data": {
        "tokenHeader": "Bearer ",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIxNzMxMDU3ODAwIiwibmJmIjoiMTczMTA1NzgwMCIsImV4cCI6IjE3MzEwNTk2MDAiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIxMS84LzIwMjQgMzoyMzoyMCBQTSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFjY2Vzc19Ub2tlbiIsIlVzZXJJZCI6IjU1NTcwOTEiLCJVc2VyTmFtZSI6IjkxNzM3ODIxMzIxOCIsIlVzZXJQaG90byI6IjEiLCJOaWNrTmFtZSI6Ik1lbWJlck5OR1pFQlU1IiwiQW1vdW50IjoiMC4wMCIsIkludGVncmFsIjoiMCIsIkxvZ2luTWFyayI6Ikg1IiwiTG9naW5UaW1lIjoiMTEvOC8yMDI0IDI6NTM6MjAgUE0iLCJMb2dpbklQQWRkcmVzcyI6IjExNS4yNDMuMTgwLjEzOSIsIkRiTnVtYmVyIjoiMCIsIklzdmFsaWRhdG9yIjoiMCIsIktleUNvZGUiOiI3IiwiVG9rZW5UeXBlIjoiQWNjZXNzX1Rva2VuIiwiUGhvbmVUeXBlIjoiMCIsIlVzZXJUeXBlIjoiMCIsIlVzZXJOYW1lMiI6IiIsImlzcyI6Imp3dElzc3VlciIsImF1ZCI6ImxvdHRlcnlUaWNrZXQifQ.dHAb6ozRqYhMawS3i8swjCDNIDjVfcXx8o7NMyMZyY8",
        "expiresIn": 1731059600,
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIxNzMxMDU3ODAwIiwibmJmIjoiMTczMTA1NzgwMCIsImV4cCI6IjE3MzExNDQyMDAiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIxMS85LzIwMjQgMjo1MzoyMCBQTSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlJlZnJlc2hfVG9rZW4iLCJVc2VySWQiOiI1NTU3MDkxIiwiVXNlck5hbWUiOiI5MTczNzgyMTMyMTgiLCJVc2VyUGhvdG8iOiIxIiwiTmlja05hbWUiOiJNZW1iZXJOTkdaRUJVNSIsIkFtb3VudCI6IjAuMDAiLCJJbnRlZ3JhbCI6IjAiLCJMb2dpbk1hcmsiOiJINSIsIkxvZ2luVGltZSI6IjExLzgvMjAyNCAyOjUzOjIwIFBNIiwiTG9naW5JUEFkZHJlc3MiOiIxMTUuMjQzLjE4MC4xMzkiLCJEYk51bWJlciI6IjAiLCJJc3ZhbGlkYXRvciI6IjAiLCJLZXlDb2RlIjoiNyIsIlRva2VuVHlwZSI6IlJlZnJlc2hfVG9rZW4iLCJQaG9uZVR5cGUiOiIwIiwiVXNlclR5cGUiOiIwIiwiVXNlck5hbWUyIjoiIiwiaXNzIjoiand0SXNzdWVyIiwiYXVkIjoibG90dGVyeVRpY2tldCJ9.E5o9qDxRs09v49ChTagNA3AlgF9dGx9AtdLlKTj7bxw",
        "passwordErrorNum": 0,
        "passwordErrorMaxNum": null
    },
    "code": 0,
    "msg": "Succeed",
    "msgCode": 0,
    "serviceNowTime": "2024-11-08 14:53:20"
}
    `;
