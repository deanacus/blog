---
layout: page
title: Vim Cheatsheet
---

## Saving and Exiting

`:q` - Quit current buffer

`:qa` - Quit all buffers

`:q!` - Force quit current buffer (if buffer has changed and not been written)

`:w` - Write (save) current buffer

`:wa` - Write (save) all buffers

`:wq` - Write (save) and quit current buffer

`:x` - Write (save) and quit current buffer

## Undo/Redo

`u` - Undo last change (in Normal mode)

`<C-r>` - Redo last undo (in Normal mode)

## Changing modes

### Normal mode to Insert mode

`i` - Insert text before cursor

`I` - Insert text before the first non-blank character on the current line

`a` - Append text after cursor

`A` - Append text to end of the current line

`s` - Erase the character under the cursor and switch to Insert mode

`S` - Erase the contents of the current line and switch to Insert mode

`o` - Insert a blank line below the current line and enter Insert mode

`O` - Insert a blank line above the current line and enter Insert mode

### Normal mode to Visual mode

`v` - Enter Insert mode to select lines

`V` - Enter Insert mode and select current line

`<C-v>` - Enter Visual mode to select a rectangular block

### Exit to Normal mode

`<esc>` - Exit out of Insert or Visual mode to Normal mode

## Folding

### Opening folds

`zo` - Open current fold (in Normal mode)

`zO` - Open all folds within the current fold (in Normal mode)

`zR` - Open all folds (in Normal mode)

### Closing folds

`zc` - Close current fold (in Normal mode)

`zC` - Close all folds under the current fold (in Normal mode)

`zM` - Close all available folds (in Normal mode)

## NERDTree

I use [NERDTree][1] for my file manager. Here is a couple of thing that I need
to remember when I'm using it. It might be specific to my config, though.

`\f` - Toggle  NERDTree visibility

`m` - Perform a filesystem action on the current node

`
