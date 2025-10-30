import User from '../model/users.js'

class ServiceUser {
  FindAll() {
    return User.FindAll()
  }
  async FindOne(id) {
    if (!id) {
      throw new Error("Favor informar o ID")
    }
    // preciso procurar um usuario no banco e retornar o user
    const user = await User.findByPk(id)

    if (!user) {
      throw new Error(`Usuário ${id} não encontrado`)
    }

    return user
  }
  async Create(nome, email, senha, ativo) {
    if (!nome || !email || !senha) {
      throw new Error("Favor preencher todos os campos!")
    }
    
    await User.create({
      nome, email, senha, ativo
    })
  }
  async Update(id, nome, email, senha, ativo) {
    if (!id || !nome || !email || !senha) {
      throw new Error("Favor preencher todos os campos!")
    }

    const user = await User.findByPk(id)
    if (!user) {
      throw new Error(`Usuário ${id} não encontrado`)
    }
    
    user.nome = nome
    user.email = email
    user.senha = senha
    user.ativo = ativo

    await user.save()
  }
  async Delete(id) {
    if (!id) {
      throw new Error("Favor colocar um id válido!")
    }

    const user = await User.findByPk(id)
    if (!user) {
      throw new Error(`Usuário ${id} não encontrado`)
    }

    return user.destroy()
  }
}
export default new ServiceUser()