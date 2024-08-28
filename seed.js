const mongoose = require('mongoose');
const Employee = require('../src/models/employeeModel'); // Ajuste o caminho conforme necessário

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/nome-do-banco', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado ao MongoDB');
    return Employee.deleteMany({}); // Limpar coleção existente
}).then(() => {
    // Inserir funcionários fictícios
    return Employee.insertMany([
        { name: 'John Doe', position: 'Developer' },
        { name: 'Jane Smith', position: 'Designer' },
        { name: 'Alice Johnson', position: 'Manager' }
    ]);
}).then(() => {
    console.log('Funcionários fictícios inseridos com sucesso!');
    mongoose.connection.close();
}).catch(err => {
    console.error('Erro ao inserir dados:', err);
    mongoose.connection.close();
});


