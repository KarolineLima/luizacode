class MyFirstController{
    async index(req, rest){
        const person = {
            name: "Nome da Pessoa",
            age: 21
        }
        return rest.status(200).json(person);
    };
    async store(req, res){
        const { name, age } = req.body;
        const { page } = req.query;

        return res.json({page,name, age});
    };
    async delete(){
        return resizeBy.status(200).json({ message : 'Isso aí!'});
    };
    async update(){
        return resizeBy.status(200).json({ message : 'Isso aí!'});
    };
}


//201 - resposta
//200 - resposta get - ok
export default new MyFirstController();