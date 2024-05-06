import { GenresRepository } from "../../core/repositories/genres.repository.js"

export const getGenres = async(req, res) => {
    const response = await GenresRepository.listGenres()
    res.status(200).json(response)
}
