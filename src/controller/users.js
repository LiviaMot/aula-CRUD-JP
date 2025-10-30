import ServiceUser from '../service/users.js'

class ControllerUser {
  FindAll(_, res) {
    try {
      const nomes = ServiceUser.FindAll()
      res.status(200).send({ nomes })
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
  }
  async FindOne(req, res) {
    try {
      const id = req.params.id
      console.log(id)

      const user = await ServiceUser.FindOne(id)
      res.status(200).send({ user })
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
  }
  async Create(req, res) {
    try {
      const { nome, email, senha, ativo } = req.body // maneira mais simples de passar parametros
      await ServiceUser.Create(nome, email, senha, ativo)
      res.status(201).send()
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
  }
  async Update(req, res) {
    try {
      const id = req.params.id
      const { nome, email, senha, ativo } = req.body

      await ServiceUser.Update(id, nome, email, senha, ativo)
      res.status(200).send()
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
  }
  async Delete(req, res) {
    try {
      const id = req.params.id

      await ServiceUser.Delete(id)
      res.status(204).send()
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
  }
}

export default new ControllerUser()