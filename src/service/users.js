import ModelUser from '../model/users.js'

class ServiceUser {
  FindAll() {
    return ModelUser.FindAll()
  }
  FindOne(index) {
    // VERIFICAR SE O INDEX É VÁLIDO
    return ModelUser.FindOne(index)
  }
  Create(nome) {
    // VERIFICAR SE O NOME É VÁLIDO
    return ModelUser.Create(nome)
  }
  Update(index, nome) {
    // VERIFICAR SE O INDEX E O NOME SÃO VÁLIDO
    return ModelUser.Update(index, nome)
  }
  Delete(index) {
    // VERIFICAR SE O INDEX É VÁLIDO
    return ModelUser.Delete(index)
  }
}
export default new ServiceUser()