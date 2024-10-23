import type { PlopTypes } from '@turbo/gen'

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('ui-component', {
    description: '🧩 Adds a new ui component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?',
      },
      {
        type: 'list',
        name: 'type',
        message: 'What is the type of the component?',
        choices: [
          { name: 'Atom', value: 'atoms' },
          { name: 'Molecule', value: 'molecules' },
          { name: 'Organism', value: 'organisms' },
        ],
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{kebabCase type}}/{{kebabCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/component.hbs',
      },
      {
        type: 'add',
        path: 'src/{{kebabCase type}}/{{kebabCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/stories.hbs',
      },
      {
        type: 'add',
        path: 'src/{{kebabCase type}}/{{kebabCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/test.hbs',
      },
      {
        type: 'append',
        path: 'package.json',
        pattern: /"exports": {(?<insertion>)/g,
        template: '    "./{{kebabCase type}}/{{kebabCase name}}": "./src/{{kebabCase type}}/{{kebabCase name}}/{{pascalCase name}}.tsx",',
      },
      {
        type: 'append',
        path: 'src/index.ts',
        template: 'export * from \'./{{kebabCase type}}/{{kebabCase name}}/{{pascalCase name}}\'',
      },
    ],
  })
}
