function status(request, response) {
  response.status(200).json({ chave: "APIs estão funcionando!" });
}

export default status;
