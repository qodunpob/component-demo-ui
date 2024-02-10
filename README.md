# component-demo-ui

If you are seeking for a simple solution to demonstrate a single
React-component working, this might be what you need.

---

The tiny UI library provides several of components for creating
a single page application with a preview of your component,
a description of its props, additional sections and a link to GitHub.
An example of what a demo page might look like can be found in
the demo folder, use the following command to run:

```shell
npm start
```

or via the link
[React Giphy Select Component](https://qodunpob.github.io/examples/react-giphy-select/).

## Installation

```shell
npm install --save @qodunpob/component-demo-ui
```

## Usage

### Styles

First of all you need to import global styles for the magic to work

```js
import '@qodunpob/component-demo-ui/dist/assets/styles/styles.css'
```

This will import the _Lato_ font from Google Fonts, add global styles
for component containers, and also initialize color variables that
you can change if desired

```css
:root {
  --component-demo-ui-border-color: #ccc;
  --component-demo-ui-input-border-color: #00aaff;
  --component-demo-ui-input-focus-border-color: #ff00aa;
}
```

### Components

The following is a list of components that this library provides.

#### Preview

You'll probably want to put this component at the top of the page.
It displays the h1 level header and your component in action,
so it requires specifying the title and passing the child element.

##### Props

| Name               | Necessity  | Type                                                     | Description                                                                                                                                                                         |
| ------------------ | ---------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **title**          | _required_ | `string`                                                 | H1 page title, probably the name of the component                                                                                                                                   |
| **children**       | _required_ | `ReactElement`                                           | Component itself                                                                                                                                                                    |
| **className**      | _optional_ | `string`                                                 | Custom css class                                                                                                                                                                    |
| **caption**        | _optional_ | `string`                                                 | Text block between title and component                                                                                                                                              |
| **description**    | _optional_ | `string`                                                 | Text block at the end of _Preview_ component (after _Inspector_)                                                                                                                    |
| **controls**       | _optional_ | [`ControlDefinition[]`](src/models/ControlDefinition.ts) | Setting up controls that allow a visitor to change the value of a component's properties.<br/>There are 3 types of controls available:<br/>- _text_<br/>- _checkbox_<br/>- _select_ |
| **showInspector**  | _optional_ | `boolean`                                                | Inspector display indicator                                                                                                                                                         |
| **inspectorTitle** | _optional_ | `string`                                                 | Inspector window title (if it's displayed)                                                                                                                                          |

##### Ref

The Preview component provides an interface for interaction
([PreviewRef](src/components/preview/Preview.types.ts)):

```ts
export interface PreviewRef {
  inspect: (data: any) => void
}
```

You can pass any data to the _inspect_ method to display it in the
_Inspect_ component.

#### GitHubLink

Simply displays a link to your component's GitHub repository in a
corner style on the page. An important feature is that the GitHub
icon used is _background independent_, and even if it is initially
oriented towards a light page background, you can always recolor it.

##### Props

| Name          | Necessity  | Type     | Description                                |
| ------------- | ---------- | -------- | ------------------------------------------ |
| **url**       | _required_ | `string` | Link to your component's GitHub repository |
| **className** | _optional_ | `string` | Custom css class                           |

#### Section

Component for declaring a section on pages with an h2-level heading
and any content.

##### Props

| Name          | Necessity  | Type        | Description      |
| ------------- | ---------- | ----------- | ---------------- |
| **title**     | _required_ | `string`    | H2 section title |
| **children**  | _optional_ | `ReactNode` | Section content  |
| **className** | _optional_ | `string`    | Custom css class |

#### PropList

Represents props as a list of terms and their descriptions.

##### Props

| Name          | Necessity  | Type                                                            | Description             |
| ------------- | ---------- | --------------------------------------------------------------- | ----------------------- |
| **items**     | _required_ | [`PropDefinition[]`](src/components/propList/PropList.types.ts) | List of described props |
| **className** | _optional_ | `string`                                                        | Custom css class        |

**Caution:** The _PropList_ component itself is not a section
and does not have page container styles, so it should be placed
inside a section as a child element.

You can see the direct use of all the components described above
in the [demo](demo/App.tsx).

## Contributing

Feel free to add proposals or report bugs in
[issues](https://github.com/qodunpob/component-demo-ui/issues).
Your PRs are welcome!

To run the demo, as noted above, use the command:

```shell
npm start
```

To build the library locally, use the command:

```shell
npm run lib:build
```

Don't forget to check your changes with tests and linters:

```shell
npm test
npm run lint
npm run lint:fix
npm run format
```

The project uses
[standard-with-typescript](https://github.com/mightyiam/eslint-config-standard-with-typescript)
configuration for eslint, with added React-specific rules.

## License

MIT.
