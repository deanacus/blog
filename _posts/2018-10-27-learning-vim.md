---
layout: post
title: Learning Vim
---

[Vim](https://www.vim.org/) is something that I've wanted to learn how to use 
proficiently ever since I first learned how to use a terminal.  The prospect of
being super productive with text without ever having to use my mouse is super
enticing to me.

I've spent the last couple of days getting aquainted with it, and starting to
set it up the way I need it.  But it definitely hasn't all been smooth sailing.

The (what feels like constant) switching between modes has tripped me up quite
a few times.  I've deleted lines I never intended to delete because I got
confused about which mode I was in, and I've done things that I don't
understand because some keys behave in ways I don't quite grok yet in certain
modes.

Other than stupid mistakes I've made because I'm not yet fully comfortable with
modal editing, I've come across a few pain things that I miss from my current
(previous?) editor, [VSCode](https://code.visualstudio.com/).

I thought I'd try to write down some of those things, mostly for my own benefit
to see if I can come up with a solution.

## 1.  Multiple cursors

One of the things that I use the most in VSCode is the ability to hold 
`Cmd+Opt`and move up or down adding a new cursor at that column (or the end of
the line if the text doesn't stretch that far along the line) ready to insert,
delete, paste or anything else I need to do.

## 2.  Text Formatting on Save

Another thing I rely on **heavily** in VSCode is the ESLint integration.  Most
of my timecoding is spent writing or editing JavaScript, and I have a
relatively comprehensive ESLint config that VSCode will use to automatically
lint and reformat my code to match.

## 3.  Linting Alerts

VSCode has a "Problems" panel, that lists all linting and formatting errors
that exist in the current file, which I lean on heavily when editting inherited
code that doesn't meet our coding standards.  There are some errors that can't
be auto-fixed, and for those, I rely on the problems panel to point out where
they are and what the error is.

Additionally, VSCode provides visual feedback inline for linting errors in the
form of those red squiggly lines we all know and love from Word.

## 4.  Quick Select Matching Text

Along the same lines as the multiple cursors, VSCode has a handy little feature
that allows you to highlight some text and hit `Cmd+d` to select the next
instance of that string, ready to be manipulated any way you need to

## 5.  Intelligent Home Key

It's a little thing, but hitting `home` will take me to the first
non-whitespace character on a line, rather than to the first column, whereas in
Vim, so far I've only really learned to hit `0` in Normal mode to move to the
first column of a line.

## 6.  Indentation/Unindentation

Something I find myself doing somewhat regularly is indenting/unindenting lines
or inserting/removing tabs within lines.  I've grown very accustomed to using
the VSCode keybindings to do this.  Hitting `Cmd+}` or `Cmd+{` will indent and
unindent the current line, respectively, while `Tab` and `Shift+Tab` will
insert a tab character at the cursor or remove a tab behind the current cursor.

I'm aware that Vim has `Shift+>>` and `Shift+<<` to indent lines while in
Normal mode, but that is only half the problem.


