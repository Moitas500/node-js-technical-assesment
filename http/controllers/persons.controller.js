import { PersonsRepository } from "../../core/repositories/persons.repository.js"

export const getPersons = async(req, res) => {
    const response = await PersonsRepository.listPersons()
    res.status(200).json(response)
}
