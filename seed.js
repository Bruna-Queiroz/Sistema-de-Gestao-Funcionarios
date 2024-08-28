const mongoose = require('mongoose');
const Employee = require('./employeeModel'); // Ajuste o caminho se necessário

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const seedData = [
  { name: 'John', position: 'Developer', department: 'IT' },
  { name: 'Jane', position: 'Designer', department: 'Marketing' },
  { name: 'Alice', position: 'Project Manager', department: 'HR' },
  { name: 'João', position: 'System Analyst', department: 'IT' },
  { name: 'Carol', position: 'Content Writer', department: 'Marketing' },
  { name: 'David', position: 'QA Tester', department: 'IT' },
  { name: 'Eva', position: 'Social Media Manager', department: 'Marketing' }
  // Adicione mais dados conforme necessário
];

// Função para semear o banco de dados
const seedDatabase = async () => {
  try {
    await Employee.deleteMany({});
    await Employee.insertMany(seedData);
    console.log('Dados semeados com sucesso!');
  } catch (error) {
    console.error('Erro ao semear o banco de dados:', error);
  } finally {
    mongoose.connection.close();
  }
};

// Executar a função de semeadura
seedDatabase();

mongoose.connect('mongodb+srv://<user>:<password>@<cluster-url>/your-database-name', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });


