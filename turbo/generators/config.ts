import type { PlopTypes } from '@turbo/gen'

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('package', {
    description: '📦 Adds a new package inside monorepo',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the package?',
      },
      {
        type: 'list',
        name: 'type',
        message: 'What is the template of the package?',
        choices: [
          { name: 'Typescript', value: 'typescript' },
          { name: 'Minimal', value: 'minimal' },
        ],
      },
    ],
    actions: [
      {
        type: 'addMany',
        base: 'templates/package',
        destination: 'packages/{{kebabCase name}}',
        templateFiles: [
          'templates/package/LICENCE.md.hbs',
          'templates/package/CHANGELOG.md.hbs',
          'templates/package/README.md.hbs',
        ],
      },
      {
        type: 'addMany',
        base: 'templates/package/{{kebabCase type}}',
        destination: 'packages/{{kebabCase name}}',
        templateFiles: 'templates/package/{{kebabCase type}}/**/*.hbs',
      },
    ],
  })
}
