import express from 'express'

const app = express();

app.get("/", (request, response) => {
  return response.json({
    message: "Hello Server!",
  })
})

app.listen(3333, () => {
  console.log('Server is running on PORT 3333 🚀 \nRedirect to your server: http://localhost:3333\n')
})