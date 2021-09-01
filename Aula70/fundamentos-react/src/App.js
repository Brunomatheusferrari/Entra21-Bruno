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
import { ManipulandoEventos } from './components/ManipulandoEventos';
import { Relogio } from './components/Relogio';
import { ValorAleatorio } from './components/ValorAleatorio';
import { ComponentesControlados } from './components/ComponentesControlados';
import { Contador } from './components/Contador';

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
              <Notificacao menssagens=""/>
            </Card>

            <Card titulo="Manipulando Eventos">
              <ManipulandoEventos />
            </Card>

            <Card titulo="State">
              <Relogio />
              <hr />
              <ValorAleatorio />
            </Card>
            <Card titulo="Componente Controlado">
              <ComponentesControlados />
            </Card>
            <Card titulo="Contador">
              <Contador />
            </Card>
        </div>
    </div>
  );
}

export default App;
