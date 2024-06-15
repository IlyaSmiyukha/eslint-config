# `@touchcastllc/eslint-config`

[Eslint](https://eslint.org/) config to use in touchcastllc projects

## Usage

Install:

```bash
$ yarn add -D @touchcastllc/eslint-config eslint
```

Add `.eslintrc.json` file to a repo with following content:

```json
{
  "root": true,
  "extends": ["@touchcastllc/eslint-config"]
}
```

For React projects use

```json
{
  "root": true,
  "extends": ["@touchcastllc/eslint-config/react"]
}
```

## Overriding some rules

You can use even stricter rules locally

Add `.eslint.local.json` with stricter rules to your project root and to `.gitignore`. Put your overrides there, e.g.:

```json
{
  "rules": {
    "unused-imports/no-unused-imports": "error"
  }
}
```
