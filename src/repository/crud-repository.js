
class CrudRepository {
    constructor(){
        this.model = model;
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log(" Something went wrong with Creating airport_repository ");
            throw{error};
        }
    }


    async destroy(modelId) {
        try {
            await this.model.destroy({
                where : {
                    id : modelId,
                },
            });
            return true;
        } catch (error) {
            console.log(" Something went wrong with Deleting airport_repository ");
            throw{error};
        }
    }


    async update(modelId,data) {
        try {
            const result = await this.model.update(data,{
                where:{
                    id:modelId
                }
            });
           return result;
        } catch (error) {
            console.log(" Something went wrong with updating airport_repository ");
            throw{error};
        }
    }


    async get(modelId) {
        try {
            const result = await this.model.findByPk(modelId);
            return result;
        } catch (error) {
            console.log(" Something went wrong with getting/fetching airport_repository ");
            throw{error};
        }
    }


    async getAll() {
        try {
            const result = await this.model.findAll();
            return result;
            
        } catch (error) {
            console.log(" Something went wrong with gettingAll/fetchingAll crus repo ");
            throw{error};
        }
    }

}


module.exports = CrudRepository;