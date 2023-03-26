# @pyncz/tailwind-mask-image

A `mask-image` plugin for [Tailwind CSS](https://tailwindcss.com).

[<img alt="View on Tailwind Play" src="https://img.shields.io/badge/View%20on%20Tailwind%20Play-%2357a7e1.svg?logo=tailwindcss&logoColor=white&style=flat-square" />](https://play.tailwindcss.com/szgRchW420)

---

# Install

Install the package with your preferred package-manager.
```
pnpm install @pyncz/tailwind-mask-image
```

After that, simply add the plugin into your `tailwind.config.js`:

```js
// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    // ...
    require('@pyncz/tailwind-mask-image')
  ],
}
```


# Usage

## mask-image

There are 3 default values the `mask` utility can accept:
- `linear`
- `radial`
- `none`


### `linear`

Applies a `linear-gradient` as the mask image. Opacity is set from 100% at the start to 0% at the end, by default.

```html
<div class="mask-linear" />
```
![mask-linear example](examples/mask-linear.png)

#### Direction `mask-dir`

By default, the gradient is [directed](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient#values) to bottom. You can easily customize the direction with `mask-dir` utility, including arbitrary values.

```html
<div class="mask-linear mask-dir-to-t" />
<div class="mask-linear mask-dir-to-tl" />
<div class="mask-linear mask-dir-[10deg]" />
```
![mask-dir example](examples/mask-dir.png)

#### Opacity Stops

The `stops` API is similar to tailwind's [Gradient Color Stops](https://tailwindcss.com/docs/gradient-color-stops) core utils, so you can customize your linear mask in a familiar way.

**But!** An important difference is that here you should use not `colors` but `opacity` values.

The `opacity` values are taken from your theme specified in the `tailwind.config.js`, but you obviously can use arbitrary opacity values as well.

```html
<div class="mask-linear mask-from-50 mask-to-[0.1]" />
<div class="mask-linear mask-from-0 mask-via-20" />
<div class="mask-linear mask-from-0 mask-via-100 mask-to-50" />
```
![mask-linear stops' example](examples/mask-linear-stops.png)

> **Note**
> You don't have to specify **all** the stops, because the default values (100% for the start and 0% for the end point) still work.

##### Stops positions

In addition to setting the opacity of the stops, you can also set the **position** using `mask-point`.

```html
<div class="mask-linear mask-point-from-[10%] mask-via-10 mask-point-via-[30%] mask-to-100" />
<div class="mask-linear mask-dir-to-r mask-to-[0.05] mask-point-to-[50%]" />
```
![stops' points example](examples/mask-linear-stops-points.png)

This utility don't accept any default value, so use arbitrary values.

### `radial`

Applies a `radial-gradient` as the mask image. Like for the `mask-linear` util, the gradient is spread from 100% opacity at the center to 0% at the ending shape.

```html
<div class="mask-radial" />
```
![mask-radial example](examples/mask-radial.png)

#### Shape `mask-shape`

[Shape](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient#values) of the gradient, `ellipse` (by default) or `circle`.

```html
<div class="mask-radial mask-shape-ellipse" />
<div class="mask-radial mask-shape-circle" />
```
![mask-shape example](examples/mask-shape.png)

#### Position `mask-at`

By default, the gradient's position is `center`. You can use the same values as for the [`background-position` css prop](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position#syntax) (`top`, `bottom left` etc), as well as arbitrary values with explicit position.

```html
<div class="mask-radial mask-at-[30px_40px]" />
```
![mask-at example](examples/mask-at.png)

#### Reach `mask-reach`

With this util you can specify the size of the gradient.

```html
<div class="mask-radial mask-reach-closest-side" />
<div class="mask-radial mask-reach-closest-corner" />
<div class="mask-radial mask-reach-farthest-side" />
<div class="mask-radial mask-reach-farthest-corner" />
```
![mask-reach example](examples/mask-reach.png)

Besides *as-they-are* keyword-values, there are also a couple of aliases:
- `mask-reach-contain` for `closest-side`
- `mask-reach-cover` for `farthest-corner`

You can also use arbitrary values:

```html
<div class="mask-reach-[40%_2rem] mask-radial" />
<div class="mask-reach-[40%_150%] mask-radial" />
```
![example for mask-reach with arbitrary values](examples/mask-reach-arbitrary.png)

#### Stops

> **Note**
> The opacity stops for `mask-radial` are the same as [the ones described for `mask-linear`](#opacity-stops), including [points API](#stops-positions).

```html
<div class="mask-radial mask-from-0 mask-via-[0.25]" />
<div class="mask-radial mask-from-0 mask-via-[0.75] mask-to-100" />
<div class="mask-radial mask-from-0 mask-point-from-[2rem] mask-via-[0.75] mask-point-via-[3rem]" />
```
![mask-radial stops' example](examples/mask-radial-stops.png)


### `none`

This value matches `mask-image` css prop's default value so it makes no sense to use it *separately*, but it may be pretty useful if you apply the mask responsively.

```html
<div class="mask-linear sm:mask-none" />
```
![mask-none example](examples/mask-none.png)


### Arbitrary values

#### Images

The `mask-image` css prop accepts not only gradients but images as well. You can use arbitrary values, for example, to apply `url()` as the mask image.

```html
<div class="mask-[url('/your-pretty-image.png')]" />
```
![arbitrary mask image example](examples/arbitrary-image.png)

#### Gradients

You can pass other types of the gradients, e.g. `conic-gradient` etc.

```html
<div class="mask-[conic-gradient(from_45deg,_black,_transparent)]" />
```
![arbitrary conic-gradient mask example](examples/arbitrary-conic-gradient.png)

Also, you may want not to use the API above even for `linear-gradient` or `radial-gradient` so you can pass them arbitrarily too.

```html
<div class="mask-[linear-gradient(12deg,_black,_transparent)]" />
```


## mask-size

```html
<div class="mask-[url('/your-pretty-image.png')] mask-size-cover" />
<div class="mask-[url('/your-pretty-image.png')] mask-size-contain" />
<div class="mask-[url('/your-pretty-image.png')] mask-size-[4rem]" />
```
![mask size example](examples/mask-size.png)


## mask-position

```html
<div class="mask-[url('/your-pretty-image.png')] mask-no-repeat  mask-position-left-bottom" />
<div class="mask-[url('/your-pretty-image.png')] mask-no-repeat mask-position-center" />
<div class="mask-[url('/your-pretty-image.png')] mask-no-repeat mask-position-[0.5rem_25%]" />
```
![mask position example](examples/mask-position.png)


## mask-repeat

You can manage the [`mask-repeat` css property](https://developer.mozilla.org/en-US/docs/Web/CSS/mask-repeat) as well with the following utilities:
- `mask-repeat`
- `mask-repeat-x`
- `mask-repeat-y`
- `mask-repeat-space`
- `mask-repeat-round`
- `mask-no-repeat`

```html
<div class="mask-[url('/your-pretty-image.png')] mask-repeat" />
<div class="mask-[url('/your-pretty-image.png')] mask-no-repeat" />
```
![mask-repeat example](examples/mask-repeat.png)
