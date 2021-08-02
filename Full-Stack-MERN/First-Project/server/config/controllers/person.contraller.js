module.exports.index = (request,response) => {
    response.json({message:request.params.word});
}