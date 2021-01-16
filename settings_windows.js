" =========================================================================================================
" |                                            General Custom Settings                                    |
" =========================================================================================================

" ---------------------------------------------------------
" Vundle and Plugins                                      |
" --------------------------------------------------------- 

" Tip: How find vimrc folder in linux: edit $HOME/.vimrc

" Isso aqui informa o vim onde encontrar o python.dll, sem isso alguns
" plugins, como o YouCompleteMe, não funcionam..
let &pythonthreedll = 'C:\Users\Derley\AppData\Local\Programs\Python\Python39-32\Python39.dll'

set nocompatible 
filetype off
syntax off

set rtp+=$HOME/.vim/bundle/Vundle.vim/
"set rtp+=~/vimfiles/bundle/Vundle.vim
call vundle#begin('$HOME/.vim/bundle/')
"call vundle#begin('~/vimfiles/bundle')

" let Vundle manage Vundle, required

Plugin 'VundleVim/Vundle.vim'

Plugin 'altercation/vim-colors-solarized'
Plugin 'bling/vim-airline'
" É um litting. É facilmente instalado pelo Vundle sem necessidade de outras
" coisas.. diferente do YouCompleteMe
Plugin 'jiangmiao/auto-pairs' 
Plugin 'flazz/vim-colorschemes'
Plugin 'valloric/youcompleteme'

call vundle#end()            " required
filetype plugin indent on    " required

"auto detect filetype
filetype on

" YouCompleteMe need it
set encoding=utf-8
" Disable preview windows from YouCompleteMe
set completeopt-=preview
" settings path to find .ycm_extra_config.py file
let g:ycm_global_ycm_extra_conf = 'C:\Users\Derley\.vim\bundle\YouCompleteMe\.ycm_extra_conf.py'

" Syntax highligh
syntax enable 
"set background=dark
"colorscheme gruvbox 

colorscheme default 
set background=light

map <F9> :!g++ -g -std=c++17 % -o %:r && %:r <CR>
map <F5> :!g++ -g % -o %:r <CR>

" Nerdtree Toggle
nnoremap <silent> nn :NERDTreeToggle<CR>

" Nerd Tree size
:let g:NERDTreeWinSize=25

" ---------------------------------------------------------
" ALLOW BACKSPACE IN INSERT MODE (because linux terminal) |
" --------------------------------------------------------- 

set backspace=indent   
set backspace+=eol   
set backspace+=start 

" ---------------------------------------------------------
" TAB CONFIGURATIONS                                      |
" --------------------------------------------------------- 

set tabstop=4 
set shiftwidth=4  
set softtabstop=4  
set smarttab      
set expandtab       

" ---------------------------------------------------------
" MISCELLANEOUS                                           |
" --------------------------------------------------------- 

set guioptions-=m  "remove menu bar                GVIM settings
set guioptions-=T  "remove toolbar                  GVIM settings
set guioptions-=r  "remove right-hand scroll bar    GVIM settings
set guioptions-=L  "remove left-hand scroll bar     GVIM setting

" GVIM

"set guifont=Consolas-Bold:h16
set guifont=Consolas:h14:b
set number      
set autochdir         " allow the shell to open in the current directory path of the file
set noswapfile        " avoid boring message about swap file bla bla bla..
set autoindent           
set smartindent     
set showcmd           
set showmode!        " disable showmode because bar visual plugin
" it can to cause conflict with colorscheme plugin
" set background=light

" ---------------------------------------------------------
" CUSTOM KEY MAPPINGS                                     |
" --------------------------------------------------------- 

" some useful keys
" gt = go to next tab
" tabnew in.txt

nnoremap r A
nnoremap q G
nnoremap e ^i
nnoremap b u
nnoremap d D
nnoremap v p
nnoremap <space> dd
inoremap <c-space> <esc>
nnoremap <c-space> a
"inoremap {<CR> {<CR>}<Esc>i<CR><Esc>ki<Tab>
nnoremap <silent> w :set relativenumber!<CR>
nnoremap <Tab> i
nnoremap <CR> i<CR>
nnoremap <C-Down> <nop>
nnoremap <C-r> <C-y>
nnoremap t :t.<CR>
nmap     cls 1q 9999D
nmap     CLS 1q 9999D
inoremap <c-f> <c-n>
nnoremap sh :sh<CR>
nnoremap ss :w<CR>
nnoremap input :tabnew in.txt<CR>
nnoremap d diw
map i <nop>
map s <nop>
map c <nop>
nnoremap cp :%y+<CR>
" copy word
nnoremap cc yaw 

" Nagivate between splits window
nnoremap <c-w> <c-w><c-w>

" Moving through the editor

nmap <s-Up>   <c-y>
nmap <s-Down> <c-e>

inoremap READ freopen("in.txt", "r", stdin);

" ---------------------------------------------------------
" COMPETITIVE PROGRAMMING TEMPLATE                        |
" --------------------------------------------------------- 

imap test #include <bits/stdc++.h><CR><CR>using namespace std;<CR><CR>#define ll  long long<CR>#define ii  array<int,2><CR><CR>int main() {<CR>
\ios_base::sync_with_stdio(false);<CR>cin.tie(NULL);<CR><CR>return 0;<CR><c-space> 9999q
\r<CR><CR>/* stuff you should look for <CR>int overflow, array bounds <CR>special cases(n=1?) <CR>do something instead of nothing atay organized <CR>
\WRITE STUFF DOWN <CR>DON'T GET STUCK ON ONE APPROACH<CR>/
\<esc>11q<TAB><TAB>
