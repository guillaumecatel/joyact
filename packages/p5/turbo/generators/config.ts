import type { PlopTypes } from '@turbo/gen'

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('p5-component', {
    description: '💜 Adds a new p5.js component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{kebabCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/component.hbs',
      },
      {
        type: 'add',
        path: 'src/{{kebabCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/stories.hbs',
      },
      {
        type: 'add',
        path: 'src/{{kebabCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/test.hbs',
      },
      {
        type: 'append',
        path: 'package.json',
        pattern: /"exports": {(?<insertion>)/g,
        template: '    "./{{kebabCase name}}": "./{{kebabCase name}}/{{pascalCase name}}.tsx",',
      },
      {
        type: 'append',
        path: 'src/index.ts',
        template: 'export * from \'./{{kebabCase name}}/{{pascalCase name}}\'',
      },
    ],
  })
}
