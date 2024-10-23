import type { PlopTypes } from '@turbo/gen'

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('hook', {
    description: '🪝 Adds a new react hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the hook?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{kebabCase name}}/{{camelCase name}}.ts',
        templateFile: 'templates/hook.hbs',
      },
      {
        type: 'add',
        path: 'src/{{kebabCase name}}/{{camelCase name}}.test.ts',
        templateFile: 'templates/test.hbs',
      },
      {
        type: 'append',
        path: 'src/index.ts',
        template: 'export * from \'./{{kebabCase name}}/{{camelCase name}}\'',
      },
    ],
  })
}
