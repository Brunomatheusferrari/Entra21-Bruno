import './App.css';
import { Aluno } from './components/Aluno';
import { ComProps } from './components/ComProps';
import { Familia } from './components/Familia';
import { ListaAlunos } from './components/ListaAlunos';
import { MembroFamilia } from './components/MembroFamilia';
import { PrimeiroComponente } from './components/PrimeiroComponente';
import { Card } from './components/Card';
import { ParOuImpar } from './components/ParOuImpar';
import { Notificacao } from './components/Notificacoes';

function App() {
  return (
    <div className="App">
 
        <h1>Olá Mundo!</h1>
        <div className="cards">
          <Card titulo="Primeiro Componente" cor="#F24464">
          <PrimeiroComponente/>
          </Card>
          <Card titulo="Componente com Props">
          <ComProps mensagem="Estou sendo enviada pelas props." />
          <ComProps mensagem="Outra Mensagem..."/>
          </Card>
          <Card titulo="Lista Alunos" cor="#000000">
          <ListaAlunos />
          </Card>
          <Card titulo="Children" cor="#a67ab9">
          <Familia sobrenome="da Silva">
            <MembroFamilia nome="Ana"/>
            <MembroFamilia nome="Marcos"/>
            <MembroFamilia nome="José"/>
          </Familia>
          </Card>
          <Card titulo="Par ou Impar">
              <ParOuImpar numero={10}/>
              <ParOuImpar numero={5}/>
              <hr/>
              <Notificacao menssagens="Aoba"/>
            </Card>
        </div>
    </div>
  );
}

export default App;
