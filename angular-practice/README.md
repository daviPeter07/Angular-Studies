# Angular Studies

Repositório dedicado aos meus estudos de **Angular**, com o objetivo de compreender os fundamentos do framework, sua arquitetura, componentização, comunicação entre componentes e gerenciamento de estado.

Os estudos são realizados por meio da documentação oficial do Angular, do Angular Developer Roadmap e de pequenos projetos práticos.

Este repositório funciona como um registro da minha evolução, documentando os conceitos estudados, suas aplicações e as soluções implementadas.

## Tecnologias utilizadas

- Angular
- TypeScript
- HTML5
- CSS3
- Lucide Icons

## Projeto 01 — Developer Card

O primeiro projeto consiste em um card de apresentação de desenvolvedor, contendo nome, cargo e uma lista de tecnologias.

O projeto foi desenvolvido para praticar os conceitos iniciais do Angular, principalmente a criação de componentes, passagem de propriedades, renderização condicional e comunicação entre componentes.

### Conceitos estudados e aplicados

#### 1. Componentização

**O que aprendi:**

O Angular utiliza componentes para organizar interfaces em partes independentes e reutilizáveis. Cada componente possui uma classe TypeScript, um template HTML e, opcionalmente, um arquivo de estilos.

**Onde apliquei:**

Na separação da aplicação em dois componentes principais:

- `DeveloperCard`: responsável pela apresentação do desenvolvedor e das tecnologias.
- `ButtonStacks`: responsável pelo botão de mostrar e ocultar as tecnologias.

**Como apliquei:**

Utilizei o decorator `@Component` para definir os metadados de cada componente, incluindo seu seletor, template, estilos e dependências.

---

#### 2. Input — Comunicação do pai para o filho

**O que aprendi:**

O `input()` permite que um componente receba dados de outro componente, de maneira semelhante às props do React.

Na API moderna do Angular, o `input()` retorna um `InputSignal`, cujo valor é acessado por meio de uma chamada de função.

**Onde apliquei:**

No componente `DeveloperCard`, para receber dinamicamente o nome e o cargo do desenvolvedor.

**Como apliquei:**

```typescript
name = input<string>();
role = input<string>();
```

No template do componente:

```html
<h1>{{ name() }}</h1>
<h3>{{ role() }}</h3>
```

No componente pai:

```html
<app-developer-card
  name="Davi Peterson"
  role="Full Stack"
/>
```

Com isso, o mesmo componente pode ser reutilizado com diferentes informações.

---

#### 3. Event Binding — Eventos de clique

**O que aprendi:**

O Angular utiliza a sintaxe `(evento)` para executar expressões em resposta a eventos.

**Onde apliquei:**

No botão de exibição das tecnologias.

**Como apliquei:**

```html
<button (click)="onToggleClick()">
  Mostrar Tecnologias
</button>
```

Quando o usuário clica no botão, o Angular executa o método `teste()` definido na classe do componente.

---

#### 4. Output — Comunicação do filho para o pai

**O que aprendi:**

O `output()` permite que componentes emitam eventos personalizados, possibilitando a comunicação do componente filho com o pai.

Diferentemente do `input()`, que recebe informações, o `output()` comunica a ocorrência de eventos.

**Onde apliquei:**

No componente `ButtonStacks`, para informar ao `DeveloperCard` que o usuário solicitou a alteração da visibilidade das tecnologias.

**Como apliquei:**

```typescript
toggleRequested = output<void>();

onToggleClick() {
  this.toggleRequested.emit();
}
```

No template do componente pai:

```html
<app-button-stacks
  [visible]="showStacks"
  (toggleRequested)="toggleStacks()"
/>
```

O botão emite o evento, enquanto o componente pai fica responsável por alterar o estado da aplicação.

---

#### 5. Renderização condicional — @if e @else

**O que aprendi:**

As diretivas de controle de fluxo `@if` e `@else` permitem renderizar diferentes partes do template conforme uma condição.

**Onde apliquei:**

Na exibição das tecnologias e na alternância entre os ícones do botão.

**Como apliquei:**

```html
@if (visible()) {
  <svg lucideArrowUp></svg>
} @else {
  <svg lucideArrowDown></svg>
}
```

Quando `visible()` retorna `true`, o Angular renderiza o ícone de seta para cima. Caso contrário, renderiza a seta para baixo.

Também utilizei o operador ternário para alterar dinamicamente o texto do botão:

```html
{{ visible() ? 'Ocultar Tecnologias' : 'Mostrar Tecnologias' }}
```

---

#### 6. Renderização de listas — @for

**O que aprendi:**

O `@for` permite percorrer coleções de dados e renderizar elementos HTML dinamicamente.

O `track` identifica cada elemento, ajudando o Angular a atualizar a interface de forma eficiente.

**Onde apliquei:**

Na listagem das tecnologias utilizadas pelo desenvolvedor.

**Como apliquei:**

```typescript
stacks = [
  { id: 0, name: 'Angular' },
  { id: 1, name: 'Nextjs' },
  { id: 2, name: 'Nestjs' },
  { id: 3, name: 'Golang' }
];
```

No template:

```html
@for (stack of stacks; track stack.id) {
  <span class="stack-item">
    {{ stack.name }}
  </span>
}
```

Também experimentei uma abordagem utilizando métodos nativos do JavaScript:

```typescript
stacksDev = this.stacks
  .map((stack) => stack.name)
  .join(', ');
```

Essa alternativa transforma a lista em uma string, enquanto o `@for` permite criar e estilizar elementos HTML individualmente.

---

#### 7. Estado e reatividade

**O que aprendi:**

O estado representa informações que influenciam o comportamento e a apresentação de um componente.

Também comecei a utilizar Signals por meio do `input()`, entendendo que seus valores são acessados utilizando `()`.

**Onde apliquei:**

No controle de visibilidade das tecnologias.

**Como apliquei:**

```typescript
showStacks = false;

toggleStacks() {
  this.showStacks = !this.showStacks;
}
```

O operador `!` inverte o valor booleano, alternando entre `true` e `false`.

No template:

```html
@if (showStacks) {
  <div class="stacks-list">
    @for (stack of stacks; track stack.id) {
      <span class="stack-item">
        {{ stack.name }}
      </span>
    }
  </div>
}
```

Dessa forma, o estado é mantido no componente responsável pelos dados, enquanto o botão apenas solicita sua alteração.

---

#### 8. Estilização e organização visual

**O que aprendi:**

Pratiquei conceitos de CSS relacionados à organização de layouts, alinhamento de elementos, responsividade e interações visuais.

**Onde apliquei:**

Nos cards de apresentação e tecnologias, além do botão interativo.

**Recursos utilizados:**

- CSS Grid para organizar imagem, nome e cargo.
- Flexbox para alinhar os cards e as tecnologias.
- `gap` para controlar espaçamentos.
- `box-sizing: border-box` para manter dimensões consistentes.
- `border-radius` e `box-shadow` para estilização.
- `:hover` e `transition` para efeitos interativos.
- Media queries para ajustes em telas menores.

---

#### 9. Integração com biblioteca de ícones

**O que aprendi:**

Como instalar e utilizar bibliotecas externas em componentes standalone do Angular.

**Onde apliquei:**

No botão de mostrar e ocultar tecnologias.

**Biblioteca utilizada:** Lucide Icons.

Instalação:

```bash
npm install @lucide/angular
```

Importação:

```typescript
import {
  LucideArrowUp,
  LucideArrowDown
} from '@lucide/angular';
```

Registro nos metadados do componente:

```typescript
imports: [LucideArrowUp, LucideArrowDown]
```

Utilização no HTML:

```html
<svg lucideArrowUp></svg>
<svg lucideArrowDown></svg>
```

## Como executar o projeto

**Pré-requisitos:**

- Node.js
- npm
- Angular CLI

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm start
```

A aplicação estará disponível em:

`http://localhost:4200`

## Referências de estudo

- [Documentação oficial do Angular](https://angular.dev/)
- [Angular Developer Roadmap](https://roadmap.sh/angular)
- [Tutorial interativo do Angular](https://angular.dev/tutorials/learn-angular)
- [Component Inputs](https://angular.dev/guide/components/inputs)
- [Component Outputs](https://angular.dev/guide/components/outputs)
- [Control Flow](https://angular.dev/guide/templates/control-flow)
- [Lucide Icons](https://lucide.dev/)

## Evolução dos estudos

Este repositório será atualizado conforme novos conceitos forem estudados e aplicados em exercícios e projetos.

O objetivo é evoluir gradualmente dos fundamentos do Angular para aplicações mais completas, incluindo formulários, serviços, injeção de dependências, roteamento, consumo de APIs, gerenciamento de estado e testes.

---