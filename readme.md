- how to install library in package

```bash
pnpm -F @demo1/web add @demo1/shared@workspace:* # from workspace
pnpm -F @demo1/shared add date-fns # from npm
```

- update package version

```json
{
  "all:update": "pnpm -r update -i -L"
}
```

- clean node modules

```json
{
  "all:clean": "find ./ -name node_modules -type d -exec rm -rf {} +"
}
```
