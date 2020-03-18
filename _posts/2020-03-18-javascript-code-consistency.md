---
layout: post
title: Ensuring Consistent Code in JavaScript Apps
---

Ensuring code consistency in JavaScript Apps is made a lot easier these days
with the advent of easy to use static analysis tools, formatters, bundlers,
shareable configuration, package management and more.

How I like to ensure consistent code is by leveraging a few of these things in a
few key places to make it both painless to set up and mostly impossible to
avoid.

## Step 1. Static Analysis

Static analysis is the use of a tool such as [ESLint][eslint],
[StyleLint][stylelint], [PHPCS][phpcs]. These tools will analyse your code in a
static form (i.e. not while running), and compare it to a configuration file
that you provide to ensure that it meets your predefined standards.

For a JavaScript app, this usually means ESLint with one of the popular ESLint
configurations, and an NPM script that gets run from time to time. But it can be
made even easier and more real time than that. Many of the most popular text
editors amongst JavaScript developers have plugins that integrate ESLint into
the editor and can provide real time feedback as you code.

## Step 2. Formatters

This is often a point of contention as many static analysis tools can also do
the job of a formatter, however, I believe that the use of specific tools for
specific jobs is the appropriate way forward. Which means that I am a big fan of
[Prettier][prettier].

Prettier is an opinionated code formatter with minimal configuration options
that works with a range of different types of code - JavaScript, CSS, HTML,
Markdown, YAML, PHP and more. Much like ESLint, there are plugins available for
many of the most popular editors that can format your code on save.

## Step 3. Bundlers

How do bundlers help make code more consistent? They encourage the
modularisation of your codebase, encouraging you to group code in logical units
that can be imported and exported to other parts of your application. If this is
done well it can make code more DRY by encouraging re-use of existing code over
repeated implementations.

They have other benefits, of course, such as [minification][webpack-min], cache
busting, source map generation, [tree-shaking][webpack-treeshaking], and much
more, but those aren't primarily related to code consistency.

## Step 4. Package Management

Package management is inextricably intertwined with code bundling. Of course, we
had various forms of package management before we truly had bundlers but
bundlers make package management much more useful.

Instead of having to write and maintain your own implementation of a particular
package you can install, import, and use other peoples code lessening your
maintenance overhead. Many popular packages are written and maintained by groups
of highly skilled developers and put through their paces by thousands of
developers every day, ensuring that bugs are minimal and often resolved quickly.

## Step 5. Shareable Config

Something that package management makes very simple to do is sharing
configuration for the tools already mentioned. Many people are used to using
things like the [AirBNB ESLint config][airbnb-eslint-config], but often never
think about making their own config useable by others.

It's highly unlikely that you'll be using whatever config you decide to extend
exactly as it's written. Eevery time you set up a new project you'll need to
reconfigure your app to use your preferred config.

But there's another way - publish your config. All a published config is, is a
collection of rules being enabled or disabled - including extending other shared
configs. Share your config and then it's only an [NPM][npm] install away. For
you, and for others.

## Step 6. Making It Mandatory

Something that I haven't touched on until now is enforcing the use of these
tools in projects. Most of them are either command line tools, editor plugins,
or [NPM][npm] scripts, but all of those need to be manually run so why not
automate it?

There are a number of ways this you can automate it.

You could have a continuous integration server that runs all of these tools on
your code every time you push a commit. Or use a CI service like
[TravisCI][travis-ci], or [Github Actions][github-actions]. But these are not
immediate, slow, potentially expensive, and don't actually help protect
inconsistent code from getting into your git history.

Another way is to add a [githook][git-hooks] that runs every time you want to
commit or push. It's a really solid solution, but now you've got to maintain
another piece of code that isn't specific to your project or product.

My preferred way is to use a tool like [Husky][husky] or
[Lint-staged][lint-staged]. These use githooks under the hood but abstract all
the maintainance away. They can run any command you choose across either your
whole codebase or just the staged files, and can be configured with just a few
lines in your package.json file.

And it doesn't have to just be the tools I've already mentioned. Why not run
your tests, or confirm that git history hasn't diverged, or, or, or...

## Step 7. Abstract it all away

Once you've reached this point, you're likely pretty happy with your setup.
You've got your code being linted, formatted, and modularised all very nicely,
but you've still got all the config files sitting around making your code base
look busier than it needs to.

Why not hide it all? Why not create a package that wraps it all up nicely and
exposes just a couple of entries that you can add to your package.json file. It
can handle the dependency management, the configuration, the installation, and
just about everything else to do with keeping these tools running. Which leaves
you with just an NPM install to get everything working exactly how you want it.

There are even some packages out that that you can use as is or base your own
on. Ones like [kcd-scripts][kcd-scripts], or (tooting my own horn here)
[dfhscripts][dfhscripts]. There's also [react-scripts][react-scripts] built in
to [create-react-app][create-react-app] which is much more opinionated and less
extensible.

---

### Postscript

Something that you may or may not have noticed is that I haven't used the word
quality in this post at all. That's because these tools don't guarantee quality
code, they guarantee consistent code.

It is entirely possible to use all of these tools and have consistent poor 
quality code.

Enforcing consistency is automatic, quality is up to you.

[eslint]: https://eslint.org/
[stylelint]: https://stylelint.io/
[phpcs]: https://github.com/squizlabs/PHP_CodeSniffer
[airbnb-eslint-config]: https://www.npmjs.com/package/eslint-config-airbnb
[prettier]: https://prettier.io
[husky]: https://github.com/typicode/husky
[lint-staged]: https://github.com/okonet/lint-staged
[kcd-scripts]: https://github.com/kentcdodds/kcd-scripts
[dfhscripts]: https://github.com/deanacus/dfhscripts
[react-scripts]: https://github.com/facebook/create-react-app/tree/master/packages/react-scripts
[create-react-app]: https://create-react-app.dev/
[travis-ci]: https://travis-ci.org/
[github-actions]: https://github.com/features/actions
[git-hooks]: https://git-scm.com/docs/githooks
[npm]: https://npmjs.com
[webpack-min]: https://webpack.js.org/guides/production/
[webpack-treeshaking]: https://webpack.js.org/guides/tree-shaking/
