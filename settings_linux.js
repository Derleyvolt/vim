" =========================================================================================================
" =========================================================================================================

" ---------------------------------------------------------
" Vundle and Plugins                                      |
" --------------------------------------------------------- 

" Tip: How find vimrc folder in linux: edit $HOME/.vimrc

set nocompatible

filetype plugin indent off
syntax off

set rtp+=~/.vim/bundle/Vundle.vim

call vundle#begin()

Plugin 'VundleVim/Vundle.vim'

" to install a plugin add it here and run :PluginInstall.
" to update the plugins run :PluginInstall! or :PluginUpdate
" to delete a plugin remove it here and run :PluginClean

Plugin 'bling/vim-airline'
Plugin 'flazz/vim-colorschemes'
Plugin 'jiangmiao/auto-pairs'
Plugin 'valloric/youcompleteme'

" press r to refresh current directory or R to refresh root directory.
" press m to open menu in NERDtree
"Plugin 'preservim/nerdtree'
" add plugins before this

call vundle#end()

filetype plugin indent on
syntax on

" YouCompleteMe need it
set encoding=utf-8
" Disable preview windows from YouCompleteMe
set completeopt-=preview
" settings path to find .ycm_extra_config.py file

let g:ycm_enable_diagnostic_highlighting  = 0
let g:ycm_global_ycm_extra_conf           = "/home/derley/.vim/bundle/youcompleteme/.ycm_extra_conf.py"

" ---------------------------------------------------------
" ALLOW BACKSPACE IN INSERT MODE (because linux terminal) |
" --------------------------------------------------------- 

set backspace=indent   
set backspace+=eol   
set backspace+=start 

" ---------------------------------------------------------
" TAB CONFIGURATIONS                                      |
" --------------------------------------------------------- 

set tabstop=5 
set shiftwidth=5  
set softtabstop=5  
set smarttab      
set expandtab       

" ---------------------------------------------------------
" MISCELLANEOUS                                           |
" --------------------------------------------------------- 

set number      
set autochdir         " allow the shell to open in the current directory path of the file
set noswapfile        " avoid boring message about swap file bla bla bla..
set autoindent           
set smartindent     
set showcmd               
set showmode!         " disable showmode because bar visual plugin           
set background=dark       

" ---------------------------------------------------------
" CUSTOM KEY MAPPINGS                                     |
" --------------------------------------------------------- 

nnoremap r A
nnoremap q G
nnoremap e ^i
nnoremap b u
nnoremap d D
nnoremap c yy
nnoremap v p
nnoremap <space> dd
" windows
inoremap <c-space> <esc>
" nnoremap <c-space> a
"inoremap <c-@> <esc>
nnoremap <c-@> a
inoremap {<CR> {<CR>}<Esc>i<CR><Esc>ki<Tab>
nnoremap <silent> w :set relativenumber!<CR>
nnoremap <Tab> i
nnoremap <CR> i<CR>
nnoremap t :t.<CR>
vnoremap <c-c> 100000Y
nnoremap <C-a> ggVG
inoremap <c-f> <c-n>
nnoremap sh :sh<CR>
nnoremap ss :w<CR>
nnoremap input : tabnew in.txt<CR>
nnoremap d diw

map i <nop>
map s <nop>
map c <nop>

" clear editor

nmap     cls 1q 9999D
nmap     CLS 1q 9999D

" copy code

nnoremap cp :%y+<CR>

" moving through the editor

nmap <s-Up>   <c-y>
nmap <s-Down> <c-e>

" nagivate between splits window
nnoremap <c-w> <c-w><c-w>

" NerdTree window toggle
nnoremap <silent> nn :NERDTreeToggle<CR>

inoremap READ freopen("in.txt", "r", stdin);

" ---------------------------------------------------------
" COMPETITIVE PROGRAMMING TEMPLATE                        |
" --------------------------------------------------------- 

imap WWW #include <bits/stdc++.h><CR><CR>using namespace std;<CR><CR>#define ll  long long<CR>#define vi  vector<int><CR>#define ii  array<int,2><CR><CR>int main() {<CR>
\ios_base::sync_with_stdio(false);<CR>cin.tie(NULL);<CR><CR>return 0;<CR><c-space> 9999q
\r<CR><CR>/* STUFF YOU SHOULD LOOK FOR<CR>   int overflow, array bounds <CR>special cases(n=1?) <CR>do something instead of nothing atay organized <CR>
\search for patterns **<CR>
\think about everything as eq and inq<CR>
\write stuff down<CR>don't get stuck on one approach<CR>/
\<esc>12q<TAB><TAB>
