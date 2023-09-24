# Mantine layout components
Wrappers for Mantine v7 `Stack` and `Group` to make the naming more understandable. Just copy and paste these into your project and modify as you please. I use classnames package, but you can modify it to use anything.
You can install classnames by running `npm install classnames`

Inspired by https://github.com/kitze/mantine-layout-components but it did not work in v7 so I quickly made these. The components also come with the same useful props:

```typescript
{
    center?: boolean;
    fullWidth?: boolean;
    fullHeight?: boolean;
    debug?: boolean;
  }
```
Use these to apply basic styling like `with:100%` and `justify-content: center; align-items: center`

`debug` adds a red border around the element.

Pass any other classes by using the `className` property, these classes will take precedence
**Mantine version**: 7.0.0


## Example usage

```html
<Vertical fullWidth fullHeigth center className="my-other-class">
  <div>1</div>
  <div>2</div>
</Vertical>

```


