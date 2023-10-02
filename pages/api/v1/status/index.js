function status(request, response) {
  response
    .status(200)
    .json({
      chave: "Minha carreira como programador está cada dia mais próxima!",
    });
}

export default status;
