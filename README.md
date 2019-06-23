# egg-plugin-ts-demo

A demo show how to write a egg plugin by typescript

## Usage

```
$ npm install egg-plugin-ts-demo
```

add to plugin

```typescript
// config/plugin.ts

export default {
  tsPluginDemo: {
    enable: true,
    package: 'egg-plugin-ts-demo',
  }
}
```
